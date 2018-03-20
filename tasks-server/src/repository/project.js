const projects = require('../projects.json');
const db = require('../database');

const repository = {
	findAll: () => {
    return db.getPool()
              .query("SELECT * FROM tasks.project")
              .then((res) => {
                const result = res.rows;
                return result;
              });

  },
  count: () => {
    return db.getPool()
              .query("SELECT COUNT(*) FROM tasks.project")
              .then((res) => {
                const count = res.rows[0].count;
                return count;
              });
  },
  create: (name) => {
    return db.getPool().query("SELECT MAX(id) FROM tasks.project")
      .then((res) => {
        const lastId = parseInt(res.rows[0].max)
        let newId = 1
        if (!isNaN(lastId)) {
          newId = lastId + 1;
        }
        
        return db.getPool().query("INSERT INTO tasks.project(id, name) VALUES($1, $2)", [newId, name])
          .then((data) => {
            return { id: newId, name }
          });
      })
  },
  delete: (id) => {
    return db.getPool().query("DELETE FROM tasks.project WHERE id = $1", [id])
                  .then((res) => {
                    return id;
                  });
  },
  update: (project) => {
    return db.getPool().query("UPDATE tasks.project SET name = $1 WHERE id = $2", [ project.name, project.id ])
                  .then((res) => {
                    return project;
                  });
  }
};

module.exports = repository