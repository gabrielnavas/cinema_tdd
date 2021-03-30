import pgp from 'pg-promise'

const pgpInstance = pgp()

const database = pgpInstance({
  host: 'localhost',
  port: 5432,
  database: 'cinema',
  user: 'postgres',
  password: ''
})

export { database }