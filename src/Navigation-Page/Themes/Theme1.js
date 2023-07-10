import React, { useContext } from "react";
import styles from "./Theme1.module.css";

import ResumeContext from "../../Context/ResumeContext";
export default function Theme1() {
  const user = useContext(ResumeContext);
  const { themeData, ComponentRef } = user;
  const { name, address, email, profile, phone, skill } =
    themeData.personalData;
  // console.log(name);
  return (
    <div className={styles.Theme1} ref={ComponentRef}>
      <section className={styles["personal-info"]}>
        <header>
          <p className={styles.heading}>{name}</p>
          <p className={styles.userContact}>
            {address} <span> | </span>
            {email}
            <span> | </span>
            {phone}
          </p>
          <p className={styles.profile}>{profile}</p>
        </header>
      </section>

      <section className={styles.skills}>
        <header>Technical skills</header>
        <div className="skillBox">
          <ul>
            {skill.split(",").map((item, key) => (
              <li key={key} className="skill-badge" variant="solid">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
