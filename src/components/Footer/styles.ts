import { styled } from "styled-components";

export const Container = styled.header`
    background: "white";
    display: flex;
    justify-content: center;
    height: 100px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: right;

    .icons-container {
        width: 300px;
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 50px;
    }
`;
