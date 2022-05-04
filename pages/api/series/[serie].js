import dbConnect from '../../../lib/dbConnect';
import Quote from '../../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    try {        
        const { serie } = req.query;
        
        const quotes = await Quote.find({ serie: serie });

        if (quotes.length === 0) return res.json({ err: 'No quotes from this serie!' });
            
        const random = Math.floor(Math.random() * quotes.length)
        res.status(200).json(quotes[random]);
    }
    catch (error) {
        res.status(400).json({ success: false })
    }
}