const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });
  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return res.status(401).json({
        msg: "User not found",
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        msg: "Incorrect password",
      });
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.json({
      token,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        coursesPurchased: courseId,
      },
    },
  );
  res.json({
    msg: "Purchase complete",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.coursesPurchased,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
