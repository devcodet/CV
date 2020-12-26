import React from "react";
import Title from "../../components/labels/title/titles";
import { useTranslation } from "react-i18next";

import fernandoPessoa from "../../assets/images/persons/fernandoPessoa.jpg";
import jorgeCoutinho from "../../assets/images/persons/jorgeCoutinho.jpg";
import joeBiden from "../../assets/images/persons/joeBiden.jpg";
import kamalaHarris from "../../assets/images/persons/kamalaHarris.jpg";
import papaFrancisco from "../../assets/images/persons/papaFrancisco.jpg";
import danielGuerreiro from "../../assets/images/persons/danielGuerreiro.jpg";
import neilDeGrasseTyson from "../../assets/images/persons/neilDeGrasseTyson.jpg";
import shephenHalwing from "../../assets/images/persons/shephenHalwing.jpg";
import obama from "../../assets/images/persons/obama.jpg";
import billGates from "../../assets/images/persons/billGates.jpg";

import { getGridCircleImages } from "../../components/cards/images/circle-image-description";

import "./inspiring_people.css";
import "../global.css";

function InspiringPeople() {
  const { t } = useTranslation();

  var title = {
    name: t('InspiringPeopleTitle'),
    description: t('InspiringPeopleSubTitle'),
  };

  var grid = getGridCircleImages([
    [
      { src: fernandoPessoa,title: "Fernando Pessoa", description: t('FernandoPessoaDescription') },
      { src: jorgeCoutinho, title: "Jorge Coutinho", description: t('JorgeCoutinhoDescription') },
      { src: joeBiden, title: "Joe Biden", description: t('JoeBidenDescription') },
      { src: kamalaHarris, title: "Kamala Harris", description: t('KamalaHarrisDescription') },
    ],
    [
      { src: papaFrancisco, title: "Papa Francisco", description: t('PapaFransciscoDescription')},
      { src: danielGuerreiro, title: "Daniel Guerreiro", description: t('DanielGuerreiroDescription') },
      { src: neilDeGrasseTyson, title: "Neil deGrasse Tyson", description: t('NeildeGrasseTysonDescription') },
      { src: shephenHalwing, title: "Shephen Halwing", description: t('ShephenHalwingDescription') },
    ],
    [
      { src: obama, title: "Obama", description: t('ObamaDescription') },
      { src: billGates, title: "Bill Gates", description: t('BillGatesDescription')},
    ],
  ]);

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />
      <div style={{ margin: "auto" }}>{grid}</div>
      <p></p>
      <div style={{ margin: "auto" }}>
        <div class="quotes">{t('MostAdmireQuote')}</div>
        <div style={{ color: "black", fontSize: "15px" }}>Almada Negreiros</div>
      </div>
    </div>
  );
}

export default InspiringPeople;
