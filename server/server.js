const express = require('express');
require('express-async-errors');
const cookieSession = require('cookie-session');
const foodsRouter = require('./menuItems/menuItems.router');

const app = express();
const port = 3001;

app.use(express.json());
app.use(foodsRouter);


//error handler
app.use((err, req, res, next) => {
    const message = err.message || 'Something went wrong...';
    const statusCode = err.status || 500;
    res.status(statusCode).json({ message });
})

//404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'This resource could not be found.' });
})

//Start server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));

//Later connect to DB istead of Start server above:
// async function run() {
//     try {
//         await mongoose.connect(
//             'mongodb://localhost:27017/traveler', 
//             { useNewUrlParser: true, useUnifiedTopology: true }
//         );
//         console.log('Database is connected');
//     } catch (error) {
//         console.error(error)
//     }
//     app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
// }
// run();