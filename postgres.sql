-- Table: public.projects

-- DROP TABLE public.projects;

CREATE TABLE public.projects
(
  id character varying(255) NOT NULL,
  name character varying(255),
  "createdAt" timestamp without time zone,
  "updatedAt" timestamp without time zone,
  CONSTRAINT projects_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);

-- Table: public.tasks

-- DROP TABLE public.tasks;

CREATE TABLE public.tasks
(
  id character varying(255) NOT NULL,
  title character varying(255),
  description character varying(255),
  "projectId" character varying(255),
  "createdAt" timestamp without time zone,
  "updatedAt" timestamp without time zone,
  CONSTRAINT tasks_id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);