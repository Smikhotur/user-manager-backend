const userControllers = require("../controllers/user-controllers");

const router = require("express").Router();

router.post("/user", userControllers.postUser);
router.get("/users", userControllers.getUsers);
router.delete("/user/:idUser", userControllers.deleteUser);
router.put("/user/update/:idUser", userControllers.updateInfoUser);

module.exports = router;