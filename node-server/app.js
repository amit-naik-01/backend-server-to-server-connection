const express = require("express");

const cron = require('node-cron');
const XLSX = require('xlsx');
const app = express();

app.get("/", (req, res) => {
    res.send("Task")
      
})





// Generate and attempt to save file
// XLSX.writeFile(workbook, filename, opts);
// Generate and attempt to save an XLSX file
// XLSX.writeFileXLSX(workbook, filename, opts);

const ftp = require("basic-ftp")

example()

async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "0.0.0.0",
            user: "any",
            password: "any",
            secure: true
        })
        console.log(await client.list())
        await client.uploadFrom("README.md", "README_FTP.md")
        await client.downloadTo("README_COPY.md", "README_FTP.md")
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}


const port = process.env.PORT || 3006;
app.listen(port,() => console.log(`Listening on port ${port}...`));




// for handling periodic job of fetching file from "ftp-server"

// const schedule = require('node-schedule');


// runs after every 10 seconds
// const job = schedule.scheduleJob('*/10 * * * *', function(){
//   console.log('fetch file');
// });