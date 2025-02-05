interface PaymentOneBody {
  amount: number;
  currency: string; // formato ISO 4217
  description: string;
  paymentMethod: {
    type: 'card';
    card: {
      number: string;
      holderName: string;
      cvv: string;
      expirationDate: string; // DD/YYYY
      installments: number;
    };
  };
}

interface PaymentOneResponse {
  id: string; // uuid
  createdAt: string; // yyyy-mm-dd;
  status: 'authorized' | 'failed' | 'refunded';
  originalAmount: number;
  currentAmount: number;
  currency: string; // formato ISO 4217,
  description: string;
  paymentMethod: 'card';
  cardId: string; // uuid;
}

export { PaymentOneBody, PaymentOneResponse };
