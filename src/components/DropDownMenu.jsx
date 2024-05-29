const { default: MenuItem } = require("./MenuItem");

const DropDownMenu = ({ items = [], styles }) => {
  return (
    <div
      className={styles}
    >
      {items.map(({ text, icon }) => (
        <MenuItem key={text} text={text} icon={icon} />
      ))}
    </div>
  );
};

export default DropDownMenu;
