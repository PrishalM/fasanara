import React from "react";

const Hero = ({ name, forkCount, description, repoUrl }) => {
  return (
    <section className="repo-details">
      <h2>Repo name: {name}</h2>
      <h4 className="forks">Forks: {forkCount}</h4>
      <h5 className="repoLink">
        <a href={repoUrl} target="_blank">
          Click here to visit this repo
        </a>
      </h5>

      <p className="description">
        Description:{" "}
        {description !== null
          ? description
          : "No desciption has been set for this repo :( Soz "}
      </p>
    </section>
  );
};

export default Hero;
