import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-phone-view',
  templateUrl: './phone-view.component.html',
  styleUrls: ['./phone-view.component.css']
})
export class PhoneViewComponent {
  @Input() public phone: Phone;
  @Output() public showPhone = new EventEmitter<Phone>();

  public onPhoneClick(): void {
    this.showPhone.emit(this.phone);
  }
}
