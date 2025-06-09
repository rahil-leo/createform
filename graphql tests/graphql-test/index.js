const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { resolvers } = require('./resolvers/index')
const { typeDefs } = require('./schema/typeDefs')
const { connectDB } = require('./config/db')
const cors = require('cors')

const app = express()
connectDB()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


const server = new ApolloServer({ resolvers, typeDefs })

server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port: 5000 }, () => {
        console.log(`graph ql sever running on PORT ${5000}/graphql`)
    })
})
