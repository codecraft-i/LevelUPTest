import React, { useEffect,  } from 'react';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopUni.css';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const games = [
  {
    contry: 'Shveysariya',
    title: 'École Ducasse',
    redirect: '/universities/university/École Ducasse',
    image: '/images/UniversitiesPic/uni1.webp',
  },
  {
    contry: 'Germaniya',
    title: 'University of Europe for Applied Sciences',
    redirect: '/universities/university/University of Europe for Applied Sciences',
    image: '/images/UniversitiesPic/uni2.jpeg',
  },
  {
    contry: 'Germaniya',
    title: 'SRH University',
    redirect: '/universities/university/SRH University',
    image: '/images/UniversitiesPic/uni3.jpg',
  },
  {
    contry: 'Fransiya',
    title: 'Ecole de Management Applique',
    redirect: '/universities/university/Ecole de Management Applique',
    image: '/images/UniversitiesPic/uni4.webp',
  },
  {
    contry: 'Germaniya Berlin',
    title: 'Berlin School of Business & Innovation',
    redirect: '/universities/university/Berlin School of Business & Innovation',
    image: '/images/UniversitiesPic/uni5.jpg',
  },
  {
    contry: 'Chexiya',
    title: 'Higher education in the Czech Republic',
    redirect: '/universities/university/Higher education in the Czech Republic',
    image: '/images/UniversitiesPic/uni6.jpg',
  }
];

const TopUni = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/universities");
  };

  // Tranlations
  const { t, i18n } = useTranslation();

  return (
    <section className="game-section" style={{ margin: "70px 0" }}>
      <div className="game-header">
        <div>
          <p className="top-text">{t('universities')}</p>
          <h2 style={{ color: "#eee" }}>{t('famous_universities')}</h2>
        </div>
        <button className="view-all" onClick={ handleClick }>{t('all')}</button>
      </div>

      <div className="game-cards">
        {games.map((game, index) => (
          <div className="game-card" data-aos="zoom-in" key={index}>
            <img src={game.image} alt={game.title} />
            <p className="genre">{game.contry}</p>
            <h4>{game.title}</h4>
            <button className={`explore-btn ${index === 3 ? 'blue' : ''}`}
            onClick={() => navigate(game.redirect)}
            >
              {t('about')}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopUni;
