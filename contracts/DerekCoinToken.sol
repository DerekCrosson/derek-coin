// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DerekCoinToken is ERC20 {
    constructor() ERC20("Derek Coin", "DEREK") {
        _mint(msg.sender, 10 * 10 ** 18);
    }
}
