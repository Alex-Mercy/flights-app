import axios from 'axios';


export const getFlights = async () => {
    return await axios.get(`/flights?_limit=2`);
};