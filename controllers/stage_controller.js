const stages = require('express').Router()
const { Stage, Event} =require('../models')
const { Op } = require('sequelize')

// FIND ALL STAGES
stages.get('/', async (req, res) => {
    try {
        const foundStage = await Stage.findAll()
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC STAGE
stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { name: req.params.id },
            include: {
                model: Event,         
            }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A STAGE
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = stages
  