import { Component, EventEmitter, Output } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Adress } from '../../models/adress.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css'],
})
export class FormRegistrationComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  userForm: FormGroup;

  constructor(
    private userService: UserServicesService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      dataNascimento: ['', Validators.required],
      idade: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  submit() {
    const user = this.userForm.value;
    this.userService.addNewUser(user);
    alert('Usuário cadastrado com sucesso!');
    this.userForm.reset();
    this.formSubmitted.emit();

    alert('Por favor, preencha todos os campos corretamente.');
  }

  formatCpf() {
    let cpf = this.userForm.get('cpf')?.value;

    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    this.userForm.get('cpf')?.setValue(cpf);
  }

  formatCep() {
    let cep = this.userForm.get('cep')?.value;

    cep = cep.replace(/\D/g, '');
    cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    this.userForm.get('cep')?.setValue(cep);
  }

  async searchAdress() {
    const cep = this.userForm.get('cep')?.value;
    const fetchAdress = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`,
      {}
    );
    const adress = (await fetchAdress.json()) as Adress;

    console.log(adress);

    if (fetchAdress.ok) {
      this.userForm.get('logradouro')?.setValue(adress.logradouro);
      this.userForm.get('bairro')?.setValue(adress.bairro);
      this.userForm.get('cidade')?.setValue(adress.localidade);
      this.userForm.get('estado')?.setValue(adress.uf);
    }
  }

  calculateAge(event: any) {
    const birthDate = event.target.value;
    const birthYear = parseInt(birthDate.split('-')[0], 10);

    const currentYear = new Date().getFullYear();

    const age = currentYear - birthYear;
    this.userForm.get('idade')?.setValue(age);
  }
}
