import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Navbar />
      <header>
        <img src="/hero.png" alt="Hero" id='hero-img' />
        <div className="container">
        <p id="emphasize">
          We make <span className="accent">live</span>, <span className="accent">push</span> and <span className="accent">link</span> - unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
        </p>
        <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
        </div>
      </header>
      <section id="illustrations" className='w-screen h-screen py-10 grid grid-cols-12 grid-rows-8'>
        <img src="/img1.png" alt="img1" className='col-start-2 col-end-7 row-start-2 row-end-8'/>
        <img src="/img2.png" alt="img2" className='col-start-8 col-end-12 row-start-3 row-end-7'/>
        <div id="yellow-sq" className='row-span-full col-start-6 col-end-13'></div>
      </section>
      <section id="description">
        <div className="container">
        <p id="emphasize">
          Making music isn't easy. It takes time, effort, and learning. But when you're in the flow, it's incredibly rewarding.
        </p>
        <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
        </div>
        <img src="/video1.png" alt="video1" id='video'/>
        <div className="container">
          <p id="emphasize">
            We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
          </p>
          <p>Most of us are active musician, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the share belief that each of us has the skills and knowledge to contribute to something bit: helping to shape the future of music culture.</p>
        </div>
      </section>
      <section id="illustration" className='w-screen h-screen grid grid-cols-12 grid-rows-8'>
        <div id="green-sq" className='col-start-1 col-end-7 row-span-full'></div>
        <img src="/img4.png" alt="img4" className='col-start-2 col-end-5 row-start-2 row-end-4'/>
        <img src="/img5.png" alt="img5" className='col-start-2 col-end-5 row-start-5 row-end-7'/>
        <img src="/img6.png" alt="img6" className='col-start-6 col-end-12 row-start-3 row-end-5'/>
      </section>
      <section id="more-description">
        <div className="container">
          <p id="emphasize">
            We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
          </p>
          <p>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We've learned that achieving the best  results comes from building teams that are richly diverse, and this able to explore problems from a wider set of perspectives. We don't always agree with each other, but opinion and debate are valued and openly encouraged.</p>
        </div>
        <img src="/video2.png" alt="video2" id='video' />
        <div className="container">
          <p id="emphasize">
            We're passionate about what we do, but we're equally passionate about improving who we are.
          </p>
          <p>We work hard to foster an environment where people can grow both personally and professionally and we strive to create a wealth of opportunities to learn from and with each other.</p>
          <p>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff organised development and music salons are a change to discuss new technologies, production techniques and best practices.</p>
        </div>
      </section>
      <section id="last-illustrations" className='w-screen h-screen grid grid-cols-12 grid-rows-8'>
        <div id="purple-sq" className='col-start-3 col-end-9 row-start-2 row-end-8'></div>
        <img src="/img6.png" alt="img6" className='col-start-2 col-end-5 row-start-4 row-end-6 object-cover'/>
        <img src="/img7.png" alt="img7" className='col-start-7 col-end-13 row-start-3 row-end-8 object-fill'/>
      </section>
      <section id="last-description">
        <div className="container">
          <p id="emphasize">
            We want out employees to love it here. Since we're looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
          </p>
          <p>If you're joining us in Berlin, we'll help with relocation and paperwork. We'll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it's not all work; we have several company and tea, outings throughout the years as well as a variety of fun, informal small-group activities.</p>
        </div>
        <div id="side-by-side" className='flex w-5/6 h-96 m-auto'>
          <img src="/img9.png" alt="img9" className='aspect-square object-contain'/>
          <div id="blue-sq" className='aspect-square'>
            <p id="emphasize">We're really proud of the work we've done so far. But there's so much more to come. If you'd like to be a part of it, please join</p>
            <p id='emphasize' className='accent'>See latest jobs </p>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default App
