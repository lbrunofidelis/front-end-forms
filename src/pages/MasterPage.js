import React, { Component } from 'react';
import { Informacoes, Resultado } from './';
import packageJson from '../../package.json';

class MasterPage extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            pagina: 'informacoes',    // "informacoes" ou "resultado"

            // States página Informacoes
			nome: "",
			dataNascimento: "",
			remuneracaoInicial: "",
			percentualContribuicao: "",
			contribuicaoFacultativa: "",
			nascimentoConjugue: "",
			nascimentoFilhoInvalido: "",
			nascimentoFilhoMaisNovo: "",
			idadeAposentadoria: "",
			percentualSaque: "",
            taxaJuros: "1",

            // States de erros
            erros: [],
            erroDataNascimento: false,
            erroNascimentoConjugue: false,
            erroNascimentoFilhoInvalido: false,
            erroNascimentoFilhoMaisNovo: false,

            // States página Resultado
            valorFuturo: "221.489,51",
            dataAposentadoria: "21/05/2048",
            valorSaque: "4.385,00",
            idadeDependente: "",
            fatorAtuarialPensaoMorte: "",
            fatorAtuarialSemPensaoMorte: "",
            rendaPrazoIndeterminadoPensaoMorte: "551,90",
            rendaPrazoIndeterminadoSemPensaoMorte: "496,50",
            rendaCurtoPrazo: [
                "226,70",
                "212,53",
                "200,03",
                "188,91",
                "178,97",
                "170,02",
                "161,93",
                "154,57",
                "147,85",
                "141,68",
                "136,02"
            ]
        };

        this.informacoes = React.createRef();
        this.resultado = React.createRef();
    }

    setPaginaAtiva = async (pagina, state) => {
        window.scrollTo(0, 0);

        await this.setState(state);

        await this.setState({ pagina: pagina });

        if(pagina === 'informacoes')
            this.informacoes.current.onVisible(this.state);
        else if(pagina === 'resultado') 
            this.resultado.current.onVisible(this.state);

    }

    renderConteudoPagina = () => {
        return (
            <div>
                <Informacoes ref={this.informacoes} state={this.state} setPaginaAtiva={this.setPaginaAtiva} hidden={this.state.pagina !== 'informacoes'} />
                <Resultado ref={this.resultado} state={this.state} setPaginaAtiva={this.setPaginaAtiva} hidden={this.state.pagina !== 'resultado'} />
            </div>
        );
    }

	render() {
		return (
            <div className="container">
                <div align="center">
                    <img className="logo figure-img" src="imagens/logo.png" alt="" />
                    <h2>Bem vindo ao</h2>
                    <h2>Simulador de Benefício do Plano PREV</h2>
                </div>
                <br />

                <div align="center">
                    {this.renderConteudoPagina()}
                </div>

                <div align="center" className={"mt-5"}>
                    Simulador PREV v{packageJson.version}
                </div>
            </div>
    	);
  	}
}

export default MasterPage;
