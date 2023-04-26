


import styled from "styled-components";
import { GoZap } from 'react-icons/go';


function Reviews() {

  return (
    <Body>

      <div className="body">
        <div className="item_body">
          <div className="text">
            <p><GoZap size={20} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quidem sunt rem excepturi velit dicta laboriosam culpa hic aut? Rerum.<GoZap size={20} /> </p>


          </div>

          <div className="image">
            <img src="/image/testimonials1.jpg" alt="" />
            <h2>Okechukwu Okino</h2>
            <span>Founder Kinox Apparel</span>
          </div>
        </div>
        <div className="item_body">
          <div className="text">
            <p><GoZap size={20} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quidem sunt rem excepturi velit dicta laboriosam culpa hic aut? Rerum.<GoZap size={20} /> </p>


          </div>

          <div className="image">
            <img src="/image/testimonials1.jpg" alt="" />
            <h2>Okechukwu Okino</h2>
            <span>Founder Kinox Apparel</span>
          </div>
        </div>

        <div className="item_body">
          <div className="text">
            <p><GoZap size={20} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quidem sunt rem excepturi velit dicta laboriosam culpa hic aut? Rerum.<GoZap size={20} /> </p>


          </div>

          <div className="image">
            <img src="/image/testimonials1.jpg" alt="" />
            <h2>Okechukwu Okino</h2>
            <span>Founder Kinox Apparel</span>
          </div>
        </div>

      </div>
    </Body>
  )
}

export default Reviews


const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
margin:10rem 0;

.body{
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 4rem;
}

  
  color: black;

  .item_body{
    aspect-ratio: 1.9/1;
    margin: 0 1rem;
  width: 300px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .text{
    p{
      color: gray;
      font-size:0.8rem;
      text-align: center;
      svg{
        font-size: 10rem;
        line-height: 1px;
        padding: 0;
        color: #2d1dff;
    
      }
    }
  }

  .image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img{
      width: 50px;
      height: 50px;
      border-radius: 10rem;
    }

    h2{
      font-size: 1.2rem;
    }

    span{
      font-size: 0.7rem;
      color: #2d1dff;

    }
  }


  }

  .slick-slide{
   padding: 0 10px; 

  }
`