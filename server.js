const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/config");
const models = require("./models");
 
app.listen(PORT, async () => {
   console.log(`App listening on port ${PORT}!`);
   try {
    await sequelize.sync({ force: true })
       console.log('connected to db!')
   } catch(e){
       console.log(e)
   }
 });
