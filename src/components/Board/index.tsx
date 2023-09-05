import { Container } from "./styles";
import { BoardItem } from "../BoardItem";

const data = [
    { icon: "📰", title: "NOTICIAS", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos aut, necessitatibus quod odit enim excepturi doloremque, doloribus autem itaque expedita alias soluta nobis nam, iusto minima earum impedit ullam veritatis." },
    { icon: "ℹ️", title: "INFORMACOES", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos aut, necessitatibus quod odit enim excepturi doloremque, doloribus autem itaque expedita alias soluta nobis nam, iusto minima earum impedit ullam veritatis." },
    { icon: "📚", title: "MATERIAS", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos aut, necessitatibus quod odit enim excepturi doloremque, doloribus autem itaque expedita alias soluta nobis nam, iusto minima earum impedit ullam veritatis." },
    { icon: "🆕", title: "FEED", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos aut, necessitatibus quod odit enim excepturi doloremque, doloribus autem itaque expedita alias soluta nobis nam, iusto minima earum impedit ullam veritatis." },
];

export function Board() {
    return (
        <Container>
            {data.map((item) => {
                return (
                    <BoardItem
                        title={item.title}
                        icon={item.icon}
                        text={item.text}
                    />
                );
            })}
        </Container>
    );
}
