
export const handleNewRow = (req, res) => {
    res.status(200).json({ message: 'New row received and processed' });
  };

  export const getAllRows = (req, res) => {
    res.status(200).json({ message: 'All rows retrieved' });
  };

  export const getRowById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Row with ID ${id} retrieved` });
  };
