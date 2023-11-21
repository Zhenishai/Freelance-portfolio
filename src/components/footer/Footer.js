import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from"./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import Linkedin from "./../../img/icons/linkedIn.svg";

import "./style.css"


const Footer = () => {
    return ( 
        <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="social">
                    <li class="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li class="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    <li class="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li class="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    <li class="social__item"><a href="#!"><img src={Linkedin} alt="Link" /></a></li>
                </ul>
                <div class="copyright">
                    <p>© 2023</p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;