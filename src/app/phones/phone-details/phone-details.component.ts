import { DisplayType } from '../../models/display-type';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ElementRef
} from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent {
  public DisplayType = DisplayType;
  @Input() public phone: Phone;
  @Output() public hidePhone = new EventEmitter<Phone>();

  public onCloseButtonClick(): void {
    this.hidePhone.emit(this.phone);
  }
}
