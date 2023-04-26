import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Body>
      <Footer1>
        {/* Contact Information */}

        <div className="contact_information">
          <div className="header">
            <img src="/image/loogo.png" alt="" />
          </div>

          <p>PeculiarTech is a digital marketing agency that deals with Website design and development, SEO management, Digital Marketing and lots more.
          </p>

        </div>

        {/* End of Contact Information */}

        {/* Contact Information */}

        <div className="contact_information">
          <div className="header">
            <h2>Contact Information</h2>
          </div>

          <div className="contact_flex">
            <p>Call Us 24/7 Free</p>
            <h2>+2349 0651 92164 </h2>
            <p>peculiarsmith2000@gmail.com</p>
          </div>
        </div>

        {/* End of Contact Information */}
      </Footer1>
      <Footer2>
        <div className="text">
          <p>
            © 2023 Powered by{" "}
          
              PeculiarTech
         
            . All Rights Reserved.
          </p>
        </div>

        <div className="image">
          <img src="/img/payment-1.png" alt="" />
        </div>
      </Footer2>
    </Body>
  );
}

export default Footer;

const Body = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
`;

const Footer1 = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 4rem 4rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 4rem 1rem;
    justify-content: flex-start;
    
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 1rem 1rem;
    gap: 1rem;
    width: 300px;
  }
  .header {
    /* height: 70px; */
   img{
    height: 70px;
   }
  }

  .contact_information {
    padding: 10px 15px;
    width: 400px;
    p{
      font-size: 0.8rem;
    }

    .contact_flex {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        font-size: 2rem;
        font-weight: 400;
       
        line-height: 20px;
        @media screen and (max-width: 600px) {
        font-size: 1.5rem;

        }
      }
    }
  }

  .company,
  .explore {
    padding: 10px 15px;

    width: 250px;

    ul {
      display: inline-flex;
      flex-direction: column;
      gap: 10px;

      li {
        position: relative;
        padding-bottom: 2px;
        transition: 0.4s ease-in-out;
        font-size: 0.8rem;

        &::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 1.5px;
          background: #2d1dff;
          bottom: 0;
          transition: 0.4s ease-in-out;
        }
        :hover::before {
          width: 100%;
        }
      }
    }
  }

  .our_location {
    width: 400px;
    border: 1px solid red;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
    @media screen and (max-width: 400px) {
    }
  }
`;
const Footer2 = styled.div`
  padding: 1rem 4rem;
  background-color: #323232;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    height: 20px;

    @media screen and (max-width: 500px) {
      height: 15px;
    }

    img {
      height: 100%;
    }
  }
  .text {
    p {
      color: #fff;
      font-size: .8rem;
    }

    a {
      color: #2d1dff;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;

    .text {
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 400px) {
  }
`;
