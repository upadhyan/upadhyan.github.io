// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Academic Publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "See my full CV by clicking the PDF above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-coffee",
          title: "Coffee",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/coffee/";
          },
        },{id: "nav-reading-list",
          title: "Reading List",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading-list/";
          },
        },{id: "post-introduction-to-interpretable-clustering",
        
          title: 'Introduction to Interpretable Clustering <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is interpretable clustering and why is it important.Continue reading on TDS Archive »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/introduction-to-interpretable-clustering-d0e07fbd2c99?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-neural-basis-models-for-interpretability",
        
          title: 'Neural Basis Models for Interpretability <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Unpacking the new interpretable model proposed by Meta AIContinue reading on TDS Archive »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/neural-basis-models-for-interpretability-fd04ac958ff2?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-critical-tools-for-ethical-and-explainable-ai",
        
          title: 'Critical Tools for Ethical and Explainable AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A guide to essential libraries and toolkits that can help you create trustworthy yet robust modelsContinue reading on TDS Archive »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/critical-tools-for-ethical-and-explainable-ai-ed0e336d82a?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-node-tabular-focused-neural-trees",
        
          title: 'NODE: Tabular-Focused Neural Trees <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Exploring NODE: A Neural Decision Tree architecture for tabular dataContinue reading on TDS Archive »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/node-tabular-focused-neural-trees-ee08c752fcd2?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-neural-prototype-trees",
        
          title: 'Neural Prototype Trees <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Explainable image classification through mimicking human reasoning.Continue reading on TDS Archive »",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/neural-prototype-trees-f7bac36437a9?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-the-return-of-the-fallen-transformers-for-forecasting",
        
          title: 'The Return of the Fallen: Transformers for Forecasting <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/the-return-of-the-fallen-transformers-for-forecasting-24f6fec5bc30?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-neural-networks-as-decision-trees",
        
          title: 'Neural Networks as Decision Trees <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/neural-networks-as-decision-trees-89cd9fdcdf6a?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-xai-for-forecasting-basis-expansion",
        
          title: 'XAI for Forecasting: Basis Expansion <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/xai-for-forecasting-basis-expansion-17a16655b6e4?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-explainable-ai-and-chatgpt-detection",
        
          title: 'Explainable AI and ChatGPT Detection <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@upadhyan/explainable-ai-and-chatgpt-detection-4057e0386fc4?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-shap-for-time-series-event-detection",
        
          title: 'SHAP for Time Series Event Detection <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/data-science/shap-for-time-series-event-detection-5b4d9d0f96f4?source=rss-4d9dddc62a80------2", "_blank");
          
        },
      },{id: "post-post-template",
        
          title: "post template",
        
        description: "this is an example post I keep",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/1990/plotly/";
          
        },
      },{id: "books-martyr",
          title: 'Martyr!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Martyr/";
            },},{id: "books-the-heart-of-a-dog",
          title: 'The Heart of a Dog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/adogheart/";
            },},{id: "books-agua-viva",
          title: 'Agua Viva',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/agua_viva/";
            },},{id: "books-the-english-understand-wool",
          title: 'The English Understand Wool',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/english_wool/";
            },},{id: "books-kick-the-latch",
          title: 'Kick the Latch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/kick_the_latch/";
            },},{id: "books-lord-of-the-mysteries",
          title: 'Lord of the Mysteries',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lotm/";
            },},{id: "books-minor-detail",
          title: 'Minor Detail',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/minor_detail/";
            },},{id: "books-mistborn-the-final-empire",
          title: 'Mistborn - The Final Empire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mistborn1/";
            },},{id: "books-mistborn-the-well-of-ascension",
          title: 'Mistborn - The Well of Ascension',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mistborn2/";
            },},{id: "books-oathbringer",
          title: 'Oathbringer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/oathbringer/";
            },},{id: "books-perfection",
          title: 'Perfection',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/perfection/";
            },},{id: "books-rhythm-of-war",
          title: 'Rhythm of War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/rhythm_of_war/";
            },},{id: "books-in-the-skin-of-a-lion",
          title: 'In the Skin of a Lion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/skin_of_lion/";
            },},{id: "books-the-dry-heart",
          title: 'The Dry Heart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_dry_heart/";
            },},{id: "books-the-door",
          title: 'The Door',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thedoor/";
            },},{id: "books-the-way-of-kings",
          title: 'The Way of Kings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/way-of-kings/";
            },},{id: "books-wind-and-truth",
          title: 'Wind and Truth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/wind_and_truth/";
            },},{id: "books-words-of-radiance",
          title: 'Words of Radiance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/words-of-radiance/";
            },},{id: "coffee-aquiares-turrialba",
          title: 'Aquiares Turrialba',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/Aquiares_Turrialba_buno/";
            },},{id: "coffee-blue-lagoon",
          title: 'Blue Lagoon',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/blue_lagoon/";
            },},{id: "coffee-decaf-elixer",
          title: 'Decaf Elixer',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/decaf_elixer/";
            },},{id: "coffee-downtempo-decaf",
          title: 'Downtempo Decaf',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/downtempo_decaf/";
            },},{id: "coffee-el-ubérrimo",
          title: 'El Ubérrimo',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/el_uberrimo_found/";
            },},{id: "coffee-boyaca-community-blend",
          title: 'Boyaca Community Blend',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/even_boyaca/";
            },},{id: "coffee-the-new-school-lychee",
          title: 'The New School - Lychee',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/new_school/";
            },},{id: "coffee-pinky-swear",
          title: 'Pinky Swear',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/pink_swear/";
            },},{id: "coffee-loverboy",
          title: 'Loverboy',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/rosso_loverboy/";
            },},{id: "coffee-finca-tamana-elias-roa",
          title: 'Finca Tamana - Elias Roa',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/sept_finc_tamana/";
            },},{id: "coffee-finca-milan-vanilla-process",
          title: 'Finca Milan [Vanilla Process]',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/tanat_finca_milan/";
            },},{id: "coffee-worka-sakaro",
          title: 'Worka Sakaro',
          description: "",
          section: "Coffee",handler: () => {
              window.location.href = "/coffee/worka_landrace_2026/";
            },},{id: "news-our-work-neurcam-interpretable-neural-clustering-via-additive-models-has-been-accepted-to-appear-at-ecai-2024-confetti-ball",
          title: 'Our work “NeurCAM: Interpretable Neural Clustering Via Additive Models” has been accepted to...',
          description: "",
          section: "News",},{id: "news-our-work-empowering-decision-trees-via-shape-function-branching-has-been-accepted-to-appear-at-neurips-2025-confetti-ball-read-more-here",
          title: 'Our work “Empowering Decision Trees via Shape Function Branching” has been accepted to...',
          description: "",
          section: "News",},{id: "news-catch-us-at-the-2026-university-of-toronto-data-science-institute-talent-showcase-we-will-be-presenting-our-work-empowering-decision-trees-via-shape-function-branching",
          title: 'Catch us at the 2026 University of Toronto Data Science Institute Talent Showcase....',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-announce-i-ll-be-teaching-the-deep-learning-section-of-the-data-science-and-machine-learning-software-foundations-certificates-from-feb-10th-19th",
          title: 'I’m happy to announce I’ll be teaching the Deep Learning section of the...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-announce-i-ll-be-teaching-the-machine-learning-i-amp-amp-ii-workshops-for-the-2026-data-science-institute-s-summer-undergraduate-data-science-program-on-may-8th-2026",
          title: 'I’m happy to announce I’ll be teaching the Machine Learning I &amp;amp;amp; II...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/upadhyan", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/upadhyan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/upadhyan", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@upadhyan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TOdwuaIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
