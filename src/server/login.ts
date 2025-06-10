"use server";

import axiosInstance from "../axios_instance";
import { LoginFormData, LoginResponse } from "../types/auth";

export const authenticateUser = async (credentials: LoginFormData): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post('/auth/Login', credentials);
        return response.data;
    } 
    catch (error:any) 
    {
        console.error('Error logging in:', error.response.data.message);
        return { message: error.response.data.message, success: false };
    }
};


