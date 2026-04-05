const Record = require('../models/record.model');

exports.createRecord = async (req, res) => {
  const record = await Record.create(req.body);
  res.json(record);
};

exports.getRecords = async (req, res) => {
  const { type, category } = req.query;

  let filter = {};
  if (type) filter.type = type;
  if (category) filter.category = category;

  const records = await Record.find(filter);
  res.json(records);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};