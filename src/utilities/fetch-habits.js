import axios from "axios";

const url = import.meta.env.VITE_APP_ENDPOINT_DEV;

const fetchHabits = async (userId) => {
   try{
      const response = await axios.get(`${url}/api/habits/${userId}`);
      return response.data;
   }catch(e){
      return e
   }
};

export default fetchHabits;