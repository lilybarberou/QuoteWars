import dbConnect from '../../lib/dbConnect';
import Quote from '../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    const { password, origin, character, quote } = req.body;

    if (password === process.env.PASSWORD) {

        const newQuote = new Quote({
            origin: origin,
            character: character,
            quote: quote
        });

        try {
            const addedQuote = await newQuote.save();
            res.status(200).json(addedQuote);
        }
        catch(err) {
            res.status(400).json({ err })
        }
    }
    else res.status(203).end();
}