function addTextToId(_id, text) {
    console.log(`#${_id}`)
    document.querySelector(`#${_id}`).innerText = text
}
var my = 5


addTextToId( 'b', this.my)

methods = ["get", "post"]
app = {}

methods.forEach(function(method){
  app[method] = function(path){
      console.log(method, arguments)
      console.log(method, arguments.length)
    if (method === 'get' && arguments.length === 1) {
      // app.get(setting)
      console.log("if: ", this)
      //return
      //return this.set(path);
    }
    console.log("out of if: ", this)

    //this.lazyrouter();

    //var route = this._router.route(path);
    //route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

console.log("instance get: ", app.get('/myGetPath'))
//console.log("instance post: ", app.post('/myPostPath'))
console.log(app.patch)

const arrays = ['a', 'b'];
const elements = [0, 1, 2];
Array.prototype.push.apply(arrays, elements);
console.info(arrays); // ["a", "b", 0, 1, 2]

function Product(name, price) {
  console.log("product arguments", arguments)
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  console.log(this)
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);