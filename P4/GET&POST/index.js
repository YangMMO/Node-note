const http = require('http');
const url = require('url');
const querystring = require('querystring');

const Blog = require('./blog');

const server = http.createServer((req, res) =>{
  
  let method = req.method;
  let urlObj = url.parse(req.url);
  let pathname = urlObj.pathname;

  //根据id查询单个blog
  if(method === 'GET' && pathname === '/api/blog') {
    let query = querystring.parse(urlObj.query) //{id: 1}
    let id = query.id;

    if(id) {
      Blog.findById(id).then(function(result) {
        if(result) {
          returnJSON(res, {
            code: 0,
            data: {
              id: result.id,
              title: result.title,
              content: result.content,
              createAt: result.createdAt,
              updateAt: result.updatedAt
            }
          })
        } else {
          returnJSON(res, {
            code: -2,
            msg: "not found"
          })
        }
      })
    } else {
      returnJSON(res, {
        code: -1,
        msg: "invalid params"
      })
    }

  } else if(method === 'POST' && pathname === '/api/blog_create') {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });

    req.on('end', function() {
      let data = JSON.parse(body);
      Blog.create(data).then(function(result) {
        if(result && result.id) {
          returnJSON(res, {
            code: 0,
            data: {
              id: result.id
            }
          })
        } else {
          returnJSON(res, {
            code: -3,
            msg: "create error"
          })
        }
      });
    });
  } else {
    res.statusCode = 404;
    res.end();
  }

});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running');
})

function returnJSON(res, json) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(json))
}