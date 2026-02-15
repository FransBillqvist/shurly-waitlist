interface Props {
  title: string;
}
const Pill = ({ title }: Props) => {
  return <div className="bg-primary w-fit px-3 py-1.5 text-xs rounded-full">{title}</div>;
};

export default Pill;
