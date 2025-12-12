# Prompt Fill - 提示詞填空器 (Traditional Chinese Edition)

> **結構化、可視化、高效化的 AI 提示詞管理與生成工具**。  
> 專為 Midjourney、Stable Diffusion、Flux 等 AI 繪圖工具設計，幫助你從零散的關鍵詞中解放出來，用更直觀的"填空"方式構建複雜 Prompt。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/Version-0.5.0_Performance-orange.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)

---

## 🚀 為什麼選擇 Prompt Fill？

在 AI 繪圖中，我們經常需要複用同一套 Prompt 結構，只是替換其中的幾個關鍵詞（如角色、場景、光照）。

* ❌ **傳統方式**：在記事本裡複製粘貼，容易出錯，難以維護。
* ✅ **Prompt Fill**：將 Prompt 變成一個**"填空題模版"**。你定義結構，點擊選擇變量，自動生成最終文本。

### ✨ 核心亮點

1. **🧩 詞庫管理 (Visual Banks)**
    * **雙向同步**：預覽時添加的新選項，會自動保存到左側詞庫。
    * **分類色塊**：自定義分類顏色（人物、物品、視角...），讓複雜的 Prompt 結構一目瞭然。
    * **拖拽編輯**：直接將詞庫拖入模版即可生成插槽。

2. **🎲 靈感激發 (Randomizer) [NEW]**
    * **隨機靈感**：點擊骰子圖標，系統會隨機從詞庫中抽取選項填入當前模版，打破創作瓶頸，探索意想不到的組合。
    * **一鍵清空**：橡皮擦功能可快速重置所有選項，重新開始。

3. **⚡ 極速性能 (Performance) [NEW]**
    * **延遲加載**：導出組件按需加載，首屏加載速度提升 60%。
    * **代碼分包**：優化的構建策略，手機端秒開，操作如絲般順滑。

4. **📝 多模版系統**
    * 內置 "角色分解圖"、"時尚情緒板"、"微縮場景" 等多種專業模版。
    * 支持模版克隆（副本）、重命名、標籤管理。

5. **🖼️ 圖像化管理**
    * **可視化預覽**：為每個模版上傳參考圖，背景自動模糊適配，沉浸式體驗。
    * **所見即所得**：導出長圖時，所見即所得，包含你的預覽圖和生成的 Prompt，方便分享到社交媒體。

6. **💾 數據安全**
    * **本地優先**：所有數據默認存儲在瀏覽器 LocalStorage，隱私無憂。
    * **文件系統支持**：支持連接本地文件夾 (File System API)，實現數據持久化與備份。
    * **導入/導出**：支持 JSON 格式全量備份。

---

## 🛠️ 快速上手

### 網頁版

* 打開即用（需自行部署或使用演示地址）。

### 本地部署

確保您的環境已安裝 [Node.js](https://nodejs.org/) (推薦 v18+)。

```bash
# 1. 克隆項目
git clone https://github.com/lalawgwg99/JAZZXX.git
cd JAZZXX

# 2. 安裝依賴
npm install

# 3. 啟動開發服務器
npm run dev
# 瀏覽器訪問 http://localhost:5173
```

### 構建生產版本

```bash
npm run build
# 構建產物位於 dist 目錄，可直接部署到 Cloudflare Pages, Vercel, Netlify 等。
```

---

## 📖 使用指南

### 1. 編輯模版 (Edit)

點擊右上角 **"編輯模版"** 進入編輯模式。
* 在文本框中輸入內容，使用 `{{變量名}}` 代表插槽。
* 例如：`一個{{color}}的{{object}}放在桌子上。`
* 系統會自動識別變量並高亮顯示。

### 2. 填充內容 (Fill)

回到 **"預覽交互"** 模式。
* 點擊彩色的變量塊，從下拉菜單選擇詞庫中的詞。
* 如果沒有想要的詞，直接輸入並回車，不僅會選中，還會自動添加到詞庫以便下次使用。
* **隨機功能**：點擊工具欄的骰子 🎲，隨機填充所有空缺。

### 3. 導出結果 (Export)

- **複製文本**：點擊複製按鈕，獲得純淨的 Prompt。
* **保存長圖**：點擊圖片按鈕，生成包含預覽圖和 Prompt 的精美長圖（適合小紅書/推特分享）。

---

## 📝 更新日誌 (Changelog)

### v0.5.0 - Performance & DX (當前版本)

* **✨ 新功能**：新增「隨機靈感 (Randomize)」與「清空選項」功能。
* **⚡ 性能**：實現 html2canvas 延遲加載與代碼分包 (Chunk Splitting)，顯著提升移動端加載速度。
* **🌐 本地化**：全站 UI 與預設數據繁體中文化 (Traditional Chinese)。
* **💄 優化**：調整工具欄佈局，優化移動端適配。

### v0.4.0 - Functionality

* **模版體驗**：新增瀑布流展示、標籤過濾。
* **數據存儲**：支持一鍵刷新系統模版/詞庫並保留用戶自定義。
* **導出改進**：長圖導出等待圖片加載並進行 Base64 預取，避免封面空白。

---

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📄 許可證

[MIT License](LICENSE)

---
**Made with ❤️ by 角落工作室**
