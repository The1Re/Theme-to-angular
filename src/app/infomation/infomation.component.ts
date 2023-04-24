import { Component } from '@angular/core';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.scss']
})
export class InfomationComponent {
  example: data[] = [
    {
      lender_name:"User1",
      borrower_name:"User2",
      contract_date:'2023-01-24',
      loanlimit: 50000,
      interest_rate: 0.5,
      installment_payment: '1000 บาททุกเดือน',
      amount_payment: 1000,
      start_payment_date: '2023-02-24',
      incoming_payment_date: '2023-03-24',
      last_payment_date: '2024-01-24',
      Amount_paid_installments: 10000
    },
    {
      lender_name:"User3",
      borrower_name:"User4",
      contract_date: '2023-01-16',
      loanlimit: 100000,
      interest_rate: 2.5,
      installment_payment: '1000 บาททุกเดือน',
      amount_payment: 2000,
      start_payment_date: '2023-02-16',
      incoming_payment_date: '2023-03-16',
      last_payment_date: '2024-01-16',
      Amount_paid_installments: 0
    },
  ]
  
}

interface data{
  lender_name: string
  borrower_name: string
  contract_date: string
  loanlimit: number
  interest_rate: number
  installment_payment: string
  amount_payment: number
  start_payment_date: string
  incoming_payment_date: string
  last_payment_date: string
  Amount_paid_installments: number
}
