import React from 'react'
import "./Principio.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Principio() {
// let key;
// let style;
// let texto ='Welcome to my space';
//   const longitud = texto.length;
//   const deg = 360 / longitud;
//   let separar=texto.split(" ")
//   separar.map((letra, i)=>(
//      key={i},
//     style={
//       transform:`rotate(${deg * i}deg)`,
//     },
//     {letra}
//   ));

  return (
    <div>

      <div className='ocupacion' >
      <h3>Frontend Development</h3>
      </div>

    <center> 
      <div className='lenguaje'>
        HTML - CSS5 - JavaScript - NodeJS - MongoDB - React 
      </div>
      </center> 

<center><div className='inicio'> 

    <title>WELCOME TO MY PORTFOLIO</title>

  <div className='bienvenida'>
 
<h1 > Hello World !!! </h1>

<h4> My name is Claudia Karla Salas Varela </h4>
</div>

{/* <div className='spinning-text-wrapper'>
  <div className='spinning-text'>
<h1>Welcome to my space </h1>
</div>
</div> */}

<div className='proyectos'>
<p>My</p>
  <ul>
    <li>Proyects</li>
    <li>Creations</li>
    <li>Job</li>
 </ul>
</div>

<div className='cards'>

  <div className='card1'>  
<Card style={{ width: '18rem', height:'30rem', 
background:'transparent',  border:'transparent' }}>
      <Card.Img variant="top" src="S.jpg"/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Card Captor Sakura</Card.Title>
        <Card.Text style={{textAlign:'justify', color:'white', fontWeight:'600'}}>
          El objetivo de este juego, es no dejar que las cartas clow
          te toquen, de lo contrario perderas vidas. Tambien tienes que
          cuidarte del contra ataque de Li Shaoran, ya que sus ataques 
          tambien te restan vidas. Ganas si no dejas escarpar 15 cartas
          Clow. 
        </Card.Text>
        <button className='boton1'>
          <a style={{ textDecoration:'none',  color:'white'}} 
          href='https://claudiakarla.github.io/videojuegoCardCaptor/index.html'>Ir a Página</a></button>
      </Card.Body>
    </Card>
    </div>

    <div className='card2'>
<Card 
style={{ width: '18rem', height:'30rem', background:'transparent', border:'transparent' }}>
      <Card.Img variant="top" src="Es1.jpg" />
      <Card.Body >
        <Card.Title style={{color:'white'}}>Ingeniería Estructural</Card.Title>
        <Card.Text style={{textAlign:'justify', color:'white', fontWeight:'600'}}>
          Diseño de página web para empresa de calculo y 
          diseño de Ingeniería Estructural.
          Se hizo un panel para administrador donde se pueden
          modificar los datos (agregar, modificar ó borrar
          la información).
        </Card.Text>
        <button className='boton2'>
      <a style={{ textDecoration:'none',  color:'white'}}
        href='https://pagina-estructuras.vercel.app/'>Ir a página</a>
    </button>
        <div>
        </div>
      </Card.Body>
    </Card>
    </div>

    <div className='card3'>
<Card style={{ width: '18rem', height:'30rem', background:'transparent',  border:'transparent' }}>
      <Card.Img variant="top" src="Re.jpg" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Rebajas</Card.Title>
        <Card.Text style={{textAlign:'justify', color:'white', fontWeight:'600'}}>
          Página para encontrar rebajas en centros comerciales.
        </Card.Text>
        <button className='boton3'>
          <a style={{ textDecoration:'none',  color:'white'}} 
          href='https://long-tux-clam.cyclic.app/'>Ir a página</a>
    </button>
      </Card.Body>
    </Card>
    </div>
    </div>
 
</div>
</center>

 <div className='contacto'>
<div className='linkedin'>
<img src="./L.png"/>
</div>
<div className='github'>
<img src="./G1.png"/>
</div>

 <center>
     <div className='links'>
   <div className='Uno'> 
  <a href='https://www.linkedin.com/in/claudia-salas-varela-549386260/'>Linkedin</a> 
  </div>
  <div className='borde'>Linkedin</div>
  <div className='Dos'>  
   <a href='https://github.com/ClaudiaKarla'>Github</a> 
   </div> 
     </div>
     </center>

 
        
     
    </div>
   

</div>

    
  )
}

export default Principio