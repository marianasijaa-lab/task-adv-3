interface FilterButtonsProps<T extends string> {
  filters: T[];
  active: T;
  onChange: (filter: T) => void;
  className?: string;
  buttonClassName?: string;
}

export default function FilterButtons<T extends string>({
  filters,
  active,
  onChange,
  className = "room-filters",
  buttonClassName = "filter-btn",
}: FilterButtonsProps<T>) {
  return (
    <div className={className}>
      {filters.map((f) => (
        <button
          key={f}
          className={`${buttonClassName}${active === f ? " active" : ""}`}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
