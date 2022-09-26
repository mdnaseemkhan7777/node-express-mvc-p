const con = require("../config");
const db = require('../infrastructure/db')

const clientEmailLt = async (res) => {
    try {
        const data = await db.query('SELECT el.Email_ID emailID, el.Email_Address emailAddress, cs.cl_ID clientID,cs.Cl_Name clientName, el.Email_Name emailName FROM email_list el LEFT JOIN client_store cs ON el.CL_ID = cs.CL_ID;');

        // return await "datsdsada"
        return JSON.stringify(data) ; 
    } catch (ex) {
    }
    //   return res;
};

const upateClient = async (res) => {
    try {

        // const data = await db.update('UPDATE email_list SET CL_ID = ?, Email_Name = '?' WHERE Email_ID = ?;');
        
        console.log('data reach: ', data);
    
        // return await "datsdsada"
        return JSON.stringify(data) ;
        
    } catch (ex) {
    }
    
};



module.exports = {
    clientEmailLt: clientEmailLt,
    upateClient: upateClient

};
