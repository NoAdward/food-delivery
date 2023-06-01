import React from "react";
import "./CV.scss";
function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "path/to/document.pdf"; // Замените на фактический путь к вашему документу
    link.download = "document.pdf"; // Замените на имя файла, которое будет сохранено у пользователя
    link.click();
  };

  return (
    <div className="container">
      <button onClick={handleDownload}  className="download-button">
        Скачать документ
      </button>
    </div>
  );
}

export default DownloadButton;
