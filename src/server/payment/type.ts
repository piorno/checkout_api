import { ApiProperty } from '@nestjs/swagger';

class Card {
  @ApiProperty()
  number: string;
  @ApiProperty()
  holder: string;
  @ApiProperty()
  cvv: string;
  @ApiProperty()
  expiration: string; // DD/YYYY;
  @ApiProperty()
  installmentNumber: number;
}

class PaymentRequestBody {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  currency: string; // formato ISO 4217;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: Card })
  card: Card;
}

interface PaymentRequestBody {
  amount: number;
  currency: string; // formato ISO 4217;
  description: string;
  card: {
    number: string;
    holder: string;
    cvv: string;
    expiration: string; // DD/YYYY;
    installmentNumber: number;
  };
}

export { PaymentRequestBody };
