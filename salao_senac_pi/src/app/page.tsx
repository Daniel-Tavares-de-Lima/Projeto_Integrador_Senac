import Link from "next/link"
import Image from "next/image"

/*--------Head-----*/
function head(){
    return(
        <header className="header">
                <div className="logo justify-between">
                    <Image src="/homeImagens/imageLogoSenac.png" alt="Logo Senac" width={42} height={42}/>
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
    )
}
/*--------Head-----*/


/*-----MAIN 1------------*/
function inicio(){
    return(
        <main className="inicio flex flex-col items-center justify-center">
            <div className="apresentacao container flex justify-between items-center">
                <div className="conteudo flex flex-col">
                    <h1>Salão Senac</h1>

                    <h3 className="font-extralight">Empresa Pegagógica</h3>

                    <p className="font-thin" id="desc">As formações em beleza capacitam profissionais a dominar técnicas inovadoras e atender às expectativas de seus clientes.</p>

                    <div className="butoes flex items-center justify-between">
                        <button id="servicos">Serviços</button>

                        <p>ou</p>
 
                        <button id="cursos">Cursos</button>
                    </div>
                </div>

                <div className="imagemConteudo">
                    <Image src="/homeImagens/fundo1.png" alt="imagemMain1" width={785} height={705} className="fundo1 relative"/>
                    <Image src="/homeImagens/Group 2.png" alt="imagemMain1" width={585} height={705} className="group1 absolute"/>
                </div>
            </div>

            <div className="servicos">
                <div className="titulo">
                    <hr />
                    <h1>Serviços</h1>
                </div>

                <div className="figuras"></div>
            </div>

            <div className="agendar"></div>

            <div className="feedback"></div>

            <div className="footer"></div>
        </main>
    )
}

/*-----MAIN 1------------*/
export default function Home() {
    return (
      <div className="container">
          
          {head()}

          {inicio()}
      </div>
    );
  }
  