// レセプト用：フォルダ選択コンポーネント
// 受け取り: onSelect(FileList)
// 備考: webkitdirectory を指定してフォルダ選択を実現

import React from "react";
import styles from "../../../styles/03_comapre/components/ReceiptFolderPicker.module.css";

type Props = {
  onSelect: (files: FileList) => void;
};

const ReceiptFolderPicker: React.FC<Props> = ({ onSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onSelect(files);
    }
  };

  return (
    <label className={styles.label}>
      フォルダを選択
      <input
        type="file"
        multiple
        onChange={handleChange}
        className={styles.input}
        ref={(ref) => {
          if (ref) {
            (ref as any).webkitdirectory = true; // フォルダ選択を有効化（Chrome系）
          }
        }}
      />
    </label>
  );
};

export default ReceiptFolderPicker;
