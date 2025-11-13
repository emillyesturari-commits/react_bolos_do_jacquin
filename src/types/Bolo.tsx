export interface Bolo {
    id: string | undefined;
    nome: string;
    descricao: string;
    categorias: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}