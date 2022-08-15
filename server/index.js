const express = require("express");
require("dotenv").config();
require("./db/dbconfig");
const brandList = require("./brands.json");
const Product = require("./models/product");
var cors = require("cors");
const product = require("./models/product");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Flipkart Backend");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
app.post("/brands", async (req, res) => {
  res.status(200).json({ brands: brandList.brands });
});
app.post("/get", async (req, res) => {
  var params = req.body;
  //   console.log(params);
  //   params.brands = params.brands !== [] ? params.brands : brandList.brands;
  if (params.brands.length === 0) {
    params.brands = brandList.brands;
  }
  if (!params.fassured) {
    params.fassured = [false, true];
  } else {
    params.fassured = [true];
  }
  if (params.discount === null) params.discount = 0;
  if (params.rating === null) params.rating = 0;
  console.log(params.brands);

  try {
    var products = await Product.find({
      brand: {
        $in: params.brands,
      },
      user_rating: {
        $gte: params.rating,
      },
      discount: {
        $gte: params.discount,
      },
      assured: {
        $in: params.fassured,
      },
    });
    console.log(params);
    sort(products, params.sortBy);
    res.status(200).json({
      count: products.length,
      products: products.slice((params.page - 1) * 40, params.page * 40),
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//helpers
function sort(products, sortBy) {
  if (sortBy === 2) {
    products.sort((a, b) => a.sp - b.sp);
  } else if (sortBy == 3) {
    products.sort((a, b) => b.sp - a.sp);
  } else if (sortBy === 1) {
    products.sort((a, b) => b.user_rating - a.user_rating);
  } else if (sortBy === 4) {
    products.sort((a, b) => b.date_listed - a.date_listed);
  }
}
// function filterBrand(products, brands) {
//   console.log(products.length);
//   if (brands.length > 0) {
//     products = products.filter((product) => {
//       return product.brand.some((brand) => brands.includes(brand));
//     });
//   }
// }
