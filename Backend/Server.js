const express = require('express');
const app = express();
const sequelize = require('./config/db');
const subjectRoutes = require('./routes/subjectRoutes')
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require ('./routes/optionRoutes.js')
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/subjects',subjectRoutes);
app.use('/questions',questionRoutes);
app.use('/options',optionRoutes);

sequelize.sync()
.then (() => {
    app.listen(port,() => console.log(`App is running on port ${port}`));

})

