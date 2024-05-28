import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

export {
    PORT,
    mongoUri
}
