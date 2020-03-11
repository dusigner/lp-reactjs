// Components
import React from 'react';
import Title from '../../components/title/title';
import { Picture } from 'react-responsive-picture';
import LazyLoad from 'react-lazyload';

import Slider from "react-slick";

//components
import Button from '../../components/button/button';

//IMG
const mobileLimpeza = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/manchas-btp.gif"
const desktopLimpeza = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/manchas-btp.gif"
const gifLimpeza = "https://res.cloudinary.com/visie-pad-es-web/image/upload/v1579640066/manchas-btp_pgovjy.gif";

const mobileCuidado = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/ezgif-4.png"
const desktopCuidado = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/ezgif-4.png"
const gifCuidado = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/ezgif-4.png";

const mobileRobustez = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/edredom.gif"
const desktopRobustez = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/edredom.gif"
const gifRobustez = "https://res.cloudinary.com/visie-pad-es-web/image/upload/v1579640065/edredom_yyrmnz.gif";



//Validador da troca
let valiP = 0;

class PerformanceDeLavagem extends React.Component {

    constructor (props) {
        super(props)
        this.changePerformance = this.changePerformance.bind(this);
    }

    changePerformance(numero) {
        var secPai = document.querySelectorAll('.performance-de-lavagem');
        var nav_slick_ = document.querySelectorAll('.performance-de-lavagem_slider-nav__nav');
        nav_slick_.forEach((itens) => {
            itens.classList.remove('-active');
        });
        secPai.forEach((itens) => {
            itens.classList.remove('slider-1');
            itens.classList.remove('slider-2');
            itens.classList.remove('slider-3');
        })
        
        nav_slick_[numero].classList.add('-active');
        this.sliderPerformance.slickGoTo(numero);
        secPai[0].classList.add('slider-'+(numero + 1));
    }


    componentDidMount() {

        var nav_slick = document.querySelectorAll('.performance-de-lavagem_slider-nav__nav');
        
        nav_slick.forEach((element,index) => {
            element.addEventListener("click", ()=>{
                this.changePerformance(index);
            });
        });

        // var imgs = document.querySelectorAll('.performance-de-lavagem_slider picture img');
        // imgs.forEach((element,index) => {
        //     this.changeImage(element);
        // });
    }


