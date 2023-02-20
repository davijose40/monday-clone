const express = require("express")
const cors = require("cors")
require("dotenv").config()
const axios = require("axios")
const config = require("./config/db-config")

const PORT=config.PORT
const URL=config.DB_URL
const TOKEN=config.TOKEN


const app = express()
app.use(cors())
app.use(express.json())

app.get("/tickets", async (req, res) => {
    const options = {
        method: "GET",
        
        headers: {
            Accepts: "application/json",
            'X-Cassandra-Token': TOKEN,
            
        }
    }

    try {
        const response = await axios.request(`${URL}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.post("/tickets", async (req, res) => {
    const formData = req.body.formData
    
    const options = {
        method: "POST",
        
        headers: {
            Accepts: "application/json",
            'X-Cassandra-Token': TOKEN,
            'content-type': 'application/json'
        },

        data:formData
    }

    try {
        const response = await axios(URL, options)
        res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚂...`))