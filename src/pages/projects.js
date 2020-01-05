/* eslint-disable react/jsx-key */
import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import UnDudeLogo from '../../content/assets/projects/unDude.svg'
import RevoidLogo from '../../content/assets/projects/revoid.svg'
import VerbsLogo from '../../content/assets/projects/verbs.svg'
import HexobladoLogo from '../../content/assets/projects/hexoblado.svg'
import FlappyBounceLogo from '../../content/assets/projects/flappyBounce.svg'
import LastMomentLogo from '../../content/assets/projects/lastMoment.svg'
import TotemRemoteLogo from '../../content/assets/projects/totemRemote.svg'
import NotesLogo from '../../content/assets/projects/notes.svg'
import NickCageTelegramBotLogo from '../../content/assets/projects/nickCage.svg'
import ScriptsLogo from '../../content/assets/projects/scripts.svg'
import ForDownloadLogo from '../../content/assets/projects/forDownload.svg'
import MecanografiaLogo from '../../content/assets/projects/mecanografia.svg'
import TremendoLogo from '../../content/assets/projects/tremendo.svg'
import PortfolioLogo from '../../content/assets/projects/logo.svg'
import VueramaLogo from '../../content/assets/projects/vuerama.svg'
import LastTimeLogo from '../../content/assets/projects/lastTime.svg'
import Youtube2AnkiLogo from '../../content/assets/projects/youtube2Anki.svg'
import TatoebaBoxLogo from '../../content/assets/projects/tatoebaBox.svg'
import { Terminal } from 'react-feather'

const style = css`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  margin-top: 80px;

  .project {
    margin-bottom: 40px;

    > div {
      display: flex;
      align-items: center;
    }

    h2 {
      font-size: 3rem;
      font-weight: 400;
      margin: 0;
    }

    svg {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      color: var(--text);
      fill: var(--text);
    }

    &.experiments {
      grid-column-start: 1;
      grid-column-end: -1;

      svg {
        fill: none;
      }
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      
      a {
        margin-right: 20px;
      }
    }
  }
`

