"use client";
import styles from "./page.module.css";
import ExampleComponent from "@/components/ExampleComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ExampleComponent />
      </div>
    </main>
  );
}
