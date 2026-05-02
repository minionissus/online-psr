import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/join', (req, res) => {
    console.log('Nickname:', req.body.nickname)
    const nickname = req.body.nickname
    res.render('psr', { nickname })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})