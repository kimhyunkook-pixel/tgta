// 資格情報用：CSVファイル選択コンポーネント
// 受け取り: onSelect(file: File, text: string)
// 備考: 文字コードはShift-JIS想定で読み込む

import React from "react";
import styles from "../../../styles/03_comapre/components/QualificationCsvPicker.module.css";

type Props = {
  onSelect: (file: File, text: string) => void;
};

const QualificationCsvPicker: React.FC<Props> = ({ onSelect }) => {
  // Shift-JIS 文字列として読むユーティリティ
  const readAsShiftJis = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const buf = fr.result as ArrayBuffer;
          const decoder = new TextDecoder("shift-jis");
          const text = decoder.decode(buf).replace(/^\uFEFF/, ""); // BOM除去
          resolve(text);
        } catch (e) {
          reject(e);
        }
      };
      fr.onerror = () => reject(fr.error);
      fr.readAsArrayBuffer(file);
    });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await readAsShiftJis(file);
    onSelect(file, text);
  };

  return (
    <label className={styles.label}>
      CSVファイルを選択
      <input type="file" accept=".csv" onChange={handleChange} className={styles.input} />
    </label>
  );
};

export default QualificationCsvPicker;
