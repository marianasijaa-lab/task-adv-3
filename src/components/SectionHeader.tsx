interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
      {description && <p className="sub">{description}</p>}
    </div>
  );
}
