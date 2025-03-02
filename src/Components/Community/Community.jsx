import React from 'react'
import CommunityStyle from "./CommunityStyle.module.css"
import { NavLink, Route, Routes } from 'react-router'
import Profile from './Profile/Profile'
import SocialCommunity from './Social-Community/SocialCommunity'
const Community = () => {
    return (
        <main className={CommunityStyle.mainDiv}>
            <section className={CommunityStyle.firstSection}>
                <NavLink to="/community/profile" className={({ isActive }) => isActive ? `${CommunityStyle.navLink} ${CommunityStyle.activeLink}` : CommunityStyle.navLink}>
                    Profile
                </NavLink>
                <NavLink to="/community/social-community" className={({ isActive }) => isActive ? `${CommunityStyle.navLink} ${CommunityStyle.activeLink}` : CommunityStyle.navLink}>
                    Community
                </NavLink>
                <NavLink to="/candidate" className={({ isActive }) => isActive ? `${CommunityStyle.navLink} ${CommunityStyle.activeLink}` : CommunityStyle.navLink}>
                    Candidate Form
                </NavLink>
            </section>

            <section>
            <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path="social-community" element={<SocialCommunity />} />
                </Routes>
            </section>
        </main>
    )
}

export default Community