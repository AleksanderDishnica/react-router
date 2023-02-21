import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <section id="home">
      <Header title="Home part of the page" />
      <Main />
      <Footer />
    </section>
  );
}
