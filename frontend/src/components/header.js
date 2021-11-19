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



export function HeaderTemplate() {
    return (
            <Header aria-label="Tech Hub HK">
                <HeaderName href="/" prefix="HK">
                    Tech Hub
                </HeaderName>
                <HeaderNavigation aria-label="IBM Foundation Placement Journal">
                    <HeaderMenu  menuLinkName={"HI"} >
                        <HeaderMenuItem href="/profile">Profile</HeaderMenuItem>
                        <HeaderMenuItem href="/role">Role</HeaderMenuItem>
                        <HeaderMenuItem href="/goals">Goals</HeaderMenuItem>
                    </HeaderMenu>
                    <HeaderMenu
                        aria-label="Performance Reviews"
                        menuLinkName="Performance Reviews"
                    >
                        <HeaderMenuItem href="/3-month-review">
                            3 Month
                        </HeaderMenuItem>
                        <HeaderMenuItem href="/6-month-review">
                            6 Month
                        </HeaderMenuItem>
                        <HeaderMenuItem href="/12-month-review">
                            12 Month
                        </HeaderMenuItem>

                        <HeaderMenuItem href="/feedback">
                            Feedback
                        </HeaderMenuItem>
                    </HeaderMenu>
                    <HeaderMenuItem href="/leaving">Leaving</HeaderMenuItem>
                    <HeaderMenuItem href="https://w3.ibm.com/w3publisher/uki-foundation-placement-schemes/your-placement/online-journal">
                        FAQs
                    </HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                    <Notification20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                    <AppSwitcher20 />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>

            </Header>
    );
}
