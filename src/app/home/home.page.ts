import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  goToPage(route: string) {
    this.router.navigate([`/${route}`]).then(success => {
      console.log('Navigation Success:', success);
    }).catch(error => {
      console.error('Navigation Failed:', error);
    });
  }



  onItemClick(item: string) {
    console.log('Item clicked:', item);
    // Navigate to another page and pass the item as a query parameter
    //this.router.navigate(['/details'], { queryParams: { item } });
    this.router.navigate([`/${item}`]).then(success => {
      console.log('Navigation Success:', success);
    }).catch(error => {
      console.error('Navigation Failed:', error);
    });
  }
  
}
