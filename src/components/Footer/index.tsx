import { Container, Content } from "./styles";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

export function Footer() {
    return (
        <Container>
            <Content>
                <p>Pedro Henrique de Avila Tonin</p>
                <div className="icons-container">
                    <img src={twitter} />
                    <img src={facebook} />
                    <img src={instagram} />
                </div>
            </Content>
        </Container>
    );
}
