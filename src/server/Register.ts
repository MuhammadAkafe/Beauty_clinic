import axiosInstance from "../axios_instance";
import { RegisterFormData, RegisterResponse } from "../types/auth";

export const create_User = async (userData: RegisterFormData): Promise<RegisterResponse> => {
    try {
      const response = await axiosInstance.post('/auth/Register', userData);
      return response.data;
    } 
    catch (error:any) 
    {
      console.error('Error registering user:', error);
      return { success: false, message: error.response.data.message };
    }
  };  