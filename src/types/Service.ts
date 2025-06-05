export type ServiceStatus = 'Active' | 'Pending' | 'Archived' | 'Disabled';

export interface Item {
  id: string;
  type: string;
  price: number;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  status: ServiceStatus;
  items: Item[];
} 