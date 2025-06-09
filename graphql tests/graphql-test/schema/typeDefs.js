const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		name: String
		facebook: String
		instagram:String
	}

	type Query {
		getUsers: [User]
	}
	type Mutation {
		createUser(name: String!, facebook: String!,instagram:String): User
	}
`;

module.exports = { typeDefs }
