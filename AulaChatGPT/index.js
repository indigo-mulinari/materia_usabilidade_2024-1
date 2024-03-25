require('dotenv').config()
const {OpenAI} = require ('openai')

const express = require('express')
const app = express()
app.use(express.json())

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI(OPENAI_API_KEY)

app.post('/pergunte-ao-chatgpt',(req,res) => {
    const { prompt } = req.body
    console.log(prompt)
    res.json({seuPrompt: prompt})
})
const PORT = 4000
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`))
