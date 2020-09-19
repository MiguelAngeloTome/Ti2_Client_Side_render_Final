const userController = require("../controllers/user-controller.js");
const router = require("express").Router();
const authorize = require("../configs/authorization");

router.get("", authorize(), userController.getUser);
router.post("/login", userController.login);
router.get("/single/:id", authorize(),userController.getUserSingle);
router.post("", userController.register);
router.put("/:id", authorize(), userController.updateUser);
router.delete("/:id", authorize(), userController.removeUser);
router.get("/user", authorize(),userController.getUserSimple);

module.exports = router;