// const mongoose = require("mongoose");

// //schema
// const foodSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Food Title is require"],
//     },
//     description: {
//       type: String,
//       required: [true, " food description is requir"],
//     },
//     price: {
//       type: Number,
//       required: [true, "food price is require"],
//     },
//     imageUrl: {
//       type: String,
//       default:
//         "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
//     },
//     foodTags: {
//       type: String,
//     },
//     catgeory: {
//       type: String,
//     },
//     code: {
//       type: String,
//     },
//     isAvailabe: {
//       type: Boolean,
//       default: true,
//     },
//     resturnat: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Resturant",
//     },
//     rating: {
//       type: Number,
//       default: 5,
//       min: 1,
//       max: 5,
//     },
//     ratingCount: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// //export
// module.exports = mongoose.model("Foods", foodSchema);

const mongoose = require("mongoose");

// Define the food schema
const foodSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  foodTags: [String],
  category: { type: String, required: true },
  code: { type: String },
  isAvailabe: { type: Boolean, default: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  rating: { type: Number, default: 0 },
  foodType: {
    type: String,
    enum: ["veg", "non-veg", "starter", "mocktail", "desert"],
    required: true,
  },
});

// Create and export the model
module.exports = mongoose.model("Food", foodSchema);
