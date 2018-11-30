var mongoose = require('mongoose');

// var outletSchema = new mongoose.Schema({
  
//   address :{type:String,required: true},
//   // Outletid:String,
//   ItemName:String,
//   location :String,
//   workinghrs : String,
//   city :String,
//   zip :String,
//   mobile : {type:String,required: true},
//   ratingby : [String],
//   rating : String
// });


// var sellerSchema = new mongoose.Schema({
//   shopname : {type:String,required: true},
//   shopowner : String,
//   // contactnumber : {type:String,required: true},
//   website : String,
//   shopinfo : String,
//   imgbanner : String,
//   registration_date :Date ,
//   outlets:[outletSchema],
//   likes: [String]
// });

var userSchema = new mongoose.Schema({
  name:{type:String},
  mobile:{type:String},
  email:{type:String,required: true},
  category:{type:String},
  background:{type:String},
  password:{type:String,required: true},
  // seller:sellerSchema,
  added_datetime:{type:Date,default:Date.now}
});

module.exports = mongoose.model('cusers', userSchema);
