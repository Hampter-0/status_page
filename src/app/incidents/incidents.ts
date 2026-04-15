import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incidents',
  imports: [RouterModule],
  templateUrl: './incidents.html',
  styleUrl: './incidents.css',
})
export class Incidents {
  constructor(private router: Router) {

  }
}
