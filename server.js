const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 3000;
// ...

app.post("/add", async (req, res) => {
    const { name,email,medicine,mfd,exp } = req.body;

    const data = {
        email: email,
        name : name,
        medicine : medicine,
        mfd : mfd,
        exp : exp,
    };

    try {
        const newUser = new collection(data);
        await newUser.save();

        res.json("notexist");
    } catch (e) {
        res.json("fail");
    }
});
app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
     });
// ...






// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const User = require("./mongo"); // Assuming you have a User model
// const cors = require("cors");
// const app = express();
// const port = 3001;
// app.use(cors());
// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/react-login-tut", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// app.use(express.json());

// // Multer setup for handling image uploads
// const storage = multer.memoryStorage(); // Store images in memory as Buffer
// const upload = multer({ storage: storage });

// // Route for handling user registration with email and password
// app.post("/signup", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const newUser = new User({ email, password });
//         await newUser.save();

//         res.json({ message: "User registered successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Route for handling image uploads
// app.post("/upload", upload.single("image"), async (req, res) => {
//     try {
//         const { buffer, mimetype } = req.file;

//         // Save image to the user's profileImage field
//         const user = await User.findOneAndUpdate(
//             { /* your query to find the user */ },
//             {
//                 $set: {
//                     profileImage: {
//                         data: buffer,
//                         contentType: mimetype,
//                     },
//                 },
//             },
//             { new: true }
//         );

//         res.json({ message: "Image uploaded successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())



// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(3001,()=>{
//     console.log("port connected");
// })
// const express = require("express");
// const collection = require("./mongo");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // ...

// app.post("/signup", async (req, res) => {
//     const { email, password } = req.body;

//     const data = {
//         email: email,
//         password: password
//     };

//     try {
//         const newUser = new collection(data);
//         await newUser.save();

//         res.json("notexist");
//     } catch (e) {
//         res.json("fail");
//     }
// });

// // ...
// app.listen(3001,()=>{
//         console.log("port connected");
//      })