const connect = require('./dbConfig')
const express = require('express')
const app = express()

app.use(express.json())

app.put("/:name",async (req, res)=>{        // notice the slight change and usage of : below
    const con = await connect()
    console.log(req.params.name)
    const result = await con.updateOne(
        {prod: req.params.name},
        [{$set: req.body}]
    )
    res.send(result)
}).listen(5000, ()=> {console.log("PORT 5000")})

/*
the use of :name is to receive parameters after /
it is an alternative for the use of key: value method we have been using till now to get parameters in URL
    which was using :- req.query.<parameter's key name>

With this approach things can get easier for user to understand as well us for us to get data
Retreiving params thus have 3 ways : 
    1. send key: value and get with 'req.query.key
    2. send :param(defined in route url) and get it with 'req.params.<param name in url>
    3. send the data structered and wrapped in JSON from frontend and destructure it for different use (like we did in get API with cond, data)
*/ 