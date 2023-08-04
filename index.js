const fs = require("fs")

// to read data
fs.readFile("nodejs_architecture.txt", (err, data) => {
    if(err){
        console.log("Error : ",err);
    } else {
        console.log("Data : ",data.toString());
    }
})


// to append data
fs.appendFile("nodejs_architecture.txt", "Node.js is used by large, established companies and newly-minted startups alike. Open-source and completely free, the platform is used by thousands of developers around the world. It brings plenty of advantages to the table, making it a better choice than other server-side platforms like Java or PHP in many cases.", (err) => {
    if(err){
        console.log("Error : ",err);
    } else {
        console.log("Append data successfully!!");
    }
})

// to delete file
fs.unlink("nodejs_architecture.txt", (er) => {
    if(er){
        console.log("Error in deleting file");
    } else {
        console.log("File deleted successfully!!");
    }
})