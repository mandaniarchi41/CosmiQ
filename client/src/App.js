import React from "react";
import GlobalStyle from "./GlobalStyle";
import HeroSection from "./components/HeroSection";
import InteractiveDemo from "./components/InteractiveDemo";
import HowItWorks from "./components/HowItWorks";
import ProductRecommendations from "./components/ProductRecommendations";
import TestimonialsGallery from "./components/TestimonialsGallery";
import QuizCommunity from "./components/QuizCommunity";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <InteractiveDemo />
      <HowItWorks />
      <ProductRecommendations />
      <TestimonialsGallery />
      <QuizCommunity />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;