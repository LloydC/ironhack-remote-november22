const mongoose = require('mongoose');

const { Schema } = mongoose; // const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    body: String,
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;