import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="introPic">
        <img
          src="/Charli.jpeg"
          alt="Charli at Gardens"
          height="700px"
          width="500px"
        />
        <p className="caption">- That's me @ Rip Van Winkle Gardens -</p>
      </div>
      <div>
        <h1>Charli Jade Leger</h1>
        <p className="paragraph">
          Hey, I'm Charli! I'm always bringing people together no matter where I
          am. It all started when I started working in the service industry.
          Operating a restaurant taught me many lessons about logistics,
          organization, processes, and managing people in a fast-paced
          environment. My personality type is the Campaigner, and I live it &
          breathe it. [insert more about that here] While at Waitr, I gained
          invaluable experience in how to manage people on a large scale for a
          huge product in order to increase revenue. Much of what I do is assess
          situations, and make changes in order for those to work while still
          acknowledging a teams' strengths and areas of improvement.{" "}
        </p>
      </div>
    </section>
  );
}
