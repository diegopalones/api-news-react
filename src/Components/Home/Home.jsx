import React from 'react'
import './Home.scss';
import { Card } from "react-bootstrap";

const Home = () => {

  const cardInfo = [
    {
      image: "https://www.uc3m.es/alumni/media/alumni/img/grande/original/ig_marta-garcia-aller/marta-garcia-aller.jpeg",
      title: "Marta García Aller",
      text: "Marta García Aller (Madrid, 1980) is a journalist. In addition to writing for El Confidencial, she collaborates with Onda Cero and La Sexta. She is an associate professor at IE Business School and ICADE and has received some of the most prestigious awards in economic journalism.",
    },
    {
      image:
        "https://www.academiadecine.com/wp-content/uploads/2018/11/carles-francino.jpg",
      title: "Carles Francino",
      text: "Carles Francino Murgades (Barcelona, ​​January 3, 1958) is a Spanish radio presenter, currently in charge of presenting La ventana on Cadena SER. He is the father of actor Carles Francino Navarro.",
    },
    {
      image:
        "https://www.esferalibros.com/wp-content/uploads/2021/04/principal-foto-federico-jimenez-losantos-sergio-sanchez-es.jpg",
      title: "Federico Jiménez Losantos",
      text: "Federico Jorge Jiménez Losantos is a Spanish journalist, publicist, writer, broadcaster and businessman.",
    },
    {
      image:
        "https://www.lecturas.com/medio/2021/02/18/carlos-alsina_c1a5ad7b_1280x720.jpg",
      title: "Carlos Alsina",
      text: "He has been the director of Más de uno since April 2015 and was previously in charge of La Brújula. He made his radio debut in 1990, coinciding with the birth of Onda Cero, and was part of the first newsroom of the network.",
    },
    {
      image: "https://image.ondacero.es/clipping/cmsimages01/2018/09/27/560C5909-C6D6-4F56-8A4B-80B045186D60/30.jpg",
      title: "Carmen Morodo",
      text: "Carmen Morodo Vioque (b. Madrid, 1973) is a Spanish journalist. A regular at radio and television gatherings, she collaborates with channels such as 24 hours of TVE.",
    },
    {
      image:
        "https://fotografias.lasexta.com/clipping/cmsimages02/2020/08/27/0F0AE441-7757-4115-BF5B-6BA9F1A36093/60.jpg",
      title: "Julia otero",
      text: "Julia Otero was born in Monforte de Lemos (Lugo) but her parents moved to Barcelona when she was only 3 years old. He ended up graduating in Hispanic Philology but at 17 he already began to collaborate on a radio program that was broadcast on Radio Sabadell.",
    },
    
  ];

  const renderCard = (card, index) => {
    return (

      
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};


export default Home