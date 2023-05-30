import Pec from "./assets/pec.jpg";
import Navbar from "./componets/navbar";
import Cabecalho from "./componets/cabecalho";
import Footer from "./componets/rodape";

function Sobre() {
  return (
    <>
      <Cabecalho />
      <Navbar />
      <div className="Sobre">
        <img src={Pec} alt="Pec" />
        <h1>Sobre</h1>
        <p>
          Nossa loja esta chegando no mercado para acabar com toda a
          concorrencia e 100% focada em entregar os melhores preços sem a perda
          de qualidade, Somos uma loja de autopeças fundada no ano de 2023.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Sobre;
