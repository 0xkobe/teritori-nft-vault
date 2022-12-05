// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721RoyaltyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";

contract TeritoriNft is ERC721RoyaltyUpgradeable, ERC721URIStorageUpgradeable {
    struct Attribute {
        string trate_type;
        string value;
    }
    struct Metadata {
        string name;
        string description;
        string image;
        string external_url;
        Attribute[] attributes;
    }

    address public minter;
    mapping(uint256 => Metadata) internal _extensions;

    function initialize(string memory _name, string memory _symbol)
        external
        initializer
    {
        __ERC721_init(_name, _symbol);
        minter = msg.sender;
    }

    function extensions(uint256 tokenId)
        external
        view
        returns (Metadata memory)
    {
        return _extensions[tokenId];
    }

    function mint(
        address receiver,
        uint256 tokenId,
        address royaltyReceiver,
        uint96 royaltyPercentage,
        string memory tokenUri
    ) external {
        require(msg.sender == minter, "unauthorized");

        _safeMint(receiver, tokenId);
        _setTokenRoyalty(tokenId, royaltyReceiver, royaltyPercentage);
        _setTokenURI(tokenId, tokenUri);
    }

    function mintWithMetadata(
        address receiver,
        uint256 tokenId,
        address royaltyReceiver,
        uint96 royaltyPercentage,
        string memory tokenUri,
        Metadata memory extension
    ) external {
        require(msg.sender == minter, "unauthorized");

        _safeMint(receiver, tokenId);
        _setTokenRoyalty(tokenId, royaltyReceiver, royaltyPercentage);
        _setTokenURI(tokenId, tokenUri);

        _extensions[tokenId].name = extension.name;
        _extensions[tokenId].description = extension.description;
        _extensions[tokenId].image = extension.image;
        _extensions[tokenId].external_url = extension.external_url;
        for (uint256 i = 0; i < extension.attributes.length; i++) {
            _extensions[tokenId].attributes.push(extension.attributes[i]);
        }
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721Upgradeable, ERC721RoyaltyUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /**
     * @dev See {ERC721-_burn}. This override additionally clears the royalty information for the token.
     */
    function _burn(uint256 tokenId)
        internal
        override(ERC721RoyaltyUpgradeable, ERC721URIStorageUpgradeable)
    {
        super._burn(tokenId);
    }
}
