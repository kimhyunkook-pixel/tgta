// 画面の親：状態を保持し、子コンポーネントからのコールバックを受けてUIを更新
import { useState } from "react";
import styles from "../../styles/03_comapre/01_main.module.css";
import ReceiptFolderPicker from "./components/ReceiptFolderPicker";
import QualificationCsvPicker from "./components/QualificationCsvPicker";
import SelectedFileList from "./components/SelectedFileList";
import ButtonToStartCompare from "./components/ButtonToStartCompare";

const ComparePageMain = () => {
  // 左：レセプト選択結果
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // 右：資格情報CSV
  const [qualificationFile, setQualificationFile] = useState<File | null>(null);
  const [qualificationText, setQualificationText] = useState<string>(""); // ※今後パース予定

  // 子から受け取る：レセプトフォルダ
  const handleSelectReceipt = (files: FileList) => {
    setSelectedFiles(files);
    console.log("選択されたレセプトファイル:");
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name, (files[i] as any).webkitRelativePath);
    }
  };

  // 子から受け取る：資格情報CSV
  const handleSelectQualification = (file: File, text: string) => {
    setQualificationFile(file);
    setQualificationText(text);
    console.log("選択された資格情報CSV:", file.name);
    console.log("CSV先頭200文字:", text.substring(0, 200), "...");
  };

  return (
    <div className={styles.root}>
      {/* 上段: 左右2分割 */}
      <div className={styles.topRow}>
        {/* 左側: レセプト */}
        <div className={styles.left}>
          <h2>レセプトファイルの選択</h2>
          <ReceiptFolderPicker onSelect={handleSelectReceipt} />
          {selectedFiles && (
            <div className={styles.selectedFiles}>
              <SelectedFileList files={selectedFiles} />
            </div>
          )}
        </div>
        {/* 右側: 資格情報 */}
        <div className={styles.right}>
          <h2>資格情報CSVの選択</h2>
          <QualificationCsvPicker onSelect={handleSelectQualification} />
          {qualificationFile && (
            <p className={styles.selectedFileInfo}>
              選択されたファイル: <b>{qualificationFile.name}</b>
            </p>
          )}
          {qualificationText && (
            <pre className={styles.csvPreview}>
              {qualificationText.substring(0, 500)}
              {qualificationText.length > 500 ? "..." : ""}
            </pre>
          )}
        </div>
      </div>
      {/* 下段: 比較開始ボタン */}
      <div className={styles.bottomRow}>
        <ButtonToStartCompare
          onSelect={() => {
            // 比較ロジックをここに実装
          }}
          disabled={!(selectedFiles && selectedFiles.length > 0 && qualificationFile)}
        />
      </div>
    </div>
  );
};

export default ComparePageMain;
