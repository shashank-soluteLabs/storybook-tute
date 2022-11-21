import PropTypes from "prop-types";
function Button({ className, label, backgroundColor, rounded, ...props }) {
  return (
    <button
      className={
        (typeof className !== "undefined" ? className : " ") +
        "px-0.5 py-px rounded-md border-none text-base " +
        (rounded ? "rounded-lg " : "") +
        (backgroundColor === "primary"
          ? " bg-indigo-500 text-white "
          : backgroundColor === "secondary"
          ? " bg-sky-300 text-black "
          : backgroundColor === "danger"
          ? " bg-red-500 text-white "
          : backgroundColor === "success"
          ? " bg-green-500 text white "
          : " bg-yellow-300 text-black ")
      }
      {...props}
    >
      {label}
    </button>
  );
}
Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  rounded: PropTypes.bool,
};
export default Button;
