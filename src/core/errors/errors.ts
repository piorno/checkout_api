import { HttpException, HttpStatus } from '@nestjs/common';

const ApplicationErros = {
  paymentError: new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      error: 'Failed to precces your payment please try again later',
    },
    HttpStatus.BAD_REQUEST,
  ),
};

export { ApplicationErros };
