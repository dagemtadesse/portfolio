const SkillsSlider = ({
  title,
  amount,
  text,
}: {
  title: string;
  amount: number;
  text: string;
}) => {
  return (
    <div>
      <div>{title}</div>
      <div className="flex w-full items-center gap-6 mt-1">
        <div className="bg-opacity-10 bg-white rounded-full h-[6px] grow">
          <div
            className="bg-white h-full rounded-full"
            style={{ width: `${amount}%` }}
          />
        </div>

        <span>{text}</span>
      </div>
    </div>
  );
};

export default SkillsSlider;
