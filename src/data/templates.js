/**
 * @typedef {Object} TemplateConfig
 * @property {string} id - 唯一標識符，建議使用 'tpl_' 前綴
 * @property {string} name - 模板顯示名稱
 * @property {string} content - 模板內容，支持 markdown 和 {{variable}} 變量
 * @property {string} imageUrl - 預覽縮略圖 URL
 * @property {Object.<string, string>} selections - 默認選中的變量值 map (key: variable_id, value: option_value)
 * @property {string[]} tags - 模板標籤數組，可選值：建築、人物、攝影、產品、實拍、圖表、卡通、寵物、遊戲、創意
 */

export const DEFAULT_TEMPLATE_CONTENT = `### Role (角色設定)
妳是一位頂尖的 {{role}}，擅長製作詳盡的角色設定圖（Character Sheet）。妳具備“像素級拆解”的能力，能夠透視角色的穿著層級、捕捉微表情變化，並將與其相關的物品進行具象化還原。妳特別擅長通過 {{subject}} 的私密物品、隨身物件和生活細節來側面豐滿人物性格與背景故事。

### Task (任務目標)
根據用戶上傳或描述的主體形象，生成一張**“全景式角色深度概念分解圖”**。該圖片必須包含 {{layout_focus}}，並在其周圍環繞展示該人物的服裝分層、不同表情、核心道具、材質特寫，以及極具生活氣息的私密與隨身物品展示。

### Visual Guidelines (視覺規範)
**1. 構圖布局 (Layout):**
- **中心位 (Center):** 放置角色的 {{layout_focus}}，作為視覺錨點。
- **環繞位 (Surroundings):** 在中心人物四周空白處，有序排列拆解後的元素。
- **視覺引導 (Connectors):** 使用{{connectors}}，將周邊的拆解物品與中心人物的對應部位或所屬區域連接起來。

**2. 拆解內容 (Deconstruction Details):**
- **服裝分層 (Clothing Layers):** 將角色的服裝拆分為單品展示
- **私密內著拆解:** 獨立展示角色的內層衣物，重點突出設計感與材質。例如： {{underwear_style}} （展示細節與剪裁）。
- **表情集 (Expression Sheet):** 在角落繪製 3-4 個不同的頭部特寫，展示不同的情緒，如： {{expressions}} 。
- **材質特寫 (Texture & Zoom):** 選取關鍵部位進行放大特寫。例如： {{texture_zoom}} ，增加對小物件材質的描繪。
- **動作:** 繪製特殊的動作和表情，例如：{{action_detail}}，增加動作的深度刻畫。
- **特殊視角:** 繪製從某種特殊場景下拍攝的特殊視角，例如：{{special_view}}

- **關聯物品 (Related Items):**
 - **隨身包袋與內容物:** 繪製 {{bag_content}}，並將其“打開”，展示散落在旁的物品。
 - **美妝與護理:** 展示 {{cosmetics}}。
 - **私密生活物件:** 具象化角色隱藏面的物品。根據角色性格可能包括： {{private_items}}，需以一種設計圖的客觀視角呈現。

**3. 風格與註釋 (Style & Annotations):**
- **畫風:** {{art_style}}，線條乾淨利落。
- **背景:** {{background_style}}，營造設計手稿的氛圍。
- **文字說明:** 在每個拆解元素旁模擬手寫註釋，簡要說明材質或品牌/型號暗示。

### Workflow (執行邏輯)
1. 分析主體的核心特徵、穿著風格及潛在性格。
2. 提取可拆解的一級元素（外套、鞋子、大表情）。
3. 腦補並設計二級深度元素（她內衣穿什麼風格？包裡裝什麼？獨處時用什麼？）。
4. 生成一張包含所有這些元素的組合圖，確保透視準確，光影統一，註釋清晰。
5. 使用中文，高清輸出。`;

