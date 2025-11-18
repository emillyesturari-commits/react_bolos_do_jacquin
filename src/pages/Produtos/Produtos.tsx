import './Produtos.css';

import whatsapp from '../../assets/whatsapp.png';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';



export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]); //composto por uma lista e uma função
    const location = useLocation();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');

    const fetchBolos = async () => {
        try {
            const dados = await getBolos();
            if (termo_pesquisado) {
                const dados_filtrados = dados.filter(b => 
                    b.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) || 
                    b.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    b.categorias.some(cat => cat.toLowerCase().includes(termo_pesquisado.toLowerCase()))
                )
                setBolos(dados_filtrados)
            }else{
                console.log("Dados retornados da API", dados);
                setBolos(dados);
            }
        } catch (error) {
            console.error("Erro ao executar getBolo", error);
        }
    }
    //toLowerCase = transforma caracteres maiusculos em minusculos
    //some = alguma

    //useEffect td q acontece assim q a pag é executada

    useEffect(() => { //ciclo de montagem 
        fetchBolos();
        console.log("Termo pesquisado: ", termo_pesquisado);
    }, [termo_pesquisado]) // third atualização 


    return ( //o return da função só retorna um elemento  usar o <>
        <>
            <Header />
            <main>
                <Carrossel />
                <section className="container_produtos">
                    <h1 className="acessivel">produtos de chocolate</h1>
                    <div className="titulo">
                        <span>
                            {
                                termo_pesquisado ? `Resultados para: ${termo_pesquisado}` : "Nome da categoria"
                            }
                        </span>
                        <hr />
                    </div>

                    <section className="cards">

                        {
                            bolos.map((b: Bolo) => (  //map: devolve uma nova lista, imprimindo td q está entre ()            ? = se sim      : = se não
                                <CardProduto
                                    nome={b.nome}
                                    descricao={b.descricao}
                                    preco={b.preco}
                                    imagem={b.imagens[0] ?? ""} //?? usado p caso der erro na img 
                                    peso={b.peso}
                                />
                            ))
                        }



                    </section>
                </section>

                <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                    target="_blank">
                    <img src={whatsapp} alt="icone do whatsapp" />
                </a>
            </main>
        </>
    )
}
