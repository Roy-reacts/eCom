import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  votes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  onIncrement(): void {
    this.votes += 1;
    }
    
 onDecrement(): void {
  this.votes -= 1;
  }

}
