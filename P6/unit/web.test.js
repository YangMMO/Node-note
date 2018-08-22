//测试web服务
var assert = require('assert');
var request = require('request');

describe('验证web服务是否正常', function() {
  it('首页显示正常', function(done) {
    request.get('http://mmoo.fun/', function(err, res, body) {
      assert.equal(200, res.statusCode);
      assert.notEqual(-1, body.indexOf('<html'));
      assert(body.indexOf('Nodejs实战课程') >= 0, '应该包含');
      done();
    })
  });

  it('about页面返回码200', function(done) {
    request.get('http://mmoo.fun/about', function(err, res, body) {
      assert.equal(200, res.statusCode);
      done();
    })
  });
});

