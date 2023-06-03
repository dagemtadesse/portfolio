export const Tag = ({ children }: { children: string }) => {
  return (
    <span className="whitespacen-no-wrap text-sm text-darkerGrey hover:text-customBlack hover:underline transition-all duration-300 cursor-pointer">
      #{children}
    </span>
  );
};
