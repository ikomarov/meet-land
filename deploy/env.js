const {config} = require('dotenv')

config()

const CDN_KEY_ACCESS =  process.env.CDN_KEY_ACCESS
const CDN_SECRET_ACCESS =  process.env.CDN_SECRET_ACCESS
const ENDPOINT =  process.env.ENDPOINT
const BUCKET = process.env.BUCKET

module.exports = {
  CDN_KEY_ACCESS,
  CDN_SECRET_ACCESS,
  ENDPOINT,
  BUCKET
}
