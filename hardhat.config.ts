import "@typechain/hardhat"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "dotenv/config"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
		hardhat: {
			chainId: 31337,
		},
		localhost: {
			url: 'http://127.0.0.1:8545/',
			chainId: 31337,
		},
		//binance: {
		//	url: process.env.BINANCE_NODE_URL,
		//	accounts: [process.env.WALLET_PRIVATE_KEY || ''],
		//	chainId: 97,
		//},
		goerli: {
			url: process.env.GOERLI_NODE_URL,
			accounts: [process.env.WALLET_PRIVATE_KEY || ''],
			chainId: 5,
		}
    },
    solidity: {
		version: "0.8.9",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
    },
    etherscan: {
      	apiKey: process.env.SCAN_API_KEY,
    },
    namedAccounts: {
		deployer: {
			default: 0,
			1: 0,
		},
    },
}

export default config
