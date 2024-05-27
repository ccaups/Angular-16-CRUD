import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  
  private subscription: Subscription | undefined;

  constructor(private creditcardsService:CreditcardsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient){
  }
  
  newCreditCard: CreditCard = {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "",
    description: "",
    bankName: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and conditions for the credit card",
    createdDate: Date(),
    updatedDate: Date()
  }

  
  saveCreditCard(){
    this.subscription = this.creditcardsService.createCreditCard(this.newCreditCard)
    .subscribe(data => {
    this.showSuccessMessage("Credit Card Added Successfully");
    this.router.navigate(['creditcards']);
    })
  }
  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  showSuccessMessage(message: string){
    this.snackBar.open(message, 'Close', {
      duration: 3000
    })
  }
}