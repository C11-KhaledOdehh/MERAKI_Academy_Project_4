const mongoose = require("mongoose");
mongoose
.connect(process.env.DB_URL)
.then(() => {
    console.log("DB is Use");
  })
  .catch((error)=>{
    console.log(error);
  })
 