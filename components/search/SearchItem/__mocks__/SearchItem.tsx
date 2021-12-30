interface Props {
  label: string;
  onClick: () => void;
}

export default function SearchItem({ label, onClick }: Props) {
  return (
    <div aria-label={label} onClick={onClick}>
      mock SearchItem
    </div>
  );
}
