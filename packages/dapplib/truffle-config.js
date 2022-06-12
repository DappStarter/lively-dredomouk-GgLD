require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rate sister prosper hunt hidden tail stumble'; 
let testAccounts = [
"0xea92e64fa4c1dcec5a190ef5ae61dae2b0a2387e7834f6403bc17a27f6c4bfca",
"0x566588575998d43c48be9d50e89b3beff8f34a61c2692c9b0f5a497c4e4e6a33",
"0x084f7ba3c40a55002b3758e414638599042ca4b5db3626dbdaa7d3b0db0774c8",
"0x7673391bff2cff5ba761506672e1807601ae84db6cff7e957cf1ad84c6d66f70",
"0x67924d84616a23a691cb2c118bf513afa5e8a700c755dd9bae2850347888175f",
"0x4f5e7983f0276723e70aa8169cb55d575013fda6b0d70e700595e1146ae40898",
"0x26f5e796d0202552f6c9124877bc1365a3f725b1fd776be1f290ab5eb65c240f",
"0x8cf03e8a7c8bc9565f512647e85fbab96bd8bc1b080685cbb12c131f35ff018c",
"0x06ef2cc4b310514f9d77364489ca504ebf2783518a047f91b8196467ad944cea",
"0xdb97bdafaedfb6932799ebb27dbb3ff9c66c99c9886ada39d213ea75e652e424"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

