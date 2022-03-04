// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

library UniSafeERC20 {
    using SafeERC20 for IERC20;
    
    address public constant FTM = address(0);

    function uniSafeTransferFrom(IERC20 asset, address from, address to, uint256 value) internal {
        if (address(asset) == FTM) {
            require(value == msg.value, "USTF: invalid msg.value");
        } else {
            asset.safeTransferFrom(from, to, value);
        }
    }

    function uniSafeTransfer(IERC20 asset, address to, uint256 value) internal {
        if (address(asset) == FTM) {
            (bool sent, ) = payable(to).call{value: value}("");
            require(sent, "UST: failed to send ftm");
        } else {
            asset.safeTransfer(to, value);
        }
    }
}
