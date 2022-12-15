import Tema from "./Tema"

interface Postagem{
    id: number;
    descricao: string;
    tema?: Tema| null;
}
export default Postagem;
