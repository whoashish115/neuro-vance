import React from "react";
import { Home as HomeComponent } from "../components";


export const metadata = {
 title: 'Home | Neurovance',
 description: 'Home page of the website',
 keywords: 'home, website',} 

export default function Home() {
  return (
      <HomeComponent  />
  );
};