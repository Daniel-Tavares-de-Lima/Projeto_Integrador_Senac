"use client";

const Form = ({ selectedOption }) => {
  return (
    <div className="h-[640px] flex items-center justify-center pt-0">
      <div className="bg-white text-black rounded-lg p-8 mt-8 w-full max-w-sm">
        <form className="space-y-4">
          <div className="">
            <h2 className="text-2xl text-black font-bold text-start mb-4">Criar Conta</h2>
            {selectedOption === "colaborador" && (
              <div className="relative">
                <select className="w-full mb-4 p-3 border rounded-lg bg-[#F4F2EF] text-center text-black appearance-none font-bold">
                  <option>Aluno</option>
                  <option>Professor</option>
                  <option>Funcionário</option>
                </select>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black font-bold text-3xl">
                  &#9662;
                </span>
              </div>
            )}
            <label htmlFor="nome" className="block text-sm font-bold mt-4 mb-2">
              Nome:
              <input type="text" className="w-full mt-2  px-4 py-2 border rounded" required />
            </label>
            <label htmlFor="email" className="block text-sm font-bold mt-4 mb-2">
              Email:
              <input type="email" className="w-full mt-2  px-4 py-2 border rounded" required />
            </label>
            {selectedOption === "colaborador" && (
              <label htmlFor="matricula" className="block text-sm font-bold mt-4 mb-2">
                Matrícula:
                <input type="text" className="w-full mt-2  px-4 py-2 border rounded" required />
              </label>
            )}
            <label htmlFor="senha" className="block text-sm font-bold mt-4 mb-2">
              Senha:
              <input type="password" className="w-full mt-2  px-4 py-2 border rounded" required />
            </label>
            <label htmlFor="confirmarSenha" className="block text-sm font-bold mt-4 mb-2">
              Confirmar Senha:
              <input type="password" className="w-full mt-2 px-4 py-2 border rounded" required />
            </label>
            {selectedOption === "cliente" && (
              <label htmlFor="sexo" className="block text-sm font-bold mt-4">
                Sexo:
                <input type="text" className="block mt-2 w-1/2 px-4 py-2 border rounded" required />
              </label>
            )}
            <button type="submit" className="w-full bg-[#F7931D] mt-4 text-white py-2 rounded-lg hover:bg-[#FFB500]">
              Criar Conta
            </button>
          </div>
        </form>
        <div className="border border-zinc-900 my-4"></div>
        <p className="text-center text-sm text-gray-600 mt-0 pt-2">
              Possui conta?{" "}
              <a
                href="#"
                className="text-[#1E1E1E] font-bold no-underline hover:text-[#FFB500]"
              >
                Entrar
              </a>
            </p>
      </div>
    </div>
  );
};

export default Form;