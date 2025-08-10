import { connect } from 'mongoose';


const connectdb = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conected to MongoDB");
  } catch(err) {
    console.log("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

export default connectdb;

