const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

//定义模型
const Blog = sequelize.define('Blog', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
})

module.exports = Blog;