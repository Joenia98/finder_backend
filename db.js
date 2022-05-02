const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb+srv://josegumart:1G6mNzlGG9wXhgJT@cluster0.a0vkv.mongodb.net/finder_app?retryWrites=true&w=majority");
    console.log('Mongodb')
  } catch (error) {
    console.error(error);
  }
};

module.exports = {connectDB};