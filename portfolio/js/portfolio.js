var portfolioApp = angular.module("portfolioApp", [ ])

portfolioApp.controller("pfController", function($scope) {
  $scope.technologies = [
    {
      name: "Go",
      rating: 4,
      description: "I have recently begun picking up Golang and rewriting many of my personal projects to get a good grasp of it. I am a big fan of how the language was designed: with errors and sustainability in mind.",
      color: "#00ADD8",
      iconClass: "mfizz icon-go"
    },
    {
      name: "Docker",
      rating: 3,
      description: "I have used Docker to reliably deploy and scale up production-grade web services. I also have experience with the Docker API; for example, I spin up containers on-the-fly to run user code from CompileBot in a sandbox.",
      color: "#006FB6",
      iconClass: "fab fa-docker"
    },
    {
      name: "Node.js",
      rating: 4,
      description: "Lots of stuff I make is written in JavaScript with Node.js as the runtime. I know modern-style ES6 syntax and use best practices wherever possible. Most of my Telegram bots are written with modern JS.",
      color: "#8CC84B",
      iconClass: "fab fa-node-js"
    },
    {
      name: "HTML5/CSS3",
      rating: 4,
      description: "Much of my development work has been in web development, so I am very versed in HTML5 development (as apparent by this site!) I like to live on the bleeding edge and use up-and-coming technologies like WebVR whenever possible.",
      color: "#F16524",
      iconClass: "fab fa-html5"
    },
    {
      name: "Android/Kotlin",
      rating: 3,
      description: "I have written several Android apps that are live on the Play Store, two of the biggest being CodeDay Companion and Academus (see more about them below). Both are written in Kotlin with best practices and \"DRY\" code in mind.",
      color: "#68B445",
      iconClass: "fab fa-android"
    },
    {
      name: "iOS/Swift",
      rating: 3,
      description: "I've written one major iOS app (CodeDay Companion) and helped with Academus for iOS. I plan to enrich my experience with iOS development.",
      color: "#1D70F2",
      iconClass: "fab fa-app-store-ios"
    },
    {
      name: "Telegram Bot API",
      rating: 5,
      description: "I have written quite a lot of Telegram bots over the years, and I have gained lots of experience with Telegram's bot API as a result.",
      color: "#2496D2",
      iconClass: "fab fa-telegram-plane"
    },
    {
      name: "Ruby on Rails",
      rating: 4,
      description: "My larger web-based projects are written in Ruby on Rails due to its wonderful ORM, ActiveRecord, and the generators it provides; they make development much quicker. Neodeck and the Academus API are built upon Rails.",
      color: "#D73A2E",
      iconClass: "mfizz icon-ruby-on-rails"
    },
    {
      name: "C# (.NET and .NET Core)",
      rating: 3,
      description: "I have written native apps for Windows with C#.NET and some more complicated Telegram bots using C#.NET Core. It's probably my favorite OOP language.",
      color: "#9A4F96",
      iconClass: "mfizz icon-csharp"
    },
    {
      name: "Linux",
      rating: 2,
      description: "I have some experience with managing Linux systems at a lower level (both desktop and server). I've gained lots of insight about the inner workings of a Linux-based system through installing Arch on my MacBook Air, but I still have a lot to learn!",
      color: "#000000",
      iconClass: "fab fa-linux"
    },
    {
      name: "Azure",
      rating: 3,
      description: "I have deployed all of the Academus infrastructure on Microsoft Azure and have scaled up our services with ease as we gained more and more users.",
      color: "#1673B9",
      iconClass: "mfizz icon-azure"
    }
  ]

  $scope.projects = [
    {
      name: "Academus",
      tagline: "A student's best friend",
      description: [
        "Academus is an app for high school students with a busy educational lifestyle. As a team of 6 students, we built this app to cater to a student's most frequent needs and focus solely on what they actually want to see. It integrates with many popular student information systems with more always coming around.",
        "The backend is built mostly upon Ruby on Rails, with a little bit of Node.js here and there. All of the integration syncing code was written by hand with almost no external libraries to help us out.",
        "We piloted the app in second semester of the 2017-2018 school year and obtained around 25% of our entire school in that amount of time, with the app spreading organically to other districts nationwide. We plan to build out major features every school year with constant student feedback."
      ],
      imageUrl: "img/academus.png",
      technologies: [
        {
          name: "Android",
          iconClass: "fab fa-android",
          color: "#68B445"
        },
        {
          name: "Ruby on Rails",
          iconClass: "mfizz icon-ruby-on-rails",
          color: "#D73A2E"
        },
        {
          name: "Docker",
          iconClass: "fab fa-docker",
          color: "#006FB6"
        },
        {
          name: "Azure",
          iconClass: "mfizz icon-azure",
          color: "#1673B9"
        },
        {
          name: "HTML5/CSS3",
          color: "#F16524",
          iconClass: "fab fa-html5"
        }
      ],
      links: [
        {
          name: "Website",
          url: "https://academus.io"
        }
      ]
    },
    {
      name: "CodeDay Companion",
      tagline: "Event guide app for CodeDay attendees",
      description: [
        "The CodeDay Companion app guides CodeDay attendees throughout the event, with useful features like receiving announcements from event staff, a built-in schedule, reminders when activities are about to happen, and the ability to see what song is playing at your CodeDay!",
        "I got inspiration for this app because I love when technology merges the physical and digital worlds into one, and this is a perfect opportunity to do so. This app, above all else, serves as an extension to your CodeDay experience and shouldn't take it over. It also provides event staff an extra useful way to quickly get attendees' attention, whether it be for food, announcing a secret message, or simply thanking them for attending."
      ],
      imageUrl: "img/companion.png",
      technologies: [
        {
          name: "Android",
          iconClass: "fab fa-android",
          color: "#68B445"
        },
        {
          name: "iOS",
          iconClass: "fab fa-app-store-ios",
          color: "#1D70F2"
        }
      ],
      links: [
        {
          name: "Android Source",
          url: "https://git.horner.tj/srnd/Companion.Android"
        },
        {
          name: "iOS Source",
          url: "https://git.horner.tj/srnd/Companion.iOS"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=org.srnd.companion"
        },
        {
          name: "App Store",
          url: "https://itunes.apple.com/us/app/codeday-companion/id1303959375"
        }
      ]
    },
    {
      name: "CompileBot",
      tagline: "Telegram bot for running pieces of code",
      description: [
        "CompileBot is a Telegram bot that allows you to compile snippets of code either by messaging it privately or with inline mode, so your friends can see the source and results right away.",
        "This bot was a fun project for me, as I got to learn a lot about Docker and containerizing things. The bot works by creating a container with a pre-built image every time a user wants to run some code. This isolates the running code from anything on the host machine, creating a sandboxed environment where users can safely run their code without any risk of accessing host resources.",
        "I had to face some challenges while making the bot. Some questions I raised to myself were \"what if someone tries a fork bomb?\" and \"how do I isolate this container from the outside world?\" among others. I was successful in finding solutions to these issues, and nothing bad has happened to my host machine so far!",
        "Early versions of this bot actually used external APIs such as Repl.it's API. However, their API shut down so I had to build out my own solution. Building my own solution allowed me to include new features in the latest version of the bot such as the ability to see live output as your code is compiling or running, sharing code executions with your friends, and web links to your own code executions so that even people without Telegram can see them. Not only did it enable these new features, but I also learned quite a lot about Docker and Linux security practices along the way."
      ],
      imageUrl: "img/compilebot.png",
      technologies: [
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        },
        {
          name: "Telegram Bot API",
          iconClass: "fab fa-telegram-plane",
          color: "#2496D2"
        },
        {
          name: "Docker",
          iconClass: "fab fa-docker",
          color: "#006FB6"
        }
      ],
      links: [
        {
          name: "Telegram",
          url: "https://t.me/CompileBot"
        }
      ]
    },
    {
      name: "Neodeck",
      tagline: "Realtime CAH-style deck creator",
      description: [
        "Neodeck (previously known as CAH Creator) started off as a simple Node.js web app that used Socket.io to create Cards Against Humanity-style card decks and store them in-memory. Later on, I added the ability to have multiple sessions and share the session link with other users; however, the sessions were still in-memory, so there was also an import/export feature.",
        "I continued to support the original version of CAH Creator but then eventually rebuilt the entire thing from the ground up with Rails as the main part of the app (storing data persistently) and a Node.js/Socket.io backend coordinating the live sessions between users. These two components work together to create what Neodeck is today."
      ],
      imageUrl: "img/neodeck.png",
      technologies: [
        {
          name: "Ruby on Rails",
          iconClass: "mfizz icon-ruby-on-rails",
          color: "#D73A2E"
        },
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        },
        {
          name: "HTML5/CSS3",
          color: "#F16524",
          iconClass: "fab fa-html5"
        }
      ],
      links: [
        {
          name: "Website",
          url: "https://neodeck.io"
        },
        {
          name: "GitHub",
          url: "https://github.com/Neodeck"
        }
      ]
    },
    {
      name: "dpb",
      tagline: "Command-line tool for DeployBot",
      description: [
        "This command line tool was created out of necessity — we use DeployBot at srnd.org, and we continually had to go to the DeployBot website and hit a bunch of buttons to deploy our changes. They had an API, so I wrote this simple tool so all you had to do to deploy your app was type \"dpb deploy\". That's it!"
      ],
      imageUrl: "img/dpb.png",
      technologies: [
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        }
      ],
      links: [
        {
          name: "Source",
          url: "https://git.horner.tj/srnd/dpb"
        },
        {
          name: "npm",
          url: "https://www.npmjs.com/package/dpb"
        }
      ]
    },
    {
      name: "MakerBot Web UI",
      tagline: "Multi-user web interface for MakerBot 3D printers",
      description: [
        "This web app's primary goal is to simplify queueing prints with multiple users. This is useful for places with public MakerBot printers, such as makerspaces or universities. It also makes printing more efficient, as prints are automatically started once one is finished.",
        "Take this example scenario: staff at a makerspace need to manually keep a list of everyone who is in line to print a file, what file they own, etc. This can get messy very fast and the staff can lose track of this list. With this software, it frees up staff to do other (probably more useful) things since the queue is now self-serve and entirely automated.",
        "We use this software at my school to coordinate the print queue for our four MakerBot printers. Students are able to sign in with their district G Suite accounts and submit prints to the queue on their own. They will also get notified via email when prints have started or finished. The 3D printing situation, as a result, has been massively simplified from what it was before.",
        "In addition, the software also includes features not found in stock MakerBot software such as the ability to record time lapses as your print is ongoing and see it at the end."
      ],
      imageUrl: "img/makerbot.png",
      technologies: [
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        },
        {
          name: "HTML5/CSS3",
          color: "#F16524",
          iconClass: "fab fa-html5"
        }
      ],
      links: [
        {
          name: "Source",
          url: "https://git.horner.tj/tj/MakerbotWebUI"
        }
      ]
    },
    {
      name: "node-makerbot-rpc",
      tagline: "Node.js library for proprietary MakerBot protocol",
      description: [
        "Through lots of packet captures and reverse engineering, I wrote this library that interacts with MakerBot 3D printers via MakerBot's proprietary JSON-RPC protocol. It is used in the MakerBot Web UI project and handles most of the communication with the printer (some of it is done via MakerBot's HTTP API)."
      ],
      imageUrl: "img/makerbotrpc.png",
      technologies: [
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        }
      ],
      links: [
        {
          name: "Source",
          url: "https://git.horner.tj/tj/node-makerbot-rpc"
        }
      ]
    },
    {
      name: "schema.tl",
      tagline: "Fast and beautiful TL-Schema viewer",
      description: [
        "Frankly, Telegram does not update their TL-Schema documentation very often. However, since the apps are open source, the schema files are available in the repositories. Using those schema files, I wrote this easy-to-use schema viewer complete with crowd-sourced documentation that will always be up-to-date."
      ],
      imageUrl: "img/schematl.png",
      technologies: [
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        },
        {
          name: "HTML5/CSS3",
          color: "#F16524",
          iconClass: "fab fa-html5"
        }
      ],
      links: [
        {
          name: "Website",
          url: "https://schema.horner.tj"
        },
        {
          name: "Source",
          url: "https://git.horner.tj/tj/schema.tl"
        }
      ]
    },
    {
      name: "node-launchpad-mk2",
      tagline: "Node.js library for Launchpad MK2/Pro",
      description: [
        "This library lets you talk to your Launchpad MK2 or Launchpad Pro via Node.js. I created this library since the original launchpad Node library didn't support newer Launchpads, and I found the developer's guide on Novation's website.",
        "I also used this library in some of my hackathon hacks."
      ],
      imageUrl: "img/launchpad.png",
      technologies: [
        {
          name: "Node.js",
          iconClass: "fab fa-node-js",
          color: "#8CC84B"
        }
      ],
      links: [
        {
          name: "Source",
          url: "https://git.horner.tj/tj/node-launchpad-mk2"
        }
      ]
    }
  ]

  $scope.showModal = false
  $scope.displayProject = 0

  $scope.showProject = function(index) {
    $scope.displayProject = index
    $scope.showModal = true
  }

  $scope.range = function(n) { return new Array(n) }
})