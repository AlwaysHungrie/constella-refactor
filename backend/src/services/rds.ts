import { config } from '../config'
import { stringToBase64 } from '../utils'
const { Client } = require('pg')

const { rds } = config
const {
  user: rdsUser,
  password: rdsPassword,
  endpoint: rdsEndpoint,
  port: rdsPort,
  ca: rdsCa,
} = rds

// Base configuration for database connections
const getClientConfig = async (
  database: string,
  username: string,
  password: string
) => {
  const config = {
    host: rdsEndpoint,
    port: parseInt(rdsPort),
    database,
    user: username,
    password,
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: rdsCa,
    },
  }

  const client = new Client(config)
  await client.connect()
  return client
}

const getRdsDbCredentials = (address: string, privateKey: string) => {
  const base64Address = stringToBase64(address)
  const base64PrivateKey = stringToBase64(privateKey)

  return {
    dbName: `${base64Address}_db`,
    shadowDbName: `${base64Address}_shadowdb`,
    dbUser: `${base64Address}_user`,
    dbPassword: `${base64PrivateKey}_password`,
    schemaName: `${base64Address}_schema`,
  }
}

const grantPrivileges = async (client: any, dbName: string, dbUser: string) => {
  await client.query(`GRANT CONNECT ON DATABASE "${dbName}" TO "${dbUser}"`)
  await client.query(`GRANT USAGE ON SCHEMA public TO "${dbUser}"`)
  await client.query(
    `GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO "${dbUser}"`
  )
  await client.query(
    `ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO "${dbUser}"`
  )
  await client.query(
    `GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO "${dbUser}"`
  )
  await client.query(
    `ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT ON SEQUENCES TO "${dbUser}"`
  )
}

const initDatabaseResources = async (
  masterClient: any,
  dbName: string,
  shadowDbName: string,
  dbUser: string,
  dbPassword: string,
  schemaName: string
) => {
  // Clean up existing database
  await masterClient.query(`DROP SCHEMA IF EXISTS "${schemaName}" CASCADE`)
  await masterClient.query(`DROP DATABASE IF EXISTS "${dbName}"`)
  await masterClient.query(`DROP DATABASE IF EXISTS "${shadowDbName}"`)
  await masterClient.query(`DROP USER IF EXISTS "${dbUser}"`)

  // Create databases
  await masterClient.query(`CREATE DATABASE "${dbName}"`)
  await masterClient.query(`CREATE DATABASE "${shadowDbName}"`)

  // Create users
  await masterClient.query(
    `CREATE USER "${dbUser}" WITH ENCRYPTED PASSWORD '${dbPassword}'`
  )

  // Create schemas
  await masterClient.query(`CREATE SCHEMA "${schemaName}"`)

  // Grant privileges
  await masterClient.query(`GRANT ALL ON SCHEMA "${schemaName}" TO "${dbUser}"`)
  await masterClient.query(
    `ALTER USER "${dbUser}" SET search_path = "${schemaName}"`
  )
  await masterClient.query(
    `GRANT ALL PRIVILEGES ON DATABASE "${shadowDbName}" TO "${dbUser}"`
  )
  await masterClient.query(
    `GRANT ALL PRIVILEGES ON DATABASE "${dbName}" TO "${dbUser}"`
  )
}

export const setupRdsDb = async (walletAddress: string, privateKey: string) => {
  const { dbName, shadowDbName, dbUser, dbPassword, schemaName } =
    getRdsDbCredentials(walletAddress, privateKey)

  const masterClient = await getClientConfig('postgres', rdsUser, rdsPassword)
  await initDatabaseResources(
    masterClient,
    dbName,
    shadowDbName,
    dbUser,
    dbPassword,
    schemaName
  )

  // Wait for the databases to be created
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const dbClient = await getClientConfig(dbName, dbUser, dbPassword)
  await grantPrivileges(dbClient, dbName, dbUser)
  await dbClient.end()

  await new Promise((resolve) => setTimeout(resolve, 1000))

  // TODO: Why is shadowDbClient not working?
  // const shadowDbClient = await getClientConfig(shadowDbName, dbUser, dbPassword)
  // await grantPrivileges(shadowDbClient, shadowDbName, dbUser)
  // await shadowDbClient.end()

  await grantPrivileges(masterClient, shadowDbName, dbUser)
  await masterClient.end()

  return {
    dbName,
    dbUser,
    dbPassword,
  }
}

export async function deleteRdsDb(walletAddress: string, privateKey: string) {
  const { dbName, shadowDbName, dbUser, schemaName } =
    getRdsDbCredentials(walletAddress, privateKey)
  console.log('Deleting RDS database...', dbName, dbUser)

  const masterClient = await getClientConfig('postgres', rdsUser, rdsPassword)
  await masterClient.query(`DROP DATABASE IF EXISTS "${dbName}"`)
  await masterClient.query(`DROP DATABASE IF EXISTS "${shadowDbName}"`)
  await masterClient.query(`DROP SCHEMA IF EXISTS "${schemaName}"`)
  await masterClient.query(`DROP USER IF EXISTS "${dbUser}"`)
  await masterClient.end()
}
