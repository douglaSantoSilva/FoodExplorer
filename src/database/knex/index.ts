import knex from 'knex'
const config = require("../../../knexfile")

const knexConnection = knex(config.development)

export { knexConnection }