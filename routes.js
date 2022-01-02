const express = require("express");
const router = express.Router();

// generic route handler
const genericHandler = (req, res, next) => {
  res.json({
    status: "success",
    data: req.body,
  });
};

router.post("/people", genericHandler);

// change auth credentials for teachers
router.post("/auth/edit", genericHandler);

// accept fee payments for students
router.post("/fees/pay", genericHandler);

module.exports = router;