export const TEMPLATE_PHOTO_GRID = `### Photo Grid Composition (九宮格攝影)

**編輯場景:** 3x3網格布局，採用冷灰色無縫背景。人物（面部特徵與上傳圖片完全一致）身穿 {{clothing}}，確保每張照片中人物形象保持一致。

**燈光設置:** {{lighting}}，營造統一而富有層次的光影效果。

**照片細節包括 (Grid Details)：**
1. {{grid_pose}}，畫面風格統一，鏡頭參數為 {{lens_param}}；
2. {{grid_pose}}，鏡頭參數為 {{lens_param}}，展現不同的拍攝角度和表情；
3. {{grid_pose}}，鏡頭參數為 {{lens_param}}，捕捉細膩的情感表達；
4. {{grid_pose}}，鏡頭參數為 {{lens_param}}，利用景深營造層次感；
5. {{grid_pose}}，鏡頭參數為 {{lens_param}}，突出動態瞬間的生動性；
6. {{grid_pose}}，鏡頭參數為 {{lens_param}}，通過前景虛化增強視覺焦點；
7. {{grid_pose}}，鏡頭參數為 {{lens_param}}，展現優雅的姿態和放鬆的狀態；
8. {{grid_pose}}，鏡頭參數為 {{lens_param}}，捕捉自然光線下的表情變化；
9. {{grid_pose}}，鏡頭參數為 {{lens_param}}，微距特寫展現面部細節和質感。

**後期處理:** 保持原始素材的真實感，平滑對比度，適度應用柔化效果，確保整體色調統一且富有質感。`;

export const TEMPLATE_FASHION_MOODBOARD = `### Fashion Illustration Moodboard (時尚插畫情緒板)
一張9:16豎屏的高級時尚插畫情緒板，模擬平板掃描效果。

**背景:** 純手繪的奶油色水彩暈染紙張，帶有淡淡的粉色網格。
**視覺核心:** 數張具有明顯白色模切寬邊和柔和投影的亮面乙烯基貼紙。

**貼紙內容:**
- **中央:** {{sticker_core}}，光線明亮。
- **左側:** {{fashion_deconstruct}}。
- **右下角:** 關鍵的隱藏層貼紙：一套折疊整齊的內衣，展現細膩紋理。
- **互動元素:** 一隻穿著粉色系、與用戶服裝呼應的 {{toy_companion}} 正趴在一個手繪對話框上。

**裝飾細節:** 周圍裝飾著蠟筆質感的 {{sticker_decor}} 和潦草的中文書法標註OOTD。
**注意:** 畫面中絕無任何人手、筆或物理桌面背景，純粹的平面藝術插畫。`;

export const TEMPLATE_CHARACTER_SELFIE = `### Character Selfie (人物趣味合影)
讓 {{character_companion}} 站在男人旁邊，{{action_pose}}，同時對著鏡頭露出調皮的表情。

**背景:** 以 {{background_scene}} 為背景。

**要求:** 保持自拍構圖不變，讓兩個角色自然地融入畫面，光影統一，互動自然。`;

export const TEMPLATE_CLASSIC_SCENE = `### 經典場景微縮復刻

展示一個精緻的、微縮 3D 卡通風格的{{classic_scene}}場景，採用清晰的 45° 俯視等軸側視角（Isometric view）。

**核心構圖：** 將主體最經典的形象突出地置於中心。自動搭配比例適宜的關鍵元素圖標、象徵性物品、迷人的小角色以及能詮釋主體故事的道具。整體布局應當充滿趣味且緊湊聚集，宛如一套高端的玩具盲盒套裝。

**渲染與材質：** 採用{{render_style}}風格進行渲染。建模必須精細、圓潤流暢且質感豐富。使用逼真的 PBR 材質：混合用於有機形態的柔和啞光粘土、用於水體/玻璃元素的光澤樹脂，以及用於結構組件的光滑 PVC 材質。著重表現具有觸感、“看起來手感很好”的紋理細節。

**燈光與氛圍：** 採用柔和、逼真的攝影棚布光配合全局光照（Global Illumination）。利用柔和的陰影營造出溫暖、舒適且充滿魔力的氛圍。

**布局：** 保持乾淨、極簡的布局，使用與主體配色相協調的純色背景。

**文字：** 在{{position}}，使用巨大的、圓潤的 3D 字體醒目地展示主體名稱，使其輕微懸浮於場景上方。`;

