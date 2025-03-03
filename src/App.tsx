// App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;