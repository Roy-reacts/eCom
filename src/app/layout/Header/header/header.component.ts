import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  check:any='login';
  modalRef?: BsModalRef;
  template!: TemplateRef<any>;
  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(private modalService: BsModalService,
    private cartService : CartService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  checkCon(data:any){
    this.check = data;
  }


}
