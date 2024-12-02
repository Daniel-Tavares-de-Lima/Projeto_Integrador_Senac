"use client";

const LoginForm = ({ selectedOption }) => {
  return (
    <div className="h-[550px] flex items-center justify-center pt-0">
      <div className="bg-white text-black rounded-lg p-8 mt-8 w-full max-w-sm">
        <form className="space-y-4">
          <div className="">
            <h2 className="text-2xl text-black font-bold text-start mb-4">Entrar</h2>
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
            {selectedOption === "colaborador" && (
              <label htmlFor="nome" className="block text-sm font-bold mt-4 mb-2">
                Nome:
                <input type="text" className="w-full px-4 py-2 border mt-4 rounded" required />
              </label>
            )}
            {selectedOption === "colaborador" && (
              <label htmlFor="matricula" className="block text-sm font-bold mt-4 mb-2">
                Matrícula:
                <input type="text" className="w-full px-4 py-2 border mt-4 rounded" required />
              </label>
            )}
            {selectedOption === "cliente" && (
              <label htmlFor="email" className="block text-sm font-bold mt-4 mb-2">
                Email:
                <input type="email" className="w-full px-4 py-2 border mt-4 rounded" required />
              </label>
            )}
            <label htmlFor="senha" className="block text-sm font-bold mt-4 mb-2">
              Senha:
              <input type="password" className="w-full px-4 py-2 border mt-4 mb-4 rounded" required />
            </label>
            <button type="submit" className="w-full bg-[#F7931D] text-white py-2 rounded-lg hover:bg-[#FFB500]">
              Entrar
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-0 pt-2">
              <a href="#" className="hover:text-[#1E1E1E]">Esqueceu a senha?</a>
        </p>
        <div className="border border-zinc-900 my-4"></div>
        <div className="flex items-center justify-center gap-2">
            <p>
                Novo Usuário? 
                <a href="#" className="text-[#1E1E1E] font-bold no-underline hover:text-[#FFB500]">
                    {" "}Crie a sua conta
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;