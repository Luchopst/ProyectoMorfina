import "./App.css";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import QR from "./Components/QR";
import Banda from "./Components/Banda";
import Logos from "./Components/Logos";
import Videos from "./Components/Videos";
import Mas from "./Components/Mas";

function App() {
  return (
    <>
      <Nav /> {Nav}
      <Content />
      {Content}
      <Logos />
      {Logos}
      <Cards />
      {Cards}
      <QR />
      {QR}
      <Banda />
      {Banda}
      <Videos />
      {Videos}
      <Mas />
      {Mas}
      <Footer />
      {Footer}
    </>
  );
}

export default App;
