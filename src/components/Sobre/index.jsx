import React from 'react';
import style from './Menu.module.css';


const Sobre = () => {
    return (
        <>
        <div className={style.sobre}>
           <div className={style.mid1}>
            <img src="./img/about.svg" alt="" />
           </div>
           <div className={style.mid2}>
            <div className={style.header}><h2>Sobre mim <hr /> </h2>
           </div>
           <div className={style.sobreTexto}>
           <p>⠀⠀Olá, me chamo Julio César Iwata, mas pode me chamar de apenas Julio. 
           Sou estudante de programação na Etec de Cotia, aonde eu curso Desenvolvimento de Sistemas.
           Assim que eu entrei e fui me aprofundando nos estudos, despertei uma paixao enorme nas areas
           de front-end e design.<br/><br />
           ⠀⠀Hoje estou disponivel para o mercado de trabalho para desenvolver minhas habilidades pessoais,
           em virtude de que estou em um processo de aprenziado contínuo <br /><br />
           Me considero bastante promissor, pois sempre tenho vontade de aprender coisas novas. <br />
           </p>
           <div className={style.premio}>
            <img src="./img/medalha.png" alt="" />
            <p>1ºLugar Hackhaton Etec de Cotia</p>
           </div>
           </div>
           </div>
        </div>
        </>
    )
}
export default Sobre;