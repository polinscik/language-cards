import React from "react";
import "../Buttons/BtnStyles.scss";

export default function CancelChangeBtn({onClick}) {
  return (
    <button onClick={onClick} className="btn table-btn cancelChange-btn">
      Отменить изменения
    </button>
  );
}
