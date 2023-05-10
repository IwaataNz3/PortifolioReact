import React from 'react';
import style from './Menu.module.css';


const Skills = () => {
    return (
        <>
        <div className={style.skills}>
         <div className={style.header}>
           <div className={style.box}>
            <div className={style.top}>
            <div className={style.local}>
            <img src="./img/pin.png" alt="" />
            <h3>Cotia, São Paulo</h3>
            <hr />
            </div>

            <div className={style.idade}>
            <img src="./img/idade.png" alt="" />
            <h3>17 anos</h3>
            <hr />
            </div>

            <div className={style.escola}>
            <img src="./img/graduacao.png" alt="" />
            <h3>Etec de Cotia</h3>
            <hr />
            </div>
            </div>
            <div className={style.bottom}>
            <a href="/src/assets/CurriculoJulio.pdf" download>
  <button>Baixar Currículo</button>
</a>
            </div>
           </div>

        
         </div>
       
         <div className={style.main}>
         <div className={style.title}>
            <hr></hr>
                <h1>Tecnologias</h1>
            </div>
            <div className={style.itenspai}>
                <div className={style.itens}>
                <img src="./img/html-5.png" alt="" />
                <h3 className={style.cards}>HTML</h3>
                </div>
                <div className={style.itens}>
                <img src="./img/css.png" alt="" />
                <h3 className={style.cards}>CSS</h3>
                </div>
                <div className={style.itens}>
                <img src="./img/react.png" alt="" />
                <h3 className={style.cards}>REACT</h3>
                </div>
                <div className={style.itens}>
                <img src="./img/php.png" alt="" />
                <h3 className={style.cards}>PHP</h3>
                </div>
                <div className={style.itens}>
                <img src="./img/arquivo-xml.png" alt="" />
                <h3 className={style.cards}>XML</h3>
                </div>
                <div className={style.itens}>
                <img src="./img/mysql.png" alt="" />
                <h3 className={style.cards}>MYSQL</h3>
                </div>
              
            </div>
        </div>
        </div>
       
        </>
    )
}
export default Skills;