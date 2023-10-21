export interface Cliente {
    id?:    any; // String ou Int
    nome:   string;
    cpf:    string;
    email:  string;
    senha:  string;
    perfis: string[];
    dataCriacao: any;
}