import React from 'react';
import style from './Menu.module.css';
import {Link} from 'react-router-dom';
const Menu = () => {
    
return (
<>

<div className={style.menu}>
    <div className={style.logo}> <h2>Iwa<span>a</span>ta</h2> </div>
    <div className={style.lista}>
        <ul className={style.itens}>
    
    <li>Home</li>
    <li>Skills</li>
    <li>More</li>
    <li>Contact</li>
   
        
       
        </ul>
    </div>
</div>
</>
)
}
export default Menu;
