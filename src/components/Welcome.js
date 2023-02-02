import Logo from "../the-simpson.png";
import styled from "styled-components";
export default function Welcome(props) {
  const {reqapi} = props
    return (
        <ContentLogo>
            <WelcomeText>Bienvenido, para poder utilizar las Frases pinche sobre la imagen</WelcomeText>
            <ImageLogo src={Logo} alt="Logo" onClick={reqapi} />
        </ContentLogo>
    )
}
const ImageLogo = styled.img`
  width:450px;
  height:auto;
  &:hover {
    cursor:pointer;
  }
`;
const ContentLogo = styled.div`
  width:100%;
  text-align:center;
`
const WelcomeText = styled.p`
  color:#2a9d8f;
  text-align:center;
  font-weight:900;
  padding: 50px 0 10px 0;
  font-size:25px;
`