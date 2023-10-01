import React from "react";

export default function Button({
  onClick,
  disabled = false,
  classname,
  children,
}) {
  return (
    <button
      className={`btn ${classname}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}
