var blog = require('./blog');
var assert = require('assert');

describe('博客文章功能', function() {
  it('新增文章', function(done) {
    blog.addArticle(123, (call) => {
      assert.equal('test-id', call.id);
      done();
    })
  })
})