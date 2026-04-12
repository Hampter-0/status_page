import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-status',
  imports: [RouterModule],
  templateUrl: './status.html',
  styleUrl: './status.css',
})
export class Status {
   constructor(private router: Router) {

  }
}
