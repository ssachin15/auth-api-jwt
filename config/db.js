const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      ssl: true,
      tls: true,
      tlsAllowInvalidCertificates: true,
    })
    console.log('MongoDB Connected Successfully!')
  } catch (error) {
    console.log('MongoDB Connection Failed:', error)
    process.exit(1)
  }
}

module.exports = connectDB