import styled from "styled-components"
import Hamburger from 'hamburger-react'
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Body>
      <div className="nav_item">
        <div className="logo">
          <img src="/image/loogo.png" alt="" />
        </div>

        <div className={open ? "nav_body active" : "nav_body"}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="icon">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>

    </Body>
  )
}

export default Navbar

const Body = styled.div`

position: absolute;
z-index: 120;
top: 0;
left: 0;
  height: 100px;
  width: 100%;

  .nav_item{
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;

    ul{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      list-style: none;
      
    li a{
      text-transform: uppercase;
      color: white;
    }
    }


    .logo{
      height: 70px;
      img{
        height: 100%;
      }
    }

    .icon{
      h2{
        font-size: 1rem;
      }
    }

    .nav_body{
      position: absolute;
      top: 6rem;
      left: 0;
      width: 400px;
      height: 500px;
      border-radius: 10px;
      background-color: #000000;
      transform: scaleX(-0) ;
      transition: .5s;
      padding-top: 2rem;
      
    }

    .nav_body.active{
      transform: scale(1) rotate(0deg);

    }
  }


`