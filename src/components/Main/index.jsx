import React from 'react';
import style from './Main.module.css';

const Main = () => {
return (
    <>
    <div className={style.main}>
        <div className={style.infMain}>
        <div className={style.textos}>
            <div className={style.texto1}><h3>Olá, eu sou</h3></div>
            <div className={style.texto2}><h1>Júlio César Iwata</h1></div>
            <div className={style.texto3}><h2>Dev. Front-End</h2></div>
            <button className={style.botao}>Começar</button>
        </div>
        </div>
        <div className={style.ftMain}>
            <img src="./img/eu.png" alt="" className={style.foto} />
            
        </div>
       
    </div>
    </>

)
}

export default Main;