export const TEMPLATE_CORPORATE_GROWTH = `### 可視化企業成長之路

**角色定義**  
妳是一位企業演變建築師 (Corporate Evolution Architect)。妳的目標是創建一個超高密度、垂直堆疊的等距軸測（Isometric）3D 渲染可視化圖像，展示 {{company}} 公司的技術和產品歷史。通過圖像展示一個企業的時間線：底部是簡陋的創業故事，通過產品迭代垂直向上升起，直到現代或未來的巔峰。

**核心能力 | 關鍵視覺策略（Frameless Tech-Lapse）：**
- **根除容器：** 嚴禁使用底板、邊框或橫截面視圖。底部邊緣是創業基地（車庫/實驗室/小辦公室），無限延伸。
- **垂直時間線：** “之字形上升（Zig-Zag Ascent）”穿越創新歷程。  
  - 底部（前景）：創業階段歲月 + 第一個原型機  
  - 中部（上升中）：快速增長 / 全球擴張 / 標誌性的中期產品  
  - 頂部（背景）：當前總部 / 生態系統 / 未來研發
- **集成 3D 標題：** 企業 Logo 必須渲染為巨大的、電影般的 3D 字體，矗立在前景，使用公司標誌性字體/材質。

**檢索與梳理：**
- 提取企業歷史的幾個階段。
- 列出定義每個時代的“經典產品”。
- 勞動力演變：可視化員工與設備的變化。

**構圖與光影：**  
無框架、無邊界、無橫截面。垂直之字形時間線，將產品代際從底部的創業階段堆疊到未來的頂部。燈光從近現代的暖光（創業初期）過渡到乾淨的白/藍 LED 光（現代科技）。環境與公司經典產品隨高度演變。公司的多款經典產品以“巨物化”呈現。  
移軸攝影（Tilt-shift）與 {{render_style}}，畫幅 {{ratio}}。`;

/**
 * 可用的模板標籤
 */
export const TEMPLATE_TAGS = [
  "建築",
  "人物",
  "攝影",
  "產品",
  "實拍",
  "圖表",
  "卡通",
  "寵物",
  "遊戲",
  "創意"
];

/**
 * 系統內置模板列表
 * 
 * 如何添加新模板：
 * 1. 在上方定義模板內容常量 (可選，但推薦)
 * 2. 在數組中添加一個新的配置對象
 * 3. 確保 id 唯一
 * 4. imageUrl 可以是外部鏈接，也可以是項目內的 import 資源
 * 5. tags 可以從 TEMPLATE_TAGS 中選擇
 */
export const INITIAL_TEMPLATES_CONFIG = [
  {
    id: "tpl_default",
    name: "角色概念分解圖",
    content: DEFAULT_TEMPLATE_CONTENT,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/ec433cf214faf102.jpg",
    selections: {},
    tags: ["人物", "創意", "圖表"]
  },
  {
    id: "tpl_photo_grid",
    name: "3x3 攝影網格",
    content: TEMPLATE_PHOTO_GRID,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/5302794e63fa130b.jpg",
    selections: {
      "clothing": "炭灰色無袖連衣裙",
      "grid_pose-0": "前景手指虛化",
      "grid_pose-1": "目光鎖定鏡頭",
      "grid_pose-2": "單色下巴托手",
      "grid_pose-3": "正面特寫陰影",
      "grid_pose-4": "斜角拍攝",
      "grid_pose-5": "雙手置於鎖骨",
      "grid_pose-6": "坐姿半身側面",
      "grid_pose-7": "側面微距水滴",
      "grid_pose-8": "回眸一笑",
      "lens_param-0": "85mm, f/1.8",
      "lens_param-1": "85mm, f/2.0",
      "lens_param-2": "50mm, f/2.2",
      "lens_param-3": "50mm, f/2.5",
      "lens_param-4": "50mm, f/3.2",
      "lens_param-5": "35mm, f/4.5",
      "lens_param-6": "85mm, f/1.9",
      "lens_param-7": "50mm, f/1.8",
      "lens_param-8": "85mm, f/2.2"
    },
    tags: ["人物", "攝影", "實拍"]
  },
  {
    id: "tpl_fashion",
    name: "時尚情緒板插畫",
    content: TEMPLATE_FASHION_MOODBOARD,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/4d9f92ccb4113fdd.jpg",
    selections: {},
    tags: ["人物", "創意", "卡通"]
  },
  {
    id: "tpl_character_selfie",
    name: "人物趣味合影",
    content: TEMPLATE_CHARACTER_SELFIE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/c2312d24d0f2c38e.jpeg",
    selections: {},
    tags: ["人物", "創意"]
  },
  {
    id: "tpl_classic_scene",
    name: "經典場景微縮復刻",
    content: TEMPLATE_CLASSIC_SCENE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/10/1eac697f5a438542.jpg",
    selections: {
      "classic_scene": "神隱少女",
      "render_style": "Octane Render 和 Cinema 4D",
      "position": "頂部中央"
    },
    tags: ["卡通", "創意", "遊戲"]
  },
  {
    id: "tpl_corporate_growth",
    name: "可視化企業成長之路",
    content: TEMPLATE_CORPORATE_GROWTH,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/10/a7e87e49c6144fdc.jpg",
    selections: {
      "company": "任天堂（Nintendo）",
      "render_style": "3D像素風格",
      "ratio": "3:4豎構圖"
    },
    tags: ["建築", "創意", "圖表"]
  }
];
