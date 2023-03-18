const User = require('./User');
const application = require('./application');

User.hasMany(application), {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

application.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, application };