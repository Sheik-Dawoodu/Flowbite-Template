import { environment } from "../../../environments/environment";


export const config ={
    metaData:{
        metadata:{
            name: "wagmi",
            description: "wagmi",
            url: "https://wagmi.network",
            image: "https://wagmi.network/assets/wagmi.png",
        },
        projectId :environment.PROJECT_ID,
        chains:environment.SUPPORTED_CHAINS
    },
    themVariable:{
        '--w3m-accent': '#b434eb'
    },
    enableAnalytics:true

}