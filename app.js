const express = require("express")
const app = express()
app.use((req,res,next)=>{
    console.log(`${req.method}${req.url}`)
    next()
})
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send(`
        <html>
            <head>
                <title>Practice task 12</title>
            </head>
            <body>
                <h1>
                    Links
                </h1>
                <h3>
                    <a href="/health">/api/products</a><br>
                </h3>
                <h3>New message</h3>
            </body>
        </html>
        `)
})
app.get("/health",(req,res)=>{
    res.json({
        status:"OK"
    })
})
app.use((req,res)=>{
    res.json({
        error:"page not found"
    })
})

PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log("runnig on http://localhost:3000"))