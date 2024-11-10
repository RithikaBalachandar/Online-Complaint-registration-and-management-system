const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://sample-project:sample-project@cluster0.25x0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})

