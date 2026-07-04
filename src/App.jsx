import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Memories from './components/Memories';
import Ask from './components/Ask';
import Success from './components/Success';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [page, setPage] = useState('welcome');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/love.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Phát nhạc khi chuyển từ welcome sang memories
  useEffect(() => {
    if (page === 'memories' && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [page, isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  // Click tạo trái tim bay lên
  const handleClick = useCallback((e) => {
    const hearts = ['❤️', '💕', '💗', '💖', '🩷', '💘', '✨'];
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'click-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = (e.clientX + (Math.random() - 0.5) * 30) + 'px';
        heart.style.top = (e.clientY + (Math.random() - 0.5) * 20) + 'px';
        heart.style.fontSize = (14 + Math.random() * 16) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
      }, i * 60);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  const createHearts = () => {
    const hearts = [];
    for (let i = 0; i < 40; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 10}px`,
        '--duration': `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      };
      hearts.push(<div key={i} className="heart-particle" style={style}>❤</div>);
    }
    return hearts;
  };

  return (
    <div className="App">
      <div className="heart-bg">{createHearts()}</div>

      {/* Nút bật/tắt nhạc */}
      {page !== 'welcome' && (
        <button className="music-btn" onClick={toggleMusic} title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}>
          <span className={isPlaying ? 'music-icon spinning' : 'music-icon'}>
            {isPlaying ? '🎵' : '🔇'}
          </span>
        </button>
      )}

      <div className="container">
        <img src="/peeking-cat.png" alt="Cat" className="peeking-cat" />
        
        <div className="card">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {page === 'welcome' && <Welcome setPage={setPage} />}
              {page === 'memories' && <Memories setPage={setPage} />}
              {page === 'ask' && <Ask setPage={setPage} />}
              {page === 'success' && <Success />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
