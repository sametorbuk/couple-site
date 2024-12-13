import React, { useState, useEffect } from "react";
import PhotoGallery from "./components/PhotoGallery";
import "./styles.css";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const startDate = new Date("2023-12-17T00:00:00");
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      gün: days,
      saat: hours,
      dakika: minutes,
      saniye: seconds,
    };
  }

  return (
    <div className="app">
      <header className="header">
        <h1>ELİF & METEHAN</h1>
        <p>Sevgililer günümüz kutlu olsun sevgilim</p>
      </header>

      <main className="main-content">
        <section className="hero-image">
          <img src="/images/3.jpeg" alt="Elif ve Metehan" />
        </section>

        <section className="countdown">
          <h2>Birlikteliğimiz</h2>
          <div className="timer-container">
            {Object.entries(timeLeft).map(([interval, value]) => (
              <div key={interval} className="timer-box">
                <span className="timer-value">{value}</span>
                <span className="timer-label">{interval}</span>
              </div>
            ))}
          </div>
        </section>

        <PhotoGallery />

        <section className="love-quotes">
          <h2>Aşkımızın Sözleri</h2>
          <div className="quotes-container">
            <blockquote className="main-quote">
              "Aylardır her anımı anlamlandırdığın için, beni benden daha çok
              düşündüğün için ve daha sayısız milyonlarca iyilikleri bana
              yaşattığın için teşekkür ederim."
            </blockquote>
            <div className="quote-grid">
              <div className="quote-box">
                <p>
                  "Ellerim ellerinde olursa hiçbir zaman yenilmeyeceğimize
                  eminim."
                </p>
              </div>
              <div className="quote-box">
                <p>"O gün ki gördüm seni..."</p>
              </div>
            </div>
          </div>
        </section>

        <div className="full-width-image">
          <img src="/images/6.jpeg" alt="Çift fotoğrafı 1" />
        </div>

        <section className="music-player">
          <h2>Aşk Şarkımız</h2>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-dUmZjyftwA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <div className="full-width-image">
          <img src="/images/7.jpeg" alt="Çift fotoğrafı 2" />
        </div>
      </main>

      <footer className="footer">
        <p className="footer-title">Elif & Metehan</p>
        <p className="footer-subtitle">Sonsuza kadar...</p>
      </footer>
    </div>
  );
};

export default App;
