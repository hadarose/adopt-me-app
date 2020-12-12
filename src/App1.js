import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App1 = () => {
  // return React.createElement("div", { id: "something important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Chuchon",
  //     animal: "Rabbit",
  //     breed: "White",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Chuchon2",
  //     animal: "Rabbit",
  //     breed: "Light Brown",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Toffi",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Chuchon" animal="Rabbit" breed="White" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Toffi" animal="Cat" breed="mixed" />
    </div>
  );
};

render(<App1 />, document.getElementById("root"));
