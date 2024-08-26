import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/public/HomePage";
import ListBarsPage from "./pages/public/ListBarsPage";
import ListCitiesPage from "./pages/public/ListCitiesPage";
import DetailsCitiesPage from "./pages/public/DetailsCitiesPage";
import DetailsBarPage from "./pages/public/DetailsBarsPage";
import LoginPage from "./pages/public/LoginPage";
import LogoutPage from "./pages/public/LogoutPage";
import SignupPage from "./pages/public/SignupPage";
import ConceptPage from "./pages/public/ConceptPage";
import TournamentsPage from "./pages/public/TournamentsPage";
import RankingsPage from "./pages/public/RankingsPage";
import RulesPage from "./pages/public/RulesPages";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminListUsersPage from "./pages/admin/AdminListUsersPage";
import AdminCreateUserPage from "./pages/admin/AdminCreateUserPage";
import AdminUpdateUserPage from "./pages/admin/AdminUpdateUserPage";
import AdminListBarsPage from "./pages/admin/AdminListBarsPage";
import AdminCreateBarPage from "./pages/admin/AdminCreateBarPage";
import AdminUpdateBarPage from "./pages/admin/AdminUpdateBarPage";
import AdminListTournamentsPage from "./pages/admin/AdminListTournamentsPage";
import AdminCreateTournamentsPage from "./pages/admin/AdminCreateTournamentsPage";
import AdminUpdateTournamentPage from "./pages/admin/AdminUpdateTournamentPage";
import AdminListRankingsPage from "./pages/admin/AdminListRankingsPage";
import AdminCreateRankingsPage from "./pages/admin/AdminCreateRankingsPage";
import AdminUpdateRankingPage from "./pages/admin/AdminUpdateRankingPage";
import UpdateProfilePage from "./pages/public/ProfilePage";
import NotFoundPage from "./pages/public/NotFoundPage";  

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chessbar" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} /> This will catch all undefined routes
        <Route path="/chessbar/concept" element={<ConceptPage />} />
        <Route path="/chessbar/cities" element={<ListCitiesPage />} />
        <Route path="/chessbar/cities/details/:id" element={<DetailsCitiesPage />} />
        <Route path="/chessbar/bars" element={<ListBarsPage />} />
        <Route path="/chessbar/bars/details/:id" element={<DetailsBarPage />} />
        <Route path="/chessbar/tournaments" element={<TournamentsPage />} />
        <Route path="/chessbar/rankings" element={<RankingsPage />} />
        <Route path="/chessbar/rules" element={<RulesPage />} />

        <Route path="/chessbar/signup" element={<SignupPage />} />
        <Route path="/chessbar/login" element={<LoginPage />} />
        <Route path="/chessbar/profile/update/:id" element={<UpdateProfilePage />} />
        <Route path="/chessbar/logout" element={<LogoutPage />} />

        <Route path="/chessbar/admin" element={<AdminDashboardPage />} />
        <Route path="/chessbar/admin/users" element={<AdminListUsersPage />} />
        <Route path="/chessbar/admin/users/create" element={<AdminCreateUserPage />} />
        <Route path="/chessbar/admin/users/update/:id" element={<AdminUpdateUserPage />} />
        <Route path="/chessbar/admin/bars" element={<AdminListBarsPage />} />
        <Route path="/chessbar/admin/bars/create" element={<AdminCreateBarPage />} />
        <Route path="/chessbar/admin/bars/update/:id" element={<AdminUpdateBarPage />} />
        <Route path="/chessbar/admin/tournaments" element={<AdminListTournamentsPage />} />
        <Route path="/chessbar/admin/tournaments/create" element={<AdminCreateTournamentsPage />} />
        <Route path="/chessbar/admin/tournaments/update/:id" element={<AdminUpdateTournamentPage />} />
        <Route path="/chessbar/admin/rankings" element={<AdminListRankingsPage />} />
        <Route path="/chessbar/admin/rankings/create" element={<AdminCreateRankingsPage />} />
        <Route path="/chessbar/admin/rankings/update/:id" element={<AdminUpdateRankingPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
