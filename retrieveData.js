import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: "test.html",
    methods: ['GET']
}))
app.get("/",(req,res)=>{
    res.send('hello world');
})

app.listen(8080);

function appendDataToLink(base,data){
    base+='?';
    let counter = 0;
    const amountOfData = Object.keys(data).length;
    for (const key in data){
        counter+=1;
        base+=`${key}=`;
        base+=`${data[key]}`;
        if(amountOfData === counter){
            break;
        }
        base+='&';
    }
    return base;
}

const MainLink = 'https://newsapi.org/v2/top-headlines'
const data = {
    apiKey: 'd4176663e2904c2c95da301349841db1',
    country: 'us',
    category: 'technology'
}

// Create the full link (Main link + data) -> Passing in a seperate set of data to fetch does not work
const linkAndData = appendDataToLink(MainLink,data)

// Fetch data
fetch(linkAndData).then(res=>{
    return res.json();
}).then(res=>{
    console.log(res);
})


