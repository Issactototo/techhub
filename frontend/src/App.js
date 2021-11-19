import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import {MainTemplate} from "./templates"
import {LandingPage,MenuPage,ErrorPage} from "./pages"


function App() {
  return (
    <MainTemplate>
      <Router>
        <Routes>
          <Route  path="/" element={<LandingPage/>} />
          <Route  path="/menu" element={<MenuPage/>} />
          <Route path='*'  element={<ErrorPage/>} />

        </Routes> 
      </Router>
    </MainTemplate>
  );
}

export default App;
