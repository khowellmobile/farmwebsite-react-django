import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import EventsPage from "./pages/EventsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/events" element={<EventsPage />} />
        </Routes>
    );
}

export default App;
