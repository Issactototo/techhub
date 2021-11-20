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
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {UserAccess20,Translate20} from "@carbon/icons-react";



export function HeaderTemplate() {
    return (
        <div>
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
                        <HeaderMenuItem href="/menu/database">Frontend</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/role">Backend</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/database">Database</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/devops">DevOps</HeaderMenuItem>
                    </HeaderMenu>
                    
                    <HeaderMenuItem href="/faq">FAQ</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Login" onClick={() => {}}>
                    <UserAccess20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Change Language" onClick={() => {}}>
                    <Translate20/>
                    </HeaderGlobalAction>
                </HeaderGlobalBar>

            </Header>
            </div>
    );
}
