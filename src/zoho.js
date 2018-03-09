const refresh_token = "1000.52989cb7e1f96e436d5cd6c0fdcc1669.621aa113df7bf07d87428c98a045a19d";
const client_id = "1000.JX7TNX7ERKRR583600XAQ2TXIRNNZ3";
const client_secret = "29fe8cf5d61681b9615c04b1f5017707c3deab40d8";

const url = `https://accounts.zoho.com/oauth/v2/token`;
const module_api_name = "Leads";
const request_url = `https://www.zohoapis.com/crm/v2/${module_api_name}`;

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

// const newLead = '{"data": [{"Company":"Individual", "Last_Name": "Zoho", "First_Name": "Test", "Email": "testzoho@acme.com"}], "trigger": ["approval"]}'

// const getLeads = (access_token) => {

//     $.ajax({
//         type: "GET",
//         url: request_url,
//         headers: {
//             "Authorization": `Zoho-oauthtoken ${access_token}`
//         },
//         success: function (response) {
//             console.log(response);
//         }
//     })
// };

// const addLead = (access_token) => {
//     $.ajax({
//         type: "POST",
//         dataType : "json",
//         url: request_url,
//         headers: {
//             "Authorization": `Zoho-oauthtoken ${access_token}`
//         },
//         data: JSON.stringify(newLead),
//         success: function (data, textStatus, jqXHR) {
//             console.log(textStatus);
//         },
//         error: function(jqXHR, textStatus, error) {
//             console.log(jqXHR);
//         }
//     })
// };

const getAuthCode = () => {
    return $.ajax({
        type: "POST",
        url: url,
        data: {
            refresh_token: refresh_token,
            client_id: client_id,
            client_secret: client_secret,
            grant_type: "refresh_token"
        }
    })
}


const addLead = (data, textStatus, jqXHR) => {
    console.log(jqXHR);
    // return axios({
    //     method: 'post',
    //     url: request_url,
    //     headers: {
    //         "Authorization": `Zoho-oauthtoken ${access_token}`
    //     },
    //     data: JSON.stringify(newLead)
    // })
};

getAuthCode().then(addLead);