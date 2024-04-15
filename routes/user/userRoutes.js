const router = require('express').Router();
// const User = require('../models/User');
const UserController = require('../../controllers/user/user.controllers');
// const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('../middlewares/verifyToken');



// router.get("/find/:id", verifyTokenAndAdmin, UserController.GetUser);
// router.get("/all", UserController.GetAllUsers);
// router.put("/:id", UserController.Updateuser);
// router.delete("/:id", verifyTokenAndAuth, UserController.DeleteUser)


router.post("/create", UserController.Createuser);

router.get("/all", UserController.GetAllUsers);
module.exports = router;