import React from "react";
import { Header } from "carbon-components-react";
import {
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
} from "carbon-components-react/lib/components/UIShell";
import Search20 from "@carbon/icons-react/lib/search/20";
import {Translate20} from "@carbon/icons-react";
import { LoginedSubHeader,NotLoginedSubHeader } from "./rightHeader";



export function HeaderTemplate({isLogin, setIsLogin}) {
    return (
        <div >
            <Header aria-label="Tech Hub HK">
                <HeaderName href="/" prefix="HK">
                    Tech Hub
                </HeaderName>
                <HeaderNavigation aria-label="IBM Foundation Placement Journal">
                    <HeaderMenu menuLinkName="About" >
                        <HeaderMenuItem href="/aboutBlog">The HK Tech Hub</HeaderMenuItem>
                        <HeaderMenuItem href="/aboutTeam">The Team</HeaderMenuItem>
                        <HeaderMenuItem href="/aboutJoin">Join Us</HeaderMenuItem>
                    </HeaderMenu>
                    <HeaderMenu  menuLinkName="Tutorials" >
                        <HeaderMenuItem href="/menu">Menu</HeaderMenuItem>
                        <HeaderMenuItem href="/list">List</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/Frontend">Frontend</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/Backend">Backend</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/Database">Database</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/DevOps">DevOps</HeaderMenuItem>
                    </HeaderMenu>
                    
                    <HeaderMenuItem href="/faq">FAQ</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                    </HeaderGlobalAction>
                    
                    
                    <HeaderGlobalAction aria-label="Change Language" onClick={() => {}}>
                    <Translate20/>
                    </HeaderGlobalAction>
                    {isLogin?
                        <LoginedSubHeader setIsLogin={setIsLogin}/>
                        :
                        <NotLoginedSubHeader setIsLogin={setIsLogin}/>
                    }
                </HeaderGlobalBar>

            </Header>
            </div>
    );
}
