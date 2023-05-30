import Navbar from "./componets/navbar";
import Cabecalho from "./componets/cabecalho";
import Footer from "./componets/rodape";

function Contato() {
  return (
    <>
      <Cabecalho />
      <Navbar />
      <div className="Contato">
        <h1>Contato</h1>
        <input type="email" placeholder="E-mail" name="" id="" />
        <input type="password" placeholder="Senha" name="" />
        <button>Enviar</button>
        <p>Apos o envio dessas informações entraremos em contato via email</p>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
