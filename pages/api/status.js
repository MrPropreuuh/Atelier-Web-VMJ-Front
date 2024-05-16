import connectToDatabase from '../../../Atelier-Web-VMJ-Back/lib/mongodb';

export default async function handler(req, res) {
    try {
        const { db } = await connectToDatabase();
        await db.command({ ping: 1 });
        res.status(200).json({ message: 'Database connected' });
    } catch (error) {
        res.status(500).json({ message: 'Database not connected', error });
    }
}
