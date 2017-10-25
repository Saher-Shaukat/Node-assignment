'use strict';
module.exports = function(app) {
  var  custController= require('../controllers/controller');

  
  app.route('/addCustomer')
    .post(custController.addCustomer);

    app.route('/getAllCustomers')
    .get(custController.getCustomers);


  app.route('/customer/:emailId')
    .get(custController.getCustomerById);

    app.route('/product')
    .get(custController.getAllProducts);
    
    app.route('/product/:productId')
    .get(custController.getProductById);

    app.route('/carts/:username')
    .get(custController.getProductFromCart);

    app.route('/cart')
    .post(custController.addProductToCart);
    
    app.route('/order/:orderId')
    .delete(custController.deleteProductFromCart);
};