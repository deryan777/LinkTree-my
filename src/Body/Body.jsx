import { Button } from "../Button/Button";
import { Photo } from "../Photo/Photo";
import { motion } from "framer-motion";
import "./body.css"

export const Body = () => {
    // Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return ( 
        <>
            <div className="body-container">
                <motion.div 
                    className="Body"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="terminal" variants={itemVariants}>
                        <img src="/assets/icons8-console-48.png" alt="terminal" />
                    </motion.div>
                   
                    <section className="name-photo">
                        <motion.div variants={itemVariants}>
                            <Photo />
                        </motion.div>
                        <motion.div className="name" variants={itemVariants}>
                            <h1 className="bio-blue">João</h1>
                            <h1>Ryan</h1>
                        </motion.div>
                        <motion.div className="bio" variants={itemVariants}>
                            <p>Software</p>
                            <p className="bio-blue">Developer</p>
                        </motion.div>
                    </section>

                    <motion.section className="contats" variants={itemVariants}>
                        <a href="https://github.com/deryan777" target="_blank"><Button label="Github" icon="line-md:github-loop"/></a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3oryan/" target="_blank"><Button label="Linkedin" icon="line-md:linkedin"/></a>
                        <a href="https://www.instagram.com/ryaxnw/" target="_blank"><Button label="Instagram" icon="line-md:instagram"/></a>
                        <a href="mailto:joaoryanoliveira2005@gmail.com" target="_blank"><Button label="E-mail" icon="line-md:email" /></a>
                        <a href="https://drive.google.com/file/d/1FbUqpEbW997d-1tV2w6Xm2X8YqtB274P/view?usp=sharing" target="_blank"><Button label="CV" icon="pepicons-pop:cv"  /></a>
                    </motion.section>
                </motion.div>

                <motion.div 
                    className="bio-section"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <h2>Sobre Mim</h2>
                    <p>
                    Me chamo João Ryan tenho 20 anos. Atualmente cursando Engenharia de Software para adquiri um conhecimento mais técnico na construção de um software e melhor otimização do mesmo.
                    </p>
                    <p>
                        Tenho o principal objetivo de trabalhar com o desenvolvimento de sites e sistemas . Hordiernamente trabalho em uma empresa de logística desenvolvendo sistemas internos e externos.
                    </p>
                </motion.div>
            </div>
        </>
    );
}