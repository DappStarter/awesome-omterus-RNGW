require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note sad purse grace neck fresh gesture'; 
let testAccounts = [
"0x06dcfbc125abcb73571ea97468819814cb60b8554a21a984cc9ecec7e4344861",
"0xa13868d578bd255e761f697ec7d86dadc636e90b53176783cdc5451678acff3e",
"0xd1e94e762eb02bea20f53eeb7927bdac7341366f5fabb8f4892359f7b8f25096",
"0x32d44b164a8da6057586c67f017f6387ca5080773b6b3b802d9d3a678c803229",
"0x50940af093f561fbd2e4a75f72287c7501b82ed87f3d6621fe0b49d2ec01b8a7",
"0x75004c2ee926282e46122d89e19d8f5b06ac09c7a631da7ce8a61d3a8c114487",
"0x026a2a4f8196e62877f322aaea73cea3cebdfa9792fb0c42bedd072be892b5cf",
"0x29d06396703ee0942e50f8898490c31b6c39d440157b6ea08adaa1d64d4d7a2f",
"0x3899528992a7c2eb16550491cad5b0dcce29e731cc49ae2e2056ff954cc4b188",
"0x28eb901cb8a4dc8c485e901356b85b4ca252f29f3a42ed6f4deff81153361d67"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


