import pgp from 'pg-promise'

const pgpInstance = pgp()

const database = pgpInstance({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: '123'
})

export { database }
