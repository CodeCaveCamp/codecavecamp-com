import axios from 'axios';

const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;

const url_oauth = 'https://accounts.zoho.com/oauth/v2/token?';
const url_api = 'https://www.zohoapis.com/crm/v2/Leads';

export const CREATE_LEAD = "CREATE_LEAD";

const newLead = {
    "data": [
       {
          "Company": "Acme Inc",
          "Last_Name": "Donelly",
          "First_Name": "Jennifer",
          "Email": "jennifer@acme.com",
          "State": "Texas",
          "Country": "United States"
       }
    ],
    "trigger": [
       "approval"
    ]
 }

 // startCreateLead (zoho)
 export const startAddLead = (leadData) => {
    getAuthToken().then((response) => {
        addLead(response.data.access_token, leadData)
    });


    return {
        type: CREATE_LEAD
    };
 }

const getAuthToken = () => {
    return axios({
        method: 'post',
        url: url_oauth,
        responseType: 'json',
        params: {
            refresh_token: REFRESH_TOKEN,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "refresh_token"
        }
    });
};


const addLead = (authToken, leadData) => {
    console.log(authToken);
    return axios({
        method: 'post',
        url: url_api,
        headers: {
            "Authorization": `Zoho-oauthtoken ${authToken}`
        },
        data: JSON.stringify(newLead)
    })
};