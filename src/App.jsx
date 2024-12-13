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
        <div className="header-image">
          <img src="/images/8.jpeg" alt="Header image" />
          <div className="header-overlay">
            <h1>ELİF </h1>
            <i className="fas fa-heart"></i>
            <h1>METEHAN</h1>
            <p>Sevgililer Günümüz Kutlu Olsun Sevgilim</p>
          </div>
        </div>
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
          <h2>ŞARKIMIZ</h2>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4-vPgQjy1q8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "20px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            <p style={{ color: "black" }}>
              Seni Üzerlerse Haber Ver bana
              <br />
              Ben Senin Kapında Nöbet Beklerim
              <br />
              Çünkü Ben Severken Çocuk Gibiyim
            </p>
          </div>
        </section>

        <div className="full-width-image">
          <img src="/images/7.jpeg" alt="Çift fotoğrafı 2" />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-image">
          <img className="imege" src="/images/13.jpg" alt="Footer image" />
          <div className="footer-overlay">
            <div className="footer-text">
              <span className="name">METEHAN</span>
              <i className="fas fa-heart"></i>
              <span className="name">ELİF</span>
            </div>
            <p className="footer-subtext">
              BU WEBSİTESİ METEHAN BEY TARAFINDAN ELİF HANIM'A ÖZEL
              HAZIRLANMIŞTIR
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
