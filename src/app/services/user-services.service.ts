import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private users: User[] = [
    {
      name: 'João Silva',
      cpf: '123.456.789-00',
      email: 'joao.silva@email.com',
      cep: '01000-000',
      idade: 25,
      logradouro: 'Rua A',
      cidade: 'São Paulo',
      bairro: 'Centro',
      estado: 'SP',
      dataNascimento: '1998-05-15',
    },
    {
      name: 'Maria Oliveira',
      cpf: '987.654.321-00',
      email: 'maria.oliveira@email.com',
      cep: '02000-000',
      idade: 30,
      logradouro: 'Rua B',
      cidade: 'Rio de Janeiro',
      bairro: 'Copacabana',
      estado: 'RJ',
      dataNascimento: '1993-08-20',
    },
    {
      name: 'Pedro Santos',
      cpf: '123.321.123-45',
      email: 'pedro.santos@email.com',
      cep: '03000-000',
      idade: 28,
      logradouro: 'Rua C',
      cidade: 'Belo Horizonte',
      bairro: 'Savassi',
      estado: 'MG',
      dataNascimento: '1995-02-10',
    },
    {
      name: 'Ana Souza',
      cpf: '456.789.123-67',
      email: 'ana.souza@email.com',
      cep: '04000-000',
      idade: 35,
      logradouro: 'Rua D',
      cidade: 'Curitiba',
      bairro: 'Centro',
      estado: 'PR',
      dataNascimento: '1988-11-25',
    },
    {
      name: 'Lucas Pereira',
      cpf: '789.123.456-78',
      email: 'lucas.pereira@email.com',
      cep: '05000-000',
      idade: 22,
      logradouro: 'Rua E',
      cidade: 'Porto Alegre',
      bairro: 'Moinhos de Vento',
      estado: 'RS',
      dataNascimento: '2001-07-02',
    },
  ];

  private usersSubject = new BehaviorSubject<User[]>(this.users);

  constructor() {}

  getUsers() {
    return this.usersSubject.asObservable();
  }

  addNewUser(userResponese: User) {
    const userExists = this.users.some(
      (user) =>
        user.cpf === userResponese.cpf || user.email === userResponese.email
    );

    if (userExists) {
      alert('Usuário já existe!');
      return;
    }
    this.users = [...this.users, userResponese];

    this.usersSubject.next(this.users);
  }
}
