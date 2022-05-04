import dbConnect from '../../lib/dbConnect';
import Quote from '../../lib/models/Quote';


export default async function handler (req, res) {

    await dbConnect()

    try {
        const quotes = await Quote.find();

        let series = [];
        
        quotes.forEach(({serie}) => !series.includes(serie) && series.push(serie));

        res.status(200).json(series);
    }
    catch (error) {
        res.status(400).json({ success: false })
    }
}