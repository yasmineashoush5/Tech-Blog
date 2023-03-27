const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId'
})
Post.hasMany(Comment, { foreignKey: 'postId' })
Comment.belongsTo(User, {
    foreignKey: 'userId'
})

module.exports = { User, Post, Comment };