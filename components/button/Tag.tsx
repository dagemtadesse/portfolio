export const Tag = ({ children }: { children: string }) => {
  return (
    <span className="whitespacen-no-wrap text-sm text-white text-opacity-75 hover:text-opacity-90 hover:underline transition-all duration-300 cursor-pointer">
      #{children}
    </span>
  );
};
