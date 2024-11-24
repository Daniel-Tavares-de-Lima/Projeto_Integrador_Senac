import Image from "next/image"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home(){
    return(
        <div className="container">
            <Header/>
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



                    <div className="servicos flex flex-col items-center">
                        <div className="titulo flex">
                            <div className="texto flex justify-center items-center">
                                <hr/>
                                <h1>Serviços</h1>
                            </div>
                        </div>

                        <div className="figuras flex justify-center items-center">

                            <div className="group">
                                <div className="span">
                                    <Image src="/homeImagens/CorteETesoura.png" alt="Corte e Tesoura" width={74} height={74}></Image>
                                </div>

                                <p>Corte e Pintura</p>
                            </div>

                            <div className="group">
                                <div className="span">
                                    <Image src="/homeImagens/Epilacao.png" alt="Epilação" width={74} height={74}></Image>
                                </div>

                                <p>Epilação</p>
                            </div>

                            <div className="group">
                                <div className="span">
                                    <Image src="/homeImagens/ServicosDeEstetica.png" alt="Serviços de Estéticas" width={74} height={74}></Image>
                                </div>

                                <p>Serviços de Estética</p>
                            </div>

                            <div className="group">
                                <div className="span">
                                    <Image src="/homeImagens/ManicureEPedicure.png" alt="Manicure e Pedicure" width={74} height={74}></Image>
                                </div>

                                <p>Manicure e pedicure</p>
                            </div>

                            <div className="group">
                                <div className="span">
                                    <Image src="/homeImagens/Mais.png" alt="E muito mais" width={74} height={74}></Image>
                                </div>

                                <p>E muito mais</p>
                            </div>
                        </div>

                        <div className="figuras"></div>
                    </div>


                    <div className="agendar flex items-end">
                        <div className="imagem">
                            <Image src="/homeImagens/apresentacao.png" alt="apresentação Mulheres" width={935} height={665}></Image>
                        </div>

                        <div className="conteudo text-left">
                            <div className="textos">
                                <h1>Corra e garanta um serviço de excelência</h1>

                                <p>Ao optar por trabalhar com alunos e profissionais altamente qualificados, você está garantindo acesso a talentos que se destacam pela excelência em suas áreas de atuação. </p>

                                <button>Agende aqui</button>
                            </div>
                        </div>
                    </div>

                    <div className="feedback servicos">
                        <div className="titulo flex">
                            <div className="texto flex justify-center items-center">
                                <hr/>
                                <h1>Feedback</h1>
                            </div>
                        </div>

                        
                        <div className="group flex justify-between">
                            <div className="spanFeedback">
                                <div className="titulo">
                                    <h2>Nome e Sobrenome</h2>
                                    <Image src="/homeImagens/estrelas.png" alt="Avaliação" width={200} height={40}></Image>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus amet repellat sunt minima praesentium? Dolores impedit hic praesentium laborum quam neque velit corporis et. Esse minima corporis id alias?</p>
                            </div>

                            <div className="spanFeedback">
                                <div className="titulo">
                                    <h2>Nome e Sobrenome</h2>
                                    <Image src="/homeImagens/estrelas.png" alt="Avaliação" width={200} height={40}></Image>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus amet repellat sunt minima praesentium? Dolores impedit hic praesentium laborum quam neque velit corporis et. Esse minima corporis id alias?</p>
                            </div>
                        </div>                   
                    </div>
                </main>
            <Footer/>
        </div>
    )
}