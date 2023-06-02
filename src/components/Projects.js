import React from "react";
import trivia from "../images/trivia.png";
import cartShop from "../images/cart-shop.png";
import tastyRecipes from "../images/appRecipes.png";
import solarSystem from "../images/sistema-solar.png";
import trybeAndDragons from "../images/trybers-and-dragons.png";
import trybesmith from "../images/trybesmith.png";
import '../style/Projects.css';

export default function Projects() {
  return (
    <section className="Projects_main">
        <div className="Projects_main_div">
      <header className="Projects_header">
        <h2>Projects</h2>
      </header>
      <div className="Projects_div">
        <article className="Projects_articles">
          <a
            href="https://github.com/gabigontijo/Projeto-Trivia"
            target="_blank"
            rel="noreferrer"
          >
            <img src={trivia} alt="project trivia" />
          </a>
          <h3>Trivia Game</h3>
          <p>Q&A (like an American million show) game using React and Redux.</p>
          <ul>
            <li>
              <a
                href="https://github.com/gabigontijo/Projeto-Trivia"
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </li>
          </ul>
        </article>
        <article className="Projects_articles">
          <a
            href="https://github.com/gabigontijo/App-Recipes"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tastyRecipes} alt="project tasty recipes" />
          </a>
          <h3>Tasty Recipes</h3>
          <p>
            Recipes app was developed, using tools from the React ecosystem:
            Hooks and Context API.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/gabigontijo/App-Recipes"
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </li>
          </ul>
        </article>
        <article className="Projects_articles">
          <a
            href="https://github.com/gabigontijo/Trybesmith"
            target="_blank"
            rel="noreferrer"
          >
            <img src={trybesmith} alt="project trybesmith" />
          </a>
          <h3>Trybesmith</h3>
          <p>
            {" "}
            CRUD API for a store of medieval items is developed using
            Typescript, Node, Express, MySQL DB and JWT authentication for
            login.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/gabigontijo/Trybesmith"
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </li>
          </ul>
        </article>
        <article className="Projects_articles">
          <a href="https://github.com/gabigontijo/solar-system" target="_blank" rel="noreferrer">
            <img src={solarSystem} alt="project solar system" />
          </a>
          <h3>Solar System</h3>
          <p>Developed solar system model with JSX in React</p>
          <ul>
            <li>
              <a href="https://github.com/gabigontijo/solar-system" target="_blank" rel="noreferrer">
                More
              </a>
            </li>
          </ul>
        </article>
        <article className="Projects_articles">
          <a href="https://github.com/gabigontijo/cart-shop" target="_blank" rel="noreferrer">
            <img src={cartShop} alt="project cart shop" />
          </a>
          <h3>Cart Shop</h3>
          <p>Dynamic cart using Mercado Livre's API with TDD and Javascript</p>
          <ul>
            <li>
              <a
                href="https://github.com/gabigontijo/cart-shop"
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </li>
          </ul>
        </article>
        <article className="Projects_articles">
          <a
            href="https://github.com/gabigontijo/Trybers-and-Dragons"
            target="_blank"
            rel="noreferrer"
          >
            <img src={trybeAndDragons} alt="project trybe and dragons" />
          </a>
          <h3>Trybe And Dragons</h3>
          <p>
            Project to study OOP and SOLID architecture based on RPG D&D theme
            with Node.js and Typescript.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/gabigontijo/Trybers-and-Dragons"
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </li>
          </ul>
        </article>
      </div>
      </div>
    </section>
  );
}
