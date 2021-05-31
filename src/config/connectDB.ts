import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export async function connect() {
  const uri = 'mongodb+srv://user:pass@cluster0.h9mkl.mongodb.net/dbName?retryWrites=true&w=majority'
  const options = {
    dbName: process.env.MONGODB_NAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
  const db = mongoose.connection
  db.on('open', () => {
    console.log('Connection to DB successful')
  })
  db.on('error', err => {
    console.error('MongoDB connection error:', err)
  })
  await mongoose.connect(uri, options)
}
