const { default: MenuItem } = require("./MenuItem");

const NavMenu = ({ items = [] }) => {
  return (
    <div
      className="flex flex-col px-4 py-2 bg-almost-white dr drop-shadow rounded-lg
      absolute top-10 right-0 w-36 space-y-2 z-30"
    >
      {items.map(({ text, icon }) => (
        <MenuItem key={text} text={text} icon={icon} />
      ))}
    </div>
  );
};

export default NavMenu;
