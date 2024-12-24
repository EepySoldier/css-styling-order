import "./Pill.scss";

type PillProps = {
  content: string;
  bgColour?: `#${string}`;
};

export default function Pill({ content, bgColour }: PillProps) {
  return (
    <div className="Pill" style={bgColour ? { backgroundColor: bgColour } : {}}>
      {content}
    </div>
  );
}
