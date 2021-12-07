let req = {
    comment: "Req works!",
    number: 12345,
    name: "request",
}

let res = {
    comment: "Res also works!",
    number: 54321,
    name: "response",
}

let slice = Array.prototype.slice

const createApplication = () => {
    let app = function(req, res, next) {
    console.log ("This is from app function inside createApplication!: ", req, res, next)
  }

    app.print = () => {
        //console.log(app)
        console.log(req)
        console.log(res)
    }

    app["get"] = function (path) {
        //console.log(this)
        this.paths = path
        //console.log(slice.call(arguments,1))
        //this["get"].funcs = arguments[1] 
        console.log(arguments[1])
        //console.log(this["get"].funcs)
        //console.log(this.funcs)
        this.func = arguments[1]
        console.log(this.func)
        this.callback = () => {this.func.apply(null, [req, res])}
        
        return this
}
    return app
}


let exports = createApplication

exports.route = "This is routed!"
exports.query = "This is query!"
exports.request = req
exports.response = res


export default exports