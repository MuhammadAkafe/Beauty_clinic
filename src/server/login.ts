"use server";

import axiosInstance from "../axios_instance";
import { LoginFormData, LoginResponse } from "../types/auth";

export const authenticateUser = async (credentials: LoginFormData): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post<LoginResponse>('/auth/Login', credentials);
        console.log(response.data);
        return response.data;
    } 
    catch (error:any) 
    {
        console.error('Error logging in:', error);
        return { message: error.response.data.message, success: false };
    }
};


