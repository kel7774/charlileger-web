import React from "react";
import styles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.container}>
      <img
        src="/Meowulf.jpg"
        alt="Meowulf by Kelli"
        height="1000px"
        width="2000px"
      />
      <div className={styles.greeting}>
        <h1 className="greeting">Hi,</h1>
        <h1 className="greeting">I'm</h1>
        <h1 className="greeting">Charli!</h1>
      </div>
    </section>
  );
}
