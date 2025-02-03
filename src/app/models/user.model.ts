import { Adress } from './adress.model';

export interface User extends Adress {
  name: string;
  email: string;
  dataNascimento: string;
  idade: number;
  cpf: string;
  cidade: string;
}
