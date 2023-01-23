const router = require("express").Router();
const mongoose = require('mongoose');
 
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');
 
//  POST /api/projects  -  Creates a new project
router.post('/projects', (req, res, next) => {
  const { title, description } = req.body;
 
  Project.create({ title, description, tasks: [] })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

// GET /api/projects - Returns all the projects
router.get('/projects', (req, res) => {
    Project.find()
            .populate('tasks')
            .then(allProjects => res.json(allProjects))
            .catch(err => console.log(err))
})

// GET /api/projects/:projectId - Return the specified project using the id
router.get("/projects/:projectId", (req, res) => {
    const { projectId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

    Project.findById(projectId)
            .populate('tasks')
            .then(foundProject => res.json(foundProject))
            .catch(err => console.log(err))
})
// PUT  /api/projects/:projectId - Edit specified project
router.put("/projects/:projectId", (req, res)=>{
    const { projectId } = req.params;
    const { title, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

    Project.findByIdAndUpdate(projectId, {title, description}, {new: true})
            .then(updatedProject => res.json(updatedProject))
            .catch(err => console.log(err))

})

// DELETE - /api/projects/:projectId - Delete specified project

router.delete("/projects/:projectId", (req, res)=>{
    const { projectId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

    Project.findByIdAndDelete(projectId)
            .then(deletedProject => res.json(deletedProject))
            .catch(err => console.log(err))
})
 
module.exports = router;