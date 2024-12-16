import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { EnergyService } from './energy.service';
import { interval, Subscription } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-energy',
  templateUrl: './energy.page.html',
  styleUrls: ['./energy.page.scss'],
})
export class EnergyPage implements OnInit {
  energyData: { location: string; usage: number }[] = [];
  totalUsage: number = 0;
  chart: any;

  constructor(private energyService: EnergyService) {}

  ngOnInit() {
    this.fetchEnergyData();
  }

  fetchEnergyData() {
    this.energyService.getEnergyMetrics().subscribe((data) => {
      this.energyData = data;
      this.totalUsage = data.reduce((sum, entry) => sum + entry.usage, 0);
      this.createChart();
    });
  }

  createChart() {
    const canvas = document.getElementById('energyChart') as HTMLCanvasElement | null;

    if (!canvas) {
      console.error('Canvas element not found!');
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context for canvas!');
      return;
    }

    if (this.chart) {
      this.chart.destroy(); // Reset the chart if it already exists
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.energyData.map((entry) => entry.location),
        datasets: [
          {
            label: 'Energy Usage (kWh)',
            data: this.energyData.map((entry) => entry.usage),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
