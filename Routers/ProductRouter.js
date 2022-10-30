const { json } = require('body-parser');
var express = require('express');
const router = require('../api');
const routes = (productModel) => {
  const productRouter = express.Router();
  productRouter.route("/products").get((req, res) => {
    productModel.find(function(err, result){
      res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})

    });

  });
  productRouter
    .route("/products/:id")
    .get((req, res) => {
      productModel.findById(req.params.id, function(err, result) {
        res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})
      });
    });
    productRouter
    .route("/products/categories/:id")
    .get((req, res) => {
      productModel.find({CategoryId: req.params.id}, function (err, result) {
        res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})
      });
    });

    productRouter.post("/products",(req,res,next)=>{
      const product = new productModel(req.body);
      product.save(function(err,result)
      {
        res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})
      })
    })
    productRouter.put('/products/:id', async (req, res) => {
      
          const id = req.params.id;
          const updatedData = req.body;
          const options = { new: true };
  
          productModel.findByIdAndUpdate(
              id, updatedData, options, function(err,result)
              {
                res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})
              }
          )
  })
  router.patch('/products/:id', async (req, res) => {
    
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await productModel.findByIdAndUpdate(
            id, updatedData, options, function(err,result)
            {
              res.send({sucess:err?false:true, result, message:err?err.message:"successfull"})
            }
        )

        res.send(result)
})

  productRouter.delete('/products/:id', async (req, res) => {
        const id = req.params.id;
        productModel.findByIdAndDelete(id, function(err,result)
        {
          res.send({sucess:err?false:true, result, message:err?err.message:"deleted successfully"})
        })
  })

  return productRouter;
}

module.exports = routes;