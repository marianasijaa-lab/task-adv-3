import shape from "../assets/shape-14.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={className ?? "logo-box"}>
      <div className="logo-icon">
        <img src={shape} alt="Little Learners logo" />
      </div>
      <span className="logo-name">Little Learners</span>
    </div>
  );
}
