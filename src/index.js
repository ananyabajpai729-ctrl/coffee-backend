import "dotenv/config"; 
import dns from "node:dns";
// 1. Force Node.js to look up addresses via Cloudflare and Google DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);


import {app} from "./app.js";
import connectDB from "./db/index.js";
connectDB()
.then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`⚙️ Server is running at port : ${PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
});