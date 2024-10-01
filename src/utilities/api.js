import axios from "axios";

const url = import.meta.env.VITE_APP_ENDPOINT_DEV;

export const fetchHabits = async (email) => {
   try{
      const response = await axios.get(`${url}/api/habits/${email}`);
      return response.data;
   }catch(e){
      return e
   }
};

export const postHabit = async (habit, user_email) => {
   try{
      const response = await axios.post(`${url}/api/habits/${user_email}`, habit);
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

export const undoProgress = async (habitId) => {
   try{
      const response = await axios.put(`${url}/api/habits/edit/${habitId}`);
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

export const getUserId = async (email) => {
   try{
      const response = await axios.get(`${url}/api/user/${email}/id`);
      return response.data[0].id;
   }catch(e){
      return e
   }
}

export const addUser = async (email) => {
   //if user with this email is not in DB, add them  
   //if user with this email is in DB, return their ID
   try{
      const userEmail = (await axios.get(`${url}/api/user/${email}`)).data.user_email;
      if (userEmail === email){
         const response = await axios.post(`${url}/api/user`, { email });
         console.log("user added");
         console.log(response.data);
         return response.data;
      } else {
         console.log("user already exists")
         console.log(userEmail.data)
         return userEmail.data
      }
   }catch(e){
      return e
   }
}

