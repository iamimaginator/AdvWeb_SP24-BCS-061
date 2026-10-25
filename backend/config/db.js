import mongoose from 'mongoose';

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongodb connected successfully');
    }
    catch(error) {
        console.error('Error: ${error.message}');
    }
}

export default connectdb;