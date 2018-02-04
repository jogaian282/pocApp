import { Component, OnInit , ViewChild} from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {

  customer:Customer = new Customer();
  isViewModal:boolean = true;

  @ViewChild('customerForm') customerForm;

  constructor() { }

  ngOnInit() {
    this.customer = {
      "customerName" : null,
      "mobileNumber": null,
      "emailId" :null,
      "gender" :null,
      "country":null,
      "message":null,
      "active" :null
    }
  }

  saveDetails() {
    if(!this.customerForm.valid) {
      return false;
    } else {
      if(this.customer.customerName != null && this.customer.customerName != '') {
        this.isViewModal = false;
        alert("Fill customer name");
        return;
      }  else {
        alert("Customer registered successfully");
        this.customer = this.customerForm.value;
        console.log(this.customer);
      }
    }
  }

}
