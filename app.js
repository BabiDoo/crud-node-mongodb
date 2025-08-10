import express from 'express';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import userRoutes from './routes/userRoute.js';
import deptRoutes from './routes/departmentRoute.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/department', deptRoutes);

connectdb()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch(err => console.log(err));