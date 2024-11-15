import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className="styles.userTextContainer">
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              consequatur hic ea tempora adipisci aliquid nam tenetur eos quo!
              Vitae suscipit tempore odio eligendi deserunt similique saepe
              libero officia nostrum fuga! Voluptate est alias repudiandae
              soluta minus dolorem nemo architecto ullam vitae. Quod rem
              delectus, laudantium optio iste eius voluptas!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique magnam minus quis enim quod sunt in soluta temporibus
              libero! Esse non accusamus similique assumenda accusantium
              molestias ratione dignissimos officia vitae? Quos accusamus
              quibusdam temporibus ut, labore possimus at tempore quis unde
              placeat provident culpa ad ex autem nostrum voluptatem aut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus fugiat perferendis quo, nesciunt obcaecati velit
              beatae eos itaque! Culpa dolor nemo obcaecati ipsam. Similique,
              minima incidunt provident alias aliquam quo.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
