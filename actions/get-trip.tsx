import { Trip } from "@/types";
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/trips`;

const getTrip = async (id: string): Promise<Trip> => {
    const response = await axios.get(`${URL}/${id}`);

    return response.data;
}

export default getTrip;