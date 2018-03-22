const typeDefs = `
	type Query {
  	findAllProjects: [Project]!
  	countProjects: Int!

    findAllTasks(projectId: String!): [Task]!
    findAllWorklogs(taskId: String!): [Worklog]!
  }

  type Mutation {
  	newProject(name: String!): Project!
  	deleteProject(id: String!): String!
  	updateProject(project: ProjectInput!): Project!

    newTask(task: TaskInput!): Task!
    deleteTask(id: String!): String!
    updateTask(task: TaskInput): Task!

    newWorklog(worklog: WorklogInput!): Worklog!
    deleteWorklog(id: String!): String!
    updateWorklog(worklog: WorklogInput): Worklog!
  }

	type Project @cacheControl(maxAge: 10){
  	id: String!
  	name: String!
    tasks: [Task]!
  }

  input ProjectInput {
  	id: String!
  	name: String!
  }

  type Task {
    id: String!
    title: String!
    description: String!
    projectId: String!
    worklogs: [Worklog]!
  }

  input TaskInput {
    id: String
    title: String!
    description: String!
    projectId: String!
  }

  type Worklog {
    id: String!
    description: String!
    hours: Float!
    date: Date!
    taskId: String!
  }

  input WorklogInput {
    id: String
    description: String!
    hours: Float!
    date: Date!
    taskId: String!
  }

  type Schema {
    query: Query
    mutation: Mutation
  }

  scalar Date
`;

module.exports = typeDefs;