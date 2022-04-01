// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "./lib/UniSafeERC20.sol";

contract NFTVault is Ownable, ReentrancyGuard, ERC721Holder {
    using UniSafeERC20 for IERC20;

    struct SaleOption {
        address token;
        uint256 amount;
    }
    struct NFTSale {
        address owner;
        SaleOption saleOption;
    }

    event ListNFT(
        address indexed owner,
        address indexed nft,
        uint256 indexed tokenId,
        SaleOption saleOption
    );
    event WithdrawNFT(
        address indexed owner,
        address indexed nft,
        uint256 indexed tokenId
    );
    event UpdateSaleOption(
        address indexed owner,
        address indexed nft,
        uint256 indexed tokenId,
        SaleOption saleOption
    );
    event BuyNFT(
        address indexed buyer,
        address indexed nft,
        uint256 indexed tokenId,
        SaleOption saleOption
    );

    address public constant FTM = address(0);
    mapping(address => mapping(uint256 => NFTSale)) public nftSales; // nft => tokenId => NFTSale
    uint256 public feeNumerator;
    uint256 public feeDenominator;

    constructor(uint256 _feeNumerator, uint256 _feeDenominator)
        Ownable()
        ReentrancyGuard()
    {
        _setFeeNumerator(_feeNumerator, _feeDenominator);
    }

    function setFeeNumerator(uint256 _feeNumerator, uint256 _feeDenominator)
        public
        onlyOwner
    {
        _setFeeNumerator(_feeNumerator, _feeDenominator);
    }

    function _setFeeNumerator(uint256 _feeNumerator, uint256 _feeDenominator)
        internal
    {
        require(
            _feeNumerator <= _feeDenominator && _feeDenominator != 0,
            "invalid fee setting"
        );

        feeNumerator = _feeNumerator;
        feeDenominator = _feeDenominator;
    }

    function listNFT(
        address nft,
        uint256 tokenId,
        SaleOption memory saleOption
    ) external {
        require(saleOption.amount != 0, "invalid amount");

        IERC721(nft).safeTransferFrom(msg.sender, address(this), tokenId);

        nftSales[nft][tokenId] = NFTSale({
            owner: msg.sender,
            saleOption: saleOption
        });

        emit ListNFT(msg.sender, nft, tokenId, saleOption);
    }

    function updateSaleOption(
        address nft,
        uint256 tokenId,
        SaleOption memory saleOption
    ) external {
        require(nftSales[nft][tokenId].owner == msg.sender, "Unauthorized");

        nftSales[nft][tokenId].saleOption = saleOption;

        emit ListNFT(msg.sender, nft, tokenId, saleOption);
    }

    function withdrawNFT(address nft, uint256 tokenId) external nonReentrant {
        require(nftSales[nft][tokenId].owner == msg.sender, "Unauthorized");

        IERC721(nft).transferFrom(address(this), msg.sender, tokenId);

        emit WithdrawNFT(msg.sender, nft, tokenId);

        delete nftSales[nft][tokenId];
    }

    function buyNFT(address nft, uint256 tokenId)
        external
        payable
        nonReentrant
    {
        NFTSale memory nftSale = nftSales[nft][tokenId];

        uint256 feeAmount = (nftSale.saleOption.amount * feeNumerator) /
            feeDenominator;

        IERC20(nftSale.saleOption.token).uniSafeTransferFrom(
            msg.sender,
            address(this),
            nftSale.saleOption.amount
        );

        IERC20(nftSale.saleOption.token).uniSafeTransfer(
            nftSale.owner,
            nftSale.saleOption.amount - feeAmount
        );

        IERC721(nft).transferFrom(address(this), msg.sender, tokenId);

        emit BuyNFT(msg.sender, nft, tokenId, nftSale.saleOption);

        delete nftSales[nft][tokenId];
    }

    function withdraw(address token) public onlyOwner {
        IERC20(token).uniSafeTransfer(
            msg.sender,
            token == FTM
                ? address(this).balance
                : IERC20(token).balanceOf(address(this))
        );
    }

    function withdrawAll(address[] memory tokens) public {
        for (uint256 i = 0; i < tokens.length; i++) {
            withdraw(tokens[i]);
        }
    }
}
