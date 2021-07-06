const Orders = [{"id":1,"productIds":[11, 12, 13, 15],"createdAt":{"$date":"2020-06-01T21:14:10.000Z"}},
{"id":2,"productIds":[11, 12, 13],"createdAt":{"$date":"2019-12-29T02:31:52.000Z"}},
{"id":3,"productIds":[11, 12],"createdAt":{"$date":"2020-07-24T08:49:35.000Z"}},
{"id":4,"productIds":[12, 13],"createdAt":{"$date":"2020-08-30T13:01:23.000Z"}},
{"id":5,"productIds":[14, 13, 11],"createdAt":{"$date":"2019-12-03T09:59:33.000Z"}}];

const products = [{
  "id": 11,
  "name": "Arnoldo",
  "price": 90
}, {
  "id": 12,
  "name": "Bronnie",
  "price": 93
}, {
  "id": 13,
  "name": "Wren",
  "price": 23
}, {
  "id": 14,
  "name": "Leupold",
  "price": 37
}, {
  "id": 15,
  "name": "Stanley",
  "price": 36
}];

// const  OrdersWithProduct = [{id: …, createdAt: …, products: [{
//   "id": 11,
//   "name": "Arnoldo",
//   "price": 90
// }]}];

function getOrderWithProduct(orders, products){
    return orders.map(order => {
       return products.filter(product => { 
         if(order.productIds == product.id){
    return;    
}
}
 } );
 
}
                      
//   ______________________________________________________
                      
function getOrderWithProduct(orders, products){
  const newORder = [...orders];
  const newProduct = [...products];

      return newORder.map(order => {
       return newProduct.filter(product => {
    
        for (let i = 0; i < order.productIds.length; i++) {
            order.productIds[i] 
            if(order.productIds[i] == newProduct.id){
                return order.productIds.concat(product);    
            } 
        }

         
}
 )} );
 
}
  
  
//   -------------------------
  
function getOrderWithProduct(orders, products){
const newORder = [...orders];
const newProduct = [...products];

    return newORder.map(order => {
       return newProduct.filter(product => {
    
       return order.productIds.reduce((acc, id) => {
       
        if(id == newProduct.id){
                return order.productIds.push(product);    
            } 
        }, 0);


     
}
 )});
}
  
  
  
  const getOrderWithProduct = () =>
  orders.map((item) => {
    return ({ ...item, productIds: products.filter((productsItem) => {
        return item.productIds.find((findId) => {
          return findId === productsItem.id;
        });
      }),
    });
  });

console.log(getOrderWithProduct());
  
