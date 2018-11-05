let { Tucson, Config } = require('../lib/index')

const dummyUnderscoreJson = {
  "id": 139,
  "group_number": 17,
  "user": "inylove82@gmail.com",
  "phone_number": "000-111-2222",
  "company": "LeapMind",
  "salary": "Unknown",
  "date": "2014-06-01 12:00"
}

let formedResult = {}
let ccTucson = new Tucson(new Config('camelCase'))
ccTucson.formed(dummyUnderscoreJson, {makeDate: ['date']}, formedResult)
console.log(`camelcase json: ${JSON.stringify(formedResult)}`)

let formedResult_sc = {}
let scTucson = new Tucson(new Config('snake_case'))
scTucson.formed(formedResult, {}, formedResult_sc)
console.log(`snake_case json: ${JSON.stringify(formedResult_sc)}`)
