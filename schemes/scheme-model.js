const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first()
}

function findSteps(id) {
    return db('schemes')
    .join('steps', 'steps.scheme_id', 'schemes.id')
    .where({scheme_id:id})
    .orderBy('steps.step_number', 'asc')
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, 'id')
}

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}

function addStep(step, id){
    return db('schemes')

}