import { Component } from '@angular/core';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { ModalNewUserComponent } from './components/modal-new-user/modal-new-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TableComponentComponent, ModalNewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cadastro';
  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
