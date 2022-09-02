const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const limitter = require('express-rate-limit')

const productsRouter = require('./Routes/productsRouter')
const registerRouter = require('./Routes/registerRouter')
const loginRouter = require('./Routes/loginRouter')
const logoutRouter = require('./Routes/logoutRouter')
const usersRouter = require('./Routes/usersRouter')
const cartsRouter = require('./Routes/cartsRouter')
const addToCartRouter = require('./Routes/addToCartRouter')
const purchasesRouter = require('./Routes/purchasesRouter')

const chordsRouter = require("./Routes/chordsRouter");
const guidesRouter = require("./Routes/guidesRouter");
const tunerRouter = require("./Routes/tunerRouter");
const contactRouter = require("./Routes/contactRouter");

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser());
app.use(limitter({
  window: 1000,
  max: 100
}))

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
  });

app.use('/purchases', purchasesRouter)  
app.use('/carts', cartsRouter)  
app.use('/addToCart', addToCartRouter)  
app.use('/users', usersRouter)  
app.use('/products', productsRouter)  
app.use('/register', registerRouter)  
app.use('/login', loginRouter)  
app.use('/logout', logoutRouter)  

app.use("/chords", chordsRouter);
app.use("/guides", guidesRouter);
app.use("/tuner", tunerRouter);
app.use("/contact", contactRouter);

app.use(express.static(path.resolve(__dirname, 'Client', 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))  
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)  
  }) 