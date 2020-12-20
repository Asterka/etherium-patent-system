// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.8.0;
pragma experimental ABIEncoderV2;

enum State {Created}

contract PatentAgency {
    
    struct Patent {
        uint uid; uint patentNumber; string title; string date; string role; address owner; string agentName; State state; string country;
    }
    
    event CreatePatent(uint uid, address by);
    event UpdatePatent(uint uid, address by);
    
    mapping (uint => Patent) patents;
    uint[] public patentUIDArray;


    function getPatent(uint uid) public view returns (Patent memory) {
        return patents[uid];
    }
    
    function createPatent(address _owner, string memory _role, string memory _agentName, string memory _title, string memory _date, string memory _country) public returns (uint uid){
        
        uid = uint(keccak256(abi.encodePacked(msg.sender, block.number, block.timestamp)));
        
        patentUIDArray.push(uid);
        
        patents[uid] = Patent(uid, 0, _title, _date, _role, _owner, _agentName, State.Created,  _country);
        
        emit CreatePatent(uid, _owner);
    }
    
    
    function getPatents() public view returns (Patent[] memory) {
        
        Patent[] memory res = new Patent[](patentUIDArray.length);
        
        for (uint i = 0; i < patentUIDArray.length; i++) {
            uint uid = patentUIDArray[i];
            res[i] = patents[uid];
        }
        
        return res;
    }
}
