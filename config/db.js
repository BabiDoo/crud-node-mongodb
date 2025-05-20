import { connect } from 'mongoose';

const url = 'mongodb://mongo:27017/CRUD-nodejs-mongodb';

const connectDb = () => {
  connect(url, () => {
    console.log('Connected to MongoDB');
  });
};

export default connectDb;

