import express from "express";
import PostController from "./controllers/PostController";
import UserController from "./controllers/UserController";

const router = express.Router();


// Routes - User
router.post('/user', UserController.create);
router.get('/user', UserController.find);
router.get("/user/:id", UserController.findOne);
router.put("/user/:id", UserController.update)
router.delete("/user/:id", UserController.destroy);

// Routes - Post
router.post('/post', PostController.create);
router.get('/post', PostController.find);
router.get("/post/:id", PostController.findOne);
router.put("/post/:id", PostController.update)
router.delete("/post/:id", PostController.destroy);

export { router };