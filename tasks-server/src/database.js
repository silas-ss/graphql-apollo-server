const Sequelize = require('sequelize');
const mongoose = require('mongoose');

const sequelize = new Sequelize('research', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

const mysql = new Sequelize('tasks', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

mongoose.connect('mongodb://localhost/tasks');

const Project = sequelize.define("project", {
  id: { type: Sequelize.UUID, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false }
});

const Task = mysql.define("task", {
  id: { type: Sequelize.UUID, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: true },
  projectId: { type: Sequelize.UUID, allowNull: false }
});

const Worklog = mongoose.model("worklog", {
  id: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,
  hours: mongoose.Schema.Types.Number,
  date: mongoose.Schema.Types.Date,
  taskId: mongoose.Schema.Types.String
});

module.exports = {
  db: [sequelize, mysql, mongoose],
  Project,
  Task,
  Worklog
};