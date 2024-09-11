import "./index.sass"
import logo from "../../assets/logoblue.svg"

export function Sobre() {
	return (
		<div id="sobre">
			<div className="texto">
				<p>Bem, até aqui...</p>
				<div className="paragrafos">
                    <p>
                        Estou desenvolvendo soluções a algum tempo e com o projeto de extensão admito
                        que está sendo o mais diferente, me traz um novo aprendizado a cada dia, claro
                        que os outros não ficam para traz.
                    </p>
                    <p>
                        Caminhando aos pouco para projetos cada vez maiores e mais complexos, gosto
                        sempre de encontrar a melhor solução, nem sempre mirabolante, muitas vezes um
                        ponto já muda muita coisa.
                    </p>
                    <p>
                        Depois de ter concluído meus estudos no Centro Universitário Estácio de Ribeirão
                        Preto, comecei a ampliar os conhecimentos para assim ter uma visão e pensamento
                        que ajudasse a sanar tipo diferentes de problemas.
                    </p>
                    <p>
                        Sempre interlaçado em tecnologia, começando com peças eletrônicas, montando
                        novos carrinhos, depois arrumando computadores, modificando jogos, criando
                        jogos, por pura diversão mesmo, então iniciando na programação, automação
                        industrial, robótica, alguns projetos pequenos como sites, ou na criação de
                        cartões de visita.
                    </p>
                </div>
			</div>
			<img src={logo} alt="sheep code" />
		</div>
	)
}
