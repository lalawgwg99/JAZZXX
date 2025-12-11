// 詞庫與分類配置，供 App 按需引入

export const INITIAL_CATEGORIES = {
  character: { id: "character", label: "人物 (CHARACTER)", color: "blue" },
  item: { id: "item", label: "物品 (ITEM)", color: "amber" },
  action: { id: "action", label: "動作 (ACTION)", color: "rose" },
  location: { id: "location", label: "地點 (LOCATION)", color: "emerald" },
  visual: { id: "visual", label: "畫面 (VISUALS)", color: "violet" },
  other: { id: "other", label: "其他 (OTHER)", color: "slate" }
};

// --- 初始數據配置 (Updated with new banks for examples) ---
export const INITIAL_BANKS = {
  role: {
    label: "角色身分",
    category: "character",
    options: ["遊戲與動漫概念美術設計大師", "資深影視角色原畫師", "賽博龐克風格設計師", "暗黑幻想風格插畫師"]
  },
  subject: {
    label: "主體對象",
    category: "character",
    options: ["女性角色", "男性角色", "機甲少女", "怪物擬人化", "奇幻種族(精靈/惡魔)"]
  },
  character_companion: {
    label: "合影角色",
    category: "character",
    options: ["死侍 (Deadpool)", "超人 (Superman)", "愛因斯坦 (Einstein)", "神力女超人 (Wonder Woman)", "鋼鐵人 (Iron Man)", "皮卡丘 (Pikachu)", "哥吉拉 (Godzilla)", "初音未來 (Hatsune Miku)"]
  },
  layout_focus: {
    label: "構圖重心",
    category: "visual",
    options: ["全身立繪", "半身肖像", "動態戰鬥姿勢", "背影回眸"]
  },
  grid_pose: {
    label: "九宮格動作",
    category: "action",
    options: [
      "前景手指虛化", "目光鎖定鏡頭", "單色下巴托手", "透過模糊肩帶拍攝",
      "正面特寫陰影", "斜角拍攝", "雙手置於鎖骨", "坐姿半身側面",
      "側面微距水滴", "閉眼仰頭享受", "用手遮擋陽光", "回眸一笑", "吹泡泡糖特寫",
      "正面直視鏡頭，表情平靜，眼神清澈", "凝視鏡頭，嘴角微微上揚，展現自信",
      "專注地看著鏡頭，表情柔和，眼神溫和", "側身回望，眼神溫柔，嘴角上揚",
      "轉身回眸，長髮飄逸，笑容自然", "手輕撫下巴，表情優雅，眼神柔和",
      "單手支撐下巴，表情自然，眼神專注", "利用肩帶營造景深，焦點清晰在眼睛",
      "正在吹泡泡糖，表情可愛，眼神專注", "側面微距特寫，突出面部輪廓和細節"
    ]
  },

  camera_angle: {
    label: "拍攝角度",
    category: "visual",
    options: ["臉頰和頸部特寫", "目光鎖定鏡頭", "單色下巴托手肖像", "透過模糊的肩帶拍攝", "正面特寫，面部陰影交錯", "斜角拍攝的原始人像", "雙手置於鎖骨附近的特寫", "坐姿半身側面照", "側面微距照"]
  },
  connectors: {
    label: "視覺引導",
    category: "visual",
    options: ["手繪箭頭或引導線", "虛線連接", "彩色光束", "半透明數據線"]
  },
  underwear_style: {
    label: "私密內著拆解",
    category: "item",
    options: ["成套的蕾絲內衣褲", "運動風格純棉內衣", "極簡主義絲綢內衣", "哥德風格綁帶內衣"]
  },
  clothing: {
    label: "人物服飾",
    category: "item",
    options: ["炭灰色無袖連衣裙", "白色絲綢襯衫", "黑色修身西裝", "戰術機能風外套", "復古碎花連衣裙"]
  },
  clothing_male: {
    label: "男性服飾",
    category: "item",
    options: ["剪裁合體的深藍西裝", "復古棕色皮夾克", "戰術背心與工裝褲", "寬鬆的灰色衛衣", "白色亞麻襯衫", "黑色高領毛衣"]
  },
  clothing_female: {
    label: "女性服飾",
    category: "item",
    options: ["炭灰色無袖連衣裙", "絲綢弔帶晚禮服", "機車皮衣與短裙", "白色蕾絲襯衫", "黑色緊身連體衣", "優雅的香奈兒風套裝"]
  },
  expressions: {
    label: "表情集",
    category: "character",
    options: ["瘋狂、病嬌、狂喜", "羞澀、躲閃、紅暈", "冷漠、鄙視、高傲", "痛苦、忍耐、咬唇"]
  },
  texture_zoom: {
    label: "材質特寫",
    category: "visual",
    options: ["凌亂感與私處汗漬", "皮膚上的勒痕與紅印", "絲襪的抽絲細節", "皮革的光澤與磨損"]
  },
  action_detail: {
    label: "動作細節",
    category: "action",
    options: ["帶著項圈的爬行", "雙手被縛在身後的掙扎", "跪姿並展示鞋底", "拉扯領口的誘惑"]
  },
  special_view: {
    label: "特殊視角",
    category: "visual",
    options: ["被踩在腳下的仰視視角", "從門縫中偷窺的視角", "鏡子反射的背影", "監控攝像頭的俯視視角"]
  },
  bag_content: {
    label: "隨身包袋",
    category: "item",
    options: ["日常通勤包或手拿包", "戰術腿包", "可愛的毛絨背包", "透明材質的痛包"]
  },
  cosmetics: {
    label: "美妝與護理",
    category: "item",
    options: ["常用的化妝品組合", "散落的口紅與粉餅", "便攜式補妝鏡", "香水小樣與護手霜"]
  },
  private_items: {
    label: "私密生活物件",
    category: "item",
    options: ["震動棒與項圈", "手銬與眼罩", "鞭子與蠟燭", "潤滑液與保險套"]
  },
  art_style: {
    label: "畫風",
    category: "visual",
    options: ["高質量的 2D 插畫風格", "寫實厚塗風格", "賽博龐克霓虹風格", "水彩手繪風格"]
  },
  background_style: {
    label: "背景風格",
    category: "visual",
    options: ["漫畫網格筆記本", "藍圖設計稿紙", "工業風金屬背景", "極簡純色背景"]
  },
  classic_scene: {
    label: "經典場景",
    category: "location",
    options: [
      "駭客任務",
      "神隱少女",
      "動物方城市（Zootopia）",
      "宅男行不行",
      "霍格華茲魔法學院",
      "侏羅紀公園叢林入口",
      "星際大戰塔圖因集市",
      "魔戒夏爾",
      "冰與火之歌君臨城城牆",
      "全面啟動折疊城市",
      "賽博龐克霓虹夜市",
      "未來城市空港樞紐"
    ]
  },
  position: {
    label: "文字位置",
    category: "location",
    options: ["頂部中央", "底部中央", "左上角偏中", "右上角偏中", "畫面中上方懸浮"]
  },
  render_style: {
    label: "渲染風格",
    category: "visual",
    options: [
      "Octane Render 和 Cinema 4D",
      "樂高積木風格",
      "Unreal Engine 5 寫實光追",
      "Pixar 卡通渲染",
      "黏土動畫質感",
      "手辦級實體渲染",
      "3D像素風格"
    ]
  },
  company: {
    label: "公司",
    category: "location",
    options: [
      "Apple",
      "任天堂（Nintendo）",
      "SONY",
      "宜家（IKEA）"
    ]
  },
  ratio: {
    label: "畫幅比例",
    category: "visual",
    options: [
      "3:4豎構圖",
      "9:16豎構圖",
      "1:1",
      "4:3橫構圖",
      "16:9橫構圖"
    ]
  },
  // Fashion Template additions
  fashion_deconstruct: {
    label: "穿搭解構",
    category: "item",
    options: ["整齊折疊的外套和精緻的高跟鞋", "散落的配飾與包包", "懸掛的襯衫與百褶裙", "堆疊的金屬配飾與皮帶"]
  },
  toy_companion: {
    label: "互動公仔",
    category: "item",
    options: ["Labubu藝術公仔", "暴力熊積木熊", "泡泡瑪特Molly", "復古泰迪熊", "賽博龐克機械狗"]
  },

  // Old ones preserved for compatibility or other templates
  lens_param: {
    label: "九宮格鏡頭",
    category: "visual",
    options: ["85mm, f/1.8", "85mm, f/2.0", "50mm, f/2.2", "50mm, f/2.5", "50mm, f/3.2", "35mm, f/4.5", "85mm, f/1.9", "50mm, f/1.8", "85mm, f/2.2", "50mm, f/2.0"]
  },
  lighting: {
    label: "燈光佈置",
    category: "visual",
    options: ["大型頂置柔光箱，輕微側向反射光", "自然窗光", "倫勃朗光", "賽博龐克霓虹光", "影棚硬光"]
  },
  sticker_core: {
    label: "核心貼紙",
    category: "item",
    options: ["用戶穿著甜美約會裝的照片", "復古搖滾樂隊T恤穿搭", "日系JK制服穿搭", "極簡職場通勤裝"]
  },
  sticker_decor: {
    label: "裝飾元素",
    category: "item",
    options: ["手繪愛心、閃光符號", "星星、月亮貼紙", "復古郵票與票據", "賽博故障風Glitch元素"]
  },
  action_pose: {
    label: "互動姿勢",
    category: "action",
    options: ["用手指在男人腦后比劃'兔耳朵'", "勾肩搭背比V字手勢", "互相指著對方大笑", "背靠背酷炫站姿"]
  },
  background_scene: {
    label: "背景場景",
    category: "location",
    options: ["俯瞰紐約市的復仇者大廈樓頂", "廢棄的工業倉庫", "熙熙攘攘的時代廣場", "外太空飛船內部"]
  }
};

