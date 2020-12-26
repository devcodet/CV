import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/labels/title/titles";
import getProgressGrid from "../../components/cards/progress/progress";
// import Progress from "../../components/cards/progress-circle/react-progress-circle";
import GetSkillsList from "../../components/list-items/skill-item";

import "./tools.css";
import "../global.css";

import suggestion_tools from "../../assets/images/tools/tools_suggestion.jpg";
import suggestion_languages from "../../assets/images/tools/languages_suggestion.jpg";
// import suggestion_skills from "../../assets/images/tools/skills_suggestion.jpg";
// import suggestion_skills2 from "../../assets/images/tools/skills_suggestion2.jpg";
// import suggestion_skills3 from "../../assets/images/tools/skills_suggestion3.jpg";
// import suggestion_skills4 from "../../assets/images/tools/skills_suggestion4.jpg";

import team from "../../assets/images/tools/team.svg";
import search from "../../assets/images/tools/search.svg";
import communication from "../../assets/images/tools/communication.svg";
import heart from "../../assets/images/tools/heart.svg";
import shield from "../../assets/images/tools/shield.svg";
// import empathy from "../../assets/images/tools/empathy.svg";
// import balance from "../../assets/images/tools/balance.svg";
// import plus from "../../assets/images/tools/plus.svg";

function Tools() {
  const { t, i18n } = useTranslation();

  var titles = [
    {
      title: t("ToolsTitle"),
      description: t("ToolsSubTitle"),
    },
    {
      title: t("LanguagesTitle"),
      description: t("LanguagesSubTitle"),
    },
    {
      title: t('SkillsTitle'),
      description: t('SkillsSubTitle'),
    },
  ];

  var toolsGrid = getProgressGrid([
    [
      { value: 80, name: "Android Studio" },
      { value: 70, name: "Git" },
      { value: 60, name: "Visual Studio Code" },
      { value: 80, name: "Visual Studio" },
    ],
    [
      { value: 60, name: "Microsoft SQL SSMS" },
      { value: 30, name: "Adobe XD" },
    ],
  ]);

  var languagesGrid = getProgressGrid([
    [
      { value: 80, name: "C#" },
      { value: 80, name: "Xamarin" },
      { value: 60, name: "Java" },
      { value: 60, name: "SQL" },
    ],
    [
      { value: 35, name: "JavaScript" },
      { value: 30, name: "HTML/CSS" },
    ],
  ]);

  // var toolsSkills = GetSkillsList(
  //   [
  //     { "src" : xamarin, "title" : "title", "description":"desc"},
  //     { "src" : android, "title" : "title", "description":"desc"},
  //     { "src" : ios, "title" : "title", "description":"desc"},
  //     { "src" : database, "title" : "title", "description":"desc"},
  //   ]
  // )

  // var languagesSkills = GetSkillsList(
  //   [
  //     { "src" : xamarin, "title" : "title", "description":"desc"},
  //     { "src" : android, "title" : "title", "description":"desc"},
  //     { "src" : ios, "title" : "title", "description":"desc"},
  //     { "src" : database, "title" : "title", "description":"desc"},
  //   ]
  // )

  var softSkills = GetSkillsList([
    {
      src: team,
      title: t('TeamWorkerTitle'),
      description: t('TeamWorkerDescription1'),
      description2: t('TeamWorkerDescription2')
    },

    {
      src: search,
      title: t('CuriousTitle'),
      description: t('CuriousDescription1'),
      description2: t('CuriousDescription2'),
      description3: t('CuriousDescription3')
    },

    {
      src: communication,
      title: t('EffectiveCommunicatorTitle'),
      description: t('EffectiveCommunicatorDescription1'),
      description2: t('EffectiveCommunicatorDescription2'),
      description3: t('EffectiveCommunicatorDescription3'),
    },

    {
      src: heart,
      title: t('HelpfulServerTitle'),
      description: t('HelpfulServerDescription1'),
      description2: t('HelpfulServerDescription2'),
      description3: t('HelpfulServerDescription3')
    },
    {
      src: shield,
      title: t('ResilientTitle'),
      description: t('ResilientDescription1'),
      description2: t('ResilientDescription2')
    },

    // {
    //   src: empathy,
    //   title: "Empatico",
    //   description:
    //     "Consigo me pôr, na situação da outra pessoa, isto é, analisar algumas as varaiveis e enquadrar-me no seu cenário. Tal como eu, essa pessoa pode estar a passar aquilo que já passei pela mesma situação e com isso, mais facilmente, consigo ajudar",
    //   description2:
    //     "Tal como eu, essa pessoa pode estar a passar aquilo que já passei pela mesma situação e com isso, mais facilmente, consigo ajudar",
    // },

    // {
    //   src: balance,
    //   title: "Ético",
    //   description:
    //     "A etica e moral é uma das coisas que mais considero. De nada serve ter sucesso e não ter ética, isto é, respeitar os nossos valores e principios, para a criação de uma sociedade mais equalitativa, mais justa com as pessoas.",
    //   description2:
    //     'Acredito que tenho as competências para me enquadrar na etica e moral "geral" e no bom senso.',
    //   description3:
    //     "Com a realidade vivida, nos ultimos tempos, é cada vez mais relevante esta area.",
    // },

    // {
    //   src: plus,
    //   title: "Positivo",
    //   description:
    //     "Sou positivo, acredito no poder transformador que a positividade têm no mundo.",
    //   description2:
    //     "Muitas vezes, gosto de ser positivo, de acreditar que é possivel, gosto também de ser realista, de ver as coisas tal como elas são.",
    //   description3:
    //     "Acredito também que cada coisa menos positiva, existe sempre algo de positivo, nem que seja para aprender, para crescer e evoluir",
    // },
  ]);

  return (
    <div className="App-header page">
      <p></p>
      <Title name={titles[0].title} description={titles[0].description} />
      <div class="tools-container">
        <img src={suggestion_tools} class="suggestion-image" />
        {toolsGrid}
        {/* <div class="skills-container">
            {toolsSkills}
          </div> */}
      </div>
      <p></p>
      <Title name={titles[1].title} description={titles[1].description} />
      <div class="tools-container">
        <img src={suggestion_languages} class="suggestion-image" />
        {languagesGrid}
        {/* <div class="skills-container">
          {languagesSkills}
        </div> */}
      </div>
      <Title name={titles[2].title} description={titles[2].description} />
      <div class="tools-container">
        <div style={{ margin: "0 0 0 50px", display: "flex" }}>
          <div class="progress-container">
            <div>{softSkills}</div>
            {/* <div class="skills-container">
              {softSkills2}
            </div> */}
          </div>
        </div>
        {/* <div style={{ display: "inline", margin: "auto" }}>
          <img src={suggestion_skills} class="suggestion-image" />
          <p />
          <img src={suggestion_skills2} class="suggestion-image" />
          <p />
          <img src={suggestion_skills3} class="suggestion-image" />
          <p />
          <img src={suggestion_skills4} class="suggestion-image" />
        </div> */}
      </div>
      <p></p>
    </div>
  );
}

export default Tools;
