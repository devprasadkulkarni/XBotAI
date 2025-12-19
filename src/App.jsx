import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
        </Routes>
    );
};

export default App;
