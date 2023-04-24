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
z-index: 100;
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
      width: 100%;
      height: 500px;
      border-radius: 10px;
      background-color: #515151;
      transform: scaleX(-0) rotateZ(-200deg);
      transition: .5s;
      
    }

    .nav_body.active{
      transform: scale(1) rotate(0deg);

    }
  }


`