import {
  Welcome,
  Opening,
  Wedding,
  Story,
  Gallery,
  Location,
  Thanks,
  Footer,
} from "@/pages/";
import { useEffect, useRef, useState } from "react";
import music from "/assets/music/sound.mp3";
import { FaArrowUp } from "react-icons/fa";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import Sakura from "./components/Sakura";

export default function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showSakura, setShowSakura] = useState(false);

  // Music
  const audioRef = useRef(new Audio(music));

  // Ensure audio plays when the component is mounted
  useEffect(() => {
    audioRef.current.volume = 0.8;
    audioRef.current.loop = true;
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Scroll-to-top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      {showSakura && <Sakura />}
      <Welcome setIsPlayingMusic={setIsPlayingMusic} setShowSakura={setShowSakura} />
      <Opening />
      <Wedding />
      <Story />
      <Gallery />
      <Location />
      <Thanks />
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='opacity-100 z-40'
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            color: '#FFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          <FaArrowUp className='w-10 h-10 p-2 bg-pink-600 rounded-full' />
        </button>
      )}
      <button
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className='opacity-100 z-40'
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        {!isPlayingMusic ?
          <TbMusicOff className='w-10 h-10 p-2 bg-pink-600 rounded-full' />
          :
          <TbMusic className='w-10 h-10 p-2 bg-pink-600 rounded-full' />
        }
      </button>
    </div>
  )
}