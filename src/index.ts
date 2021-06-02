import "reflect-metadata"
import { initServer } from './app'
import { connect } from './config/connectDB'
import dotenv from 'dotenv'

if(process.env.NODE_ENV === 'development') {
  dotenv.config()
}
async function main() {
  await connect()
  const app = await initServer()
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server on port', process.env.PORT)
  })
}

main().then(() => {})
