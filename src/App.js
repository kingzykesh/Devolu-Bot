import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {DashboardPage, BotDetailsPage, MyBotsPage, OverviewPage, AllBotsPage, DepositPage, ClaimPage, TransactionPage} from "./routes/Routes.js";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/bot-details" element={<BotDetailsPage />} />
        <Route path="/my-bots" element={<MyBotsPage />} />
        <Route path="/all-bots" element={<AllBotsPage />} />
        <Route path="/activate" element={<DepositPage />} />
        <Route path="/claim" element={<ClaimPage />} />
        <Route path="/my-bots/overview" element={<OverviewPage />} />
        <Route path="/transaction-history" element={<TransactionPage />} />
      </Routes>
      
      <Toaster position='top-center' reverseOrder={false} />

    </BrowserRouter>
  );
}

export default App;
