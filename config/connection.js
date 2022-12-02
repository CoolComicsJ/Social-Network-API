const { connect, connection } = require('mongoose');
// Wrap Mongoose around local connection to MongoDB
 connect('mongodb://127.0.0.1/SocialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports =  connection;