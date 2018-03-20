const projectRepository = require('./repository/project')

const mutation = {
  newProject: (parent, args) => {
    const { name } = args;
    return projectRepository.create(name);
  },

  deleteProject: (parent, args) => {
    const { id } = args;
    return projectRepository.delete(id);
  },

  updateProject: (parent, args) => {
    const { project } = args;
    return projectRepository.update(project);
  }
};

module.exports = mutation