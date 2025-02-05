interface PaymentTwoBody {
  amount: number;
  currency: string; // formato ISO 4217;
  statementDescriptor: string;
  paymentType: 'card';
  card: {
    number: string;
    holder: string;
    cvv: string;
    expiration: string; // DD/YY;
    installmentNumber: number;
  };
}

interface PaymentTwoResponse {
  id: string; //uuid;
  date: string; //yyyy-mm-dd
  status: 'paid' | 'failed' | 'voided';
  amount: number;
  originalAmount: number;
  currency: string; // formato ISO 4217;
  statementDescriptor: string;
  paymentType: 'card';
  cardId: string; //uuid
}

export { PaymentTwoBody, PaymentTwoResponse };
