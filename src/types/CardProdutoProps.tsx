export interface CardProdutoProps {
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    id?: string; // ? = para representar q o elemento nn é obrigatorio
    peso: number | null;
}