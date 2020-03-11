import React from 'react';
import { Picture } from 'react-responsive-picture';
import LazyLoad from 'react-lazyload';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//components
import Button from '../../components/button/button';

//imgs
const imgSmallJpeg = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_563,h_605/2020-lavadora-edge/destaque-larger_j31ho8.jpeg';
const imgMediumJpeg = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1366,h_724/2020-lavadora-edge/destaque-larger_j31ho8.jpeg';
const imgLargerJpeg = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1917/2020-lavadora-edge/destaque-larger_j31ho8.jpeg';

const imgSmallWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_563,h_605/2020-lavadora-edge/destaque-larger_j31ho8.webp';
const imgMediumWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1366,h_724/2020-lavadora-edge/destaque-larger_j31ho8.webp';
const imgLargerWebp = 'https://res.cloudinary.com/brastempwebp/image/upload/c_fill,g_faces,w_1917/2020-lavadora-edge/destaque-larger_j31ho8.webp';

class DesignInovador extends React.Component {
 
    render() {

        return (
            <div id="design-inovador" className="design-inovador section">
                
                <h1>Certeza das suas roupas nas mãos de quem entende! </h1>
                <h2>Explore a nova linha de lavadoras Brastemp.</h2>

                <div className="wrap-buttons">
                    <span 
                        onClick = { e => {
                            this.props.openModal();
                            this.props.changeSlide(0);
                            } 
                        } className="btn-left1" data-tag="painel-multifuncional">
                        <Button label="Painel multifuncional"/>
                    </span>
                    <span onClick={e => {
                        this.props.openModal(); 
                        this.props.changeSlide(1);
                        }} className="btn-left2" data-tag="soft-close">
                        <Button label="Soft close" />
                    </span>
                    <span onClick={e => {
                        this.props.openModal();
                        this.props.changeSlide(3);
                        
                        }} className="btn-right1" data-tag="agua-quente">
                        <Button label="Água quente" />
                    </span>
                    <span onClick={e => {
                        this.props.openModal();
                        this.props.changeSlide(2);
                        
                        }} className="btn-right2" data-tag="cesto-em-inox">
                        <Button label="Cesto em Inox" />
                    </span>
                    
                        <Picture
                            sources = {[
                                {srcSet: imgSmallJpeg,    media: "(max-width: 555px)",    type: "image/jpeg"},
                                {srcSet: imgMediumJpeg,    media: "(max-width: 1366px)",    type: "image/jpeg"},
                                {srcSet: imgLargerJpeg,    media: "(min-width: 1367px)",    type: "image/jpeg"},
           
                                {srcSet: imgSmallWebp,    media: "(max-width: 555px)",    type: "image/webp"},
                                {srcSet: imgMediumWebp,    media: "(max-width: 1366px)",    type: "image/webp"},
                                {srcSet: imgLargerWebp,    media: "(min-width: 1367px)",    type: "image/webp"},
                            ]}
                        />
                </div>
            </div>
        )
    }
}
export default DesignInovador;