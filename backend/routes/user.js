const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/user.controllers");
const router = express();

/**
 * @swagger
 * /api/user/register:
 *  post:
 *    description: Registers a user(Teacher/Student) into the application.
 *    parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - fullname
 *            - password
 *            - email
 *            - usertype
 *          properties:
 *            username:
 *              type: string
 *            fullname:
 *              type: string
 *            password:
 *              type: string
 *            email:
 *              type: string
 *            usertype:
 *              type: string
 *    responses:
 *      '201':
 *        description: User successfully created.
 *      '400':
 *        description: An invalid input. User creation failed.
 */
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/changepassword", changePassword);

module.exports = router;
