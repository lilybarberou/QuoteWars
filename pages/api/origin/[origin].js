import dbConnect from '../../../lib/dbConnect';
import Quote from '../../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    try {        
        const { origin } = req.query;
        
        const quotes = await Quote.find({ origin: origin });

        if (quotes.length === 0) return res.json({ err: 'No quotes from this origin!' });
            
        const random = Math.floor(Math.random() * quotes.length)
        res.status(200).json({ origin: quotes[random].origin, character: quotes[random].character, quote: quotes[random].quote });
    }
    catch (error) {
        res.status(400).json({ success: false })
    }
}