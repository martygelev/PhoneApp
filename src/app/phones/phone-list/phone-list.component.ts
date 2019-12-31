import { Component, OnInit, Input } from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  @Input() public phones: Phone[];
  public currentPhone: Phone;

  public showPhone(phone: Phone) {
    setTimeout(() => (this.currentPhone = phone), 10);
  }

  public hidePhone() {
    this.currentPhone = undefined;
  }
}
