const router = require("express").Router();
const upload = require("../../config/multersetup");

const JWTauth = require("../../middlewares/authjwt");

const createTodoTask = require("../../controllers/user/createTask.controller");
const getAllUserTodos = require("../../controllers/user/getAllUserTasks.controller");
const editSingleTask = require("../../controllers/user/editTask.controller");
const deleteTask = require("../../controllers/user/deleteTask.controller");
const postEditedTask = require("../../controllers/user/postEditedTask.controller");

//Endpoint for creating a todo list task and upload attachment
router.post("/createtask", JWTauth, upload.single("file"), createTodoTask);

//Endpoint for getting all tasks by an authenticated user
router.get("/task", JWTauth, getAllUserTodos);

// Endpoint for editing a single task
router.get("/edit/:taskid", JWTauth, upload.single("file"), editSingleTask);

// Endpoint || Route for posting edited single task
router.post("/posteditedtask/:taskid", JWTauth, postEditedTask);

//Endpoint || Route for deleting a task
router.get("/delete/:taskid", JWTauth, deleteTask);

module.exports = router;
