import logo from "../../assets/images/logo_ifpr.png"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} />
                <p>Campus Cascavel</p>
            </Content>
        </Container>
    );
}