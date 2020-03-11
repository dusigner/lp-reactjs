import React, {Component} from 'react';

// Assets
import './lavadora-edge.global.css';

// Components
import Menu from './components/menu/menu';
import Modal from "./components/modal/modal";
import DesignInovador from './layout/design-inovador/design-inovador';
import PerformanceDeLavagem from './layout/performance-de-lavagem/performance-de-lavagem';
import Capacidade from './layout/capacidade/capacidade';
import ConhecaALinha from './layout/conheca-a-linha/conheca-a-linha';
import SliderDesignInovador from "./components/sliderDesignInovador/sliderDesignInovador";
import Headroom from 'react-headroom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class LavadoraEdge extends React.Component {

	state = { 
		show1: false, 
		show2: false, 
		sliderNumber: null,
	};

	showModal1   = e => {  
		this.setState({ 
			show1: !this.state.show1
		});
	};

    showModal2   = e => {  
		this.setState({
			show2: !this.state.show2
		});
	};

	
	changeSlide = (value)=> {
		this.setState({
			sliderNumber: value
		})
	
	}

	componentDidMount() {
		function displayWindowSize(){
			var h = window.innerHeight;
			if(h > 800){
				document.getElementById("seeMore__performance").style.top = "650px";
			}else {
				document.getElementById("seeMore__performance").style.top = (h - 80) + "px";
			}
		}
		window.addEventListener("resize", displayWindowSize);
		displayWindowSize();

    }

	render() { 
		return (
            <div className="lavadora-edge">
				<Headroom>
					<Menu />
				</Headroom>
				<AnchorLink offset={() => 0} href='#performance-de-lavagem' id="seeMore__performance" className="see-more">
					<span className="the-arrow -down">
						<span className="shaft"></span>
						<span className="arrow-anime"></span>
					</span>Saiba mais
                </AnchorLink>
				<DesignInovador openModal={this.showModal1} changeSlide={this.changeSlide} />
				<PerformanceDeLavagem openModal={this.showModal2} />
				<AnchorLink offset={() => -30} href='#capacidade' id="seeMore__capacidade" className="see-more">
					<span className="the-arrow -down">
						<span className="shaft"></span>
						<span className="arrow-anime"></span>
					</span>Saiba mais
                </AnchorLink>
				<Capacidade />
				<ConhecaALinha />
				<Modal 
					setClass="slider" 
					onClose={this.showModal1} 
					show={this.state.show1} >
					<SliderDesignInovador changeSlide={this.state.sliderNumber} />
				</Modal>
				<Modal setClass="lista" onClose={this.showModal2} show={this.state.show2}>
					<div className="modal-list">
						<h1>Remove mais de 40 tipos de manchas</h1>
						<div className="modal-list__view">
							<ul>
								<li>Azeite extra virgem</li>
								<li>Beterraba</li>
								<li>Brigadeiro</li>
								<li>Caldo de ameixa</li>
								<li>Caldo de cereja</li>
								<li>Caneta marca texto</li>
								<li>Canetinha hidrocor</li>
								<li>Caramelo</li>
								<li>Cerveja clara</li>
								<li>Cerveja preta</li>
							</ul>
							<ul>
								<li>Refrigerante de cola</li>
								<li>Cola branca</li>
								<li>Látex escolar</li>
								<li>Creme de pitaya</li>
								<li>Enxaguante bucal</li>
								<li>Refrigerante de uva</li>
								<li>Geleia de amora</li>
								<li>Geleia de morango</li>
								<li>Gema de ovo</li>
								<li>Gordura de bacon</li>
							</ul>
							<ul>
								<li>Groselha</li>
								<li>Iodo</li>
								<li>Iogurte de morango</li>
								<li>Ketchup</li>
								<li>Lápis de cor</li>
								<li>Manga</li>
								<li>Manteiga</li>
								<li>Maquiagem</li>
								<li>Mel</li>
								<li>Mingau de aveia</li>
							</ul>
							<ul>
								<li>Molho barbecue</li>
								<li>Molho de tomate</li>
								<li>Molho de pimenta</li>
								<li>Molho de yakissoba</li>
								<li>Óleo</li>
								<li>Papinha (batata e cenoura / banana e aveia)</li>
								<li>Pasta de dente</li>
								<li>Polpa de mamão</li>
								<li>Polpa de maracujá</li>
							</ul>
							<ul>
								<li>Sangue bovino</li>
								<li>Sorvete de morango</li>
								<li>Suco de laranja e de tomate</li>
							</ul>
						</div>
					</div>
				</Modal>
			</div>
		) }
	}
export default LavadoraEdge;
