import { useState } from "react";

const icons = {
  a: <i className="fa-solid fa-link" />,
  img: <i className="fa-solid fa-image" />,
  h1: <i className="fa-solid fa-heading"></i>,
  h2: <i className="fa-solid fa-heading"></i>,
  h3: <i className="fa-solid fa-heading"></i>,
  h4: <i className="fa-solid fa-heading"></i>,
  p: <i className="fa-solid fa-paragraph"></i>,
  ul: <i className="fa-solid fa-list-ul"></i>,
  ol: <i className="fa-solid fa-list-ul"></i>,
  li: <i className="fa-solid fa-list"></i>,
  div: <i className="fa-regular fa-square"></i>,
  span: <i className="fa-solid fa-arrow-right"></i>,
  button: <i className="fa-solid fa-eject"></i>,
  form: <i className="fa-regular fa-pen-to-square"></i>,
  input: <i className="fa-solid fa-keyboard"></i>,
  textarea: <i className="fa-solid fa-text-height"></i>,
  tabel: <i className="fa-solid fa-table"></i>,
  tr: <i className="fa-solid fa-table-cells"></i>,
  td: <i className="fa-solid fa-table-list"></i>,
  th: <i className="fa-solid fa-table-columns"></i>,
  br: <i className="fa-solid fa-arrow-down-up-across-line"></i>,
  hr: <i className="fa-solid fa-ruler-horizontal"></i>,
  iframe: <i className="fa-solid fa-crop-simple"></i>,
  section: <i className="fa-solid fa-section"></i>,
  main: <i className="fa-solid fa-house"></i>,
};


const Tree = ({ name, children, type }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="flex flex-col">
      <p
        onClick={() => {
          children && setShowChildren((prev) => !prev);
        }}
        className={` text-lg text-white flex gap-2 items-center`}
      >
        {children.length ? (
          <i
            className={`fa-solid fa-caret-right ${
              showChildren && " rotate-90 "
            } mr-2`}
          ></i>
        ) : (
          ""
        )}
        {icons[name] && <span>{icons[name]}</span>}{" "}
        {type && <span>{type}</span>} <span>{name}</span>
      </p>
      <ul>
        {showChildren &&
          children.map((item) => (
            <li className="ml-2" key={item.name}>
              {" "}
              <Tree {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Tree };
