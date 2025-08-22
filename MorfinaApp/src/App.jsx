import "./App.css";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import QR from "./Components/QR";

function App() {
  return (
    <>
      <Nav /> {Nav}
      <Content /> {Content}
      <Cards /> {Cards}
      <QR /> {QR}
      <Footer /> {Footer}
    </>
  );
}

export default App;
