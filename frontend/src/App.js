import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cookies from "js-cookie";
import './App.css';
import {MainTemplate} from "./templates"
import {
  LandingPage,
  TutorialMenuPage,
  TutorialListPage,
  TutorialCategoryPage,
  ErrorPage,
  FAQPage,
  AboutBlogPage,
  AboutJoinPage,
  AboutTeamPage,
  ProfilePage,
  ContentBuilderPage,
  PreviewPage,
  ApprovePage,
  SetPasswordPage,
  TermsPage,
  ReferencesPage

} from "./pages";





function App() {
  const [isLogin, setIsLogin]  = useState(false);
  const [tempEditPath, setTempEditPath] = useState([]);
  useEffect(() => {
    if (Cookies.get("isLogin")==="true") {
      console.log("HERETRUE")
      console.log(Cookies.get("isLogin"))
      setIsLogin(true);
    }else{
      console.log("HEREFalse")
      setIsLogin(false);
    }
  },[]);

  
  return (
    <div>
      <Router>
         <MainTemplate isLogin={isLogin} setIsLogin={setIsLogin}>
          <Routes>
            <Route  path="/" element={<LandingPage/>} />
            <Route path='/menu' element={<TutorialMenuPage />} />
            <Route  path="/menu/:category" element={<TutorialCategoryPage setTempEditPath={setTempEditPath} isLogin={isLogin} />} />
            <Route  path="/list" element={<TutorialListPage/>} />
            <Route path='/faq'  element={<FAQPage/>} />
            <Route path='/aboutBlog'  element={<AboutBlogPage/>} />
            <Route path='/aboutJoin'  element={<AboutJoinPage/>} />
            <Route path='/aboutTeam'  element={<AboutTeamPage/>} />
            <Route path='/terms'  element={<TermsPage/>} />
            <Route path='/references'  element={<ReferencesPage/>} />
            <Route path='/blog/:id'  element={<PreviewPage/>} />
            <Route path='*'  element={<ErrorPage/>} />
            {
            isLogin?
            <>
            <Route  path="/profile" element={<ProfilePage setIsLogin={setIsLogin}/>}/>
            <Route path ='/contentBuilder' element={<ContentBuilderPage tempEditPath={tempEditPath} />}/>
            <Route path='/preview'  element={<PreviewPage/>} />
            <Route path='/approve'  element={<ApprovePage/>} />
            </>
              :
              <>
            <Route  path="/register" element={<ProfilePage/>}/>
            <Route  path="/setPassword/:id" element={<SetPasswordPage/>}/>
            </>
            }
          </Routes> 
        </MainTemplate>
      </Router>
      </div>
  );
}

export default App;
