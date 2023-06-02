import React from 'react';
import mysql from '../images/mysql.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import css from '../images/css3.svg';
import html5 from '../images/html5.svg';
import node from '../images/nodejs.svg';
import mongo from '../images/mongodb.svg';
import docker from '../images/docker.svg';
import '../style/Skillset.css'


export default function Stacks() {
    return (
        <div className="skills_div">
            <section className="skills_section">
                <div className="skills_header">
                <h2>Skillset</h2>
                </div>
                <section className="articles">
                <div className="skills_articles">
                <article className="skills_article">
                    <i>
                        <img src={react} alt="React icon" />
                    </i>
                    <p>React.JS</p>
                </article>
                <article className="skills_article">
                    <i>
                        <img src={javascript} alt="Javascript icon" />
                    </i>
                    <p>Javascript</p>
                </article>
                </div>
                <div className="skills_articles">
                <article className="skills_article">
                    <i>
                        <img src={css} alt="CSS3 icon" />
                    </i>
                    <p>CSS3</p>
                </article>
                <article className="skills_article">
                    <i>
                        <img src={html5} alt="HTML5 icon" />
                    </i>
                    <p>HTML5</p>
                </article>
                </div>
                <div className="skills_articles">
                <article className="skills_article">
                    <i>
                        <img src={node} alt="Node icon" />
                    </i>
                    <p>Node JS</p>
                </article>
                <article className="skills_article">
                    <i>
                        <img src={mysql} alt="mysql icon" />
                    </i>
                    <p>MySQL</p>
                </article>
                </div>
                <div className="skills_articles">
                <article className="skills_article">
                     <i>
                        <img src={mongo} alt="MongoDB icon" />
                    </i>
                    <p>MongoDB</p>
                </article>
                <article className="skills_article">
                    <i>
                        <img src={docker} alt="Docker icon" />
                    </i>
                    <p>Docker</p>
                </article>
                </div>
                </section>
            </section>

        </div>
    );
}