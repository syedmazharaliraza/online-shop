import mongoose from "mongoose";
import reviewSchema from "../schemas/reviewSchema.js";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    sku: [
      {
        feature: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quanity: {
          type: Number,
          required: true,
        },
      },
    ],
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numOfRatings: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
