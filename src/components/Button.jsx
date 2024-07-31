/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Button({ children, textOnly, to, ...props }) {
  let cssClasses = `${props}`;
  if (textOnly) {
    cssClasses += " textOnly";
  }
  return (
    <p>
      <Link to={to}>
        <button className={cssClasses}>{children}</button>
      </Link>
    </p>
  );
}
