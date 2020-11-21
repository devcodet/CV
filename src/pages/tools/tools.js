import React, { useState } from "react";

import Title from "../../components/labels/title/titles";
import GetProgressGrid from "../../components/cards/progress/progress";
// import Progress from "../../components/cards/progress-circle/react-progress-circle";
import GetSkillsList from "../../components/list-items/skill-item";

import "./tools.css";
import "../global.css";

//ImageSource
import ola from "../../assets/images/ola.jpg";

import suggestion_tools from '../../assets/images/tools/tools_suggestion.jpg'
import suggestion_languages from '../../assets/images/tools/languages_suggestion.jpg'
import suggestion_skills from '../../assets/images/tools/skills_suggestion.jpg'
import suggestion_skills2 from '../../assets/images/tools/skills_suggestion2.jpg'
import suggestion_skills3 from '../../assets/images/tools/skills_suggestion3.jpg'

import team from '../../assets/images/tools/team.svg'
import search from '../../assets/images/tools/search.svg'
import communication from '../../assets/images/tools/communication.svg'
import heart from '../../assets/images/tools/heart.svg'
import shield from '../../assets/images/tools/shield.svg'
import empathy from '../../assets/images/tools/empathy.svg'
import balance from '../../assets/images/tools/balance.svg'
import plus from '../../assets/images/tools/plus.svg'

import xamarin from '../../assets/images/skills_icons/xamarin.png';
import android from '../../assets/images/skills_icons/android.svg';
import ios from '../../assets/images/skills_icons/apple.svg';
import database from '../../assets/images/skills_icons/database.svg'

function Tools() {

  var titles = 
  [
    { "title": "#tools 🔧", "description" : "Find out the tools that I use or have used"},
    { "title": "#languages 👨‍💻", "description" : "Find out the languages that I'm programming or have programmed"},
    { "title": "#skills 🤹", "description" : "My skills set"},
  ]

  var toolsGrid = GetProgressGrid(
    [
      [
        { "value" : 80, "name" : "Android Studio" },
        { "value" : 70, "name" : "Git" },
        { "value" : 60, "name" : "Visual Studio Code" },
        { "value" : 80, "name" : "Visual Studio" },
        { "value" : 60, "name" : "Microsoft SQL SSMS" },
        { "value" : 30, "name" : "Adobe XD" }
      ]
    ]
  );
  
  var languagesGrid = GetProgressGrid(
    [
      [
        { "value" : 80, "name" : "C#" },
        { "value" : 80, "name" : "Xamarin" },
        { "value" : 60, "name" : "Java in ANDROID" },
        { "value" : 60, "name" : "SQL" },
        { "value" : 35, "name" : "JavaScript" },
        { "value" : 30, "name" : "HTML/CSS" },
        { "value" : 15, "name" : "Swift" },
      ]
    ]
  );

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

  var softSkills = GetSkillsList(
    [
      { "src" : team, "title" : "Trabalhador na Equipa", 
      "description":"Considero que o trabalho de equipa é fundamental para o sucesso e para o crescimento, com vista a isso tenho dedicado a saber lidar e compreender vários tipos de pessoas ao longo do tempo, representativo, nos projetos em que participei e que tenho realizado.",
      "description2":"Tanto no trabalho, como em tantas outras atividades que desenvolvo nos meus tempos livres."},

      { "src" : search, "title" : "Curioso", 
      "description":"A curiosidade inspira-me a sempre ir mais além.",
      "description2":"Tenho sempre a necessidade de saber como é um sistema ou serviço funciona, além de saber, tudo o que aconteceu e os processos envolvidos, bem como, tudo o que me rodeia.",
      "description3":"Conhecer o mundo e muito para além deste"},

      { "src" : communication, "title" : "Comunicador Eficaz", 
      "description":"Tenho uma paixão de conseguir transmitir tudo aquilo que gosto e que conheço, seja para informação seja para o ajudar. Gosto imenso de-me expressar e dar a conhecer.",
      "description2":"Gosto imenso de-me expressar e dar a conhecer.",
      "description3":"Embora, tenha algumas limitações ao nivel da linguagem e fluidez do meu discurso, considero que consigo passar a minha mensagem"},

      { "src" : heart, "title" : "Prestável e Servidor", 
      "description":"Dou tudo o que tenho a oferecer ao outro, prova disso, são as atividades que tenho realizado, nos meus tempos livres.",
      "description2":"Embora, tenha que cuidar de mim, consigo sempre que o outro receba a minha ajuda no seu desenvolvimento e quem diz outros, diz instituições.",
      "description3":"Devo dizer que é gosto enorme poder ajudar as outras pessoas."},

      { "src" : shield, "title" : "Resiliente", 
      "description":"\"Acabar quando acabei e não quando estou cansado\".",
      "description2":"Este é o meu lema, é sobre acabar o que têm de ser acabado, não é sobre mim, mas é sobre todos aqueles que podem depender de mim."},

      { "src" : empathy, "title" : "Empatico", 
      "description":"Consigo me pôr, na situação da outra pessoa, isto é, analisar algumas as varaiveis e enquadrar-me no seu cenário. Tal como eu, essa pessoa pode estar a passar aquilo que já passei pela mesma situação e com isso, mais facilmente, consigo ajudar",
      "description2":"Tal como eu, essa pessoa pode estar a passar aquilo que já passei pela mesma situação e com isso, mais facilmente, consigo ajudar"},

      { "src" : balance, "title" : "Ético", 
      "description":"A etica e moral é uma das coisas que mais considero. De nada serve ter sucesso e não ter ética, isto é, respeitar os nossos valores e principios, para a criação de uma sociedade mais equalitativa, mais justa com as pessoas.",
      "description2":"Acredito que tenho as competências para me enquadrar na etica e moral \"geral\" e no bom senso.",
      "description3":"Com a realidade vivida, nos ultimos tempos, é cada vez mais relevante esta area."},

      { "src" : plus, "title" : "Positivo", 
      "description":"Sou positivo, acredito no poder transformador que a positividade têm no mundo.",
      "description2":"Muitas vezes, gosto de ser positivo, de acreditar que é possivel, gosto também de ser realista, de ver as coisas tal como elas são.",
      "description3":"Acredito também que cada coisa menos positiva, existe sempre algo de positivo, nem que seja para aprender, para crescer e evoluir"},
    ]
  );

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
        <div style={{display: "inline", margin: "auto"}}>
          <img src={suggestion_skills} class="suggestion-image" />
          <p/>
          <img src={suggestion_skills2} class="suggestion-image" />
          <p/>
          <img src={suggestion_skills3} class="suggestion-image" />
        </div>
        <div style={{ margin: "0 0 0 50px", display: "flex" }}>
          <div class="progress-container">
            <div>{softSkills}</div>
            {/* <div class="skills-container">
              {softSkills2}
            </div> */}
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default Tools;
