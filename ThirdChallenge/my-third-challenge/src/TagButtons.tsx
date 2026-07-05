import "./TagButtons.css";
const TagButton = ({ title, children }) => {
  return (
    <button className="Tagbutton">
      {title}
      {children}
    </button>
  );
}

export default TagButton