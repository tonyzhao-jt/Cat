contract CatBase {
    ///is AccessControl

    event Birth(address owner, uint256 CatId, uint256 momId, uint256 dadId, uint256 genes);

    event Transfer(address from, address to, uint256 tokenId);

    struct Cat {
        uint256 genes;
        uint64 birthTime;
        uint64 cooldownEndBlock;
        uint32 momId;
        uint32 dadId;
        uint32 siringWithId;
        uint16 cooldownIndex;
        uint16 generation;
    }

    uint256 public secondsPerBlock = 15;

    Cat[] cats;

    mapping (uint256 => address) public catIndexToOwner;

    mapping (address => uint256) ownershipTokenCount;

    mapping (uint256 => address) public catIndexToApproved;

    mapping (uint256 => address) public dadAllowedToAddress;
    
    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;
        catIndexToOwner[_tokenId] = _to;
        if (_from != address(0)) {
            ownershipTokenCount[_from]--;
            delete dadAllowedToAddress[_tokenId];
            delete catIndexToApproved[_tokenId];
        }
        emit Transfer(_from, _to, _tokenId);
    }

    function _createCat(
        uint256 _momId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    )
        internal
        returns (uint)
    {
        require(_momId == uint256(uint32(_momId)));
        require(_dadId == uint256(uint32(_dadId)));
        require(_generation == uint256(uint16(_generation)));

        uint16 cooldownIndex = uint16(_generation / 2);
        if (cooldownIndex > 13) {
            cooldownIndex = 13;
        }

        Cat memory _Cat = Cat({
            genes: _genes,
            birthTime: uint64(now),
            cooldownEndBlock: 0,
            momId: uint32(_momId),
            dadId: uint32(_dadId),
            siringWithId: 0,
            cooldownIndex: cooldownIndex,
            generation: uint16(_generation)
        });
        uint256 newCatId = cats.push(_Cat) - 1;

        require(newCatId == uint256(uint32(newCatId)));

        emit Birth(
            _owner,
            newCatId,
            uint256(_Cat.momId),
            uint256(_Cat.dadId),
            _Cat.genes
        );
        ///0 is the address of creator
        _transfer(0, _owner, newCatId);

        return newCatId;
    }

    ///external _AccessControl
    function setSecondsPerBlock(uint256 secs) public {
        ///cooldowns may determined by users(cats breeding time)
        ///if cd is determined by cat itself:
        ///require(secs < cooldowns[0]);
        secondsPerBlock = secs;
    }
}