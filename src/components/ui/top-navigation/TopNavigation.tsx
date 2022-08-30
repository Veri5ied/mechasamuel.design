import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

interface NavLinksProps {
  name: string;
  linkUrl: string;
}

const navLinks: NavLinksProps[] = [
  {
    name: "Works",
    linkUrl: "",
  },
  {
    name: "About",
    linkUrl: "",
  },
  {
    name: "Contact me",
    linkUrl: "",
  },
];

const TopNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="topnavigation__container">
      <div className="topnavigation__container--left">
        <h1>Mecha Samuel.</h1>
      </div>
      <div className="topnavigation__container--right">
        {navLinks.map(({ name, linkUrl }) => (
          <Link key={name} to={linkUrl}>
            {name}
          </Link>
        ))}
        <div className="topnavigation__container--right--mobile">
          <CgMenuRight
            onClick={() => setOpen(!open)}
            color="#fff"
            size={26}
            style={{ cursor: "pointer" }}
          />
          <Drawer
            placement="right"
            closable={false}
            onClose={() => setOpen(!open)}
            visible={open}
          >
            <div className="topnavigation__mobile--header">
              <h1>Mecha Samuel.</h1>
              <AiOutlineClose
                onClick={() => setOpen(!open)}
                color="#fff"
                size={20}
                style={{ cursor: "pointer" }}
              />
            </div>
            {navLinks.map(({ name, linkUrl }) => (
              <Link key={name} to={linkUrl}>
                {name}
              </Link>
            ))}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
