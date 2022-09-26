const  emailListServices  = require('../services/emailListServices');

const clientEmailList = async (req, res) => {
    try {
        const client = await emailListServices.clientEmailLt("asd");
        res.send(client);
    } catch(ex) {
        res.send(false)
    }
  
};
const updateclientList = async (req, res) => {
    try {
        const client = await emailListServices.upateClient("asd");
        console.log("controll print data", client);
        res.send(client);
    } catch(ex) {
        res.send(false)
    }
  
};



module.exports = {
    clientEmailList: clientEmailList,
    updateclientList:updateclientList
};
