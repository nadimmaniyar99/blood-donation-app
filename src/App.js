import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Inventory from "./Components/Inventory";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Donate from './Components/Donate';
import Request from './Components/Request';
import Track from './Components/Track';
import Donorcard from './Components/Donorcard';
import ContactDonor from './Components/ContactDonor';

import Rewards from './Components/Rewards';
import Donortiers from './Components/Donortiers';
import Donation from './Components/Donation';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Registration from './Components/Registration';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Inventory />
      <CTA/>
      <Footer/>
      <Donate/>
      <Request/>
      <Track/>
      <Donorcard/>
      <ContactDonor/>
      <Rewards/>
      <Donortiers/>
      <Donation/>
      <Login/>
      <Signup/>
      <Registration/>
    </>
  );
}

export default App;
