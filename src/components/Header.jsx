function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio">
        Sua Empresa
      </a>

      <nav className="nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="header-cta" href="#contato">
        Falar no WhatsApp
      </a>
    </header>
  );
}

export default Header;