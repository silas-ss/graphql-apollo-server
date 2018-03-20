const typeDefs = `
	type Query {
  	findAllProjects: [Project]!
  	countProjects: Int!
  }

  type Mutation {
  	newProject(name: String!): Project!
  	deleteProject(id: Int!): Int!
  	updateProject(project: ProjectInput!): Project!
  }

	type Project @cacheControl(maxAge: 10){
  	id: ID!
  	name: String!
  }

  input ProjectInput {
  	id: ID!
  	name: String!
  }
`

module.exports = typeDefs