import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1> React Router Exemplo - Atividade Contínua 02</h1>

      <p>      
        Este exemplo demonstra alguns dos principais recursos do React Router
        incluindo nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, e usando uma
        "*" route (aka "splat route") para renderizar uma página "não encontrada" quando alguém 
        visita um URL não reconhecido.
      </p>

      {/* As rotas se aninham uma dentro da outra. Caminhos de rota aninhados são construídos sobre
             caminhos de rota pai e elementos de rota aninhados são renderizados dentro
             elementos de rota pai. Veja a nota sobre <Outlet> abaixo. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Usar path="*"" significa "combinar com qualquer coisa", então esta rota
                 age como um catch-all para URLs que não temos explícito
                 rotas para. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* Uma "rota de layout" é um bom lugar para colocar a marcação que você deseja
           compartilhe em todas as páginas do seu site, como navegação. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Um <Outlet> renderiza qualquer rota filha que esteja ativa no momento,
           então você pode pensar sobre este <Outlet> como um espaço reservado para
           as rotas secundárias que definimos acima. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
