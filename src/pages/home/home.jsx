import React, {useEffect, useState} from 'react';
import './home.css'
import modelo from '../../assets/modelo.png'
import formas from '../../assets/formas.png'
import logo from '../../assets/logo.png'
import titulo from '../../assets/TITULO.png'
import redes from '../../assets/redes.png'


export default (() =>{
    const [variavel, setVariavel] = useState([])
    return (
        <div className='page'>
        <div className='conteudo'>
            <div className="esquerda">
                <div>
                    <img src={logo} alt="" className="logo"/>
                </div>
                <div className='social'>
                <img src={redes} alt="" className="social-medias"/>
                </div>
            </div>
            <div className='direita'>
                <img src={titulo} alt="" className='titulo'/>
                <p className='introducao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe quod repellendus quis sed quasi facilis adipisci sequi iusto. Sit praesentium cumque iusto doloribus vero odit consectetur doloremque exercitationem qui.</p>
                <div className='criar-conta'>CRIAR CONTA</div>
            </div>
        </div>
        <img src={modelo} alt="" className='modelo'/>
        <img src={formas} alt="" className='formas'/>
        </div>
        
    )
})