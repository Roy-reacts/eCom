import { Component, OnInit, ViewChild} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  show!: boolean;
  thumbs:any;
  votes: number = 0;

  activeIndex1: number = 0;

  activeIndex2: number = 0;
  @ViewChild('swiperRef', {static:false}) swiperRef?:SwiperComponent;
  constructor() { }

  ngOnInit(): void {
  }
  //thumb
  thumbsSwiper:any;
  setThumbsSwiper(swiper: any){
    this.thumbsSwiper = swiper
  }

  onIncrement(): void {
    this.votes += 1;
    }
    
 onDecrement(): void {
  this.votes -= 1;
  }

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));

 

}


