import "@splidejs/react-splide/css";
import Home from "./page/home";
import { StickerProvider } from "./context/StickerContext";

function App() {
  return (
    <StickerProvider>
      <Home />
    </StickerProvider>
  );
}

export default App;
