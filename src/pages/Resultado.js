import React, { Component } from 'react';

import { Botao, Row, Col, CampoEstatico, TituloResultado } from './componentes';

class Resultado extends Component {
	constructor(props) { 
		super(props);

		this.state = this.props.state;
	}

	componentDidMount = () => { 
	}

	onVisible = async (state) => {
		await this.setState(state);
	}

	render() {
		return (
            <div hidden={this.props.hidden}>
				<Row>
					<Col className={"col-lg-8 col-md-8 col-sm-12 col-xs-12 center"}>
						<h3><b>Resultado da simulação</b></h3>
						<CampoEstatico titulo="Data da Aposentadoria" valor={this.state.dataAposentadoria} />

						<CampoEstatico titulo="Saldo de Contas para a data de aposentadoria" valor={`R$ ${this.state.valorFuturo}`} />

						<CampoEstatico titulo="Valor do Resgate Solicitado" valor={`R$ ${this.state.valorSaque}`} />

						<h3>Opções de Recebimento da sua Aposentadoria</h3>
						<br />

						<TituloResultado titulo={"Renda por Prazo Indeterminado"} usaBotaoInfo 
										 textoModal={"Calculada atuarialmente em função da expectativa de vida do participante e dos beneficiários, com ou sem reversão para pensão por morte. Benefício recalculado anualmente."} />

						<Row>
							<Col>
								<div align="middle">
									<div className="table-responsive">
										<table className="table table-result">
											<thead>
												<tr>
													<th>Com Reversão em Pensão</th>
													<th>Sem Reversão em Pensão</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><h4>R$ {this.state.rendaPrazoIndeterminadoPensaoMorte}</h4></td>
													<td><h4>R$ {this.state.rendaPrazoIndeterminadoSemPensaoMorte}</h4></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</Col>
						</Row>
						<br />

						<TituloResultado titulo={"Renda por Prazo Certo"} usaBotaoInfo 
										 textoModal={"Renda por Prazo Certo: recebimento entre 15 e 25 anos, cujo benefício será mantido em quantitativo de cotas e valorizado pela cota do mês anterior ao pagamento."} />

						<Row>
							<Col>
								<div className="table-responsive">
									<table className="table">
										<thead />
										<tbody>
											<tr>
												<td><h4>R$ 220,00 </h4>em 1 ano</td>
												<td><h4>R$ 348,41 </h4>em 2 anos</td>
												<td><h4>R$ 455,93 </h4>em 3 anos</td>
												<td><h4>R$ 680,03 </h4>em 4 anos</td>
												<td><h4>R$ 1020,20 </h4>em 5 anos</td>
												<td><h4>R$ 1250,96 </h4>em 6 anos</td>
											</tr>
											<tr>
												<td><h4>R$ 1283,45 </h4>em 7 anos</td>
												<td><h4>R$ 1683,15 </h4>em 8 anos</td>
												<td><h4>R$ 2003,69 </h4>em 9 anos</td>
												<td><h4>R$ 3283,70 </h4>em 10 anos</td>
												<td><h4>R$ 4420,03 </h4>em 11 anos</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Col>
						</Row>
						<br />

						<TituloResultado titulo={"Renda por percentual do saldo de contas"} usaBotaoInfo 
										 textoModal={"Renda por Percentual do Saldo: aplicação de percentual entre 0,5% a 2,0% sobre o saldo da Conta Assistido, cujo benefício será mantido em quantitativo de cotas e valorizado pela cota do mês anterior ao pagamento."} />
								
						<Row>
							<div className="table-responsive">
								<table className="table">
									<tbody>
										<tr>
											<td>
												<h4>R$ 225,00</h4>&nbsp; 15%
											</td>

											<td>
												<h4>R$ 225,00</h4>&nbsp; 15%
											</td>

											<td>
												<h4>R$ 225,00</h4>&nbsp; 15%
											</td>

											<td>
												<h4>R$ 225,00</h4>&nbsp; 15%
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Row>
						<br />

						<Botao titulo="Voltar" clicar={() => this.props.setPaginaAtiva('informacoes', this.state)} tipo={"secondary"} usaLoading={true} />&nbsp;
						<br className="br-on-mobile" />
						<br className="br-on-mobile" />
					</Col>
				</Row>
            </div>
    	);
  	}
}

export default Resultado;