const { Project, Task, Worklog } = require('./database');
const uuid = require('uuid-v4');

const resolvers = {
  Query: {
    findAllProjects () {
      return Project.findAll();
    },
    countProjects () {
      return Project.count();
    },
    findAllTasks (_, { projectId }) {
      return Task.findAll({ where: { projectId }});
    },
    findAllWorklogs (_, { taskId }) {
      return Worklog.find({ taskId });
    }
  },

  Mutation: {
    newProject (_, { name }) {
      const project = Project.create({ id: uuid(), name: name });
      return project;
    },
    deleteProject (_, { id }) {
      Project.destroy({ where: { id } });
      return id;
    },
    updateProject (_, { project }) {
      Project.update(project, { where: { id: project.id } });
      return project;
    },
    newTask (_, { task }) {
      task.id = uuid()
      const newTask = Task.create(task);
      return newTask;
    },
    deleteTask (_, { id }) {
      Task.destroy({ where: { id }});
      return id;
    },
    updateTask (_, { task }) {
      Task.update(task, { where: { id: task.id } });
      return task;
    },
    newWorklog (_, { worklog }) {
      worklog.id = uuid()
      const newWorklog = Worklog.create(worklog);
      return newWorklog;
    },
    deleteWorklog (_, { id }) {
      Worklog.destroy({ where: { id } });
      return id;
    },
    updateWorklog (_, { worklog }) {
      Worklog.update(worklog, { where: { id: worklog.id } });
      return worklog;
    }
  },
  Project: {
    tasks (project) {
      return Task.findAll({ where: { projectId: project.id }});
    }
  },
  Task: {
    worklogs (task) {
      return Worklog.find({ taskId: task.id });
    }
  }
};

module.exports = resolvers;