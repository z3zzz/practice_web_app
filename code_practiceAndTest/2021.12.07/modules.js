import express from './modul1.js'

const app = express()


app.get('/', (requests, responses) => {console.log( "app.get works!: ", requests.comment, responses.number)})
//app.get('/home', (req, res) => console.log("home works too!: ", res.number))
console.log(app.paths)
//console.log(app.get())
console.log(app)
app.callback()

console.log(express.request)

console.log(express.route)



