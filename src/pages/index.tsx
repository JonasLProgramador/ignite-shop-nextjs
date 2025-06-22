 import { styled } from "@/styles";
 
 const Home = () => {
  const Button = styled('button',{
      backgroundColor:"$rocketseat",
      borderRadius:4,
      border:0,
      padding:'4px 8px',

      span:{
        fontWeight:'bold'
      },

      '&:hover':{
        filter:'brightness(0.8)'
      }

    })
  return (
    <Button>
      Enviar 
      <span>Texto</span>
    </Button>
  );
}
export default Home;