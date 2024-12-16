import Image from "next/image"
import Link from "next/link"

const Header = () => {
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

export default Header