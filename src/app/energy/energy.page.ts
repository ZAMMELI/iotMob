
//energy.page.ts
import { Component, OnInit } from '@angular/core';
import { EnergyService } from './energy.service';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.page.html',
  styleUrls: ['./energy.page.scss'],
})
export class EnergyPage implements OnInit {
  consommationData: any[] = [];
  totalConsommation: number = 0;

  constructor(private energyService: EnergyService) {}

  ngOnInit() {
    this.fetchConsommation();
  }

  fetchConsommation() {
    this.energyService.getEnergyData().subscribe(
      (response) => {
        console.log('Fetched data:', response);  // Check if data is returned
        this.consommationData = response.data;
        this.totalConsommation = this.consommationData.reduce(
          (sum, item) => sum + item.consommation,
          0
        );
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
