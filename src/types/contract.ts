export interface Contract {
  id: string;
  tenantName: string;
  propertyName: string; // Make sure this exists
  startDate: string;
  endDate: string;
  rentAmount: number;
  status: 'active' | 'expired' | 'terminated';
}
