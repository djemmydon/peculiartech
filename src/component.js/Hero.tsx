import styled from "styled-components"
import { AiOutlineMobile } from "react-icons/ai"
import { MdContentCopy } from 'react-icons/md';
import { BsBarChart } from 'react-icons/bs';


function Hero() {
  console.log(data)
  return (
    <Body>

      <div className="text">
        <p>Get Best for your business</p>
        <h2>A good business need a good website and application </h2>

      </div>

      <div className="content">
        {data.map((item) => (
          <div className="content_type">
            <div className="content_icon">
              {item.id === "1" ? <AiOutlineMobile size={30} /> : item.id === "2" ? <MdContentCopy size={30} /> : <BsBarChart size={30} />}
            </div>


            <div className="content_text">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="overlay">

      </div>

    </Body>
  )
}

export default Hero


const Body = styled.div`  
background-image: url(/image/business.webp);
background-position: center;
width: 100%;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 0;
@media screen and (min-width: 800px) {
  height: 100vh;


  }
.overlay{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.502)!important;
}

.text{
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
 

  h2{
    margin: 0;
    font-size:1.5rem;
    font-weight: 600;
    
  }

  p{
    font-size: 1.3rem;
  
  }

  @media screen and (min-width: 800px) {
    width: 1000px;

    h2{
    margin: 0;
    font-size:3.5rem;
    font-weight: 600;
    
  }

  }
}

.content{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
flex-wrap: wrap;
margin-top: 3rem;


  @media screen and (min-width: 800px) {
flex-wrap: nowrap;

  }

  .content_type{
    width: 250px;

    @media screen and (min-width: 800px) {
      width: 300px;


  }


    .content_icon{
      border: 2px solid #2d1dff;
      border-radius: 10px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
  }
  }


}
`




const data = [
  {
    id: "1",
    title: "Responsive Design",
    content: " We'll create a custom website that reflects your brand identity and business goals"
  },
  {
    id: "2",

    title: "Great SEO",
    content: "We'll optimize your website to rank higher in search engine results pages (SERPs) for relevant keywords and phrases "
  },
  {
    id: "3",

    title: "Content Management",
    content: " We'll develop a content management system (CMS) that allows you to easily manage and update your website's content. "
  },

]