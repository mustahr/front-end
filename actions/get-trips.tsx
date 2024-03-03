import { Trip } from "@/types";
import axios from 'axios';


const URL = `${process.env.NEXT_PUBLIC_API_URL}/trips`;

const getTrips = async (): Promise<Trip[]> => {
    const response = await axios.get(URL);


    return response.data;
}

export default getTrips;