import Navbar from './components/Navbar';
import ImportantNews from './components/ImportantNews';

function App() {
  return (
    <div className="bg-background h-screen w-full">
      <Navbar />
      <ImportantNews
        bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
        title="Will Messi finally win a World Cup Title?"
        description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
      />
    </div>
  );
}

export default App;

// SOCIAL MEDIAS ON THE NAVBAR AND A LINK TO SIGN UP ON THE NEWSLETTER
