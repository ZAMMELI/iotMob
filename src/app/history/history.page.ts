import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  logs: string[] = [];  // Store the log file names
  selectedLogContent: string = '';  // Store the content of the selected log file

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchLogs();  // Fetch the log file names when the page loads
  }

  // Fetch the list of log files from the backend
  fetchLogs() {
    this.http.get<{ logs: string[] }>('http://localhost:3000/api/history')
      .subscribe(
        (response) => {
          this.logs = response.logs; // Store the log file names in the 'logs' array
        },
        (error) => {
          console.error('Error fetching logs:', error);
        }
      );
  }

  // Fetch the content of a specific log file
  fetchLogContent(fileName: string) {
    this.http.get<{ content: string }>(`http://localhost:3000/api/history-log/${fileName}`)
      .subscribe(
        (response) => {
          this.selectedLogContent = response.content; // Set the content of the selected log file
        },
        (error) => {
          console.error('Error fetching log content:', error);
        }
      );
  }
}
