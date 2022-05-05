
import { Schema, model, models } from 'mongoose';


const QuoteSchema = Schema({
    origin: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
});

module.exports = models.Quote || model('Quote', QuoteSchema);