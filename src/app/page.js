"use client";
import styles from "./page.module.css";

export default function Home() {
  const apple = () => {
    alert("apple");
  };
  return (
    <main className={styles.main}>
      <h1>Events</h1>
      <button onClick={apple}>click</button>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  );
};
