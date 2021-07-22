import './App.css';
import Video from './components/Video';
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <Video 
          url={video1}
          channel='grubspot' 
          description='This is a game changer🧇 #grubspot #food #breakfast #foodtiktok #waffle #waffles #GossipGirlHere' 
          song='Taste - Tyga'
          likes={715394} 
          shares={77192} 
          messages={6287}
        />
        <Video 
          url={video2}
          channel='tougester7' 
          description='Not all kitties love shrimp 🤣😂 #hellokitty #catbloopers #bloopers #kitty #catlove #funny #hilariousvideos' 
          song='original sound - Jun Castro'
          likes={842438} 
          shares={87829} 
          messages={8775}
        />
        <Video
          url={video3}
          channel='kaelimaee'
          description='this was a good mini fridge restock🤩 #fyp #foryoupage #restock #refill #restockfridge #asmr #organize #nogaps #food #clean #viral #GossipGirlHere'
          song='original sound - kae'
          likes={8693847}
          shares={84164}
          messages={57190}
        />
      </div>
    {/* App container */}
    {/* Videos */}
    </div>
  );
}

export default App;
