import image from "/kicki.jpg"
import mail from "/mail.png"
import insta from "/insta.png"
import linkedin from "/linkedin.png"
import fb from "/fb.png"
import github from "/github.png"
import twitter from "/twitter.png"


export default function Card() {
  return (
    <article>
      <img className="profile-img" src={image} alt="Kicki Lindstrand"></img>
      <section className="basic">
        <h1>Kicki Lindstrand</h1>
        <h4>Frontend developer</h4>
        <a href="https://akickia.se" target="_blank"><h6>akickia.se</h6></a>
        <a href="mailto:kicki.lindstrand@gmail.com"><button><img src={mail}></img>Email</button></a>
      </section>
      <section className="about">
        <h2>About</h2>
        <p>I'm a frontend developer in the making. I have a background in teaching and is an excellent problem solver, organizer and love mentoring students. 
          I started coding in late 2021 and I'm looking forward to throw myself out there in this new field. Learning new things are exciting and challenging, but I'm having fun every step of the way. </p>
        <h2>Interests</h2>
        <p>My family. My dog. Books. Jigsaw puzzels. Movies. Music. Walks in nature. Camping. </p>
      </section>

      <section className="links">
        <a href="https://twitter.com/akickia" target="_blank"><img src={twitter}/></a>
        <a href="https://www.facebook.com/akickia/" target="_blank"><img src={fb}/></a>
        <a href="https://www.instagram.com/akickias_hemsidor/" target="_blank"><img src={insta}/></a>
        <a href="https://www.linkedin.com/in/kicki-lindstrand/" target="_blank"><img src={linkedin}/></a>
        <a href="https://github.com/akickia" target="_blank"><img src={github}/></a>
      </section>
    </article>
  )
}
