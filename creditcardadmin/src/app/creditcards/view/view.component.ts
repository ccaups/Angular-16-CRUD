import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  constructor(private creditCardsService: CreditcardsService,
    private router: ActivatedRoute) {

    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    this.creditCardsService.getCreditCardById(this.creditCardId).subscribe((data: CreditCard) => {
      this.creditCardDetails = data;
    })
  }
}
