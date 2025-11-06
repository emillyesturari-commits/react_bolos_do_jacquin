import './Produtos.css';
import banner_1 from '../../assets/imgs/banner.png';
import banner_2 from '../../assets/imgs/banner2.png';
import banner_3 from '../../assets/imgs/banner3.png';
import choc_belga from '../../assets/imgs/choc-belga.png';
import choc_ninho from '../../assets/imgs/choc-ninho.png';
import cenoura_choc from '../../assets/imgs/cenoura-choc.png';
import choc_ninho_morango from '../../assets/imgs/choc-ninho-morango.png';
import choc_pistache from '../../assets/imgs/choc-pistache.png';
import choc_oreo from '../../assets/imgs/choc-oreo.png';
import whatsapp from '../../assets/whatsapp.png';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosServices';


export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]);

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
        fetchBolos()
    }, []) // third atualização 


    return (

        <main>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <section className="container_produtos">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">

                    {
                        bolos.map((b: Bolo) => (
                            <div className="card_produto">
                                <img src= {`http://localhost:3000/${b.imagens[0]}`} alt="Uma fatia de bolo de chocolate belga" />
                                <h2>{b.nome}</h2>
                                <p></p>
                                <span>{b.preco}</span>
                            </div>
                        ))
                    }

                    <div className="card_produto">
                        <img src={choc_belga} alt="Uma fatia de bolo de chocolate belga" />
                        <h2>Chocolate Belga</h2>
                        <p>Bolo macio de chocolate, aplicado granulado que traz crocância e um sabor irresistível.</p>
                        <span>R$ 80,00/kg.</span>
                    </div>

                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={whatsapp} alt="icone do whatsapp" />
            </a>
        </main>
    )
}
