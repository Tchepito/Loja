import Navbar from "./componets/navbar"
import Turbo from './assets/turbo.jpg'
import Roda from './assets/roda.webp'
import Suspensao from './assets/suspensão.jpg'
import Footer from "./componets/rodape"
import Cabecalho from "./componets/cabecalho"
const lista = [
    {
      nome: "Turbo",
      texto: "A função turbo potencializa o motor, dando a ele a capacidade de misturar maior quantidade de ar-combustível nos cilindros. Assim, essa simples função libera mais energia para o veículo, havendo um menor gasto de combustível e aumentando a potência do motor do automóvel",
      preco: "R$2.000,00",
      img: Turbo
    },
    {
      nome: "Roda",
      texto: "Lindas roda para que você possa dar uma beleza diferenciada para o seu carro",
      preco: "R$200,00",
      img: Roda
    },
    {
      nome: "Suspensão",
      texto: "O sistema de suspensão tem uma função importantíssima no automóvel. Uma suspensão com maior durabilidade para que você não se preocupe em trocar elas em um tempo curto",
      preco: "R$990,00",
      img: Suspensao
    }
  ]
function Home(){
    return(
        <>
            <Cabecalho/>
            <Navbar/>
                <section>
                <h2 className='titulo'>Bem-vindo à Nossa Loja</h2>
                <div className="product-list">
                    {lista.map(({nome, texto, preco, img}) =>(
                        <>
                        <div className="product-item" key={nome}>
                            <img src={img} alt="Turbo" />
                            <h3>{nome}</h3>
                            <p>{texto}</p>
                            <p>{preco}</p>
                            <button>Adicionar ao Carrinho</button>
                        </div>
                        </>
                    ))}
                </div>
                </section>
                <Footer/>
        </>
    )
}
export default Home