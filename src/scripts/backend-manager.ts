import axios from 'axios';
import { retrieveWalletAddress } from './wallet-handler';

export class BackendManager {
    private apiBasePath : string;
    private collectionAddress : string;

    constructor() {
        this.apiBasePath = import.meta.env.VITE_APP_API_ENDPOINT;
        this.collectionAddress = import.meta.env.VITE_APP_COLLECTION_ADDRESS;
    }


    public async getUserNFTs() : Promise<any> {
        const userAddress = await retrieveWalletAddress();
        
        return await axios.get(this.apiBasePath + 
            `/api/v1/collection/${this.collectionAddress}/ownedby/${userAddress}`);
    }

}