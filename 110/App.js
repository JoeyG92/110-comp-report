import logo from "./logo.svg";
import "./app.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Catalog></Catalog>
            <Footer></Footer>
        </div>
    );
}

export default App;