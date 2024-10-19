import Link from "next/link"
import Image from "next/image"

/*--------Head-----*/
function head(){
    return(
        <header className="header">
                <div className="logo">
                    <Image src="/public/imageLogoSenac.png" alt="Logo Senac" width={38} height={38}/>
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
export default function Home() {
    return (
      <div className="container">
          
          {head()}
      </div>
    );
  }
  