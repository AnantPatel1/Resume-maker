import React, { useContext } from "react";
import styles from "./Theme1.module.css";

import ResumeContext from "../../Context/ResumeContext";
export default function Theme1() {
  const user = useContext(ResumeContext);
  const { themeData, ComponentRef } = user;
  const { name, address, email, profile, phone, skill } =
    themeData.personalData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { projectTitles, projectDesc } = themeData.projectData;
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
      {
        // Skills
      }

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
      {
        // Education
        // Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object.
        // The code is a React component that renders a list of education details. The component takes two dictionaries as input: educationTitles and educationDesc. The educationTitles dictionary maps an index to a title, such as "Bachelor of Science in Computer Science". The educationDesc dictionary maps an index to a description, such as "Stanford University".
        // The code first uses the Object.entries() method to iterate over the educationTitles dictionary. For each entry, the code creates a Box component with the title as the text content. The Box component also has a class name of subBox.
        // Next, the code checks if the educationDesc dictionary has an entry for the current index. If it does, the code uses the Object.entries() method to iterate over the educationDesc dictionary and creates a list of li elements for each description. The li elements contain the descriptions, which are split by commas.
      }
      <section className={styles.education}>
        <header>Education</header>
        <div className={styles["basic-set"]}>
          {Object.entries(educationTitles).map((item, key) => {
            return (
              <div key={key} className={styles.subBox}>
                <p className={styles["sub-title"]}>{item[1]}</p>
                <div className={styles["sub-details"]}>
                  {Object.entries(educationDesc)[key] === undefined
                    ? null
                    : Object.entries(educationDesc)
                        [key][1].split(",")
                        .map((element, index) => {
                          return <li key={index}>{element}</li>;
                        })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {
        // Projects
      }

      <section className={styles.projects}>
        <header>Projects</header>
        <div className={styles["basic-set"]}>
          {Object.entries(projectTitles).map((item, key) => {
            return (
              <div key={key} className={styles.subBox}>
                <p className={styles["sub-title"]}>{item[1]}</p>
                <div className={styles["sub-details"]}>
                  {Object.entries(projectDesc)[key] === undefined
                    ? null
                    : Object.entries(projectDesc)
                        [key][1].split(",")
                        .map((element, index) => {
                          return <li key={index}>{element}</li>;
                        })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
