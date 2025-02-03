import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-table-component',
  imports: [CommonModule],
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly userService: UserServicesService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
