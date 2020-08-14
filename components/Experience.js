import react from "react";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h1>Experience</h1>
      <div className="experience-block">
        <h4>January 2016 - November 2019</h4>
        <h3>
          Waitr, Inc, Lafayette, LA -{" "}
          <em>Menu Specialist & Partner Account Manager Team Lead</em>
        </h3>
        <ul>
          <li>
            Lead, coordinated, scheduled, and organized the launch of 15+ new
            markets
          </li>
          <li>
            Hired, trained, and provided continuous improvement for a team of 20
          </li>
          <li>
            Developed relationships, consulted with, and generated revenue for
            over 1,000 restaurants
          </li>
          <li>
            Provided bi-weekly data reports for the implementation of efficient
            systems and processes
          </li>
        </ul>
      </div>
      <div className="experience-block">
        <h4>December 2017 - Present</h4>
        <h3>
          Cajun Crate, Lafayette, LA - <em>Logistics Operator </em>
        </h3>
        <ul>
          <li>
            Maintain warehouse, inventory management, receive and reconcile with
            vendors
          </li>
          <li>
            Fulfilling multiple orders by providing quality assurance to
            maintain customer satisfaction
          </li>
          <li>
            Verify multiple orders to provide 100% accuracy and negotiate
            shipping standards
          </li>
        </ul>
      </div>
    </section>
  );
}
