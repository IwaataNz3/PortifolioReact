import React from 'react';
import style from './Main.module.css';

const Footer = () => {
return (
    <>
    <div className={style.footer}>
        <div className={style.sociais}>
           <a href="https://www.instagram.com/juliocesariwata/"><img src="./img/instagram.png" alt="" className={style.social}/></a> 
           <a href="https://www.instagram.com/juliocesariwata/"><img src="./img/linkedin.png" alt="" className={style.social}/></a> 
           <a href="https://github.com/IwaataNz3"><img src="./img/github.png" alt="" className={style.social}/></a> 
        </div>
        <div className={style.contact}>
            <h4><img src="./img/email.png" alt="" />iwatajulio@gmail.com</h4>
            <h4><img src="./img/telefone.png" alt="" />(11) 98860-0084 </h4>
        </div>
        </div> 
    </>

)
}

export default Footer;