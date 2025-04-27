const express = require('express');
const app = express();
const authRoutes = require('./routes/Auth');
const protectedRoute = require('./routes/protectedRoute');
const coinRoute = require('./routes/coin')
const mongoose = require('mongoose')


app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);
app.use('/coin',coinRoute)


mongoose.connect('mongodb+srv://root:root@cluster0.ssf6ede.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});