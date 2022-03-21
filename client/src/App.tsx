import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import TransactionsSection from "./components/TransactionsSection/TransactionsSection";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Hero />
      <ConnectWallet />
      <TransactionsSection />
    </main>
  );
};

export default App;
