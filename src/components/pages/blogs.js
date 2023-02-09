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
              <img
                src="https://miro.medium.com/max/720/1*kxBdslclglg4zgCw0NMIIA.webp"
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
              <p>
                পৃথিবীর উন্নত মানবতার জনৈক দেশে একটি ধর্মের পবিত্র বইকে পুড়িয়ে
                ফেলার জন্য দেশটির একজন রাজনীতিবিদ কর্মসূচীকে ঘোষনা করলে তা
                অনুমোদন করা হয় এবং যখন তার প্রতিবাদে উক্ত ধর্মের লোকজন রাস্তায়
                নেমে ভাংচুর করে তখন বলা হয় সহিংস বিক্ষোভ। আধুনিক বিশ্ব ও তাদের
                সংবাদপত্রের নীতি নৈতিকতা খুবই ভালো। এই ধরনের নীতিমালা অন্য
                ধর্মের কেউ অনুসরণ করলে তারা হয়ে যায় সন্ত্রাসী।
              </p>
            </div>
          </div>
          <div className="project">
            <picture className="project-image">
              <img
                src="https://miro.medium.com/max/720/1*kxBdslclglg4zgCw0NMIIA.webp"
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
              <p>
                পৃথিবীর উন্নত মানবতার জনৈক দেশে একটি ধর্মের পবিত্র বইকে পুড়িয়ে
                ফেলার জন্য দেশটির একজন রাজনীতিবিদ কর্মসূচীকে ঘোষনা করলে তা
                অনুমোদন করা হয় এবং যখন তার প্রতিবাদে উক্ত ধর্মের লোকজন রাস্তায়
                নেমে ভাংচুর করে তখন বলা হয় সহিংস বিক্ষোভ। আধুনিক বিশ্ব ও তাদের
                সংবাদপত্রের নীতি নৈতিকতা খুবই ভালো। এই ধরনের নীতিমালা অন্য
                ধর্মের কেউ অনুসরণ করলে তারা হয়ে যায় সন্ত্রাসী।
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;