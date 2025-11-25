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
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-reading-list",
          title: "Reading List",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading-list/";
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
            },},{id: "books-perfection",
          title: 'Perfection',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/perfection/";
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
            },},{id: "news-our-work-empowering-decision-trees-via-shape-function-branching-has-been-accepted-to-appear-at-neurips-2025-confetti-ball-read-more-here",
          title: 'Our work “Empowering Decision Trees via Shape Function Branching” has been accepted to...',
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
