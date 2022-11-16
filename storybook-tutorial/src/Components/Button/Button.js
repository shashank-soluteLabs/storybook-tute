import PropTypes from "prop-types";
function Button({
  label,
  backgroundColor = "#6B4EFF",
  color = "white",
  borderRadius = "48px",
  border = "none",
}) {
  const style = {
    backgroundColor,
    padding: "0.5rem 1rem",
    color,
    borderRadius,
    border,
  };
  return <button style={style}>{label}</button>;
}
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
};
export default Button;
