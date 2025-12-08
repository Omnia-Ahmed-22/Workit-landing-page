import Hero from "./Hero.jsx";
import Values from "./Values.jsx";
import Cat from "./Cat.jsx";
import Footer from "./Footer.jsx";


function App() {
  return (
    <main>
      <div className="bg-purple-900">
        <Hero />
      </div>
      <div className="bg-purple-100">
        <Values />
      </div>
      <div>
        <Cat />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default App
