import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserPanel from "./components/user/UserPanel";
import ProductAnalyzer from "./components/user/ProductAnalyzer";


const App = () => (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/user" element={<UserPanel />} />
              <Route path="/product-analyzer" element={<ProductAnalyzer />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
);

export default App;
