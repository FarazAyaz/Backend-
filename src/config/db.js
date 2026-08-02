import {prisma} from '@prisma/client';

const prisma = new PrismaClient(
    {
        log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],

    }
);
const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
}

const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
        console.log('Database disconnected');
    } catch (error) {
        console.error('Database disconnection failed', error);
        process.exit(1);
    }
}