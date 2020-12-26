import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
.init({
  // we init with resources
  resources: {

    en:{
        translations: {

            //homepage
            HiText: "Hi there",
            Welcome: "Welcome to my page 😊",
            ImBruno: "I'm Bruno Brás",
            QuoteAllDreamWorld: "\"I have on me all the dreams of the world 🌍\"",

            //about_me
            AboutMeTitle: "#about_me 😎",
            AboutMeSubTitle: "Find out a little more about me",
            ThatMeTitle: "That's me :)",
            ImBrunoFullName: "I'm Bruno Duarte Felício Brás 😶",
            YearsOld: "22 years old 🧑",
            Experience: "Mid-level Programmer with 4 years of experience 💻⌨️",
            Propose: "Looking not for a regular job, but a life porpose, a pathway and a future 🛣️🙏",
            ManyAreas: "I like many different themes and areas 👨‍🏫",
            OpenMinded: "Open-minded 🧠",
            CommitedHelp: "Committed to help 💪😍",
            Passion: "Passion ❤",
            Networking: "Networking 🌐",
            ReadyNewThings: "Ready to Learn new things 📖",
            MobileDevelopmentTitle: "Mobile Development",
            MobileDevelopmentSubTitle: "iOS and Android Apps",
            ServerDevelopmentTitle: "Server Development",
            ServerDevelopmentSubTitle: "APIs and Web services",
            DesktopDevelopmentTitle: "Desktop Development",
            DesktopDevelopmentSubTitle: "Apps for PC",

            //tools
            ToolsTitle: "#tools 🔧",
            ToolsSubTitle: "Find out the tools that I use or have used",

            //languages
            LanguagesTitle: "#languages 👨‍💻",
            LanguagesSubTitle: "Find out the languages that I'm programming or have programmed",

            //skills
            SkillsTitle: "#skills 🤹",
            SkillsSubTitle: "My skills set",

            TeamWorkerTitle: "Team Worker",
            TeamWorkerDescription1: "I believe that teamwork is fundamental for success and growth, with a view to that I have dedicated to know how to deal with and understand various types of people over time, representative, in the projects in which I participated and which I have carried out.",
            TeamWorkerDescription2: "Both at work and in so many other activities that I develop in my free time.",

            CuriousTitle: "Curious",
            CuriousDescription1: "Curiosity inspires me to always go further.",
            CuriousDescription2: "I always need to know how a system or service works, in addition to knowing everything that happened and the processes involved, as well as everything that surrounds me.",
            CuriousDescription3: "Knowing the world and beyond",

            EffectiveCommunicatorTitle: "Effective Communicator",
            EffectiveCommunicatorDescription1: "I have a passion for being able to transmit everything I like and know, whether for information or to help you. I love to express myself and make myself known.",
            EffectiveCommunicatorDescription2: "I love to express myself and make myself known.",
            EffectiveCommunicatorDescription3: "Although I have some limitations in terms of the language and fluidity of my speech, I believe that I can get my message across",

            HelpfulServerTitle : "Helpful and Server",
            HelpfulServerDescription1:"I give everything I have to offer to the other, proof of that, are the activities that I have done, in my spare time.",
            HelpfulServerDescription2:"Although, you have to take care of me, I always get the other to receive my help in your development and whoever says others, says institutions.",
            HelpfulServerDescription3:"I must say that it is a huge pleasure to be able to help other people.",

            ResilientTitle:"Resilient",
            ResilientDescription1:"\"End when I'm done and not when I'm tired\".",
            ResilientDescription2:"This is my motto, it is about ending what has to be finished, it is not about me, but it is about all those who can depend on me.",

            //projects
            ProjectsTitle: "#projects 🚧",
            ProjectsSubTitle: "Find out the projects that I participated",

            ZoomarineDescription: "With this application you can get to know the schedules of presentations and attractions for a specific day, browse interactive maps and much more",
            AirdeskDescription: "Airdesk is a collaboration and management platform with a 360º view, which optimizes productivity and cost costs.",
            CurveDescription: "Curve is the new way to stroll around the city! Improve the quality of your journey with real-time alerts on hazardous areas, closed business, long queues, and more. Join this community and contribute information as you walk to your destination. Curve will help you get the perfect experience by adapting to your needs, creating the best route based on the alerts shared by the Curve community!",
            SigreDescription: "Improve water resources management, responding to the need to update water infrastructure and cut costs.",
            BolinhasDescription: "Bolinhas is an app that allows you to sell/buy doughnuts and other products in real time using georeferencing",
            LoyaltyDescription: "Application to read customer cards, and redeem vouchers.",

            BolinhasURL: "www.unykvis.com/en/projects/bolinhas",

            //courses
            CoursesTitle: "#courses 🏫",
            CoursesSubTitle: "Find out the courses that I enrolled",            

            ManagementInformaticsTitle: "Management Informatics 12º",
            ManagementInformaticsDescription: "The management computer technician is the qualified professional who has competencies in the scope of the management of organizations, namely in the construction of business / project management models, creating matrices using computer applications for micro, small and medium companies, with a view to the effectiveness of results.",

            BitcoinCourseTitle: "Bitcoin Course",
            BitcoinCourseDescription: "The bitcoin course allow me to understand the world of bitcoin, how it works and technology of blockchain",

            //experiences
            ExperiencesTitle: "#expirences 🌄",
            ExperiencesSubTitle: "Events and Groups",

            FreeCodeCampMeetings: "FreeCodeCamp Meetings",
            YouthDay: "Youth Day",
            ChallengeRestart: "Desafio Restart by Jorge Coutinho",

            ToastmastersDescription: "Toastmasters is a non-profit organization that teaches public speaking and leadership development.",

            YouthGroupTitle: "Youth Group",
            YouthGroupDescription: "We carry out reflection and social intervention activities. Helping the Other and acting in Community!",

            GeekSessionDescription: "Geek Sessions is a networking event dedicated to sharing knowledge and experience of the technological community.",

            //hobbies
            HobbiesInterestsTitle: "#hobbies_interests ⚽",
            HobbiesInterestsSubTitle: "What I am doing in my free time and What are my interests?",
            Learning: "Learning",
            Technology: "Technology",
            Maths: "Maths",
            Economy: "Economy",
            Politics: "Politics",
            Fado: "Fado",
            Poetry: "Poetry",
            SelfDevelopment: "Self Development",
            Philosophy: "Philosophy",
            History: "History",
            Volunteering: "Volunteering",
            Science: "Science",
            Astronomy: "Astronomy",
            PublicSpeaking: "PublicSpeaking",

            BookStoreQuote1: "\"I entered a bookstore. I started to count the books that there are to read and the years that I will have of life.",
            BookStoreQuote2: "Don't arrive! Not even half the bookstore!\"",

            InspiringPeopleTitle: "#inspiring_people 🤩",
            InspiringPeopleSubTitle: "These people has inspired and help me to go futher",

            FernandoPessoaDescription: "Poet, Writer and Philosopher",
            JorgeCoutinhoDescription: "Coach and Human Development",
            JoeBidenDescription: "USA President",
            KamalaHarrisDescription: "USA Vice-President",
            PapaFransciscoDescription: "Head of the Catholic Church",
            DanielGuerreiroDescription: "Behavioral Coach",
            NeildeGrasseTysonDescription: "Astrophysicist",
            ShephenHalwingDescription: "Physicist and Cosmologist",
            ObamaDescription: "44th USA President" ,
            BillGatesDescription: "Business Magnate",

            MostAdmireQuote:"\"The people I most admire are those who never end.\"",

            ChatWithMeTitle: "#chat_with_me 💬",
            ChatWithMeSubTitle: "Let's talk 😁"
        }
    },

    pt:{
        translations: {
          HiText: "Olá",
          Welcome: "Bem-vindo(a) à minha página 😊",
          ImBruno: "Eu sou o Bruno Brás",
          QuoteAllDreamWorld: "\"Tenho em mim todos os sonhos do mundo 🌍\"",

          //about_me
          AboutMeTitle: "#sobre_mim 😎",
          AboutMeSubTitle: "Descobre um pouco em relação a mim",
          ImBrunoFullName: "Eu sou o Bruno Duarte Felício Brás 😶",
          YearsOld: "22 anos 🧑",
          Experience: "Programador Mid-Level com 4 anos de experência 💻⌨️",
          Propose: "Não estou procurando um trabalho normal, mas sim, um propósito de vida, um caminho e um futuro 🛣️🙏",
          ManyAreas: "Eu gosto dos mais variados temas e areas 👨‍🏫",
          OpenMinded: "Mente aberta 🧠",
          CommitedHelp: "Comprometido em ajudar 💪😍",
          Passion: "Paixão ❤",
          Networking: "Networking 🌐",
          ReadyNewThings: "Pronto para aprender algo novo 📖",
          MobileDevelopmentTitle: "Desenvolvimento Mobile",
          MobileDevelopmentSubTitle: "Apps iOS e Android",
          ServerDevelopmentTitle: "Desenvolvimento de Servidor",
          ServerDevelopmentSubTitle: "APIs e serviços web",
          DesktopDevelopmentTitle: "Desenvolvimento de Apps Desktop",
          DesktopDevelopmentSubTitle: "Apps para PCs",

          //tools
          ToolsTitle: "#ferramentas 🔧",
          ToolsSubTitle: "Descobre as ferramentas que tenho utilizado ou que já tenha usado",

          //languages
          LanguagesTitle: "#linguagens 👨‍💻",
          LanguagesSubTitle: "Descobre as linguagens que tenho programado ou que já tenha utilizado",

          //skills
          SkillsTitle: "#skills 🤹",
          SkillsSubTitle: "O meu conjunto de competências",

          TeamWorkerTitle: "Trabalhador de Equipa",
          TeamWorkerDescription1: "Considero que o trabalho de equipa é fundamental para o sucesso e para o crescimento, com vista a isso tenho dedicado a saber lidar e compreender vários tipos de pessoas ao longo do tempo, representativo, nos projetos em que participei e que tenho realizado.",
          TeamWorkerDescription2: "Tanto no trabalho, como em tantas outras atividades que desenvolvo nos meus tempos livres.",

          CuriousTitle: "Curioso",
          CuriousDescription1: "A curiosidade inspira-me a sempre ir mais além.",
          CuriousDescription2: "Tenho sempre a necessidade de saber como é um sistema ou serviço funciona, além de saber, tudo o que aconteceu e os processos envolvidos, bem como, tudo o que me rodeia.",
          CuriousDescription3: "Conhecer o mundo e muito para além deste",

          EffectiveCommunicatorTitle: "Comunicador Eficaz",
          EffectiveCommunicatorDescription1: "Tenho uma paixão de conseguir transmitir tudo aquilo que gosto e que conheço, seja para informação seja para o ajudar. Gosto imenso de-me expressar e dar a conhecer.",
          EffectiveCommunicatorDescription2: "Gosto imenso de-me expressar e dar a conhecer.",
          EffectiveCommunicatorDescription3: "Embora, tenha algumas limitações ao nivel da linguagem e fluidez do meu discurso, considero que consigo passar a minha mensagem",

          HelpfulServerTitle : "Prestável e Servidor",
          HelpfulServerDescription1:"Dou tudo o que tenho a oferecer ao outro, prova disso, são as atividades que tenho realizado, nos meus tempos livres.",
          HelpfulServerDescription2:"Embora, tenha que cuidar de mim, consigo sempre que o outro receba a minha ajuda no seu desenvolvimento e quem diz outros, diz instituições.",
          HelpfulServerDescription3:"Devo dizer que é gosto enorme poder ajudar as outras pessoas.",

          ResilientTitle:"Resiliente",
          ResilientDescription1:"\"Acabar quando acabei e não quando estou cansado\".",
          ResilientDescription2:"Este é o meu lema, é sobre acabar o que têm de ser acabado, não é sobre mim, mas é sobre todos aqueles que podem depender de mim.",

          //projects
          ProjectsTitle: "#projetos 🚧",
          ProjectsSubTitle: "Descobre os projetos nos quais tive envolvido",
 
          ZoomarineDescription: "Com este aplicativo podes conhecer as programações de apresentações e atrações de um determinado dia, navegar em mapas interativos e muito mais",
          AirdeskDescription: "Airdesk é uma plataforma de colaboração e gestão com visão 360º, que otimiza produtividade e custos.",
          CurveDescription: "Curve é a nova forma de passear pela cidade! Melhora a qualidade de tua viagem com alertas em tempo real sobre áreas perigosas, empresas fechadas, longas filas e muito mais. Junta-te a esta comunidade e contribui com informações enquanto caminhas até teu destino. O Curve irá ajudá-te a obter a experiência perfeita adaptando-se às tuas necessidades, criando o melhor percurso com base nos alertas partilhados pela comunidade Curve!",
          SigreDescription: "Melhorar a gestão dos recursos hídricos, respondendo à necessidade de atualizar a infraestrutura hídrica e cortar custos.",
          BolinhasDescription: "Bolinhas é um aplicativo que permite vender/comprar bolas de berlim e outros produtos em tempo real usando o georreferenciamento",
          LoyaltyDescription: "Aplicativo para ler cartões de clientes e resgatar vouchers.",
 
          BolinhasURL: "www.unykvis.com/pt/projetos/bolinhas",
 
          //courses
          CoursesTitle: "#cursos 🏫",
          CoursesSubTitle: "Descobre os cursos que eu me inscrevi",            
 
          ManagementInformaticsTitle: "Informática de Gestão",
          ManagementInformaticsDescription: "O técnico de informática de gestão é o profissional qualificado que detém competências no âmbito da gestão de organizações, nomeadamente na construção de modelos de gestão empresarial / projetos, criando matrizes utilizando aplicações informáticas para micro, pequenas e médias empresas, com vista à eficácia de resultados.",
 
          BitcoinCourseTitle: "Curso Bitcoin",
          BitcoinCourseDescription: "O curso bitcoin permite-me entender o mundo do bitcoin, como ele funciona e a tecnologia do blockchain",
 
          //experiences
          ExperiencesTitle: "#experencias 🌄",
          ExperiencesSubTitle: "Eventos e Grupos",

          FreeCodeCampMeetings: "Encontros FreeCodeCamp",
          YouthDay: "Jornada da Juventude ",
 
          ToastmastersDescription: "Toastmasters é uma organização sem fins lucrativos que ensina como falar em público e desenvolvimento de liderança.",
 
          YouthGroupTitle: "Grupo de Jovens",
          YouthGroupDescription: "Realizamos atividades de reflexão e intervenção social. Ajudando o outro e atuando em Comunidade!",
 
          GeekSessionDescription: "Geek Sessions é um evento de networking dedicado a compartilhar conhecimento e experiência da comunidade tecnológica.",

          HobbiesInterestsTitle: "#hobbies_interesses ⚽",
          HobbiesInterestsSubTitle: "O que estou fazendo no meu tempo livre e quais são os meus interesses?",
          Learning: "Apredizagem",
          Technology: "Tecnologia",
          Maths: "Matemática",
          Economy: "Economia",
          Politics: "Politica",
          Fado: "Fado",
          Poetry: "Poesia",
          SelfDevelopment: "Desenvolvimento Pessoal",
          Philosophy: "Filosofia",
          History: "História",
          Volunteering: "Voluntariado",
          Science: "Ciência",
          Astronomy: "Astronomia",
          PublicSpeaking: "Falar em Publico",

          BookStoreQuote1: "\"Entrei numa livraria. Pus-me a contar os livros que há para ler e os anos que terei de vida",
          BookStoreQuote2: "Não chegam! Não duro nem para metade da livraria!\"",

          InspiringPeopleTitle: "#pessoas_inspiradoras 🤩",
          InspiringPeopleSubTitle: "Essas pessoas inspiram-me e ajudam-me a ir mais longe",

          FernandoPessoaDescription: "Poeta, Escritor e Filósofo",
          JorgeCoutinhoDescription: "Coach e Desenvolvimento Humano",
          JoeBidenDescription: "Presidente dos EUA",
          KamalaHarrisDescription: "Vice-presidente dos EUA",
          PapaFransciscoDescription: "Chefe da Igreja Católica",
          DanielGuerreiroDescription: "Coach Comportamental",
          NeildeGrasseTysonDescription: "Astrofísico",
          ShephenHalwingDescription: "Físico e Cosmologista",
          ObamaDescription: "44º Presidente dos EUA" ,
          BillGatesDescription: "Magnata dos negócios",

          MostAdmireQuote:"\"As pessoas que mais admiro são aquelas que nunca acabam.\"",

          ChatWithMeTitle: "#fala_comigo 💬",
          ChatWithMeSubTitle: "Vamos falar 😁"
        }
    }

  },
  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  interpolation: {
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
