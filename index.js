const express=require("express");
const app=express()
const port=8080;
const path=require("path")
const methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}))


let posts = [
  {
    id:uuidv4(),
    username: "Avinash",
    content: "Learning Express.js and EJS is fun!"
  },
  {
    id:uuidv4(),
    username: "ShradhaKhapra",
    content: "Consistency and hard work always pay off."
  },
  {
    id:uuidv4(),
    username: "Rahul",
    content: "Just landed my first internship!"
  },
  {
    id:uuidv4(),
    username: "Anjali",
    content: "Frontend development is so creative and exciting."
  },
  {
    id:uuidv4(),
    username: "Aman",
    content: "Finally understood how middleware works in Express!"
  }
];


app.get("/",(req,res)=>{
    
    res.send("Server is working")
    
})


app.get("/posts/new",(req,res)=>{
    res.render("form.ejs")
})

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("show.ejs", { post });
});




app.post("/posts",(req,res)=>{
    
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts")
    
})

app.get("/posts",(req,res)=>{
    
    res.render("index",{posts})
    
})
app.get("/posts/:id/edit",(req,res)=>{
  let {id}=req.params;
  let post=posts.find((p)=>p.id==id)
  res.render("edit.ejs",{post})
})
app.patch("/posts/:id",(req,res)=>{
  let {id}=req.params;
  let {content}=req.body;
  let post=posts.find((p)=>p.id==id);
  post.content=content;
  // res.redirect(`/posts/${id}`);
  res.redirect("/posts");
})

app.delete("/posts/:id",(req,res)=>{
  let {id}=req.params;
  posts=posts.filter((p)=>p.id!=id);
  res.redirect("/posts");

})




app.listen(port,()=>{
    console.log(`App is listening at ${port}`);
})
console.log(posts);
