require('dotenv').config();
const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect(process.env.DATABASE_CONNECT_LINK,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect data')
    } catch (error){
        console.log('Connect fail')
    }
}

module.exports = {connect}