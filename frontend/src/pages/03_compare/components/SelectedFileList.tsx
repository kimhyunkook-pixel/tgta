// 選択済みファイルのリスト表示（フォルダ内ファイルの簡易プレビュー）

import React from "react";
import styles from "../../../styles/03_comapre/components/SelectedFileList.module.css";

type Props = {
  files: FileList;
  max?: number; // 先頭N件だけ表示したい場合
};

const SelectedFileList: React.FC<Props> = ({ files, max = 9999 }) => {
  const items = Array.from(files).slice(0, max);
  return (
  <ul className={styles.list}>
      {items.map((file, idx) => (
        <li key={idx}>{(file as any).webkitRelativePath || file.name}</li>
      ))}
    </ul>
  );
};

export default SelectedFileList;
