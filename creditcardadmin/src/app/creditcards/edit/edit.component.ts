import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editCreditCardForm!: FormGroup;

  creditCardData: CreditCard | null = null;

  constructor(private formBuilder: FormBuilder,
    private route:  ActivatedRoute,
    private creditCardsService: CreditcardsService){
      this.editCreditCardForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        description: ['', Validators.required],
        bankName: ['', Validators.required],
        maxCredit: ['', Validators.required],
        interestRate: ['', Validators.required],
        active: [false, Validators.required],
        recommendedScore: [null, Validators.required],
        annualFee: ['', Validators.required],
        termsAndConditions:['', Validators.required],
        createdDate: ['', Validators.required],
        updatedDate: ['', Validators.required]
      });
    }
    ngOnInit(){
      const id = parseInt(this.route.snapshot.paramMap.get("id") || '');
  
      if(id !== 0){
        this.creditCardsService.getCreditCardById(id).subscribe(data => {
          this.creditCardData = data;
  
          this.editCreditCardForm.patchValue(this.creditCardData);
        });
      }
    }
  
    onSubmit(){
      if(this.editCreditCardForm.valid){
        const updatedFormData: CreditCard = this.editCreditCardForm.value;
        console.log(updatedFormData);
        this.creditCardsService.updateCreditCard(updatedFormData);
      }
    }
}

