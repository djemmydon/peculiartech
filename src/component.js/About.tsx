import styled from "styled-components";

function About() {
  return (
    <Body>

      <div className="flex_body">
        <div className="text">
          <h2>
            About Us
          </h2>

          <p>No matter what your website development needs are, we're here to help. Contact us today to learn more about how we can help you create a website that drives traffic, engages your audience, and grows your business.</p>
        </div>

        <div className="image">
          <img src="/image/web-service.jpg" alt="" />
        </div>
      </div>

    </Body>
  )
}

export default About;


const Body = styled.div`
 display : flex;
 justify-content: center;
 align-items: center;
 color: #000;
 margin: 2rem 0;

 .flex_body{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-left: 0.6rem;
  margin-top: 3rem;

  @media screen and (max-width: 800px) {
    justify-content: center;
      
    }
  .text{
    width: 300px;

    h2{
      font-size: 3rem;
    }
  }

  .image{
    height: 400px;

    @media screen and (max-width: 800px) {
    height: 200px;
      
    }

    img{
      height: 100%;
      border-radius: 10px;
    }
  }
 }


`