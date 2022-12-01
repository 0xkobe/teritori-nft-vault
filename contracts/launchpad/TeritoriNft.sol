// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TeritoriNft is ERC721Royalty, ERC721URIStorage {
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
    mapping(uint256 => Metadata) internal extensions;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {
        minter = msg.sender;
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
        extensions[tokenId] = extension;
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

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC721Royalty)
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
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /**
     * @dev See {ERC721-_burn}. This override additionally clears the royalty information for the token.
     */
    function _burn(uint256 tokenId)
        internal
        override(ERC721Royalty, ERC721URIStorage)
    {
        super._burn(tokenId);
    }
}
