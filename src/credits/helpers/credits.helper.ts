import { Injectable } from '@nestjs/common';
import type { CreateCreditResponseDto } from '../dto/create-credit-response.dto';

@Injectable()
export class CreditsHelper {
  private readonly interestRate = 0.25;

  isApproved(): boolean {
    return Math.random() > 0.5;
  }

  calculatePayments(
    amount: number,
    installments: number,
  ): CreateCreditResponseDto {
    const isApproved = this.isApproved();
    const status = isApproved ? 'Approved' : 'Refused';
    let monthlyPayment = null;
    let totalPayment = null;

    if (isApproved) {
      const monthlyRate = this.interestRate / 12;

      monthlyPayment =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, installments)) /
        (Math.pow(1 + monthlyRate, installments) - 1);

      monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
      totalPayment = parseFloat((monthlyPayment * installments).toFixed(2));
    }

    return {
      monthlyPayment,
      totalPayment,
      status,
    };
  }
}
