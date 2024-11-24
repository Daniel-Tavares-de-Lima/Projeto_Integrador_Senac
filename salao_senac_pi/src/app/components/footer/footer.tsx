import Image from "next/image"

const Footer = () => {
    return(

        <footer className="footer flex flex-col items-center">

                <div className="container1 flex justify-between">
                    <div className="sobre">
                        <div className="titulo flex">
                            <Image src="/homeImagens/imageLogoSenac.png" alt="Logo Senac" width={80} height={70}></Image>
                            <h1>Salão Senac</h1>
                        </div>

                        <div className="texto">
                            <p>O Salão Escola do SENAC oferece um ambiente moderno e bem equipado, o salão proporciona atendimentos de qualidade a preços acessíveis, enquanto promove o aprendizado dos estudantes, garantindo uma experiência enriquecedora para ambos os lados.</p>
                        </div>
                    </div>

                    <div className="contato flex flex-col justify-between text-center">
                        <h1>Contato</h1>

                        <p>81 3413.6688 / 6647</p>

                        <p>senac@pe.senac.br</p>
                    </div>

                    <div className="horario flex flex-col justify-between">
                        <h1 className="text-center">Horário de Serviço</h1>

                        <p>Segunda a sexta-feira das 8h às 18h Sábados das 9h às 15h Atendimento com horário marcado.</p>
                    </div>
                </div>

                <div className="container2 flex justify-between items-center">
                    <div className="logo">
                        <Image src="/homeImagens/logoSenac.png" alt="Logo Senac" width={100} height={100}></Image>
                    </div>

                    <div className="direitos">
                        <p>© Todos os Direitos Reservados - 2024.</p>
                    </div>

                    <div className="redes">
                        <Image src="/homeImagens/SocialMedia.png" alt="Rede Sociais" width={300} height={300}></Image>
                    </div>
                </div>
            </footer>
    )
}

export default Footer