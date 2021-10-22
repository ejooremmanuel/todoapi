const router = require("express").Router();

const JWTauth = require("../../middlewares/authjwt");

const createTodoTask = require("../../controllers/user/createTask.controller");
const getAllUserTodos = require("../../controllers/user/getAllUserTasks.controller");

router.post("/createtask", JWTauth, createTodoTask);
router.get("/task", JWTauth, getAllUserTodos);

module.exports = router;
