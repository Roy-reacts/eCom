import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import Validation from '../../../utils/validation';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  check:any


  constructor(private formBuilder: FormBuilder) { }

  checkCon(data:any){
    this.check = data;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(11)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        division: ['', ],
        city: ['', ],
        area: ['', ],
        deliveryType: ['', [Validators.required]],
        addressOne: ['', [Validators.required]],
        addressTwo: ['',],
        note: ['',],
        acceptTerms: [false, Validators.requiredTrue]
        
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
   
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
