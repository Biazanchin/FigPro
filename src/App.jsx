import Home from "./pages/home";
import { StickerProvider } from "./context/StickerContext";

function App() {
  return (
    <StickerProvider>
      <Home />
    </StickerProvider>
  );
}

export default App;
