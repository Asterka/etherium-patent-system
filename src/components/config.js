export const ADDRESS = '0x293922336e85be6ece601db403f4c5b45905bf12';
export const ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "uid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "by",
                "type": "address"
            }
        ],
        "name": "CreatePatent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_role",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_agentName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_country",
                "type": "string"
            }
        ],
        "name": "createPatent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "uid",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "uid",
                "type": "uint256"
            }
        ],
        "name": "getPatent",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "role",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "agentName",
                        "type": "string"
                    },
                    {
                        "internalType": "enum State",
                        "name": "state",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "country",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "patentNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "internationalClassificationNumber",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct PatentAgency.Patent",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPatents",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "role",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "agentName",
                        "type": "string"
                    },
                    {
                        "internalType": "enum State",
                        "name": "state",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "country",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "patentNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "internationalClassificationNumber",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct PatentAgency.Patent[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "patentUids",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]