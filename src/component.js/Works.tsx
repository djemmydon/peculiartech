import styled from "styled-components"
import { BiLineChart } from 'react-icons/bi';
import { MdContentCopy, MdComputer } from 'react-icons/md';


function Works() {
  return (
    <Body>

      <div className="flex-body">
        {data.map((item) => (
          <div className="content_type">
            <div className="content_icon">
              {item.id === "1" ? <BiLineChart size={30} /> : item.id === "2" ? <MdContentCopy size={30} /> : item.id === "3" ? <MdComputer size={30} /> : null}
            </div>


            <div className="content_text">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

    </Body>
  )
}

export default Works

const Body = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6rem;

    .flex-body{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;

      .content_type{
        color: #000;
        width: 250px;
        height: 400px;
        border: 3px solid #d4cfcf ;
        border-radius: 10px;
        padding: 0 2rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: .3s ease-in-out;

      
        /* @media screen and (max-width: ) {
          
        } */

        .content_icon{

          svg{
            font-size: 35px;
            color: #2d1dff;
          }
       
        }

        .content_text{
          p{
            color: #aca9a9;
            font-size: 0.8rem;
          }
        }

        :hover{
          color: white;
          background-color: #2d1dff;
          transform: translateY(-10px);


          svg{
            font-size: 35px;
            color: #ffffff;
          }
        }
      }
      
    }


    
`



const data = [
  {
    id: "1",
    title: "Responsive Design",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias expedita "
  },
  {
    id: "2",

    title: "Great SEO",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias expedita "
  },
  {
    id: "3",

    title: "Content Management",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias expedita "
  },

]