const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/schema');
const {connectDB} = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
