const routers =  require('express').Router()
const Tea = require('../model/teacher');

 routers.get("/",async (req, res) => {

    try {
      const teas = await Tea.find();
      return res.json(teas);
    } catch (err) {
     return res.status(500).json(err.message);
    }

  })

routers.get("/:id",async (req, res) => {
    const { id } = req.params;
    try {
      const tea = await Tea.findById(id);
      if (tea) {
       return res.json(tea);
      } else {
       return res.status(404).json('Teacher not found');
      }
    } catch (err) {
     return res.status(500).json(err.message);
    }
})

routers.post("/",async (req, res) => {
    const { id, name } = req.body;
    const newTea = new Tea({ id, name});
    try {
       await newTea.save();
      return res.status(201).json('Teacher added successfully');
    } catch (err) {
      return res.status(500).json(err.message);
    }
  })

  routers.put("/:id", async (req, res) => {

    const { id } = req.params;
    const updatedTea = req.body;

    try {
      const result = await tea.findOneAndUpdate({id:id}, updatedTea);
      if (result) {
       return res.json('Teacher updated successfully');
      } else {
       return res.status(404).json('Teacher not found');
      }

    } catch (err) {
      return res.status(500).json(err.message);
    }
  })

  routers.delete("/:id",async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Tea.findOneAndDelete({id:id});
      if (result) {
       return res.json('Teacher deleted successfully');
      } else {
        return res.status(404).json('Teacher not found');
      }
    } catch (err) {
     return  res.status(500).json(err.message);
    }
  })


module.exports = routers