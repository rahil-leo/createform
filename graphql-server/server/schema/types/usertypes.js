const { GraphQLObjectType, GraphQLString } = require('graphql')

const Usertype = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        name: { type: GraphQLString },
        facebook: { type: GraphQLString },
        instagram:{type:GraphQLString}
    })
})

module.exports = {Usertype}