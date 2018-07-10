txid = '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098'
addr = '12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX'
var blockexplorer = require('blockchain.info/blockexplorer')
blockexplorer.getTx(txid).then(console.log)
blockexplorer.getAddress(addr).then(console.log)
var RestClient = require('insight-cli').RestClient;
var cli = new RestClient();
cli.addr(addr).then(console.log)
cli.transaction(txid).then(console.log)

