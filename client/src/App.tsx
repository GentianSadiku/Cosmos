
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Hero />
      <ConnectWallet />
      <Services />
    </main>
  );
};

export default App;
