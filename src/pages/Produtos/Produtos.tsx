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


export default function Produtos() {
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
                    <div className="card_produto">
                        <img src={choc_belga} alt="Uma fatia de bolo de chocolate belga" />
                        <h2>Chocolate Belga</h2>
                        <p>Bolo macio de chocolate, aplicado granulado que traz crocância e um sabor irresistível.</p>
                        <span>R$ 80,00/kg.</span>
                    </div>

                    <div className="card_produto">
                        <img src={choc_ninho} alt="Uma fatia de bolo de chocolate com ninho" />
                        <h2>Chocolate com Ninho</h2>
                        <p>Bolo macio de chocolate com creme de leite Ninho, um sabor irresistível.</p>
                        <span>R$ 90,00/kg.</span>
                    </div>

                    <div className="card_produto">
                        <img src={cenoura_choc} alt="Uma fatia de bolo de cenoura com cobertura de chocolate" />
                        <h2>Cenoura com Chocolate</h2>
                        <p>Bolo macio de cenoura com cobertura de chocolate, um sabor família e irresistível.</p>
                        <span>R$ 70,00/kg.</span>
                    </div>

                    <div className="card_produto">
                        <img src={choc_ninho_morango}
                            alt="Uma fatia de bolo de ninho com morango e cobertura de chocolate" />
                        <h2>Ninho com Morango</h2>
                        <p>Bolo macio de chocolate com recheio de leite ninho e morango. A melhor combinação para seu dia.</p>
                        <span>R$ 105,00/kg.</span>
                    </div>

                    <div className="card_produto">
                        <img src={choc_pistache} alt="Uma fatia de bolo de chocolate com pistache" />
                        <h2>Chocolate com Pistache</h2>
                        <p>Bolo macio de chocolate, aplicado granulado que traz crocância e um sabor irresistível.</p>
                        <span>R$ 80,00/kg.</span>
                    </div>

                    <div className="card_produto">
                        <img src={choc_oreo} alt="Uma fatia de bolo de chocolate com biscoito recheado Oreo" />
                        <h2>Chocolate com Oreo</h2>
                        <p>Bolo macio chocolate, com creme delicado, recheio e cobertura de biscoitos rechedos Oreo, um sabor
                            irresistível.</p>
                        <span>R$ 100,00/kg.</span>
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
