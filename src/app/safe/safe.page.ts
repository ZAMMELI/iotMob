import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.page.html',
  styleUrls: ['./safe.page.scss'],
})
export class SafePage {
  qrCodeVisible = false; // State to toggle QR code visibility
  videoVisible = false; // State to toggle video visibility
  videoStreamURL = ''; // URL for the live video stream

  constructor(private http: HttpClient) {}

  /**
   * Toggles the visibility of the QR Code popup.
   */
  toggleQRCode(): void {
    this.qrCodeVisible = !this.qrCodeVisible;
  }

  /**
   * Fetches the live video stream URL from the backend and displays the video.
   */
  showVideoStream(): void {
    const apiUrl = 'http://localhost:3000/api/safe/video-stream';

    this.http.get<{ videoStreamURL: string }>(apiUrl).subscribe(
      (response) => {
        // Set the video stream URL from the backend response
        this.videoStreamURL = response.videoStreamURL;
        this.videoVisible = true;
      },
      (error) => {
        // Handle errors (e.g., backend not reachable or invalid response)
        console.error('Error fetching video stream:', error);
        alert('Unable to load the live video stream. Please try again later.');
      }
    );
  }

  /**
   * Closes the video stream popup.
   */
  closeVideoStream(): void {
    this.videoVisible = false;
  }
}
