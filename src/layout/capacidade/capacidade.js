import React from 'react';
//components
import Title from '../../components/title/title';
import { Picture } from 'react-responsive-picture';

//IMG
const capacidadeEstatica = 'https://img.imageboss.me/cdn/http://bimg.visie.com.br/media/capacidade-btp.gif';
const capacidadeAnimada = 'https://res.cloudinary.com/visie-pad-es-web/image/upload/v1579266117/capacidade-btp_pr33sh.gif';

//Validador da troca
let vali = 0;

var modal1s = '';
var modal4s = '';
var modal10s = '';

class Capacidade extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll);
    }
     
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = () => {

        const secCapacidade = document.getElementById("capacidade");

        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                secCapacidade.querySelectorAll('source').srcset=capacidadeAnimada;
            } 
        }, { threshold: [0.5] });
        
        observer.observe(document.querySelector("#capacidade"));
    }

    render() {
        return (
            <div id="capacidade" className="capacidade section">

                <Title setClass="center" textMF="Até 14 kg de" textMS="capacidade" textDF="Até 14kg de capacidade"/>
                
                <p>Lavadora com tamanho externo de 12kg,<br className="desktop"></br> mas<br className="mobile"></br> com capacidade para até 14kg!</p>

                <div className="border-displaced">
                    <Picture
                        className="border-displaced"
                        sources = {[
                            {
                                srcSet: capacidadeEstatica,
                                media: "(max-width: 671px)",
                            },
                            {
                                srcSet: capacidadeEstatica,
                                media: "(min-width: 672px)",
                            }
                        ]}
                    />
                </div>

            </div>
        )
    }
}
export default Capacidade;