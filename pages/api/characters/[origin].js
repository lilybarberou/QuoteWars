import dbConnect from '../../../lib/dbConnect';
import Quote from '../../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    try {        
        const { origin } = req.query;
        
        const quotes = await Quote.find({ origin: origin });

        if (quotes.length === 0) return res.json({ error: 'This origin does not exists!' });

        let characters = [];
        
        quotes.forEach(({character}) => !characters.includes(character) && characters.push(character));

        res.status(200).json({ origin: origin, characters: characters });
    }
    catch (error) {
        res.status(400).json({ success: false })
    }
}