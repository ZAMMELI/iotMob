import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';  // Import Chart.js

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {
  }

  // Function to navigate to different pages
  goToPage(route: string) {
    this.router.navigate([`/${route}`]).then(success => {
      console.log('Navigation Success:', success);
    }).catch(error => {
      console.error('Navigation Failed:', error);
    });
  }

  // Handle item click to navigate to specific pages
  onItemClick(item: string) {
    console.log('Item clicked:', item);
    this.router.navigate([`/${item}`]).then(success => {
      console.log('Navigation Success:', success);
    }).catch(error => {
      console.error('Navigation Failed:', error);
    });
  }

 
}
