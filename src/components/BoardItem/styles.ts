import { styled } from "styled-components";

export const Board = styled.div`
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    div {
        padding: 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        font-weight: 500;
        font-size: 20px;
    }
`;
