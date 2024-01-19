db.getSiblingDB("admin").auth("helpdev", "123456");

db = db.getSiblingDB("acme_database");

db.createCollection("user_collection");

db.user_collection.insertMany([
  {
    user_id: 1001,
    user_email: "aiamsimba@gmail.com",
  },
]);

db.createCollection("project_collection");

db.project_collection.insertMany([
  {
    user_id: 1001,
    project_id: 2001,
    project_title: "Project 1",
    project_description: "First Project createed",
  },

  {
    user_id: 1001,
    project_id: 2002,
    project_title: "Project 2",
    project_description: "Second place",
  },
]);
