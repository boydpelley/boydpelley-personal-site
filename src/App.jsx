import Navbar from "./components/Navbar"; 
import PhotoAndInfo from "./components/PhotoAndInfo";

function App() {
  return (
    <>
      <Navbar />
      <PhotoAndInfo />
      <div className="bio">
        <h2>BIO</h2>
        <p>I'm an aspiring programmer from Sydney, Nova Scotia who loves the outdoors and the many thing that go with it. Some hobbies of mine include foraging, making homemade beer and cider, hiking, ice hockey and running.</p>
        <p>Aside from my activity outdoors, one of my biggest passions is music. I play guitar, bass, piano and sing; I play in a band, <a href="http://www.halfpastnineband.com">half past nine</a> as well as record and produce my own projects through FL Studio.</p>
        <p>From the programming side, I work with React.js, HTML, CSS, Javascript, and Java, programming mainly web applications, which can be seen below in in the projects section.</p>
      </div>
    </>
  )
}

export default App;
