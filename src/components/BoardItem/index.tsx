import { Board, BoardContainer } from "./styles";

interface BoardItemProps {
    icon: string;
    title: string;
    text: string;
}

export function BoardItem(props: BoardItemProps) {
    return (
        <Board>
            <div>
                <BoardContainer>
                    <div>
                        <p className="icon">{props.icon}</p>
                        <p className="title">{props.title}</p>
                    </div>
                    <p className="text">{props.text}</p>
                </BoardContainer>
            </div>
        </Board>
    );
}
