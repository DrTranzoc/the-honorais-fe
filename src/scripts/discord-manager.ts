import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { retrieveWalletAddress, signMessage } from './wallet-handler';
import { StdSignature } from '@keplr-wallet/types';
import { DiscordUserInfo, NFTData } from '../utils/datatypes';

export class DiscordManager {
    private apiBasePath;

    constructor() {
        this.apiBasePath = import.meta.env.VITE_APP_API_ENDPOINT;
    }

    public async connectToDiscord() {
        if (!this.apiBasePath) {
            throw new Error('API endpoint is not defined.');
        }
        window.location = (await axios.get(this.apiBasePath + '/discord/auth')).data;
    }

    public async linkWalletToDiscord(address : String , sessionToken : string , signature : StdSignature) {
        return await axios.post(this.apiBasePath + '/discord/link-address' , {
            address,
            jwtDiscordToken : sessionToken,
            signature
        });
    }

    public async disconnectFromDiscord() {
        const userAddress : string = await retrieveWalletAddress();
        if(userAddress){
            const { signature , address } = await signMessage(userAddress);

            let unlinkResponse : AxiosResponse;
            try {
                unlinkResponse = await axios.post(this.apiBasePath + '/discord/unlink-address' , {
                    address,
                    signature
                });
            }
            catch(error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 400) {
                        toast.success("User not existent or disconnected already");
                        setTimeout(() => window.location.href = "/profile", 1000);
                        return;
                    } else {
                        console.error('An error occurred:', error.message);
                    }
                } else {
                    console.error('Unexpected error:', error);
                }
            }

            if(!unlinkResponse || [404, 500, 400].includes(unlinkResponse.status)) {
                toast.error("Error during user wallet unlink");
            }
            else {
                toast.success("Disconnected from discord");
                setTimeout(() => window.location.href = "/profile", 1000);
            }
        }
    }

    public async setDefaultNFT(nftData : NFTData) {
        const address = await retrieveWalletAddress();

        return await axios.post(this.apiBasePath + `/discord/user/${address}/change-default-nft` , {
            nftData
        });
    }

    public async getUserInfo() : Promise<DiscordUserInfo> {
        const address = await retrieveWalletAddress();
        
        return await axios.get(this.apiBasePath + `/discord/user/${address}`);
    }
}


