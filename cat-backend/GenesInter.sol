contract GenesInter {

    function isGenes() public pure returns (bool);

    function mixGenes(uint256 genes1, uint256 genes2, uint256 targetBlock) public returns (uint256);
}