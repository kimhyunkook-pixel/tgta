import { useState } from "react";

const ComparePageMain = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleFolderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFiles(files);
            console.log("📂 선택된 파일들:");
            for (let i = 0; i < files.length; i++) {
                console.log(files[i].name, files[i].webkitRelativePath);
            }
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>レセプトファイルの選択</h2>

            <label
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#004190",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
            >
                フォルダを選択
                <input
                    type="file"
                    multiple
                    onChange={handleFolderSelect}
                    style={{ display: "none" }}
                    ref={(ref) => {
                        if (ref) {
                            (ref as any).webkitdirectory = true;
                        }
                    }}
                />
            </label>

            {selectedFiles && (
                <ul style={{ marginTop: "1rem" }}>
                    {Array.from(selectedFiles).map((file, idx) => (
                        <li key={idx}>{file.webkitRelativePath}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ComparePageMain;
