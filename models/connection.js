var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
  }
  mongoose.connect('mongodb+srv://admin:test@cluster0.vlwwd.mongodb.net/abstraction?retryWrites=true&w=majority',
      options,         
      function(err) {
       console.log(err);
      }
  );
  