import React,{useRef, useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import{FiArrowLeftCircle} from 'react-icons/fi'
import{FaPencilRuler} from 'react-icons/fa'
import{MdOutlineWork} from 'react-icons/Md'
import{BsArrowLeftSquare} from 'react-icons/Bs'

import App from './../src/App';

const Menunav = () => {
  const [select, setSelect] = useState('select')
  const [select2, setSelect2] = useState('')
  const [select3, setSelect3] = useState('')
  const [select4, setSelect4] = useState('')



  function indicador  (e )  {
    if(e === 1 ){
      
      setSelect('select')
      setSelect2('')
      setSelect3('')
      setSelect4('')
    }else if (e===2){
      setSelect2('select2')
      setSelect('')
      setSelect3('')
      setSelect4('')
    }
    else if (e===3){
      setSelect3('select3')
      setSelect('')
      setSelect2('')
      setSelect4('')
    }
    else if (e===4){
      setSelect('')
      setSelect2('')
      setSelect3('')
      setSelect4('select4')
    }
  
  }

    return (
        <MenuNav>
            {/* <div className="title">

        <h1>Proyectos</h1>
      </div> */}

            <div className="menu">
                <div className="menul">

                  <ul>
                  <li  onClick={()=> indicador(1)} className={`list ${select}`}  >
                      <a href="#">
                          <span className='icon'>
                          <MdOutlineWork ></MdOutlineWork>
                            </span>
                        <span className='title'>Portafolio</span>
                      </a>

                    </li>
                    <li  onClick={()=> indicador(2)} className={`list ${select2}`}  >
                      <a href="#" >
                      <span className='icon'>
                          <FaPencilRuler ></FaPencilRuler>
                            </span>
                        <span className='title'>Ui/Ux</span>
                      </a>

                    </li>
                    <li  onClick={()=> indicador(3)} className={`list ${select3}`}  >
                      <a href="#">
                          <span className='icon'>
                          <MdOutlineWork ></MdOutlineWork>
                            </span>
                        <span className='title'>idk</span>
                      </a>

                    </li>
                    <li  onClick={()=> indicador(4)} className={`list ${select4}`}  >
                      <Links to={"/portafolio-alejandro/"} href="#">
                          <span className='icon'>
                            
                          <BsArrowLeftSquare >
                          <Links />
                          </BsArrowLeftSquare>
                            </span>
                        <span className='title'> Back</span>
                      </Links>

                    </li>
                    <div className="indicador"></div>
                  </ul>

                    
                    {/* <ul className="li">

              <li>Ui/Ux</li>
              <li>Web</li>
              <li>Web Aplicattion</li>
              <li>Ecomoerces</li>
            </ul> */}
                   {/* <Links to={"web"}><ul className="li">Webs</ul></Links> 
                    <ul className="li">Web Aplicattion</ul>
                    <ul className="li">Ui/Ux</ul>
                    <ul className="li">E-Commers</ul>
                    <Icon >


                        <Links to={"/portafolio-alejandro/"}>

                            <FiArrowLeftCircle />
                        </Links>


                    </Icon> */}
                </div>
            </div>
        </MenuNav>
    )
}
const MenuNav = styled.section`
grid-area: 1/ 1/ 4;

 .menu{
  height: 70vh;
  display: flex;
  justify-content: start;
  align-items: center;
 }
 .menul{
  position: relative;
  width: 70px;
  height: 295px;
  background: white;
  border-radius: 35px;
  box-shadow: 0 10px 10px #8d8989;

    ul{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    li{
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;
    }
    a{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      color: black;
      font-weight: 500;
    }
    .icon{
 
      position: relative;
      display: block;
      line-height: 75px;
      text-align: center;
      font-size: 24px;

    }
    .title{
      position: absolute;
      top: 25%;
      left: 110px;
      color: white;
      background: black;
      transform: translate(-50%);
      padding: 5px 10px;
      border-radius: 6px;
      transition: 0.5s;
      box-shadow: 0 5px 15px rgba(0,0,0,1);
      opacity: 0;
      visibility: hidden;
    }

    li:hover  a .title{
      transform: translateX(2px) translateY(15%);

      opacity: 1;
      visibility: visible;
     }
     li:hover .title::before{
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        background: black;
        left: -5px;
        top: 35%;
        transform: rotate(45deg) ;
        border-radius: 2px;
     }

      .indicador{
        /* transform: translateY(calc(70px * 0)) ; */
        position: absolute;
        left: 0;
        width: 70px;
        height: 70px;
        transition: 0.2s;
     }
     .indicador::before{
      content: '';
      top: -20%;
      left: 50%;
      position: absolute;
      width: 50px;
      height: 50px;
  
      transform: translate(-50%, 50%);
      border-radius: 50%;
      transition: 0.8s;
    }
    .select4 ~ .indicador {
 
      transform: translateY(calc(70px * 3)) ;
   }
    .select3 ~ .indicador {
 
      transform: translateY(calc(70px * 2)) ;
   }
   .select2 ~ .indicador {
     
     transform: translateY(calc(70px * 1)) ;
     
   }
   .select{
     transform: translateY(calc(70px * 0)) ;
  } 


    .select4 ~ .indicador::before {
        background: #e9d62a;
   }

    .select3 ~ .indicador::before {
        background: aqua;
   }

   .select2 ~ .indicador::before {
     background: #3c40c6;

     
   }

   .select ~ .indicador::before {
    background:#f53b57;
   
  } 


 }
/* 
  .menu{
    
    height: 100%;
    width: 100%;
    background: #253139;
   
    border-radius: 2rem;
    grid-area: 1/ 1/ 4;
    .menul{
      height: 100%;
      width: 100%;
      display: grid;
    align-content: center;
    justify-content: center;
    letter-spacing: 1px;

    
    ul{
  
      margin-bottom: 1rem;
     
      cursor: pointer;
        color: white;
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.5rem;
      li{
        list-style: none;
      }
     
    }
}
    }

     */
    `
    const Icon = styled.div`
    Link{
      text-decoration: none;
      color: white;
    }
    text-align: center;
    color: white;
    font-size: 3.2rem;
    
    
    `
    const Links = styled(Link)`
   
    `
export default Menunav