const projectRepository = require('./repository/project')

const query = {
	findAllProjects: () => projectRepository.findAll(),
  countProjects: () => projectRepository.count()
};

module.exports = query