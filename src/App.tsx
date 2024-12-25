import "./App.scss";

import Pill from "./components/Pill/Pill.tsx";
import Section from "./components/Section/Section.tsx";

function App() {
  return (
    <div className="container">
      <h1>
        order of styling <span>s</span>css properties
      </h1>
      <Section header="SASS Inheritance">
        <Pill content="@extend" />
        <Pill content="@mixin" />
      </Section>
      <Section header="Box Model" bgColour="#9AECCD">
        <Pill content="width" />
        <Pill content="height" />
        <Pill content="margin" />
        <Pill content="padding" />
        <Pill content="border" />
        <Pill content="box-sizing" />
        <Pill content="border-radius" />
        <Pill content="box-shadow" />
      </Section>
      <Section header="Position and Layout" bgColour="#ff6256">
        <Pill content="position" />
        <Pill content="bottom" />
        <Pill content="right" />
        <Pill content="top" />
        <Pill content="left" />
        <Pill content="display" />
        <Pill content="float" />
        <Pill content="clear" />
      </Section>
      <Section header="background" bgColour="#41b7ff">
        <Pill content="background" />
        <Pill content="cursor" />
      </Section>
      <Section header="Typography" bgColour="#7c79ff">
        <Pill content="font-family" />
        <Pill content="font-weight" />
        <Pill content="font-size" />
        <Pill content="text-align" />
        <Pill content="line-height" />
        <Pill content="letter-spacing" />
        <Pill content="word-spacing" />
        <Pill content="text-decoration" />
        <Pill content="text-transform" />
      </Section>
      <Section header="Animation" bgColour="#cdff3a">
        <Pill content="animation" />
        <Pill content="transition" />
      </Section>
      <Section header="Others (uncommon)" bgColour="#4a6dfa">
        <Pill content="visibility" />
        <Pill content="z-index" />
        <Pill content="overflow" />
      </Section>
      <Section header="Pseudo-classes & Elements" bgColour="#f879b5">
        <Pill content=":hover" />
        <Pill content=":focus" />
        <Pill content=":active" />
        <Pill content=":before" />
        <Pill content=":after" />
        <Pill content=":first-child" />
        <Pill content=":nth-child()" />
        <Pill content=":last-child" />
      </Section>
    </div>
  );
}

export default App;
