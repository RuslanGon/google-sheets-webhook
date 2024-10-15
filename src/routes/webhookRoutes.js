import express from 'express';
import Row from '../models/rowModel.js';

const router = express.Router();


router.post('/rows', async (req, res) => {
  try {
    const newRow = new Row(req.body);
    await newRow.save();
    res.status(201).json(newRow);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/rows', async (req, res) => {
  try {
    const rows = await Row.find();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/rows/:id', async (req, res) => {
  try {
    const row = await Row.findById(req.params.id);
    if (!row) {
      return res.status(404).json({ message: 'Row not found' });
    }
    res.json(row);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
