import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserPanel from "./components/user/UserPanel";


const App = () => (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/user" element={<UserPanel />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
);

export default App;
