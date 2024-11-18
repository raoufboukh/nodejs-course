const { body } = require("express-validator");
const controllers = require("../controllers/courses.controllers");

const router = require("express").Router();

router
  .route("/")
  .get(controllers.getAllCourses)
  .post(
    [
      body("title")
        .notEmpty()
        .withMessage("title is required")
        .isLength({ min: 2 })
        .withMessage("at least 2 chars"),
      body("price").notEmpty().withMessage("price is required"),
    ],
    controllers.createCourse
  );

router
  .route("/:id")
  .get(controllers.getSingleCourse)
  .patch(controllers.updateCourse)
  .delete(controllers.deleteCourse);

module.exports = router;