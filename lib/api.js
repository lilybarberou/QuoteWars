import axios from "axios";
 
const API_URL = process.env.API_URL;

const getRandomQuote = async (type) => {
    try {
        const { data } = await axios.get('api/random');
        return data;
    } catch(err) {
        console.log(err);
    }
};


export {
    getRandomQuote,
};