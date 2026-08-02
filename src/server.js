import express from 'express';
import dotenv from 'dotenv';
import { config } from 'dotenv';
import movieRoutes from './routes/movieRoutes.js';
import { connect } from 'node:http2';
config();
connectDB();

const app = express();

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use('/api/movies', movieRoutes);

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello Faraz' });
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(async () => {await disconnectDB();
    process.exit(1);
  });
})

process.on('uncaughtException', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
 await disconnectDB();
  process.exit(1);
  });
process.on('SIGTERM', (err, promise) => {
  console.log("SIGTERM RECEIVED. Shutting down gracefully");
  // Close server & exit process
  server.close(async () => {await disconnectDB();
    process.exit(0);
  });
})
