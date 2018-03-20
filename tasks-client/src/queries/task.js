import gql from 'graphql-tag'

export const TASKS_QUERY = gql`
  query findAllTasks {
    findAllTasks {
      id
      title
      description
    }
  }`
