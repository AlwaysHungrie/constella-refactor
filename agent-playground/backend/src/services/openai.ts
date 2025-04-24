// cargo run -- \
// --host api.openai.com \
// --port 443 \
// --method POST \
// --uri '/v1/chat/completions' \
// --user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
// --content-type 'application/json' \
// --max-sent-data 4096 \
// --max-recv-data 16384 \
// --notary-host notary1.pineappl.xyz \
// --notary-port 443 \
// --notary-tls \
// open-ai \
// --api-key 'openai-api-key' \
// --message 'test message, hello world!' \
// --user-dir 'alwayshungrie' \
// --output-prefix 'testattesation'

import { exec } from 'child_process'
import { config } from '../config'

const { rustBinaryPath } = config

const HOST = 'api.openai.com'
const PORT = 443
const METHOD = 'POST'
const URI = '/v1/chat/completions'
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
const CONTENT_TYPE = 'application/json'
const MAX_SENT_DATA = 4096
const MAX_RECV_DATA = 16384
const NOTARY_HOST = 'notary1.pineappl.xyz'
const NOTARY_PORT = 443

const createCommand = (
  apiKey: string,
  message: string,
  userId: string,
  messageId: string
) => {
  return `${rustBinaryPath} \
  --host "${HOST}" \
  --port ${PORT} \
  --method "${METHOD}" \
  --uri "${URI}" \
  --user-agent "${USER_AGENT}" \
  --content-type "${CONTENT_TYPE}" \
  --max-sent-data ${MAX_SENT_DATA} \
  --max-recv-data ${MAX_RECV_DATA} \
  --notary-host "${NOTARY_HOST}" \
  --notary-port ${NOTARY_PORT} \
  --notary-tls \
  open-ai \
  --api-key "${apiKey}" \
  --message "${message}" \
  --user-dir "${userId}" \
  --output-prefix "${messageId}"`
}

export const executeOpenaiRequest = async (
  apiKey: string,
  message: string,
  userId: string,
  messageId: string
) => {
  const command = createCommand(apiKey, message, userId, messageId)
  return new Promise((resolve, reject) => {
    console.log('command', command)
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr)
      }

      try {
        const result = JSON.parse(stdout)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  })
}
