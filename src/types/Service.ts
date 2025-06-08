export type ServiceStatus = 'قريبا' | 'جلسه' | 'مغلق' | 'غير متوفر';

export interface Item {
  type: string;
  price: number;
}

export interface Service_form {
  service_id:  number;
  title: string;
  sub_title: string;
  status: ServiceStatus;
  items: Item[];
} 