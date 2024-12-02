"use client";

import { useState } from "react";
import Form from "../components/form/form";
import Header from "../components/header/header";

export default function Cadastro() {
  const [selectedOption, setSelectedOption] = useState("colaborador");

  return (
    <>
      <Header />
      <div
        className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center gap-72"
        style={{ backgroundImage: "url('/homeImagens/cadastro.png')" }}
      >
        <div className="flex gap-72 w-[90%] max-w-7xl mt-24 mb-24">
          <div className="flex flex-col gap-8 text-white w-1/2 mt-24">
            <div className="flex items-center gap-4 pb-0">
              <img
                src="/homeImagens/imageLogoSenac.png"
                alt="Logo Senac"
                className="w-16"
              />
              <h1 className="text-6xl font-bold">Salão Senac</h1>
            </div>
            <div className="flex items-end gap-6 pt-0">
              <img
                src="/homeImagens/logoSenacCinza.png"
                alt="Logo Senac Cinza"
                className="w-12"
              />
              <div className="w-[298.38px] h-[19.64px] text-white/60 text-[16px] font-thin font-subtitle">© Todos os Direitos Reservados - 2017.</div>
              <div className="flex gap-4">
                <a href="#">
                  <img
                    src="/homeImagens/instagram2.png"
                    alt="Instagram"
                    className="w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="/homeImagens/linkedin.png"
                    alt="LinkedIn"
                    className="w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="/homeImagens/camadaLogoSenac.png"
                    alt="Topo da Logo Salão Senac"
                    className="w-6"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-10 w-[652px] h-[780px] pt-3">
            <div className="flex gap-4 justify-center mb-6">
              <button
                onClick={() => setSelectedOption("colaborador")}
                className={`px-[60px] py-[-1] font-normal ${selectedOption === "colaborador"
                    ? "bg-[#004B8E] text-white"
                    : "text-[#1E1E1E] border-2 border-[#004B8E] bg-transparent"
                  } rounded-lg`}
              >
                Colaborador
              </button>
              <button
                onClick={() => setSelectedOption("cliente")}
                className={`px-[60px] py-[-1] font-normal ${selectedOption === "cliente"
                    ? "bg-[#004B8E] text-white"
                    : "text-[#1E1E1E] border-2 border-[#004B8E] bg-transparent"
                  } rounded-lg`}
              >
                Cliente
              </button>
            </div>
            <Form selectedOption={selectedOption} />
          </div>
        </div>
      </div>
    </>
  );
}