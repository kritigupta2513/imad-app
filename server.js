var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title: 'Article One| Kriti Gupta',
        heading: 'Article One',
        date: 'Sep 25',
        content: ` <p>
                        This is the content for my first webpage. I'm really excited about this. I cant wait to see it appear on my webapp. This is the content for my first webpage. I'm really excited about this. I cant wait to see it appear on my webapp.
                    </p>
                    <p>
                        This is the content for my first webpage. I'm really excited about this. I cant wait to see it appear on my webapp.This is the content for my first webpage. I'm really excited about this. I cant wait to see it appear on my webapp.
                    </p>
                    <p>
                        This is the content for my first webpage. I'm really excited about this. I cant wait to see it appear on my webapp.This is the content for my first webpage. I'm really excited about this. I cant wait to see it appear on my webapp.
                    </p> `
        
    },
    'article-two': {
        title: 'Article Two| Kriti Gupta',
        heading: 'Article Two',
        date: 'Sep 25',
        content: ` <p>
                        This is the content for my second webpage. I'm really excited about this. I cant wait to see it appear on my webapp.
                    </p>`
    },
    'article-three': {
        title: 'Article Three| Kriti Gupta',
        heading: 'Article Three',
        date: 'Sep 25',
        content: 'This is the content for my third webapp. Its the usual by now'
    }
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <html>
            <head>
            <title> ${title}
            </title>
            <meta name = "viewport" content = "width = device-width,initial - scale =1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class = "container">
                <div>
                    <a href = "/">Home</a>
                </div>
                <hr/>
                <h3>
                     ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
        </html>`;
        return createTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log('IMAD course app listening on port ${port}!');
});

