import { Contato } from './Contact';
import { CiHeart } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import headerIcon from './content/HeaderIcon.png'
import mainSecIcon from './content/mainSecIconIcon.png'
import { FaLocationDot } from "react-icons/fa6";
import { RxDrawingPinFilled } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function App() {
  
  
    const faqData = [
      { question: 'Qual é a diferença entre manutenção preventiva e corretiva?', answer: 'A manutenção preventiva é realizada regularmente para prevenir problemas antes que ocorram, enquanto a corretiva trata de reparos após a identificação de um problema. Recomendamos a manutenção preventiva para evitar surpresas e prolongar a vida útil do seu veículo.' },
      { question: 'Com que frequência devo realizar a troca de óleo do meu carro?', answer: 'Recomendamos trocar o óleo do motor a cada 5.000 a 7.500 quilômetros, dependendo do tipo de óleo e das condições de condução. Manter essa regularidade ajuda a garantir o bom funcionamento do motor.' },
      { question: 'Como posso saber quando os freios do meu carro precisam ser substituídos?', answer: 'Sinais de desgaste incluem ruídos estranhos, pedal de freio afundando, ou luzes de advertência no painel. Realizamos inspeções regulares durante os serviços para avaliar a condição dos freios e aconselhar sobre substituições quando necessário.' },
      { question: 'Quais serviços vocês oferecem para veículos elétricos?', answer: 'Oferecemos uma gama completa de serviços para veículos elétricos, incluindo manutenção da bateria, diagnósticos elétricos, e reparos específicos para componentes elétricos. Nossa equipe é treinada nas últimas tecnologias automotivas.' },
      { question: 'Vocês realizam orçamentos gratuitos?', answer: 'Sim, oferecemos orçamentos gratuitos para todos os serviços. Trabalhamos para garantir transparência em nossas operações e fornecer informações claras sobre os custos antes de realizar qualquer serviço no seu veículo.' },
     
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const[isOpen, setIsOpen]= useState(false)

    const toggleMenu = ()=>{
      setIsOpen((open)=> !open);
    }
    const[hamburguer, setHamburguer]= useState(true)

    const toggleHamburguer = ()=>{
      setHamburguer((open)=> !open);
    }
    useEffect(() => {
      const handleResize = () => {
        // Faça algo quando a resolução muda
        setIsOpen(false);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Certifique-se de remover o ouvinte de redimensionamento ao desmontar o componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
  
  return (
    <div className="App">
     

        <header> 
          <div className='Navbar' > 
          <div className='navLogo'>
          
          <img src={headerIcon} alt="" />
            <h1>Casa Brilhante</h1>
         
          </div>
        
     
            <div className="linkContainer">   
            <div className="hamburguer">
            {isOpen ? (<IoClose onClick={toggleMenu} />) : (<GiHamburgerMenu onClick={toggleMenu} />)}
            </div>
    
           <ul >   
                   
              <li className={`MenuItems ${isOpen ? "isOpen" : "" }`}>
                <a href="#Referencia">Sobre</a>
                <a href="#Ideais">Ideais</a>
                <a href="#Faq">Perguntas</a>
                <a href="#Contact">Contato</a>
                <a href="#NossosServiços">Serviços</a>
              </li>            
            </ul>
            </div>
        </div>
        </header>       
        <section className='mainSec'>

          <div className='backgroundImg'>   
          <div className="h2Container"> 
          <div className='h2mainSec'>           
          <h1>Mariane Luz</h1>
            <h1>Casa Brilhante</h1>
          
                                                     
          </div>                  
          </div>                  
          </div>

          <div className="h2ContainerDektop"> 
          <div className='h2mainSec'>           
            <h1>Mariane Luz</h1>
            <h1>Casa Brilhante</h1>
                                            
          </div>   
          <img className='mainSecIconDesk' src={mainSecIcon} alt="" />                 
          </div>   

        </section>
        <section id='Referencia' className='ReferenciaSection'>
      <h1>Referência & Destaque</h1>
      <div className='refContainer'> 
     
      <h2>
      Desde 1998, destacamo-nos como referência no setor automotivo na região da Serra Gaúcha, com base em Bento Gonçalves. Comprometidos com a excelência, nossa empresa de mecânica oferece serviços impulsionados pela paixão por veículos e pela busca constante pela satisfação dos clientes.
      Contamos com uma equipe especializada e equipamentos de última geração para atender às demandas de manutenção e reparo automotivo. Representamos marcas reconhecidas, investindo em tecnologias de ponta para garantir que cada cliente experimente qualidade e durabilidade em nossos serviços.
      </h2>
      <h2>
      Ao longo de 25 anos, construímos uma reputação sólida, proporcionando soluções automotivas excepcionais. Nosso compromisso com a eficiência e a transparência resulta em resultados incomparáveis, mantendo um equilíbrio perfeito entre qualidade e custo. A credibilidade que conquistamos reflete-se no atendimento especializado, contribuindo para a segurança e a confiança de nossos clientes na manutenção de seus veículos.
      </h2>
      </div>
        </section>
       <section id='NossosServiços' className='NossosServiços'>   

<div className='serviceContainer'> 

<div className='ServiçosLabel'>
  <h1>SERVIÇOS AGREGADOS</h1>
  </div>   

<div className='HowWeDoContainer'>   
<div className="firstBoxContainer"> 
<div className='HowBoxContainer'> 
<h1 className='containerHowTitle'>1:</h1>
<ul>
< li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
</ul>
</div>
<div className='HowBoxContainer'> 
<h1 className='containerHowTitle'>2:</h1>
<ul>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
</ul>
</div>
</div>

<div className="firstBoxContainer"> 
<div className='HowBoxContainer'> 
<h1 className='containerHowTitle'>3:</h1>
<ul>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
</ul>
</div>
<div className='HowBoxContainer'> 
<h1 className='containerHowTitle'>4:</h1>
<ul>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
<li>
<h2></h2>
</li>
</ul>
</div>
</div>  

</div>
</div>
        </section>
        <section id='Ideais' className='ideaisSection'>
         
        <h1>Nossos Ideais</h1>
        
          <div className='ideaisContainer'> 

          <div className='BoxContainer'>
            <IoEyeOutline className='Eye'/>
            <h2>Visão</h2>
            <h3>
            Ser a principal referência em serviços automotivos, destacando-nos pela excelência na manutenção e reparo de veículos.
             
              </h3>
            
            </div>

            <div className='BoxContainer'>
            <CiHeart className='Heart'/>
            <h2>Missão</h2>
            <h3>Prover serviços mecânicos de alta qualidade, garantindo a segurança e o bom funcionamento de cada veículo.</h3>
            </div>

            <div className='BoxContainer'>
            <IoShieldCheckmarkOutline className='Shield'/>
            <h2>Valores</h2>
            <h3>Colocamos as necessidades e a satisfação do cliente no centro de nossas operações, trabalhando para superar expectativas.</h3>
            </div>

          </div>
        </section>         
        <section id='Faq' className='Faq'>
        <h1>
          Perguntas Frequentes
        </h1>
      <div className='FaqContainer'>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            onClick={() => handleToggle(index)}
            style={{ cursor: 'pointer', marginBottom: 20, fontWeight: 'bold' }}
          >
            {faq.question}
          </div>
          {openIndex === index && (
            <div className="sometinh" style={{  marginLeft: 10, marginBottom: 20 }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
        </section>  
        <section id='Contact' className='Contact'>
    <Contato/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6967.8644750255635!2d-51.52146755303991!3d-29.1666690330064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c3b46ea9a8093%3A0x5921437d7c178dcb!2sCentro%2C%20Bento%20Gon%C3%A7alves%20-%20RS%2C%2095700-000!5e0!3m2!1spt-PT!2sbr!4v1701893736352!5m2!1spt-PT!2sbr"></iframe>
        </section>
        <section className='FooterContact'>
            <div className='footerContactContainer'>
              <div className='footerContactTitle'>
              <h1>Mariane Luz</h1>
            <h1>Casa Brilhante</h1>
               </div>
         
           
            </div>
            <div>
          
              <ul>
              <h1>Entre em Contato</h1>
                <li>
                  <FaLocationDot className='endereçoIcon'/>
                  <h2>Rua Amadeu Ziegler</h2>
                </li>
                <li>
                <RxDrawingPinFilled className='pinCidade'/>             
                  <h2>Bento Gonçalves</h2>
                </li>
                <li>
                <MdEmail className='emailContact'/>

                  <h2>Email@hotmail.com</h2>
                </li>
                <li>
                <BsFillTelephoneFill className='teleContact'/>

                  <h2>54 999910000</h2>
                </li>
              </ul>
            </div>
         </section>
         <footer className='Footer'>
            <h2>© Copyright 2024 Mariane Luz - Todos os direitos reservados</h2>
            <li>
              <FaFacebookF />
              <a href="">facebook</a>
              <FaInstagram />
              <a href="">instagram</a>
            </li>
          
        </footer>
         </div>
  );
}

export default App;
