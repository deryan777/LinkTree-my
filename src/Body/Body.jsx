import { Button } from "../Button/Button";
import { Photo } from "../Photo/Photo";
import "./body.css"

export const Body = () => {
    return ( 
        <>
        
        <div className="Body">
            <div className="terminal">
                <img src="/assets/icons8-console-48.png" alt="terminal" />
            </div>
           <section className="name-photo">
            <Photo />
            <div className="name">
                <h1 className="bio-blue">João</h1>
                <h1>Ryan</h1>
            </div>
               <div className="bio">
                <p>Software</p>
                <p className="bio-blue">Developer</p>
               </div>
           </section>

            <section className="contats">
                <a href="https://github.com/deryaxnw" target="_blank"><Button label="Github" icon="line-md:github-loop"/></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3oryan/" target="_blank"><Button label="Linkedin" icon="line-md:linkedin"/></a>
                <a href="https://www.instagram.com/garotoceanoo/" target="_blank"><Button label="Instagram" icon="line-md:instagram"/></a>
                <a href="mailto:joaoryanoliveira2005@gmail.com" target="_blank"><Button label="E-mail" icon="line-md:email" /></a>
                <a href="https://drive.google.com/file/d/12YebeoRCrXDTixICqQAcauuyi54mfS4q/view?usp=sharing" target="_blank"><Button label="CV" icon="pepicons-pop:cv"  /></a>
            </section>
        </div>
        
        </>
     );
}
