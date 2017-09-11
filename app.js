var express   = require('express'),
app           = express(),
mongoose      = require('mongoose'),
bodyParser    = require('body-parser');

// Database and app setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog_app', { useMongoClient: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})
var Blog = mongoose.model('Blog', blogSchema);

// RESTful Routes



app.listen(3000, function(){
  console.log('Server is running on port 3000');
})