export const INITIAL_DEFAULTS = {
  role: "遊戲與動漫概念美術設計大師",
  subject: "女性角色",
  character_companion: "死侍 (Deadpool)",
  layout_focus: "全身立繪",
  camera_angle: "臉頰和頸部特寫",
  connectors: "手繪箭頭或引導線",
  underwear_style: "成套的蕾絲內衣褲",
  clothing: "炭灰色無袖連衣裙",
  clothing_male: "剪裁合體的深藍西裝",
  clothing_female: "炭灰色無袖連衣裙",
  expressions: "瘋狂、病嬌、狂喜",
  texture_zoom: "凌亂感與私處汗漬",
  action_detail: "帶著項圈的爬行",
  special_view: "被踩在腳下的仰視視角",
  bag_content: "日常通勤包或手拿包",
  cosmetics: "常用的化妝品組合",
  private_items: "震動棒與項圈",
  art_style: "高質量的 2D 插畫風格",
  background_style: "漫畫網格筆記本",
  fashion_deconstruct: "整齊折疊的外套和精緻的高跟鞋",
  toy_companion: "Labubu藝術公仔",
  classic_scene: "駭客任務",
  render_style: "Octane Render 和 Cinema 4D",
  position: "頂部中央",
  company: "任天堂（Nintendo）",
  ratio: "3:4豎構圖",

  // Grid defaults
  grid_pose: "前景手指虛化",

  // Legacy defaults
  lens_param: "85mm, f/1.8",
  lighting: "大型頂置柔光箱，輕微側向反射光",
  sticker_core: "用戶穿著甜美約會裝的照片",
  sticker_decor: "手繪愛心、閃光符號",
  action_pose: "用手指在男人腦后比劃'兔耳朵'",
  background_scene: "俯瞰紐約市的復仇者大廈樓頂"
};
