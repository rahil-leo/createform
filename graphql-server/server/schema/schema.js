const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { Usertype } = require('./types/usertypes')
const{getUser,createUser,editUser}=require('../resolvers/userresolver')


const rootquery = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        getUser: {
            type: Usertype,
            args: { name: { type: require('graphql').GraphQLString } },
            resolve:getUser
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        createUser: {
            type: Usertype,
            args: {
                name: { type: require('graphql').GraphQLString },
                facebook: { type: require('graphql').GraphQLString },
                instagram:{type:require('graphql').GraphQLString}
            },
            resolve:createUser
        },
        editUser: {
            type: Usertype,
            args: {
                name: { type: require('graphql').GraphQLString }, 
                facebook: { type: require('graphql').GraphQLString },
                instagram:{type:require('graphql').GraphQLString}
            },
            resolve:editUser
        }
    }
})

const schema = new GraphQLSchema({
    query: rootquery,
    mutation:Mutation
})

module.exports = {schema}