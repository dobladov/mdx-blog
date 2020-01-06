import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { css, Global } from '@emotion/core'
import { Link } from 'gatsby'

const style = css`
  h2, h3 {
    margin-bottom: 0;
  }

  h3 {
    display: inline-block;
    margin-right: 10px;

    + span {
      font-size: .9rem;
    }
  }

  .resumeContent {
    display: grid;
  }

  #about,
  #contact {
    span {
      font-size: .9rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
      padding-left: 10px;
    }
  }

  #skills {
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: inline-flex;
      flex-wrap: wrap;

      li  {
        padding: 0 10px;
      }
    }
  }

  @media print {
    .title {
      font-size: 2rem;
      margin: 10px 0;
      line-height: 1.5rem;
    }

    h2 {
      line-height: 1rem;
    }

    .content {
      font-size: 1rem;
    }

    aside {
      display: flex;
      flex-wrap: wrap;

      > div {
        width: 45%;
      }
    }

    #skills {
      h2 {
        padding-bottom: 10px;
      }

      p {
        display: none;
      }
    }
  }
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Resume Daniel Doblado" />
    <Global styles={css`
      @media print {
        header {
          display: none;
        }
      }
    `}/>
    <section className="double" css={style}>

      <h1 className="title">
        Daniel Doblado
      </h1>

      <div className="content">
        <div id="experience">
          <p>Front-End Developer, currently looking for a new full-time position in Berlin or remote.</p>

          <h2>Experience</h2>

          <h3>Graphthinking</h3> <span>2018 - Currently</span>

          <ul>
            <li>
              Develop the <a href="https://oerworldmap.org/resource/">OER World Map</a> as the <a href="https://github.com/hbz/oerworldmap-ui/graphs/contributors">main</a> Front-End developer, this project for the <a href="https://hewlett.org/">Hewlett Foundation</a> was granted with the <a href="https://oerworldmap.wordpress.com/2018/05/03/catalysing-open-innovation-oer-world-map-at-oer18-and-oeglobal18/"> Open Inovation Award</a>, it consisted on complete refactor of the UI from the ground using React, Mapbox-GL, server side rendering, Elasticsearch, Reactive-search, and many other modern technologies and tools.
            </li>
            <li>
                Develop of <a href="http://skohub.io/">SkoHub</a> in collaboration wiht <a href="https://www.hbz-nrw.de/">Hochschulbibliothekszentrum (HBZ)</a>, creating backend functionality for automatic <a href="https://www.gatsbyjs.org/">Gatsby</a> builds using webhooks, compatible with both Github and Gitlab triggers.
            </li>
            <li>
              Port the build system of <a href="https://rightsstatements.org/en/">Rights Statements</a> to a more modern system using <a href="https://www.netlify.com/">Netlify</a> improving their workflow with a more robust editorial workflow and translation integration.
            </li>
            <li>
              Development of a UI for the <a href="https://www.bauhaus.de/en/">Bauhaus-Archiv</a> to access a collection of letters, photos, from Walter Gropius. Made with React, Reactive-Search and using Elasticsearch as the database.
            </li>
          </ul>

          <h3>Dabo Consulting</h3> <span>2013-2016</span>

          <ul>
            <li>Web development of internal tools, Wordpress blogs, and various other sites</li>
            <li>Backups of all the server and employees data</li>
            <li>Automate the process for backup and scale of MySQL</li>
            <li>IT support for the employees and clients</li>
            <li>Help desk for clients and the commercial network</li>
            <li>Network administration and assignation of resources</li>
            <li>Maintenance of Linux and Windows servers</li>
            <li>Configure of DNS, DHCP, OpenVPN, ...</li>
            <li>Deploy and maintenance of Nginx and Apache</li>
            <li>Automation of processes with Bash, Cron and Python</li>
            <li>Deploy and maintenance of VMWare virtual machines</li>
            <li>Development and maintenance of Joomla, Wordpress, Moodle and Chamilo</li>
          </ul>

          <h3>Abire Formación</h3> <span>2013</span>

          <ul>
            <li>Web development with PHP, HTML, CSS y JS</li>
            <li>IT support</li>
          </ul>

          <h3>Direccionate</h3> <span>2011</span>

          <ul>
            <li>Web development with Java, HTML5, CSS and JavaScript.</li>
            <li>Deployment and maintenance of Moodle platforms.</li>
          </ul>

          <h3>Personal Experience</h3>

          <p>
            Linux has been my main desktop since I was 14 years old, I&apos;ve always used only Open-source tools for my workflow even professionally, which made me contribute constantly over the years to Open-source, this efforts can be seen on my personal <Link to="/projects">projects</Link> or my Github <a href="https://github.com/dobladov/">profile</a>.
          </p>

          <p>
            I also started to use Stackoverflow in a <a href="https://stackoverflow.com/users/2498992/daniel-doblado">more intensive</a> way, finishing in the top 7% of contributors for the year and in the the top 38% of all time, in only one year.
          </p>
        </div>

      </div>

      <aside>
        <div id="contact">
          <h2>Contact</h2>

          <ul>
            <li>
              <b>Phone:</b> <a href="tel:+49 17655574077">+49 17655574077</a>
            </li>
            <li>
              <b>E-Mail:</b> <a href="mailto: danieldoblado@gmail.com">danieldoblado@gmail.com</a>
            </li>
          </ul>
        </div>

        <div id="about">
          <h2>About</h2>

          <ul>
            <li>
              <b>Age:</b> {~~((Date.now() - Date.parse('14 Dec 1992 00:12:00 GMT')) / (31557600000))}
            </li>
            <li>
              <b>Nationality:</b> Spanish
            </li>
            <li>
              <b>Location:</b> Berlin <span>(Germany)</span>
            </li>
            <li>
              <b>Languages:</b>
              <ul>
                <li>
                  English <span>(B2)</span>
                </li>
                <li>
                  Spanish <span>(Native)</span>
                </li>
                <li>
                  German <span>(A2)</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div id="skills">

          <h2 >Skills</h2>

          <p>I have worked professionally with all of this technologies, tools and platforms covering this <a href="https://roadmap.sh/frontend">roadmap</a>, and I can learn any new technologies required for the job.</p>

          <ul>
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>Svelte</li>
            <li>Gatsby</li>
            <li>Nuxt.js</li>
            <li>Next.js</li>
            <li>SASS</li>
            <li>Less</li>
            <li>Lit-html</li>
            <li>PostCSS</li>
            <li>Emotion-css</li>
            <li>Tailwind </li>
            <li>Wehooks</li>
            <li>ES6</li>
            <li>Node.js</li>
            <li>Elasticsearch</li>
            <li>Mapbox-GL</li>
            <li>D3.js</li>
            <li>Apache</li>
            <li>ESLint</li>
            <li>Nginx</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>HTML5</li>
            <li>Webpack</li>
            <li>Parcel</li>
            <li>Wordpress</li>
            <li>Graph-QL</li>
            <li>Git</li>
            <li>Flask</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>Prestashop</li>
            <li>Greenshok</li>
            <li>Anime.js</li>
            <li>Seo</li>
            <li>Docker</li>
            <li>Bash</li>
            <li>DigitalOcean</li>
            <li>Github</li>
            <li>Gitlab</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <b>Web Development</b> <i>NVQ Level 3</i>
              <br/>
              Doña Salvadora Muñoz
            </li>
            <li>
              <b>Computing and networks</b> <i>NVQ Level 2</i>
              <br/>
              Doña Salvadora Muñoz
            </li>
          </ul>
        </div>
      </aside>

    </section>
  </Layout>
)

export default ProjectsPage
