import { contactContent } from "../data/Contact";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio">
          Sua Empresa
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#localizacao">Onde estamos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-actions">


          <a
            className="header-cta"
            href={contactContent.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;