import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Blogs extends Component {
  componentWillReceiveProps() {
    document.title = "Blogs - Nurul Mamun Network Engineer Portfolio";
  }

  componentDidMount() {
    document.title = "Blogs - Nurul Mamun Network Engineer Portfolio";
  }

  render() {
    return (
      <div className="blogs-page">
        <NavBar page="blogs" />
        <div className="projects-container">
          <h2>Blogs</h2>

          <div className="project">
            <picture className="project-image">
              {/* <source
                srcSet="img/webp/new-zealand-police-logo.webp"
                type="image/webp"
              />
              <source
                srcSet="img/jpg/new-zealand-police-logo.jpg"
                type="image/jpeg"
              /> */}
              <img
                src="data:image/jpeg;base64,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"
                alt="New Zealand Police Logo"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>যাপিত জীবনঃ মানবতার বাটখারা।</h3>
              <span>
                <strong>Date: </strong>১৬ ই এপ্রিল, ২০২২ বিকাল ৩:১৭
              </span>
              <br />
              <br />

              {/* <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-css">CSS</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-nodejs">Node JS</div>
                <div className="tag tag-mysql">MySQL</div>
              </div> */}
              {/* <p>
                A group of students from Waikato University were asked to
                develop a notification system between cameras and the Waikato
                Police.
              </p> */}
              <p>
                পৃথিবীর উন্নত মানবতার জনৈক দেশে একটি ধর্মের পবিত্র বইকে পুড়িয়ে
                ফেলার জন্য দেশটির একজন রাজনীতিবিদ কর্মসূচীকে ঘোষনা করলে তা
                অনুমোদন করা হয় এবং যখন তার প্রতিবাদে উক্ত ধর্মের লোকজন রাস্তায়
                নেমে ভাংচুর করে তখন বলা হয় সহিংস বিক্ষোভ। আধুনিক বিশ্ব ও তাদের
                সংবাদপত্রের নীতি নৈতিকতা খুবই ভালো। এই ধরনের নীতিমালা অন্য
                ধর্মের কেউ অনুসরণ করলে তারা হয়ে যায় সন্ত্রাসী।
              </p>
              {/* <p>
                Please contact me for references for this work, as it is closed
                source.
              </p> */}
            </div>
            {/* <div className="project-links">
              <Link to="/contact" className="project-button">
                <span className="fa fa-envelope"></span> Contact For Details
              </Link>
            </div> */}
          </div>

          {/* <div className="project">
            <picture className="project-image">
              <source
                srcSet="img/webp/mylistings-example-image.webp"
                type="image/webp"
              />
              <source
                srcSet="img/jpg/mylistings-example-image.jpg"
                type="image/jpeg"
              />
              <img
                src="img/jpg/mylistings-example-image.jpg"
                alt="MyListings Example Listing"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>MyListing Property Listings Plugin</h3>
              <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-css">CSS</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-php">PHP</div>
                <div className="tag tag-wordpress">Wordpress</div>
              </div>
              <p>
                A Wordpress Plugin created for MyListing to automatically
                generate and update detailed web pages based on the real estate
                agents' and affiliated agents' current and sold listings.
              </p>
              <p>
                As part of this plugin I implemented multiple page and component
                designs to fit into the theme of the sites.
              </p>
            </div>
            <div className="project-links">
              <Link to="/contact" className="project-button">
                <span className="fa fa-envelope"></span> Contact For Details
              </Link>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source srcSet="img/webp/f2p-wiki.webp" type="image/webp" />
              <source srcSet="img/jpg/f2p-wiki.jpg" type="image/jpeg" />
              <img
                src="img/jpg/f2p-wiki.jpg"
                alt="F2P OSRS Wiki Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>F2P OSRS Wiki</h3>
              <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-css">CSS</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-ruby-on-rails">Ruby on Rails</div>
                <div className="tag tag-sqlite">SQLite</div>
              </div>
              <p>I am the co-owner of the F2P OSRS Wiki.</p>
              <p>
                F2P.wiki is an open source Old School RuneScape hiscores for
                Free-to-play players. It is a fan-made passion project started
                in October 2017. It is constantly updated with the help of the
                F2P OSRS community.
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://www.f2p.wiki"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fa fa-link"></span> View Website
              </a>
              <a
                className="project-button"
                href="https://github.com/vmeow/f2pehp"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-github"></span> View Github
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source srcSet="img/webp/iourpg-website.webp" type="image/webp" />
              <source srcSet="img/jpg/iourpg-website.jpg" type="image/jpeg" />
              <img
                src="img/jpg/iourpg-website.jpg"
                alt="IOURPG Website Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>Idle Online Universe Game Portal</h3>
              <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-css">CSS</div>
                <div className="tag tag-bootstrap">Bootstrap</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-reactjs">React JS</div>
                <div className="tag tag-nodejs">Node JS</div>
              </div>
              <p>
                IOURPG.com is a website I designed and developed to bring
                together all of the elements of the Idle Online Universe game
                while maintaining a simple and professional look.
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://iourpg.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fa fa-link"></span> View Website
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source
                srcSet="img/webp/wedding-website.webp"
                type="image/webp"
              />
              <source srcSet="img/jpg/wedding-website.jpg" type="image/jpeg" />
              <img
                src="img/jpg/wedding-website.jpg"
                alt="Wedding Website Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>Olly & Monique's Wedding Website</h3>
              <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-css">CSS</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-php">PHP</div>
                <div className="tag tag-mysql">MySQL</div>
              </div>
              <p>
                A from scratch website for my brother and his fiancée for their
                upcoming wedding. RSVP and Admin Dashboard pages both contain
                large MySQL functionality such as auto-generated content and a
                login.
              </p>
              <p>
                All source aside from the MySQL database information, as well as
                screenshots of the pages can be found the on Github.
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://github.com/puremana/Wedding-Website"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-github"></span> View Github
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source srcSet="img/webp/iou-helper.webp" type="image/webp" />
              <source srcSet="img/jpg/iou-helper.jpg" type="image/jpeg" />
              <img
                src="img/jpg/iou-helper.jpg"
                alt="IOU Helper Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>IOU Helper / IOU Helper Pro</h3>
              <div className="project-tags">
                <div className="tag tag-winforms">Winforms</div>
                <div className="tag tag-csharp">C#</div>
                <div className="tag tag-sharppcap">SharpPcap</div>
              </div>
              <p>IOU Helper is a wrapper for the popular online game IOURPG.</p>
              <p>
                IOU Helper allows users to log into multiple kongregate and
                IOURPG.com accounts within a desktop application. This allows
                the user to run the game with less CPU and GPU usage. It also
                provides features such as auto-login, auto-refresh, timers, auto
                clicking and macros to get the best possible experience out of
                the game.
              </p>
              <p>
                The IOU Helper Pro edition used SharpPcap to read packets from
                the game to collect data and display this on screen to provide
                the user with optimal game paths. This project was completed
                using C# in Visual Studio with Winforms.
              </p>
              <p>
                IOU Helper is still actively updated and currently used by over
                300 players.
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://github.com/puremana/iou-helper"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-github"></span> View Github
              </a>
              <a
                className="project-button"
                href="https://discord.gg/JhybKW3"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-discord"></span> View Discord
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source srcSet="img/webp/iou-helper-2.webp" type="image/webp" />
              <source srcSet="img/jpg/iou-helper-2.jpg" type="image/jpeg" />
              <img
                src="img/jpg/iou-helper-2.jpg"
                alt="IOU Helper 2.0 Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>IOU Helper 2.0</h3>
              <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-css">CSS</div>
                <div className="tag tag-semanticui">Semantic UI</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-nodejs">Node JS</div>
                <div className="tag tag-electron">Electron</div>
              </div>
              <p>
                While IOU Helper v1.0 allowed for low CPU and GPU usage while
                running multiple accounts, I wanted to create fast, responsive
                and attractive client for people who didn't worry about hardware
                usage. This is why I created IOU Helper 2.0.
              </p>
              <p>
                IOU Helper 2.0 was created in Electron using NodeJS, HTML5 and
                CSS. Electron combines web development with building cross
                platform desktop apps.
              </p>
              <p>This program is currently used by over 50 players.</p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://github.com/puremana/iou-helper-2.0"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-github"></span> View Github
              </a>
              <a
                className="project-button"
                href="https://discord.gg/JhybKW3"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-discord"></span> View Discord
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source srcSet="img/webp/iou-bot.webp" type="image/webp" />
              <source srcSet="img/jpg/iou-bot.jpg" type="image/jpeg" />
              <img
                src="img/jpg/iou-bot.jpg"
                alt="IOU Discord Bot Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>IOU Bot</h3>
              <div className="project-tags">
                <div className="tag tag-nodejs">Node JS</div>
                <div className="tag tag-discordjs">Discord JS</div>
                <div className="tag tag-json">JSON</div>
              </div>
              <p>
                IOU Bot is a Discord bot made for the official IOURPG game
                Discord server. This was my first time developing using the
                Discord JS API, which I found quite enjoyable.
              </p>
              <p>
                The bots noteable features include adding custom commands,
                advertising parties and guilds by adding them to a locally
                stored database which is private messaged to interested members
                when requested, a voting system and a scheduler which pings
                members with the bingo role 10 minutes prior to the in-game
                bingo. This is to prevent players from forgetting to sign up for
                bingo.
              </p>
              <p>
                An extended version of this bot for IOU Guild Discord Servers
                can be found at{" "}
                <a
                  href="https://github.com/puremana/me-bot"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://github.com/puremana/me-bot
                </a>
                .
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://github.com/puremana/iou-bot"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-github"></span> View Github
              </a>
              <a
                className="project-button"
                href="https://discord.gg/zynuQcP"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-discord"></span> View Discord
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source
                srcSet="img/webp/random-food-picker.webp"
                type="image/webp"
              />
              <source
                srcSet="img/jpg/random-food-picker.jpg"
                type="image/jpeg"
              />
              <img
                src="img/jpg/random-food-picker.jpg"
                alt="Random Food Picker Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>Random Food Picker</h3>
              <div className="project-tags">
                <div className="tag tag-html">HTML5</div>
                <div className="tag tag-scss">SCSS</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-vue">Vue</div>
                <div className="tag tag-firebase">Firebase Functions</div>
                <div className="tag tag-yelp">Yelp Fusion</div>
                <div className="tag tag-algolia-places">Algolia Places</div>
              </div>
              <p>
                The Random Food Picker is a fun little web app I made to entice
                my coworkers to try different takeouts at lunch. You can read
                the full story on my{" "}
                <a href="https://blog.jeremyshaw.co.nz/2018/11/19/CORS-And-Hiding-Api-Keys/">
                  blog post
                </a>
                . For this project I used Vue, Firebase Cloud Functions and the
                Yelp Fusion and Algolia Places API's.
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://food-roulette-3dd83.firebaseapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fas fa-link"></span> View Website
              </a>
              <a
                className="project-button"
                href="https://github.com/puremana/food-roulette"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-github"></span> View Github
              </a>
            </div>
          </div>

          <div className="project">
            <picture className="project-image">
              <source
                srcSet="img/webp/vail-vr-discord-bot.webp"
                type="image/webp"
              />
              <source
                srcSet="img/jpg/vail-vr-discord-bot.jpg"
                type="image/jpeg"
              />
              <img
                src="img/jpg/vail-vr-discord-bot.jpg"
                alt="Vail VR Discord Bot Screenshot"
                loading="lazy"
              />
            </picture>
            <div className="project-text">
              <h3>Vail VR Discord Bot</h3>
              <div className="project-tags">
                <div className="tag tag-nodejs">Node JS</div>
                <div className="tag tag-discordjs">Discord JS</div>
                <div className="tag tag-google-cloud-platform">
                  Google Cloud Platform
                </div>
              </div>
              <p>
                The Vail VR Discord Bot was developed for the team at{" "}
                <a
                  href="https://metadrop.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  MetaDrop
                </a>{" "}
                to fairly distribute Vail VR Steam keys in preparation for their
                upcoming drop.
              </p>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://discord.gg/XCEtjdyg9z"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fab fa-discord"></span> View Discord
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Blogs;