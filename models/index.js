// This will handle our objects of users and other data. 
const User = require('./User');
const Spot = require('./Spot');
const Wave = require('./Wave');
// USer has many spots and 
User.hasMany(Spot, { foreignKey: 'user_id' });
Spot.belongsTo(User, { foreignKey: 'user_id' });
// Comments for this route
User.hasMany(Wave, { foreignKey: 'user_id' });
Wave.belongsTo(User, { foreignKey: 'user_id' });
// comments for this route
Spot.hasMany(Wave, { foreignKey: 'spot_id'});
Wave.belongsTo(Spot, { foreignKey: 'spot_id'});


module.exports = { User, Spot, Wave};
