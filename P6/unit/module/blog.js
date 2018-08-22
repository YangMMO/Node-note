// 新增一篇博客文章
exports.addArticle = function(data, callback) {
  // 省略数据库写操作
  setTimeout(function() {
    callback({id: 'test-id'})
  }, 10)
}