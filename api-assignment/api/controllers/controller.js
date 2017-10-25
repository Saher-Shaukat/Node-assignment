
var mongoose = require('mongoose'),
Customer = mongoose.model('customerDetail');
Product = mongoose.model('productDetail');
Cart = mongoose.model('cartDetail');

exports.addCustomer = function (req, res){
     var cust=new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        emailId: req.body.emailId,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob,
        password: req.body.password,
        created_at: new Date});

    cust.save(function(error,response){
        if(error)
        res.send(error);
        else{
          
       res.json({sucess: true,
            body: response});
        }

            });
    }


    exports.getCustomers= function (req,res){
        Customer.find({},function(err, response){
            if(err)
            res.send(err);
            else
            res.json(response);
        });
       }

       exports.getCustomerById= function (req,res){
           var id= req.params.emailId;
        Customer.findOne({emailId: id},function(err, response){
            if(err)
            res.send(err);
            else
            res.json(response);
        });
       }
        
       exports.getAllProducts = function(req,res){
           Product.find({},function(err,response){
               if(err)
               res.send(err);
               else
               res.json(response);
           });
       }

       exports.getProductById= function (req,res){
        var id= req.params.productId;
     Product.findOne({productId : id},function(err, response){
         if(err)
         res.send(err);
         else
         res.json(response);
     });
    }

    exports.addProductToCart = function(req, res) {
        var subtotal=(req.body.qty)*(req.body.price);
        var newProduct = new Cart({
            userName:req.body.userName,
            productName: req.body.productName,
            img: req.body.img,
            qty: req.body.qty,
            subtotal: subtotal,
            createdAt: req.body.createdAt,
            Model: req.body.Model,
            price: req.body.price,
            description: req.body.description
        });
        newProduct.save(function(err, product) {
          if (err)
            res.send(err);
          res.json(product);
        });
      };

      exports.getProductFromCart = function(req, res) {
          var usr=req.params.username;
        Cart.find({userName: usr}, function(err, product) {
          if (err)
            res.send(err);
          res.json(product);
        });
      };

      exports.deleteProductFromCart = function(req, res) {
         
          Cart.remove({
            createdAt: req.params.orderId
          }, function(err, task) {
            if (err)
              res.send(err);
            res.json({ message: 'Task successfully deleted' });
          });
        };
        



