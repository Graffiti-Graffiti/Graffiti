const DefaultSettings = {
    bank: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 1,
        ContractRequestee: "",
        BufferVal: "1",
        BufferSize: 4
    },
	special: {
        ContractType: 20,
        NpcCreatureId: "0",
        ValueParam: 16095,
        ContractRequestee: "",
        BufferVal: "16095",
        BufferSize: 4
    },
    gbank: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 3,
        ContractRequestee: "",
        BufferVal: "3",
        BufferSize: 4
    },
    petbank: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 9,
        ContractRequestee: "",
        BufferVal: "9",
        BufferSize: 4
    },
    wardrobe: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 12,
        ContractRequestee: "",
        BufferVal: "12",
        BufferSize: 4
    },
    angler: {
        ContractType: 20,
        NpcCreatureId: "0",
        ValueParam: 16095,
        ContractRequestee: "",
        BufferVal: "16095",
        BufferSize: 4
    },
	"merchant": {
            "ContractType": 9,
            "NpcCreatureId": "3518437209213082",
            "ValueParam": 70310,
            "ContractRequestee": "",
            "BufferVal": "70310",
            "BufferSize": 4
    }
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) 
	{
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } 
	else if (from_ver === null) 
	{
        // No config file exists, use default settings
        return DefaultSettings;
    } 
	else 
	{
        // Migrate from older version (using the new system) to latest one
        throw new Error('So far there is only one settings version and this should never be reached!');
    }
}