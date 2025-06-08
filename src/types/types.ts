import { ServiceStatus } from "./Service";

export interface Item 
{
    type: string;
    price: number;
  }
  
  export interface ServicesApi {
    service_id: number;
    title: string;
    sub_title: string;  
    items: Item[];
    status: ServiceStatus;
    created_at: string;
    updated_at: string;
  }


  export interface Services_Api_Response {
    message: string; 
    success: boolean; 
    services: ServicesApi[];
  }
  

