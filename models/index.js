// This will handle our objects of users and other data. 
const User = require('./User');
const Spot = require('./Spot');
const Wave = require('./Wave');

User.hasMany(Spot, { foreignKey: 'user_id' });
User.hasMany(Wave, { foreignKey: 'user_id' });
Spot.belongsTo(User, { foreignKey: 'user_id' });
Wave.belongsTo(User, { foreignKey: 'user_id' });
Wave.belongsTo(Spot, { foreignKey: 'spot_id'});

module.exports = { User, Spot, Wave};