const projects = [
  {
    title: 'Last-Time',
    logo: <LastTimeLogo />,
    content: <>
      <p>Progressive web app to measure tasks by the last time you did them.</p>
      <p>Since manually tracking events is a tedious task, this app focuses on just saving dates that can be quickly updated.</p>
      <p>Useful for practical for remainders, memories, hobbies, repetitive tasks.</p>
      <p>Made with React.js and parcel bundler.</p>
    </>,
    links: [
      ['Live', 'https://last-time.odyssey.codes/'],
      ['Source', 'https://github.com/dobladov/last-time']
    ]
  },
  {
    title: 'Youtube2Anki',
    logo: <Youtube2AnkiLogo />,
    content: <>
      <p>Web Extension to convert YouTube transcripts to Anki cards.</p>
      <p>This extension allows to download the transcript of a YouTube video to a csv that can be imported into Anki or directly send the cards to Anki using AnkiConnect, allowing to use the original audio/video of the current sentence and without having to download the original media.</p>
    </>,
    links: [
      ['Firefox Version', 'https://addons.mozilla.org/en-US/firefox/addon/youtube2anki/'],
      ['Chrome Version', 'https://chrome.google.com/webstore/detail/youtube2anki/boebbbjmbikafafhoelhdjeocceddngi'],
      ['Source', 'https://github.com/dobladov/youtube2Anki']
    ]
  },
  {
    title: 'UnDude',
    logo: <UnDudeLogo />,
    content: <>
      <p>Application to recover all access data from a databese generated by the probram &quot;The Dude&quot; from MikroTik.</p>
      <p>Made with JS to be executed with node.js, given the SQlite database file, it will return the users, passwords and devices in plain text.</p>
    </>,
    links: [
      ['Source', 'https://github.com/dobladov/unDude']
    ]
  },
  {
    title: 'TatoebaBox',
    logo: <TatoebaBoxLogo />,
    content: <>
      <p>Application for practicing English-German translations.</p>
      <p>It uses sentences translated by native speakers from the platform <a href="https://tatoeba.org/eng/" target="_blank" rel="noopener noreferrer">Tatoeba</a> ensuring the quality of the text.</p>
    </>,
    links: [
      ['Live', 'https://tatoeba.surge.sh/'],
      ['Source', 'https://github.com/dobladov/tatoebaBox']
    ]
  },
  {
    title: 'Vuerama',
    logo: <VueramaLogo />,
    content: <>
      <p>Subreddit video player using the Reddit API, focused on making navigating the videos in a more visual and fast way.</p>
      <p>Includes list for some subreddit, like lectures, documentries, trailers and more obscure ones.</p>
    </>,
    links: [
      ['Live', 'https://snoo.odyssey.codes/'],
      ['Source', 'https://github.com/dobladov/Vuerama']
    ]
  },
  {
    title: 'Revoid',
    logo: <RevoidLogo />,
    content: <>
      <p>Application to learn English, through real comments made on Reddit.</p>
      <p>This app utilizes the TTS API to read user comments from <a href="https://reddit.com/r/askreddit" target="_blank" rel="noopener noreferrer">/r/askreddit</a>, so the user can improve his capacity to understand written and spoken English, as well as seing the errors he might commit while translating.</p>
      <p>It uses the APIs from <a href="https://www.reddit.com/dev/api/" target="_blank" rel="noopener noreferrer">Reddit</a> and <a href="https://responsivevoice.org/" target="_blank" rel="noopener noreferrer">ResponsiveVoice</a>.</p>
    </>,
    links: [
      ['Live', 'https://revoid.surge.sh/']
    ]
  },
  {
    title: 'Flappy Bounce',
    logo: <FlappyBounceLogo />,
    content: <>
      <p>Simple game, similar to Flappy Bird, but with different mechanics.</p>
      <p>Made with Phaser.io a library for creating browser games.</p>
    </>,
    links: [
      ['Live', 'https://odyssey.codes/Flappy-Bounce/'],
      ['Source', 'https://github.com/dobladov/Flappy-Bounce']
    ]
  },
  {
    title: 'Hexoblado',
    logo: <HexobladoLogo />,
    content: <>
      <p>Dark theme created for <a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo</a>, a blogging platform similar to WordPress.</p>
      <p>It is completely responsive and created from scratch, with archive, customized pages, RSS, and editable menus.</p>
      <p>Also with multi-language support in both Spanish and English.</p>
    </>,
    links: [
      ['Live', 'https://odyssey.codes/Hexoblado/'],
      ['Source', 'https://github.com/dobladov/Hexoblado']
    ]
  },
  {
    title: 'Totem Remote',
    logo: <TotemRemoteLogo />,
    content: <>
      <p>Plug-in for Totem, it adds the functionality of being able to control it remotely from any other computer or phone without having to install anything in them.</p>
      <p>It creates a small web service using Flask (Python) to receive the orders, and it can be added as an application on phones for a more comfortable use sinc it&pos;s a Progressive Web App.</p>
    </>,
    links: [
      ['Source', 'https://github.com/dobladov/totem-remote']
    ]
  },
  {
    title: 'Last Moment',
    logo: <LastMomentLogo />,
    content: <>
      <p>Plug-in for Totem, which adds the ability to save progress in a show or movie to automatically continue where it was left the <i>last time</i> the video was closed.</p>
      <p>Once started it works totally transparent to the user, integrated like any other function of the player.</p>
      <p>Writtent in python and designed to work on Linux.</p>
    </>,
    links: [
      ['Source', 'https://github.com/dobladov/last-moment']
    ]
  },
  {
    title: 'Verbs',
    logo: <VerbsLogo />,
    content: <>
      <p>Simple repetition tool to practice the irregular English Verbs.</p>
      <p>The objecive of this app was to create a Progressive Web App capable of working offline.</p>
    </>,
    links: [
      ['Live', 'https://verbs.surge.sh/']
    ]
  },
  {
    title: 'Notes',
    logo: <NotesLogo />,
    content: <>
      <p>Desktop Web app, completely multiplatform, created with electron, Angular.js, HTML, CSS and JS.</p>
      <p>It is a fairly simple notes application that uses SQLite as a database.</p>
      <p>Supports multiple options like: mardown, order, searchs, archived, trash.</p>
    </>,
    links: [
      ['Source', 'https://github.com/dobladov/Notes']
    ]
  },
  {
    title: 'Nick Cage Telegram bot',
    logo: <NickCageTelegramBotLogo />,
    content: <>
      <p>The functionality of this bot is a joke, basically it returns phrases and gif of the actor Nicolas Cage.</p>
      <p>The goal was to learn how to make a bot for Telegram using python.</p>
      <p>I use the <a href="https://developers.giphy.com/" target="_blank" rel="noopener noreferrer">Giphy API</a> to get the gifs.</p>
      <p>Two more developers eded up using this code to create their own bots.</p>
    </>,
    links: [
      ['Live', 'https://web.telegram.org/#/im?p=@nickcage_bot'],
      ['Source', 'https://github.com/dobladov/NickCage-TelegramBot']
    ]
  },
  {
    title: 'Scripts',
    logo: <ScriptsLogo />,
    content: <>
      <p>Some of my scripts, quite useful but small in size to be consider as projects.</p>
      <p>
        <a href="https://gist.github.com/dobladov/5074905e0031920484a5" target="_blank" rel="noopener noreferrer">Periscope Subtitles</a>Script for nautilus that searches for subtitles automatically, with only a couple of clicks.</p>
      <p>
        <a href="https://gist.github.com/dobladov/359600061655575e7b65" target="_blank" rel="noopener noreferrer">Gif Generator</a> It generates a gif from the selected video, allows to configure frames, size, name.
      </p>
      <p>
        <a href="https://gist.github.com/dobladov/d8f1793c24547b26b3adf54f6a212770" target="_blank" rel="noopener noreferrer">Disable buttons tweetdeck</a> Simple way to disable fav, retweet buttons in Tweetdeck to avoid unintentional clicks.
      </p>
    </>,
    links: []
  },
  {
    title: '4 Download',
    logo: <ForDownloadLogo />,
    content: <>
      <p>This application is what is known as a web-crawler, examines a 4Chan thread and downloads all the images or videos it has, and is able to detect new changes and download only the new features.</p>
      <p>You can also filter by extension or select the check time.</p>
      <p>Not that there is much valuable content on this god forsaken website.</p>
    </>,
    links: [
      ['Source', 'https://github.com/dobladov/4download']
    ]
  },
  {
    title: 'Mecanografía',
    logo: <MecanografiaLogo />,
    content: <>
      <p>Tool for practicing typing, has different exercises, checks, saves, displays words per minute and accuracy.</p>
      <p>The exercises require a spanish keyboad.</p>
    </>,
    links: [
      ['Live', 'https://meca.surge.sh/']
    ]
  },
  {
    title: 'Tremendo',
    logo: <TremendoLogo />,
    content: <>
      <p>Radio player using the public API of <a href="https://www.jamendo.com" target="_blank" rel="noopener noreferrer">Jamendo</a></p>
      <p>Unfortunately it does not work anymore due to a <a href="https://developer.jamendo.com/v3.0/radios/stream" target="_blank" rel="noopener noreferrer">problem</a> of the Jamendo API that they seem to not want to fix.</p>
    </>,
    links: [
      ['Live', 'https://tremendo.surge.sh/']
    ]
  },
  {
    title: 'Odyssey Codes',
    logo: <PortfolioLogo />,
    content: <>
      <p>The site you are visiting right now, build with Gatsby and using MDX for the articles</p>
      <p>If you want to learn about recursion click the "Live" link.</p>
    </>,
    links: [
      ['Live', '/projects'],
      ['Source', 'https://github.com/dobladov/mdx-blog']
    ]
  },
  {
    title: 'Experiments',
    logo: <Terminal />,
    className: 'experiments',
    content: <>
      <p>These are some of my codepen experiments.</p>

      <h3><a href="http://codepen.io/dobladov/pen/kXAXJx" target="_blank" rel="noopener noreferrer">Carousel</a></h3>
      <p>
        A carousel using CSS and JQuery as a concept for a web music player, It got featured on Codepen, it has more than 286 favs, 1156 forks and 51,116 Views.
      </p>

      <h3><a href="https://codepen.io/dobladov/full/dmeMXO" target="_blank" rel="noopener noreferrer">Berlin Deutsche Bahn Stations</a></h3>
      <p>Map made with <a href="https://d3js.org/">d3.js</a> to showcase all the statios in berlin using the DB public api.</p>

      <h3><a href="https://codepen.io/dobladov/pen/NGeEmZ" target="_blank" rel="noopener noreferrer">Rocky</a></h3>
      <p>Animation to learn how to use Greensock, a library for web animation.</p>
      <p>
        It is my second pen with more success in codepen, even got to be featured, to this day has more than 7000 visits and 25 favorites.
      </p>

      <h3><a href="https://codepen.io/dobladov/pen/qoodaR" target="_blank" rel="noopener noreferrer">German Frequency lists</a></h3>
      <p>Frequency lists/German subtitles 1000: This list has been generated from subtitles of movies and television series with a total of about 25 million words in 2009.</p>

      <h3><a href="https://codepen.io/dobladov/pen/bBOWEe" target="_blank" rel="noopener noreferrer">Star Wars Intro</a></h3>
      <p>
        The mythical introduction of Star Wars The Force Awakens, made entirely with CSS and without external libraries.
      </p>

      <h3><a href="https://voicewave.surge.sh/" target="_blank" rel="noopener noreferrer">Voice Wave</a></h3>
      <p>
        Experiment with the audio API to represent the spectrogram of the user&apos;s audio.
      </p>

      <h3><a href="http://codepen.io/dobladov/pen/KaJYNN" target="_blank" rel="noopener noreferrer">Dancing Wave</a></h3>
      <p>Graphical representation with p5.js of joined lines of different waves.</p>

      <h3><a href="http://codepen.io/dobladov/pen/BoqYOO" target="_blank" rel="noopener noreferrer">Loading Animation</a></h3>
      <p>With this I intended to animate SVG and learn a little to use 3D perspectives.</p>

      <h3><a href="http://codepen.io/dobladov/full/vNvZGe" target="_blank" rel="noopener noreferrer">Happy Sheep</a></h3>
      <p>Animation to improve my working methodology in which I create my own svg drawings myself with Inkscape, adding selectors for animation.</p>

      <h3><a href="https://editor.p5js.org/dobladov/sketches">P5 Sketches</a></h3>
      <p>Around 50 experiments where I play with vectors, physics, trigonometry, perlin noise, etc... in a visual way.</p>
    </>,
    links: [
      ['', '']
    ]
  }
]

const ProjectsPage = () => (
  <Layout >
    <SEO title="Projects" />
    <h1 className="title">
      Projects
    </h1>

    <div css={style} >

      {projects.map(({ title, content, links, logo, className }) => (
        <div key={title} className={`project${className ? ` ${className}` : ''}`}>
          <div>
            {logo}
            <h2>{title}</h2>
          </div>
          {content}
          <div className="links">
            {links.map(([title, url]) => (
              <a href={url} key={url} target="_blank" rel="noopener noreferrer">{title}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default ProjectsPage
