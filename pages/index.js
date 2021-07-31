import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Body />
      <Footer />
    </div>
  );
}
