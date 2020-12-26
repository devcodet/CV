import React from "react";
import Title from "../../components/labels/title/titles";

import { useTranslation } from "react-i18next";

import learning from "../../assets/images/interests/learning.jpg";
import technology from "../../assets/images/interests/technology.jpg";
import maths from "../../assets/images/interests/maths.jpg";
import economy from "../../assets/images/interests/economy.jpg";
import politics from "../../assets/images/interests/politics.jpg";
import fado from "../../assets/images/interests/fado.jpg";
import poetry from "../../assets/images/interests/poetry.jpg";
import selfDevelopment from "../../assets/images/interests/selfDevelopment.jpg";
import philosophy from "../../assets/images/interests/philosophy.jpg";
import history from "../../assets/images/interests/history.jpg";
import volunteering from "../../assets/images/interests/volunteering.jpg";
import science from "../../assets/images/interests/science.jpg";
import astronomy from "../../assets/images/interests/astronomy.jpg";
import publicSpeaking from "../../assets/images/interests/publicSpeaking.jpg";

import { getGridCircleImages } from "../../components/cards/images/circle-image-description";

import "./hobbies.css";
import "../global.css";

function Hobbies() {
  const { t } = useTranslation();
  var title = { name: t('HobbiesInterestsTitle'), description: t('HobbiesInterestsSubTitle') };

  var grid = getGridCircleImages([
    [
      { src: learning, title: t('Learning') },
      { src: technology, title: t('Technology') },
      { src: maths, title: t('Maths') },
      { src: economy, title: t('Economy') },
      { src: politics, title: t('Politics') },
      { src: fado, title: t('Fado') },
    ],
    [
      { src: poetry, title: t('Poetry') },
      { src: selfDevelopment, title: t('SelfDevelopment') },
      { src: philosophy, title: t('Philosophy') },
      { src: history, title: t('History') },
    ],
    [
      { src: volunteering, title: t('Volunteering')},
      { src: science, title: t('Science')},
      { src: astronomy, title: t('Astronomy') },
      { src: publicSpeaking, title: t('PublicSpeaking') },
    ],
  ]);

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>{grid}</div>
      <p></p>
      <div style={{ margin: "auto" }}>
        <div class="quotes">{t('BookStoreQuote1')}</div>
        <div class="quotes">{t('BookStoreQuote2')}</div>
        <div style={{ color: "black", fontSize: "15px" }}>Almada Negreiros</div>
      </div>
    </div>
  );
}

export default Hobbies;
