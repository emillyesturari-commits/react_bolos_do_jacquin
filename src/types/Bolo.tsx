export interface Bolo {
    nome: string;
    id: string | undefined;
    categorias: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}