import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items: Product[] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  )
  {}

  onSubmit():void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
