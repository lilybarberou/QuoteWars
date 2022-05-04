import dbConnect from '../../../../lib/dbConnect';
import Quote from '../../../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    try {

        const { serie, character } = req.query;

        const quotes = await Quote.find({ serie: serie, character: character });

        if (quotes.length === 0) return res.json({ err: 'No quotes from this character!' });
            
        const random = Math.floor(Math.random() * quotes.length)
        res.status(200).json({ serie: quotes[random].serie, character: quotes[random].character, quote: quotes[random].quote });

    }
    catch (error) {
        res.status(400).json({ success: false })
    }
}