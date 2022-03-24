import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import Services from "./components/Services/Services";
import TransactionsSection from "./components/TransactionsSection/TransactionsSection";
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
      <TransactionsSection />
      <Footer />
    </main>
  );
};

export default App;
