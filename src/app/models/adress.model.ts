export interface Adress {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade?: string;
  uf?: string;
  estado: string;
  regiao?: string;
}
