import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoBagSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import useContentful from "../api/contenful";
import AudioComponent from "./audio";
import ThreeScene from "./three";

const query = `
query Author {
  authorCollection {
    items {
      name
      edad
      apellido
      fecha
    }
  }
}


`;

const Hero = () => {
  window
    .fetch(
      "https://graphql.contentful.com/content/v1/spaces/w7r4adcnw5tk/?access_token=4RQqnlMra_j_yubF4mkGwb2M_zgEoqYdazd1i5b380I",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    )
    .then((response) => response.json())
    .then((json) => console.log(json.data))
    .catch((error) => console.error("Error:", error));

  const [psy, setPsy] = useState([]);
  const { getPsy } = useContentful();

  useEffect(() => {
    getPsy().then((response) => setPsy(response));
  }, []);

  const [showComponent, setShowComponent] = useState(false);
  const [button, setButton] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
    setButton("hidden ");
  };

  return (
    <section class="rata">
      <HeroBox>
        <button
          onClick={toggleComponent}
          className={`animated-button ${button}`}
        >
          Feliz
        </button>
        {showComponent && <ThreeScene />}
        <AudioComponent play={showComponent} />;
        {/* {psy.map((shimuelo, index) => (
        <div key={index}>
          
        //   <h2>{shimuelo.hayley}</h2>
        //   <p>Descripción: {shimuelo.descripcion.description}</p>
        //   <img src={shimuelo.avatar.file.url} alt={shimuelo.avatar.title} />
        </div>
      ))} */}
      </HeroBox>
    </section>
  );
};

const HeroBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;

  .active2 {
    display: none;
  }
  //box
  .hero-box_text {
    width: 50%;
    height: 86%;
    margin-left: 2rem;
    /* position: relative; */

    svg {
      z-index: 0;
      position: absolute;
      top: 21%;
      left: 50%;
    }
    .text {
      .luis {
        font-family: "Fira Sans", sans-serif;
        font-size: 4rem;
        margin-bottom: 1rem;
      }
      p {
        text-align: start;
        width: 87%;
        height: 154px;
        letter-spacing: 2px;
        margin-bottom: 2.9rem;
      }
    }
    .imagenes {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
    }
  }

  /**---------------------- Mediasquerys------------------------------------------ */
  @media (max-width: 1024px) {
    .hero-box_text {
      .text {
        .luis {
          font-size: 4rem;
        }
      }
      .imagenes {
        margin-top: 1rem;
        display: flex;

        flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 768px) {
    .hero-box_text {
      .imagenes {
        margin-top: 1rem;
      }

      .text {
        .luis {
          font-size: 3.5rem;
        }
        p {
          height: auto;
          width: 100%;
          margin-bottom: 0;
        }
      }
      svg {
        display: none;
      }
    }
  }
  @media (max-width: 663px) {
    .hero-box_text {
      .text {
        .luis {
          font-size: 3rem;
        }
        p {
          letter-spacing: 2px;
        }
      }
      .imagenes {
        width: 106%;
      }
    }
  }

  @media (max-width: 375px) {
    .hero-box_text {
      margin-left: 0;
      width: 100%;
      .text {
        .luis {
          text-align: center;
          font-size: 2.2rem;
        }
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    .active {
      display: none;
    }
    .active2 {
      display: block;
    }
    flex-direction: column-reverse;
    .hero-box_text {
      margin-left: 0;
      width: 100%;
      .text {
        .luis {
          text-align: center;
          font-size: 2.5rem;
        }

        p {
          text-align: justify;
        }
      }
      .imagenes {
        width: 100%;
        justify-content: center;
      }
    }
  }

  @media (max-width: 375px) {
    width: 101%;
    .active {
      display: none;
    }
    .active2 {
      display: block;
    }
    .hero-box_text {
      .text {
        .luis {
          font-size: 2.2rem;
        }
      }
    }
  }

  @media (max-width: 320px) {
    .hero-box_text {
      .text {
        .luis {
          font-size: 1.9rem;
        }

        p {
          letter-spacing: 0px;
        }
      }
    }
  }
`;

const ContainerPhoto = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 50%;
  margin-left: 2.5rem;
  height: 100%;
  .iconsvgSociall {
    height: 40%;
    .svg {
      margin-left: 0rem;
    }
  }

  .foto {
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-height: 367px;
    }
  }

  /**---------------------- Mediasquerys------------------------------------------ */

  @media (max-width: 1024px) {
    .iconsvgSociall {
      height: 50%;
      .svg {
        height: 4rem;
      }
    }
  }
  @media (max-width: 768px) {
    .foto {
      img {
        width: 100%;
      }
    }
    .iconsvgSociall {
      display: flex;
    }
    .svg {
      margin-left: 1rem;
      height: 4rem;
    }
  }
  @media (max-width: 465px) {
    margin-left: 0;
    .iconsvgSociall {
      margin-top: 1rem;
      .svg {
        height: 3.5rem;
      }
    }
  }
  @media (max-width: 600px) {
    .iconsvgSociall {
      margin-top: 1rem;
      .svg {
        height: 2.5rem;
      }
    }
  }
`;

const Button = styled(Link)`
  cursor: pointer;
  color: black;
  text-decoration: none;
  position: absolute;
  left: 46%;
  top: 77%;
  padding: 19px 22px;
  transition: all 0.2s ease;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 1rem;
    background: #ffb422;
    width: 100px;
    height: 56px;
    transition: all 0.3s ease;
  }
  span {
    font-family: "Fira Sans", sans-serif;
    font-weight: 900;
    position: relative;
    font-size: 1.3rem;
    line-height: 18px;

    letter-spacing: 0.15em;
    text-transform: uppercase;
    vertical-align: middle;
    svg {
      position: relative;
      top: 0;
      left: 100%;
      margin-left: 10px;
      font-size: 2rem;
      /* stroke-linecap: round;
      stroke-linejoin: round; */
      stroke: black;
      fill: black;

      stroke-width: 2;
      transform: translateX(-5px);
      transition: all 0.3s ease;
    }
  }

  &:hover {
    &:before {
      width: 100%;
      background: rgba(#ffb422, 1);
      svg {
        transform: translateX(0);
      }
    }
    &:active {
      transform: scale(0.96);
    }
  }
  @media (max-width: 1024px) {
    left: 43%;
  }
  @media (max-width: 768px) {
    left: 68%;
  }
  @media (max-width: 663px) {
    left: 63%;
  }
  @media (max-width: 600px) {
    top: 88%;
    left: 25%;
    span {
      padding: 16px 22px;
      font-size: 1.2rem;
    }
    &:before {
      height: 38px;
      width: 188px;
      top: 12px;
      left: 12px;
    }
  }

  @media (max-width: 320px) {
    left: 18%;
  }
`;

export default Hero;
