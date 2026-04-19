import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CafeProvider } from "./context/CafeContext";
import Homepage from "./pages/Homepage";
import Featured from "./pages/Featured";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <CafeProvider>
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </CafeProvider>
    </BrowserRouter>
  );
}

export default App;
