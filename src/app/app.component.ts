import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from './models/phone';
import { DisplayType } from './models/display-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public filteredPhones: Phone[];
  public search = '';
  public order = '';
  public byType = 'brand';

  public phones: Phone[] = [
    {
      brand: 'Samsung',
      brandImg:
        'https://seeklogo.com/images/S/Samsung_Mobile-logo-D8645D09B2-seeklogo.com.png',
      description: 'Best camera ever',
      model: 'S9+',
      price: 899,
      imgUrl:
        'https://staticshop.o2.co.uk/product/images/samsung_galaxy_s9_64gb_black_sku_header.png?cb=2d5f3cefdd7ecc08b3aa71c58896c0a3',
      specs: { displaySize: 5.8, displayType: DisplayType.AMOLED }
    },
    {
      brand: 'OnePlus',
      brandImg:
        'https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png',
      description: 'Bang for the bucks',
      model: '5T',
      price: 599,
      imgUrl:
        'https://www.honorbuy.com/5483-thickbox_default/oneplus-5t-6gb-ram-64gb-rom-smartphone.jpg',
      specs: { displaySize: 6.0, displayType: DisplayType.AMOLED }
    },
    {
      brand: 'iPhone',
      brandImg:
        'https://www.pchouselondon.com/wp-content/uploads/2018/02/apple.png',
      description: 'Notch',
      model: 'X',
      price: 999,
      imgUrl:
        'https://cdn.macrumors.com/article-new/2017/10/iphone-x-silver.jpg',
      specs: { displaySize: 5.8, displayType: DisplayType.AMOLED }
    }
  ];

  public ngOnInit(): void {
    this.filteredPhones = this.phones.sort((x, y) =>
      x.brand.localeCompare(y.brand)
    );
  }

  public sortByType(): void {
    this.filterBySearch();

    this.filteredPhones = this.filteredPhones.sort((x, y) => {
      const orderNumber = this.order === 'asc' ? 1 : -1;
      let a = x[this.byType];
      let b = y[this.byType];

      if (typeof x[this.byType] === 'string') {
        a = x[this.byType].toLocaleLowerCase();
        b = y[this.byType].toLocaleLowerCase();
      }

      if (a > b) {
        return 1 * orderNumber;
      } else if (a < b) {
        return -1 * orderNumber;
      } else {
        return 0;
      }
    });
  }

  public filterBySearch(): void {
    this.search = this.search.toLowerCase().trim();

    this.filteredPhones = this.phones.filter(
      x =>
        x.brand.toLowerCase().indexOf(this.search) >= 0 ||
        x.description.toLowerCase().indexOf(this.search) >= 0 ||
        x.model.toLowerCase().indexOf(this.search) >= 0
    );
  }

  public clearFilters(): void {
    this.filteredPhones = this.phones.slice();
    this.byType = 'brand';
    this.order = '';
    this.search = '';
  }
}
