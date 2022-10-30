const { json } = require('body-parser');
var express = require('express');
const router = require('../api');
const routes = (CategoryModel) => {
  const CategoryRouter = express.Router();
  CategoryRouter.route("/categories").get((req, res) => {
    CategoryModel.find((err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result)
    });

  });
  CategoryRouter
    .route("/categories/:id")
    .get((req, res) => {
      CategoryModel.findById(req.params.id, function(err, result) {
          res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})
      })
    })


  return CategoryRouter;
}

module.exports = routes;