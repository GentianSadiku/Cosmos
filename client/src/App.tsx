import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import Services from "./components/Services/Services";

import Footer from "./components/Footer/Footer";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Hero />
      <ConnectWallet />
      <Services />
      <Statistics />
      <Footer />
    </main>
  );
};

export default App;
