import { Component } from '@angular/core';
import { StorageService } from "../_services/storage.service";
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class ProfileComponent {
  currentUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}
