import express from "express"
import bodyParser from "body-parser"
// import _ from "lodash"

const homepage1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed nulla, dignissimos magnam eius, reprehenderit ex quidem dolorem sit id cumque sapiente voluptas ratione nisi autem voluptates provident maxime aut voluptatem dolore, non corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed nulla, dignissimos magnam eius, reprehenderit ex quidem dolorem sit id cumque sapiente voluptas ratione nisi autem voluptates provident maxime aut voluptatem dolore, non corrupti?"
const Aboutpage1 = "Anime differs from other forms of animation by its art styles, methods of animation, its production, and its process. Visually, anime works exhibit a wide variety of art styles, differing between creators, artists, and studios"
const Contactpage1 = "The body proportions of human anime characters tend to accurately reflect the proportions of the human body in reality. The height of the head is considered by the artist as the base unit of proportion. Head heights can vary, but most anime characters are about seven to eight heads tall."

const app = express()
const port = 3002
let text=''
let newArr=[]
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",function(req,res){
    res.render("D:\\Desktop\\public\\NodeProject\\views\\home.ejs",{homepage1,post1:newArr})
})
app.get("/about",function(req,res){
    res.render("D:\\Desktop\\public\\NodeProject\\views\\about.ejs",{Aboutpage1})
})
app.get("/contact",function(req,res){
    res.render("D:\\Desktop\\public\\NodeProject\\views\\contact.ejs",{Contactpage1})
})

app.get('/compose',(req,res)=>{
    res.render("D:\\Desktop\\public\\NodeProject\\views\\compose.ejs")
   })

app.get('/post/:post',function(req,res){
    const requestUrl = req.params.post
    newArr.forEach(function(newArr){
        if(newArr.Title === requestUrl){
            res.render("D:\\Desktop\\public\\NodeProject\\views\\post.ejs",{
                Title:newArr.Title,
                Content:newArr.Content
            })
            }
    })
})
app.post('/index.html',function(req,res){
    var arr={
        Title:req.body.Title,
        Content:req.body.Content
    }
    newArr.push(arr)
    res.redirect('/');
})

app.listen(port,(req,res)=>{
    console.log(`I am Successfully running at port:${port}`)
})