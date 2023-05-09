const Button = ({
  contentText,
  onClick,
  btnStyle,
  svgStyle,
  svg
}: {
  contentText: string;
  onClick?: any;
  btnStyle?: object;
  svgStyle?: object;
  svg?: string;
}) => {
  return (
    <button
      style={{ cursor: "pointer", border: "none", outline: "none", ...btnStyle }}
      onClick={() => onClick()}
    >
      {contentText}
      {svg ? <img style={{ ...svgStyle }} src={svg} alt="svg icon" /> : null}
    </button>
  );
};

export default Button;
