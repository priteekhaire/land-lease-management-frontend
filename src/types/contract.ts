export interface Contract {
  id: string;
  name: string; // ✅ add this
  code: string;
  tenantName:string;
  propertyName: string;
  rentAmount:number;
  type: string;
  value: number;
  status: 'draft' | 'active' | 'expired' | 'terminated';
  startDate?: string;
  endDate?: string;
  paymentTerms?: string;
  terminationNotice?: string;
  
}
