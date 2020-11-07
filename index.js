const express = require('express')
const path = require ('path')

//init app 
port = 3000
const app = express()

// Load view engine 

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')


app.use(date = (req,res,next)=>{
    let time = new Date().getHours()
    console.log(time)
    if (time <8 || time >=17) res.send('the service is off')
    next()
})

app.get('/', (req,res)=> {
    res.render('index', {title : 'wassim'});
})

app.get('/Contact', (req,res)=> {
    res.render('contact-us', {title : 'contact-us'});
})

app.get('/services', (req,res)=> {
    res.render('services', {title : 'services'});
})

app.listen(port, (err)=>{
    if(err) console.log("server is not running")
    console.log(`app listening on port ${port}`)
})