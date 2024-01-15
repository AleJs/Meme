import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <Bar>
      <div className="email">
        <span>
          {" "}
          <FiMail viewBox="0 -1 24 24" /> Alejscript@gmail.com
        </span>
      </div>

      {/* <div className="title">

      <h1>Developer guy</h1>
    </div> */}

      <motion.div
        whileHover={{
          scale: 1.06,
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.52 },
        }}
        whileTap={{ scale: 0.9 }}
        className="cv"
      >
        <a href="https://www.linkedin.com/in/luisalejandroramirezcastillo/">
          <FaLinkedin />
        </a>
      </motion.div>
    </Bar>
  );
};
const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 0rem 1rem;
  /* width: 100%; */

  .email {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      svg {
        height: 1.3rem;
      }
    }
  }
  .title {
    h1 {
      font-family: "Fira Sans", sans-serif;
      font-weight: 500;
      font-size: 2.3rem;
    }
  }
  .cv {
    text-align: right;
    width: 15%;
    max-width: 206px;
    font-weight: 500;
    font-size: 2rem;

    a {
      color: black;
      text-decoration: none;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Navbar;
