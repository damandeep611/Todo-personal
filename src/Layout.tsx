import Features from "./components/landing/Features";
import Hero from "./components/landing/Hero";
import Problem from "./components/landing/Problem";
import Navbar from "./components/layout/Navbar";

export default function Layout(){
  return(
    <>
    <Navbar/>
     <Hero/>
     <Problem/>
     <Features/>
    </>
  )
}