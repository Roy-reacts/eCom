import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-banner-second',
  templateUrl: './banner-second.component.html',
  styleUrls: ['./banner-second.component.css']
})
export class BannerSecondComponent implements OnInit {
  products!: Product[];
  responsiveOptions:any;

  constructor(private productService: ProductService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
  
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }
  imageObject = [{
    
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Samsung-4680.png',

}, {
    image: '../../../../assets/clients/download.jpg',
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Belkin-4459.png',


}, {
    image: '../../../../assets/clients/download.png',
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/amazfit-4834.png'

}, {
    image: '../../../../assets/clients/png-clipart-jahangirnagar-university-school-college-dhaka-others-text-logo.png',
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/kieslect-9551.jpg',



},
{
    image: '../../../../assets/clients/masudgroup.svg',
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/kieslect-9551.jpg',

},
{
    image: '../../../../assets/clients/Asian-Power-Generation-Logo.jpg',
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/Qkz-4701.png'

},
{
    image: '../../../../assets/clients/cropped-silme-logo-153x40.png',
    thumbImage: 'https://adminapi.applegadgetsbd.com/storage/media/medium/UiiSii-1090.png',


}];

}
