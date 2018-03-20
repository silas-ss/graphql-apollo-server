-- Table: tasks.project

-- DROP TABLE tasks.project;

CREATE TABLE tasks.project
(
  id bigint NOT NULL,
  name character varying(255),
  CONSTRAINT project_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);