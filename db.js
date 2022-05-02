const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/finder_app");
    console.log('Mongodb')
  } catch (error) {
    console.error(error);
  }
};

module.exports = {connectDB};