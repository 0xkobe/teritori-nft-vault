// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

/// @dev Mystery Box / Mystery Key
contract MysteryNft is Ownable, ERC721Enumerable {
    address public minter;
    string public baseURI;

    constructor(
        string memory name,
        string memory symbol
    ) Ownable() ERC721(name, symbol) {}

    function setBaseURI(string memory newBaseURI) external onlyOwner {
        baseURI = newBaseURI;
    }

    function setMinter(address _newMinter) external onlyOwner {
        minter = _newMinter;
    }

    function mint(address user) external {
        require(msg.sender == minter, "unauthorized");

        _mint(user, totalSupply() + 1);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function burn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "unauthorized");

        _burn(tokenId);
    }
}
