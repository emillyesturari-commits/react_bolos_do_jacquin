import './Produtos.css';

import choc_belga from '../../assets/imgs/choc-belga.png';
import choc_ninho from '../../assets/imgs/choc-ninho.png';
import cenoura_choc from '../../assets/imgs/cenoura-choc.png';
import whatsapp from '../../assets/whatsapp.png';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';



export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]); //composto por uma lista e uma função

    const fetchBolos = async () => {
        try {
            const dados = await getBolos();
            console.log("Dados retornados da API", dados);
            setBolos(dados);
        } catch (error) {
            console.error("Erro ao executar getBolo", error)
        }
    }

    //useEffect td q acontece assim q a pag é executada

    useEffect(() => { //ciclo de montagem 
        fetchBolos();
    }, []) // third atualização 


    return (


        <main>

            <Carrossel />
            <section className="container_produtos">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
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
    )
}
