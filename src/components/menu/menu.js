import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import "./menu.css";

class Menu extends React.Component {

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }
  
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {

        const links = document.querySelectorAll('.links');
        const sections = document.querySelectorAll('.section');

        function changeLinkState() {
            let index = sections.length;

            while(--index && window.scrollY + 55 < sections[index].offsetTop) {}
            
            links.forEach((link) => link.classList.remove('active'));
            links[index].classList.add('active');

            const menu = document.getElementsByClassName('menu-edge')[0];
            const active = document.querySelectorAll('nav .active');
            const height = document.getElementsByClassName("design-inovador")[0].clientHeight;
            if(document.documentElement.scrollTop > height + 300) menu.scrollLeft = active[0].offsetLeft - 10;
            else menu.scrollLeft = active[0].offsetLeft - 10;

        }

        changeLinkState();
        window.addEventListener('scroll', changeLinkState);

    };

    handleScroll() {
		
	}
		 
  

    render() {
        return (
        <div className="menu-edge">
            <nav id="nav">
                <AnchorLink offset={() => 100} href='#design-inovador' className="links">
                    <span>Design Inovador</span>
                </AnchorLink>
                <AnchorLink offset={() => 0} href='#performance-de-lavagem' className="links">
                    <span>Performance de lavagem</span>
                </AnchorLink>
                <AnchorLink offset={() => 55} href='#capacidade' className="links">
                    <span>Capacidade</span>
                </AnchorLink>
                <AnchorLink offset={() => -100} href='#conheca-a-linha' className="links">
                    <span>Conheça a linha</span>
                </AnchorLink>
                {/* <AnchorLink offset={() => 55} href='#vitrine-edge' className="links">
                    <span>Modelos</span>
                </AnchorLink> */}
                    <AnchorLink offset={() => 55} href='#vitrine-edge' className="links">
                        <span>Eu Quero!</span>
                    </AnchorLink>
            </nav>
        </div>
    )
    }
}
export default Menu;