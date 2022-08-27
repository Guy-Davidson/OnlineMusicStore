const express = require("express");
const path = require("path");

// const companiesRouter = require('./Routes/companiesRouter')
// const stocksRouter = require('./Routes/stocksRouter')
// const historicalQuotesRouter = require('./Routes/historicalQuotesRouter')
// const historicalQuotesListRouter = require('./Routes/historicalQuotesListRouter')
// const competitorsRouter = require('./Routes/competitorsRouter')
// const filterByRouter = require('./Routes/filterByRouter')
// const profilePropertyRouter = require('./Routes/profilePropertyRouter')

const productsRouter = require("./Routes/productsRouter");
const contactRouter = require("./Routes/contactRouter");
const registerRouter = require("./Routes/registerRouter");
const chordsRouter = require("./Routes/chordsRouter");
const guidesRouter = require("./Routes/guidesRouter");
const tunerRouter = require("./Routes/tunerRouter");
// const tabsRouter = require('./Routes/tabsRouter')
// const recentsRouter = require('./Routes/recentsRouter')
// const layoutsRouter = require('./Routes/layoutsRouter')
// const templatesRouter = require('./Routes/templatesRouter')

// const filingsRouter = require('./Routes/filingsRouter')
// const searchRouter = require('./Routes/searchRouter')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/products", productsRouter);
app.use("/contact", contactRouter);
app.use("/register", registerRouter);
app.use("/chords", chordsRouter);
app.use("/guides", guidesRouter);
app.use("/tuner", tunerRouter);

// app.use('/recents', recentsRouter)
// app.use('/layouts', layoutsRouter)
// app.use('/templates', templatesRouter)

// app.use('/companies', companiesRouter)
// app.use('/stocks', stocksRouter)
// app.use('/historicalQuotes', historicalQuotesRouter)
// app.use('/historicalQuotesList', historicalQuotesListRouter)
// app.use('/competitors', competitorsRouter)
// app.use('/filterBy', filterByRouter)
// app.use('/profileProperty', profilePropertyRouter)

// app.use('/filings', filingsRouter)
// app.use('/search', searchRouter)

app.use(express.static(path.resolve(__dirname, "Client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
