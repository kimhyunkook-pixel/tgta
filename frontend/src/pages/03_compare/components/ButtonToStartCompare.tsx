import React from "react";
import styles from "../../../styles/03_comapre/components/ButtonToStartCompare.module.css";

type Props = {
  onSelect: () => void;
  disabled?: boolean;
};

const ButtonToStartCompare: React.FC<Props> = ({ onSelect, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={onSelect}
      disabled={disabled}
      style={disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}}
    >
      比較開始
    </button>
  );
};

export default ButtonToStartCompare;