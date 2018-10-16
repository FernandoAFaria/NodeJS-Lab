let request = require('request-promise');
let path = require('path');
let fs = require('fs');
let dataPath = path.join(__dirname, './popular-articles.json')

let popularArticles = [];

/* PULL the Data */
request('https://reddit.com/r/popular.json', (err, response, body) => {
    if(err) console.log(err);
    let articles = JSON.parse(body)
    
    /* Pushing data to popularArticles Array */
    articles.data.children.forEach( each => {
        popularArticles.push({"title": each.data.title, "URL": each.data.url, "Author": each.data.author})
    
    })
    /*Writing array to JSON file */
    fs.writeFile(dataPath, JSON.stringify(popularArticles), err => {
        console.log(err)
    })

})
