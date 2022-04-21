var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: {type: String, maxLength: 100, minLength: 3, required: true}
})

GenreSchema
  .virtual('url')
  .get(function() {
    return `/catalog/genre/${this.name}`;
  })

module.exports = mongoose.model('GenreSchema', GenreSchema);
