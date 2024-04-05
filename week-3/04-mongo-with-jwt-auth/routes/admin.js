const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username,
    password,
  });

  res.json({
    msg: "Admin created successfully",
  });
});

// Implement admin signup logic
router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const admin = await Admin.findOne({
      username: username,
    });
    if (!admin) {
      return res.status(404).json({
        msg: "Admin not found",
      });
    }

    if (password !== admin.password) {
      return res.status(401).json({
        msg: "Incorrect password",
      });
    }

    const token = jwt.sign({ username: admin.username }, JWT_SECRET);
    res.json({
      token,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // zod
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
