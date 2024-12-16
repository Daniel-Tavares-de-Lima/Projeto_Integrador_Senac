"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* Componente Header */
function Head() {
  return (
    <header className="header">
      <div className="logo justify-between">
        <Image
          src="/homeImagens/imageLogoSenac.png"
          alt="Logo Senac"
          width={42}
          height={42}
        />
        <h2>Salão Senac</h2>
      </div>

      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Agendar</Link>
            </li>
            <li>
              <Link href="#">Meus Pedidos</Link>
            </li>
            <li>
              <Link href="#">Pagamentos</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="button">
        <button id="entrar">Entrar</button>
        <button id="cadastrar">Cadastrar</button>
      </div>
    </header>
  );
}

/* Hook Personalizado para Estado */
function useMeses() {
  const meses = [
    "Janeiro 2024",
    "Fevereiro 2024",
    "Março 2024",
    "Abril 2024",
    "Maio 2024",
    "Junho 2024",
    "Julho 2024",
    "Agosto 2024",
    "Setembro 2024",
    "Outubro 2024",
    "Novembro 2024",
    "Dezembro 2024",
  ];

  const [mesAtual, setMesAtual] = useState("Novembro 2024");

  const handleMesAnterior = () => {
    setMesAtual((prev) => {
      const indexAtual = meses.indexOf(prev);
      return indexAtual > 0 ? meses[indexAtual - 1] : prev;
    });
  };

  const handleProximoMes = () => {
    setMesAtual((prev) => {
      const indexAtual = meses.indexOf(prev);
      return indexAtual < meses.length - 1 ? meses[indexAtual + 1] : prev;
    });
  };

  return { mesAtual, handleMesAnterior, handleProximoMes };
}

/* Componente Footer */
function Footer() {
  return (
    <footer className="footer flex flex-col items-center">
      <div className="container1 flex justify-between">
        <div className="sobre">
          <div className="titulo flex">
            <Image
              src="/homeImagens/imageLogoSenac.png"
              alt="Logo Senac"
              width={80}
              height={70}
            />
            <h1>Salão Senac</h1>
          </div>
          <div className="texto">
            <p>
              O Salão Escola do SENAC oferece um ambiente moderno e bem
              equipado, o salão proporciona atendimentos de qualidade a preços
              acessíveis, enquanto promove o aprendizado dos estudantes,
              garantindo uma experiência enriquecedora para ambos os lados.
            </p>
          </div>
        </div>

        <div className="contato flex flex-col justify-between text-center">
          <h1>Contato</h1>
          <p>81 3413.6688 / 6647</p>
          <p>senac@pe.senac.br</p>
        </div>

        <div className="horario flex flex-col justify-between">
          <h1 className="text-center">Horário de Serviço</h1>
          <p>
            Segunda a sexta-feira das 8h às 18h Sábados das 9h às 15h
            Atendimento com horário marcado.
          </p>
        </div>
      </div>

      <div className="container2 flex justify-between items-center">
        <div className="logo">
          <Image
            src="/homeImagens/logoSenac.png"
            alt="Logo Senac"
            width={100}
            height={100}
          />
        </div>
        <div className="direitos">
          <p>© Todos os Direitos Reservados - 2024.</p>
        </div>
        <div className="redes">
          <Image
            src="/homeImagens/SocialMedia.png"
            alt="Rede Sociais"
            width={300}
            height={300}
          />
        </div>
      </div>
    </footer>
  );
}

/* Componente Principal */
export default function Inicio() {
  const { mesAtual, handleMesAnterior, handleProximoMes } = useMeses();

  return (
    <div className="containerGestao">
      <Head />
      <main className="mainGestao">
        <div className="mainEsquerda">

          <section className="membros">
            <div className="titulo">
                <h2>Membros</h2>
                <button className="editar">Editar</button>
            </div>
            <div className="membrosLista">
              {["João", "Maria", "Murilo", "Gabriel", "Marcelo"].map((nome) => (
                <div key={nome} className="membro">
                  {nome}
                </div>
              ))}
            </div>
          </section>

          <section className="resumo">
            <h2>Resumo</h2>
            <div>
              <h3>Outubro</h3>
              <ul>
                <li>Dia 10</li>
                <li>Dia 19</li>
              </ul>
              <h3>Novembro</h3>
              <ul>
                <li>Dia 1</li>
              </ul>
            </div>
          </section>

        </div>

        <div className="mainDireita">

          <section className="agendamentos">
            <h2>Agendamentos</h2>
            <div className="calendario">
              <button onClick={handleMesAnterior}>&lt;</button>
              <h3>{mesAtual}</h3>
              <button onClick={handleProximoMes}>&gt;</button>
            </div>

            <div className="dias">
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i + 1}
                  className={`dia ${i % 5 === 0 ? "diaAtivo" : ""}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <button className="editarData">Editar data</button>

            
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
