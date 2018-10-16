let request = require('request-promise');
let path = require('path');
let fs = require('fs');
let downloadPath = path.join(__dirname, './downloads/')

let popularArticles = [];

/* PULL the Data */
request('https://reddit.com/r/popular.json', (err, response, body) => {
    if (err) console.log(err);
    let articles = JSON.parse(body)
    
  /*Writing files to downloads folder */
 
    articles.data.children.forEach(each => {
        if (path.extname(each.data.url)) {
            request.get(each.data.url, { encoding: 'binary'}, (err, res) => {
                if(err) console.log(err);
                fs.writeFile(downloadPath + path.basename(each.data.url), res.body, {encoding: 'binary'} )
                
            }

            )}
            
    });
})
