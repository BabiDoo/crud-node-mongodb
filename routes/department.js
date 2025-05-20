const express = require('express');
const router = express.Router();
const Department = require('/models/Department');

router.post('/', async (req, res) => {
  try {
    const dept = await Department.create(req.body);
    res.status(201).json(dept);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

module.exports = router;