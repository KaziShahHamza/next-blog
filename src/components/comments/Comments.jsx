"use client"
import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "auth";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "auth" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.24</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur facere suscipit ex doloremque itaque eligendi asperiores cumque harum amet in! Obcaecati harum tempora doloremque consequatur, voluptatibus beatae sunt minima. Asperiores.</p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.24</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur facere suscipit ex doloremque itaque eligendi asperiores cumque harum amet in! Obcaecati harum tempora doloremque consequatur, voluptatibus beatae sunt minima. Asperiores.</p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.24</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur facere suscipit ex doloremque itaque eligendi asperiores cumque harum amet in! Obcaecati harum tempora doloremque consequatur, voluptatibus beatae sunt minima. Asperiores.</p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.24</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur facere suscipit ex doloremque itaque eligendi asperiores cumque harum amet in! Obcaecati harum tempora doloremque consequatur, voluptatibus beatae sunt minima. Asperiores.</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
