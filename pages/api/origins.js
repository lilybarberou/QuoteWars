import dbConnect from '../../lib/dbConnect';
import Quote from '../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    try {
        const quotes = await Quote.find();

        let origins = [];
        
        quotes.forEach(({origin}) => !origins.includes(origin) && origins.push(origin));

        res.status(200).json(origins);
    }
    catch (error) {
        res.status(400).json({ success: false })
    }
}