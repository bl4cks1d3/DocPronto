//Configurations for deployment on various networks --> values of vrfCoordinatorV2 changes on
//various networks

const { ethers } = require("ethers")

//all the parameters that are different chain-to-chain.
const networkConfig = {
    // 4: {
    //     name: "rinkeby",
    //     waitConfirmations: 6,
    // },
    31337: {
        name: "hardhat",
        waitConfirmations: 1,
    },
    5: {
        name: "goerli",
        waitConfirmations: 6,
    }
}


const developmentChains = ["hardhat", "localhost"]
const CATEGORY = 0
const IPFS_HASH = "SaenBmCjpRiR+E5ftxsZW5ekQ7qZUHtdIatZ1O/EL8nW5/Y2bg2RHADhLvsbVqMbcdb2zdtDaJJqVlcwXWmfzqbrPRhFs9XEGvaYZKCeUA3xXfM0893F89ZaLXcwl0diZegkomtITP0W1XU/OpQ08D/ijzAIly5bp2V+L0KKqWk+ZTAh4PeMlossM7yf4jpLP0IE3ahyDNfIlg2hp06frZrK+72fHIUKQT0SC4frFvlEYDu84TBwMoETKNPW8v5kBsSvn9L+gayb6noOjomS+/49ObcpypC1AXyc0wQwOLj7bos1X3vbmLjmCvQ1zEUD/sn/oBFWjwFEI1xJpHYZBA=="       //The IPFS hash generated after uploading the file of the patient to the pinata IPFS node. 
const VERIFICATION_BLOCK_CONFIRMATIONS = 0

module.exports = {
    networkConfig,
    developmentChains,
    CATEGORY,
    IPFS_HASH,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
