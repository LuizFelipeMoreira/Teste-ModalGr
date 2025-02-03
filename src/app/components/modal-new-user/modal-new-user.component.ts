import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormRegistrationComponent } from '../form-registration/form-registration.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-new-user',
  imports: [CommonModule, FormRegistrationComponent],
  templateUrl: './modal-new-user.component.html',
  styleUrl: './modal-new-user.component.css',
})
export class ModalNewUserComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  containerCloseModal(event: any) {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }

  handleFormSubmit() {
    this.toggleModal();
  }
}
