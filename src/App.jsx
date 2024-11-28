import Welcome from "./pages/Welcome";
import Opening from "./pages/Opening";
import Wedding from "./pages/Wedding";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Message from "./pages/Message";
import Thanks from "./pages/Thanks";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Welcome />
      <Opening />
      <Wedding />
      <Story />
      <Gallery/>
      <Message/>
      <Thanks/>
      <Footer/>
    </div>
  )
}