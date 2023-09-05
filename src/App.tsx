import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Footer } from "./components/Footer";

export function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Board />
            <Footer />
        </>
    );
}
