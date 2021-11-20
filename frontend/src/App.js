import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import {MainTemplate} from "./templates"
import {
  LandingPage,
  TutorialMenuPage,
  TutorialListPage,
  TutorialCategoryPage,
  ErrorPage,
  FAQPage,
  ListPage,
  AboutBlogPage,
  AboutJoinPage,
  AboutTeamPage,

} from "./pages"


function App() {
  return (
   

      <Router>
         <MainTemplate>
          <Routes>
          <Route  path="/" element={<LandingPage/>} />
          <Route  path="/menu" element={<TutorialMenuPage/>} />
          <Route  path="/menu/:category" element={<TutorialCategoryPage/>} />
          <Route  path="/list" element={<TutorialListPage/>} />
          <Route path='/faq'  element={<FAQPage/>} />
          <Route path='/list'  element={<ListPage/>} />
          <Route path='/aboutBlog'  element={<AboutBlogPage/>} />
          <Route path='/aboutJoin'  element={<AboutJoinPage/>} />
          <Route path='/aboutTeam'  element={<AboutTeamPage/>} />
          <Route path='*'  element={<ErrorPage/>} />
        </Routes> 
        </MainTemplate>
      </Router>
    
  );
}

export default App;
