import { styled } from "styled-components";

export const Container = styled.header`
    background: "white";
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 500px;
    }
    p {
        font-size: 50px;
    }
`;
