import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey There, iAm Haamza</b> Discover my stories and creative ideas
        here.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            aspernatur.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            error nostrum, sapiente deleniti pariatur quas dolores hic fugiat
            perferendis totam illo id reiciendis iure? Deserunt animi quidem
            impedit placeat, assumenda nisi natus fugiat quis, quo eaque
            sapiente architecto dolorum sit accusantium neque? Rem, voluptate
            ipsam veniam illo ducimus perspiciatis deserunt.
          </p>

          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