    // changeImage = e => {
    //     console.log(e.getAttribute('data-gif'));
    //     var link = e.getAttribute('data-gif');
    //     e.parentElement.querySelectorAll('source').forEach((element,index) => {
    //         element.srcset=link;
    //     });
    // }


    
    render() {

        const settingsPerformance = {
            dots: false,
            arrows: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
            centerMode: true,
            centerPadding: "20px",
            fade: true,
            beforeChange: (current, next) => {
                this.changePerformance(next);
            },
		};

        return (
            <div id="performance-de-lavagem" className="performance-de-lavagem section slider-1">

                <h1>Performance de lavagem</h1>

                <div className="performance-de-lavagem_slider-nav">
                    <div className="performance-de-lavagem_slider-nav__nav -active" data-tag="limpeza">
                        <svg width="69" height="58" viewBox="0 0 69 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5879 29.8707C51.5879 21.3084 44.623 14.3515 36.0509 14.3515C33.6185 14.3515 31.2183 14.9401 29.0539 16.0318C28.7431 15.6679 28.411 15.3147 28.0359 15.0044C26.2894 13.5381 24.0713 12.8317 21.8104 13.0243C19.5388 13.217 17.4815 14.2873 16.0135 16.0211C14.5455 17.7657 13.8383 19.9705 14.0312 22.2395C14.224 24.5086 15.2848 26.5635 17.0314 28.0298C18.0601 28.8968 19.2388 29.4854 20.5031 29.7958C20.5031 29.8172 20.5031 29.8386 20.5031 29.8707C20.5031 38.4331 27.468 45.39 36.0402 45.39C44.6123 45.39 51.5879 38.4224 51.5879 29.8707ZM15.1134 22.1539C14.942 20.1739 15.5634 18.2366 16.8386 16.7168C18.1244 15.197 19.9245 14.2659 21.9068 14.0946C23.9106 13.9234 25.8286 14.5441 27.3502 15.8178C28.8717 17.1021 29.8039 18.9002 29.9754 20.8803C30.329 24.9795 27.2752 28.5864 23.1712 28.9396C21.1675 29.1001 19.2495 28.4901 17.7279 27.2164C16.2064 25.9428 15.2741 24.134 15.1134 22.1539ZM36.0509 44.3197C28.1109 44.3197 21.6604 37.8979 21.5961 29.9885C21.9068 30.0206 22.2176 30.042 22.5283 30.042C22.7748 30.042 23.0212 30.0313 23.2677 30.0099C27.9609 29.6139 31.4434 25.4825 31.0469 20.7946C30.929 19.3819 30.4683 18.0547 29.7182 16.8988C31.6791 15.9462 33.8543 15.4218 36.0509 15.4218C44.023 15.4218 50.5164 21.9078 50.5164 29.8707C50.5164 37.8337 44.0337 44.3197 36.0509 44.3197Z" fill="white"/>
                            <path d="M36.6402 17.6587L36.533 18.729C41.9228 19.2749 46.2517 23.3848 47.0661 28.7363L48.1269 28.5757C47.2375 22.7426 42.5121 18.2581 36.6402 17.6587Z" fill="white"/>
                            <path d="M15.8527 21.7794L16.7421 21.7901C16.7849 18.9646 18.7351 16.535 21.4889 15.8714L21.2746 15.0045C18.135 15.7644 15.9063 18.5471 15.8527 21.7794Z" fill="white"/>
                            <path d="M29.6218 14.3515C31.1005 14.3515 32.3006 13.1527 32.3006 11.6757C32.3006 10.1987 31.1005 9 29.6218 9C28.1431 9 26.943 10.1987 26.943 11.6757C26.943 13.1527 28.1431 14.3515 29.6218 14.3515ZM29.6218 10.0703C30.5111 10.0703 31.229 10.7874 31.229 11.6757C31.229 12.5641 30.5111 13.2812 29.6218 13.2812C28.7324 13.2812 28.0145 12.5641 28.0145 11.6757C28.0145 10.7874 28.7431 10.0703 29.6218 10.0703Z" fill="white"/>
                            <path d="M48.4269 41.8259C47.2697 41.8259 46.3375 42.7677 46.3375 43.9129C46.3375 45.0581 47.2804 46 48.4269 46C49.5734 46 50.5164 45.0581 50.5164 43.9129C50.5164 42.7677 49.5842 41.8259 48.4269 41.8259ZM48.4269 44.9297C47.859 44.9297 47.409 44.4695 47.409 43.9129C47.409 43.3564 47.8697 42.8962 48.4269 42.8962C48.9841 42.8962 49.4449 43.3564 49.4449 43.9129C49.4449 44.4695 48.9948 44.9297 48.4269 44.9297Z" fill="white"/>
                            <path d="M19.8603 41.5369L18.9066 39.8138L17.9637 41.5369L16.2278 42.4895L17.9637 43.4314L18.9066 45.1652L19.8603 43.4314L21.5854 42.4895L19.8603 41.5369Z" fill="white"/>
                            <path d="M20.5461 37.1381L19.9782 36.0999L19.4103 37.1381L18.3709 37.7054L19.4103 38.2726L19.9782 39.3108L20.5461 38.2726L21.5855 37.7054L20.5461 37.1381Z" fill="white"/>
                            <path d="M24.0928 42.1043L23.707 41.3979L23.3106 42.1043L22.6034 42.4896L23.3106 42.8856L23.707 43.592L24.0928 42.8856L24.8 42.4896L24.0928 42.1043Z" fill="white"/>
                        </svg>
                        <p>Limpeza</p>
                    </div>
                    <div className="performance-de-lavagem_slider-nav__nav" data-tag="cuidado">
                        <svg width="69" height="58" viewBox="0 0 69 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.9243 13L53.0149 16.6732C51.0408 16.0358 48.8339 16.5219 47.3589 17.9696L45.5734 19.709C44.2315 21.0378 41.7806 21.0054 40.4387 19.6009L38.8196 18.0236C36.657 15.9169 33.1304 15.9169 30.9567 18.0236L29.1601 19.7738C27.8182 21.1026 25.3673 21.0702 24.0254 19.6658L22.4063 18.0668C20.7206 16.4247 18.1699 16.0466 16.0738 17.0297L15.0757 13L14 13.2485L20.7539 40.6678H48.2461L55 13.2485L53.9243 13ZM47.37 39.5983H21.63L16.34 18.1209C18.059 17.2026 20.2104 17.4619 21.6189 18.8339L23.238 20.4112C24.1141 21.3403 25.3673 21.8697 26.6538 21.8697C27.8848 21.8697 29.0936 21.3835 29.9475 20.5301L31.7441 18.7799C33.4853 17.0945 36.3021 17.0945 38.0322 18.7799L39.6402 20.3464C40.5164 21.2755 41.7695 21.8049 43.056 21.8049C44.287 21.8049 45.4958 21.3187 46.3497 20.4652L48.1242 18.7367C49.333 17.5591 51.1296 17.181 52.7265 17.7319L47.37 39.5983Z" fill="white"/>
                            <path d="M47.8136 41.759H21.1974V42.8393H47.8136V41.759Z" fill="white"/>
                            <path d="M47.8136 43.9196H21.1974V45H47.8136V43.9196Z" fill="white"/>
                        </svg>
                        <p>Cuidado</p>
                    </div>
                    <div className="performance-de-lavagem_slider-nav__nav" data-tag="robustez">
                        <svg width="69" height="58" viewBox="0 0 69 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.2632 26.3205C53.0637 24.6326 54.3014 18.7813 45.862 19.0063H22.6817C14.1297 19.0063 13.1169 26.3205 13.1169 29.8088C13.1169 29.9213 13.1169 30.1464 13.1169 30.2589C13.4545 35.0975 17.3929 39.0359 22.5691 39.1485L48.225 39.3735C52.7261 39.3735 55.6518 36.6729 55.8768 32.5094C55.9893 29.9213 54.639 26.8831 51.2632 26.3205ZM51.2632 26.3205H23.2443C19.4184 26.3205 19.5309 32.5094 23.4693 32.5094H47.7749" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p>Robustez</p>
                    </div>
                </div>

                <Slider
                    className="performance-de-lavagem_slider"
                    ref={sliderPerformance => this.sliderPerformance = sliderPerformance}  
                    {...settingsPerformance}
                >
					<div className="performance-de-lavagem_single" data-tag="ciclo-tira-manchas-pro">
                        <div className="-dif">
                            <Title setClass="left" textMF="Ciclo" textMS="Tira Manchas Pro" textDF="Ciclo" textDS="Tira Manchas Pro" />
                            <p>Ciclo-Tira Manchas alterna as condições ideais de temperatura e agitação para máxima performance de lavagem, <b>removendo mais de 40 tipos de manchas¹</b> sem danificar os tecidos.</p>
                            <small className="only-desktop">¹ Conforme teste interno de percepção realizado com 41 manchas em água fria e 44 em água quente em tecido de algodão. Verifique a lista de manchas abaixo.</small>
                            <br />
                            <span onClick={e => {this.props.openModal();}}>
                            <Button label="Lista de manchas" setClass="not_responsive"/>
                            </span>
                        </div>
                        <div className="-dif">
                            <div className="border-displaced"> 
                                <LazyLoad height={'100%'} offset={0}> 
                                    <Picture
                                        className="border-displaced"
                                        sources = {[
                                            {
                                                srcSet: gifLimpeza,
                                                media: "(max-width: 671px)",
                                            },
                                            {
                                                srcSet: gifLimpeza,
                                                media: "(min-width: 672px)",
                                            }
                                        ]}
                                    />
                                </LazyLoad>  
                            </div>
                            <small className="only-mobile">¹ Conforme teste interno de percepção realizado com 41 manchas em água fria e 44 em água quente em tecido de algodão. Verifique a lista de manchas abaixo.</small>
                            <div className="only-desktop">
                                <p className="performance-de-lavagem_single_letter">Inclusive aquelas<br/>manchas mais dificeis...</p>
                                <p className="performance-de-lavagem_single_dot">Canetinha</p>
                                <p className="performance-de-lavagem_single_dot">Desodorante - Tipo Roll On</p>
                                <p className="performance-de-lavagem_single_dot">Gordura</p>
                            </div>
                        </div>
                    </div>
					<div className="performance-de-lavagem_single" data-tag="ciclo-antibolinhas">
                        <div>
                            <Title setClass="left" textMF="Ciclo" textMS="Antibolinhas" textDF="Ciclo" textDS="Antibolinhas" />
                            <p>Ciclo com lavagem especial que <b>previne a formação de bolinhas na roupa</b> durante o processo de lavagem mantendo-as com aparência de novas por mais tempo.²</p>
                            <small className="only-desktop">² Comparado ao ciclo "dia a dia" na configuração padrão da mesma lavadora. Teste interno realizado em tecidos meia-malha (Jersey), 94% algodão, 6% elastano.</small>
                        </div>
                        <div>
                            <div className="border-displaced">    
                                <LazyLoad height={'100%'} offset={0}>
                                    <Picture
                                        className="border-displaced"
                                        sources = {[
                                            {
                                                srcSet: gifCuidado,
                                                media: "(max-width: 671px)",
                                            },
                                            {
                                                srcSet: gifCuidado,
                                                media: "(min-width: 672px)",
                                            }
                                        ]}
                                    />
                                </LazyLoad>
                            </div>
                            <small className="only-mobile">² Comparado ao ciclo "dia a dia" na configuração padrão da mesma lavadora. Teste interno realizado em tecidos meia-malha (Jersey), 94% algodão, 6% elastano.</small>
                        </div>
					</div>
					<div className="performance-de-lavagem_single" data-tag="ciclo-edredom">
                        <div>
                            <Title setClass="left" textMF="Ciclo" textMS="Edredom" textDF="Ciclo" textDS="Edredom" />
                            <p>Cama, Banho, Jeans, Casaco, Edredom... até Edredom pode ser lavado sem preocupação e sem esforço!³</p>
                            <small className="only-desktop">³ Conforme instruções de lavagem no guia rápido do produto.</small>
                        </div>
                        <div>
                            <div className="border-displaced"> 
                                <LazyLoad height={'100%'} offset={0}> 
                                    <Picture
                                        className="border-displaced"
                                        sources = {[
                                            {
                                                srcSet: gifRobustez,
                                                media: "(max-width: 671px)",
                                            },
                                            {
                                                srcSet: gifRobustez,
                                                media: "(min-width: 672px)",
                                            }
                                        ]}
                                    />
                                </LazyLoad>  
                            </div>
                            <small className="only-mobile">³ Conforme instruções de lavagem no guia rápido do produto.</small>
                        </div>
					</div>
				</Slider>
                
                <LazyLoad height={'100%'} offset={900}> 
                    <img className="slider-1" src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/bg-slider-1.png" alt="Slider 1" />
                    <img className="slider-2" src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/bg-slider-2.png" alt="Slider 2" />
                    <img className="slider-3" src="https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/bg-slider-3.png" alt="Slider 3" />
                </LazyLoad>  
            </div>
        )
    }
}
export default PerformanceDeLavagem;