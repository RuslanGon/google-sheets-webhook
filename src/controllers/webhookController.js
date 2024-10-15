import Row from '../models/rowModel.js';


export const handleNewRow = async (req, res) => {
  try {
    const newRow = new Row(req.body);
    await newRow.save();
    res.status(201).json({ message: 'New row created', data: newRow });
  } catch (error) {
    res.status(500).json({ message: 'Error creating row', error: error.message });
  }
};


export const getAllRows = async (req, res) => {
  try {
    const rows = await Row.find();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rows', error: error.message });
  }
};


export const getRowById = async (req, res) => {
  try {
    const row = await Row.findById(req.params.id);
    if (!row) {
      return res.status(404).json({ message: 'Row not found' });
    }
    res.status(200).json(row);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching row', error: error.message });
  }
};
