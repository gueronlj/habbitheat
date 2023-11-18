import axios from "axios";

const url = import.meta.env.VITE_APP_ENDPOINT_DEV;

export const fetchHabits = async (userId) => {
   try{
      const response = await axios.get(`${url}/api/habits/${userId}`);
      return response.data;
   }catch(e){
      return e
   }
};

export const postHabit = async (habit, userId) => {
   try{
      const response = await axios.post(`${url}/api/habits/${userId}`, habit);
      return response.data;
   }catch(e){
      return e
   }
}

export const addProgress = async (habitId, data) => {
   try{
      const response = await axios.put(`${url}/api/habits/${habitId}`, data);
      return response.data;
   }catch(e){
      return e
   }
}

export const deleteHabit = async (habitId) => {
   try{
      const response = await axios.delete(`${url}/api/habits/${habitId}`);
      return response.data;
   }catch(e){
      return e
   }
}

