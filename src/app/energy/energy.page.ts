import { Component, OnInit, ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.page.html',
  styleUrls: ['./metrics.page.scss'],
})
export class MetricsPage implements OnInit, ViewChild,AfterViewInit {
  @ViewChild('energyChart') energyChartCanvas!: ElementRef<HTMLCanvasElement>;

  weatherChart: any;
  energyChart: any;

  constructor() {}

  ngOnInit() {
    this.loadEnergyChart();
  }

  
  loadEnergyChart() {
    const buildings = ['Building A', 'Building B'];
    const energyData = [700, 820]; // Total energy used

    this.energyChart = new Chart(this.energyChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: buildings,
        datasets: [
          {
            label: 'Energy Used (kWh)',
            data: energyData,
            backgroundColor: ['#36A2EB', '#FF6384'], // Different colors for bars
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales: {
          x: {
            title: { display: true, text: 'Buildings' },
          },
          y: {
            title: { display: true, text: 'Energy (kWh)' },
            beginAtZero: true,
          },
        },
      },
    });
  }
}
