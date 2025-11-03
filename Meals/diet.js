///التصنيفات //
(() => {
  // بيانات الفئات الرئيسية والفئات الفرعية
const categoriesData = {
    "كل الأطعمة": {
      icon: "fa-solid fa-bars",
      subcategories: [],
    },
    "الفواكه والخضروات": {
      icon: "fas fa-apple-alt",
      subcategories: [
"فواكه",
"خضراوات",
"ورقيات",
"سلطات",
"عصائر طبيعية",
"فواكة مجمدة",
"خضراوات مجمدة",
"مجففه",
      ],
    },
  "الحليب و مشتقاته": {
 icon: "fa-solid fa-cheese",
    subcategories: [
"الحليب",
"الالبان",
"الاجبان",
"لبنه",
"زبادي",
"قشطة",
"كريمة",
"حليب مكثف",
"حليب شاهي",
"منتجات اخرى",
    ],
  },
   "المخبوزات": {
      icon: "fa-solid fa-bread-slice",
      subcategories: [
"مفرود",
"صامولي و خبز برجر",
"توست",
"تورتيلا",
"فطائر",
"شابورة",
"معمول",
"مقرمشات",
"مخبوزات صحية",
      ],
    },
    "المشروبات": {
      icon: "fa-solid fa-bottle-water",
      subcategories: [
"مشروبات غازية",
"مشروبات طاقة",
"مشروبات ساخنة",
"مشروبات باردة",
"عصائر",
"اظرف سريعة التحضير"
      ],
    },
    "السكريات": {
      icon: "fa-solid fa-ice-cream",
      subcategories: [
"🍦ايسكريم",
"شوكولاتة",
"تمور",
"كيك",
"حلويات شرقية",
"مارشميلو",
"علك",
"سكر",
      ],
    },
    "موالح": {
  icon: "fa-solid fa-cookie-bite",
      subcategories: [
"🍿شبسات",
 "فصفص",
 "مكسرات",
      ],
    },
 "المعلبات": {
   icon: "bx bx-box",
   subcategories: [
"حلاوة طحينية",
"المربى",
"الفول السوداني",
"فواكة معلبة",
"خضروات معلبة",
"اسماك معلبة",
"صلصات معلبة",
   ],
 },
    "اللحوم والبيض": {
      icon: "fas fa-drumstick-bite",
      subcategories: [
"بيض🥚",
"لحم غنم🐑",
"دواجن🐓",
"بحريات🐟",
"لحم بقري🐄",
"لحم جمل🐪",
      ],
    },
    "الحبوب والبذور": {
      icon: "fas fa-seedling",
      subcategories: [
"حبوب كاملة",
"رز🍚",
"مكرونة🍝",
"شعبيات",
"شوربات",
"كورن فليكس",
"طحين",
"بذور",
      ],
    },
    "الزيوت و الدهون ": {
      icon: "fas fa-oil-can",
      subcategories: [
"زيوت صحية",
"زيوت",
"زبدة",
"صلصات",
      ],
    },
    "مطاعم عالميه": {
      icon: "fa-solid fa-shop",
      subcategories: [
"ماكدونالدز🍔",
"🍗كنتاكي",
"🍗هارديز",
"🥪كودو",
"دومينوز🍕",
      ],
    },
    "وجباتي": {
    icon: "bx bx-dish",
      subcategories: [],
    },
  };

  // بيانات الأطعمة (جزئية للاختصار، أضف الكل حسب الحاجة)
const foodsData = [
{
  id: "apple",
  name: "تفاحة بالقشرة",
  image: "https://up6.cc/2025/05/174783082398482.jpeg",
  calories: 52,
  fat: 0.17,
  protein: 0.26,
  carb: 13.81,
  category: "الفواكه والخضروات",
subcategory: "فواكه",
},
  {
    id: "pineapple",
    name: "اناناس طازج",
    image: "https://up6.cc/2025/05/174783082393011.jpeg",
    calories: 50,
    fat: 0.1,
    protein: 0.5,
    carb: 13.1,
    category: "الفواكه والخضروات",
    subcategory: "فواكه",
  },
{
  id: "banana",
  name: "موز طازج بدون قشر",
  image: "https://up6.cc/2025/05/174783082400193.jpeg",
  calories: 97,
  fat: 0.28,
  protein: 0.74,
  carb: 22,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "strawberry",
  name: "فراولة طازجة",
  image: "https://up6.cc/2025/05/174792824371891.jpeg",
  calories: 16,
  fat: 0.15,
  protein: 0.3,
  carb: 3.8,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "orange",
  name: "برتقال طازج",
  image: "https://up6.cc/2025/05/174792824373072.jpeg",
  calories: 47,
  fat: 0.1,
  protein: 0.9,
  carb: 11.8,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "avocado",
  name: "أفوكادو طازج",
  image: "https://up6.cc/2025/05/174792824375933.jpeg",
  calories: 160,
  fat: 14.7,
  protein: 2.0,
  carb: 8.5,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "coconut",
  name: "جوز الهند طازج",
  image: "https://up6.cc/2025/05/174792824377614.jpeg",
  calories: 354,
  fat: 33.5,
  protein: 3.3,
  carb: 15.2,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
 {
   id: "grapes",
   name: "عنب اخضر طازج",
   image: "https://up6.cc/2025/05/174792824378835.jpeg",
   calories: 69,
   fat: 0.2,
   protein: 0.72,
   carb: 18,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
{
  id: "grapes",
  name: "عنب احمر طازج",
  image: "https://up6.cc/2025/05/174801415608651.jpeg",
  calories: 65,
  fat: 0.1,
  protein: 0.72,
  carb: 18,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
 {
   id: "pomegranate",
   name: "رمان",
   image: "https://up6.cc/2025/05/174792950844921.jpeg",
   calories: 83,
   fat: 1.2,
   protein: 1.67,
   carb: 18.7,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "kiwi",
   name: "كيوي",
   image: "https://up6.cc/2025/05/174792950848862.jpeg",
   calories: 61,
   fat: 0.5,
   protein: 1.1,
   carb: 14.7,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "mango",
   name: "مانجو",
   image: "https://up6.cc/2025/05/174792950850813.jpeg",
   calories: 60,
   fat: 0.4,
   protein: 0.8,
   carb: 15,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "fig",
   name: "تين",
   image: "https://up6.cc/2025/05/174792950852344.jpeg",
   calories: 74,
   fat: 0.3,
   protein: 0.8,
   carb: 19.2,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "pear",
   name: "كمثرى",
   image: "https://up6.cc/2025/05/174792950853545.jpeg",
   calories: 57,
   fat: 0.1,
   protein: 0.4,
   carb: 15.2,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "blueberry",
   name: "توت أزرق",
   image: "https://up6.cc/2025/05/174800684878421.jpeg",
   calories: 57,
   fat: 0.3,
   protein: 0.7,
   carb: 14.5,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "peach",
   name: "خوخ",
   image: "https://up6.cc/2025/05/174800684879632.jpeg",
   calories: 39,
   fat: 0.3,
   protein: 0.9,
   carb: 9.5,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "guava",
   name: "جوافة",
   image: "https://up6.cc/2025/05/174800684880743.jpeg",
   calories: 68,
   fat: 0.3,
   protein: 2.6,
   carb: 14.3,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "watermelon",
   name: "بطيخ أحمر",
   image: "https://up6.cc/2025/05/174800684882134.jpeg",
   calories: 30,
   fat: 0.2,
   protein: 0.6,
   carb: 7.6,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "melon",
   name: "شمام كنتالوبي طازج",
   image: "https://up6.cc/2025/05/174800684883455.jpeg",
   calories: 34,
   fat: 0.2,
   protein: 0.8,
   carb: 8.2,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
{
  id: "melon",
  name: "شمام الكناري طازج",
  image: "https://up6.cc/2025/05/174801164254961.jpeg",
  calories: 60,
  fat: 0.3,
  protein: 0.6,
  carb: 9.1,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "melon",
  name: "شمام كوز العسل طازج",
  image: "https://up6.cc/2025/05/17480071791951.jpeg",
  calories: 36,
  fat: 0.1,
  protein: 0.6,
  carb: 9.1,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
 {
   id: "grapefruit_red",
   name: "غريب فروت أحمر طازج",
   image: "https://up6.cc/2025/05/174801164259183.jpeg",
   calories: 42,
   fat: 0.1,
   protein: 0.8,
   carb: 10.3,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "grapefruit_yellow",
   name: "غريب فروت أصفر طازج",
   image: "https://up6.cc/2025/05/174801193656381.jpeg",
   calories: 33,
   fat: 0.1,
   protein: 0.6,
   carb: 8.4,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "tangerine",
   name: "يوسفي طازج",
   image: "https://up6.cc/2025/05/174801164257572.jpeg",
   calories: 53,
   fat: 0.3,
   protein: 0.8,
   carb: 13.3,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "olive_black",
   name: "زيتون أسود طازج",
   image: "https://up6.cc/2025/05/174801164260234.jpeg",
   calories: 116,
   fat: 10.9,
   protein: 0.8,
   carb: 6.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "olive_green",
   name: "زيتون أخضر مخلل",
   image: "https://up6.cc/2025/05/174801193660722.jpeg",
   calories: 145,
   fat: 15.3,
   protein: 1.0,
   carb: 3.8,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "cherry_sour",
   name: "كرز حامض طازج",
   image: "https://up6.cc/2025/05/174801193662273.jpeg",
   calories: 50,
   fat: 0.3,
   protein: 1.0,
   carb: 12.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "cherry_sweet",
   name: "كرز حلو طازج",
   image: "https://up6.cc/2025/05/174801164261235.jpeg",
   calories: 63,
   fat: 0.2,
   protein: 1.1,
   carb: 16.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "apricot",
   name: "مشمش طازج",
   image: "https://up6.cc/2025/05/174801193664734.jpeg",
   calories: 48,
   fat: 0.4,
   protein: 1.0,
   carb: 12.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
///خضراوات///
{
id: "carrot",
name: "جزر",
image:"https://up6.cc/2025/07/175146494820751.jpeg",
calories: 41,
fat: 0.2,
protein: 0.9,
carb: 10,
category: "الفواكه والخضروات",
subcategory: "خضراوات",
      },
{
  id: "cucumber",
  name: "خيار",
  image: "https://up6.cc/2025/07/175146494821792.jpeg",
  calories: 16,
  fat: 0.1,
  protein: 0.7,
  carb: 3.6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "potato_white",
  name: "بطاطا",
  image: "https://up6.cc/2025/07/175146494823083.jpeg",
  calories: 77,
  fat: 0.1,
  protein: 2,
  carb: 17,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "sweet_potato",
  name: "بطاطا حلوة",
  image: "https://up6.cc/2025/07/175146494824614.jpeg",
  calories: 86,
  fat: 0.1,
  protein: 1.6,
  carb: 20,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "turnip",
  name: "لفت",
  image: "https://up6.cc/2025/07/175146494826515.jpeg",
  calories: 28,
  fat: 0.1,
  protein: 0.9,
  carb: 6.4,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "eggplant_purple",
  name: "باذنجان بنفسجي",
  image: "https://up6.cc/2025/07/175146497024491.jpeg",
  calories: 25,
  fat: 0.2,
  protein: 1,
  carb: 6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "eggplant_white",
  name: "باذنجان أبيض",
  image: "https://up6.cc/2025/07/175146497026982.jpeg",
  calories: 24,
  fat: 0.2,
  protein: 1,
  carb: 5.7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "bell_pepper_red",
  name: "فلفل أحمر حلو",
  image: "https://up6.cc/2025/07/175146497029663.jpeg",
  calories: 26,
  fat: 0.3,
  protein: 1,
  carb: 6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "bell_pepper_yellow",
  name: "فلفل أصفر حلو",
  image: "https://up6.cc/2025/07/175146497032124.jpeg",
  calories: 27,
  fat: 0.2,
  protein: 1,
  carb: 6.3,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "bell_pepper_green",
  name: "فلفل أخضر حلو",
  image: "https://up6.cc/2025/07/175146497033595.jpeg",
  calories: 20,
  fat: 0.2,
  protein: 0.9,
  carb: 4.6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "chili_pepper",
  name: "فلفل احمر حار",
  image: "https://up6.cc/2025/07/17514649198651.jpeg",
  calories: 40,
  fat: 0.4,
  protein: 1.9,
  carb: 8.8,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "chili_pepper",
  name: "فلفل اخضر حار",
  image: "https://up6.cc/2025/07/17514649198892.jpeg",
  calories: 40,
  fat: 0.2,
  protein: 2,
  carb: 9.5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "pumpkin",
  name: "قرع عسلي",
  image: "https://up6.cc/2025/07/175146491989913.jpeg",
  calories: 26,
  fat: 0.1,
  protein: 1,
  carb: 6.5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "pumpkin",
  name: "قرع جوزي امريكي",
  image: "https://up6.cc/2025/07/175146491991814.jpeg",
  calories: 44,
  fat: 0.1,
  protein: 1,
  carb: 11.7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "zucchini",
  name: "كوسا",
  image: "https://up6.cc/2025/07/175146491993635.jpeg",
  calories: 17,
  fat: 0.3,
  protein: 1.2,
  carb: 3.1,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "zucchini",
  name: "كوسا مسلوق",
  image: "https://up6.cc/2025/07/175146491993635.jpeg",
  calories: 15,
  fat: 0.4,
  protein: 1.1,
  carb: 2.7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "green_beans",
  name: "فاصوليا خضراء",
  image: "https://g.top4top.io/p_348771kbp0.jpeg",
  calories: 31,
  fat: 0.2,
  protein: 1.8,
  carb: 7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "green_beans",
  name: "فاصوليا خضراء مسلوقة",
  image: "https://g.top4top.io/p_348771kbp0.jpeg",
  calories: 35,
  fat: 0.3,
  protein: 1.9,
  carb: 7.9,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "peas",
  name: "بازلاء",
  image: "https://h.top4top.io/p_3487b27mq1.jpeg",
  calories: 81,
  fat: 0.4,
  protein: 5.4,
  carb: 14,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "okra",
  name: "بامية",
  image: "https://i.top4top.io/p_3487jvtib2.jpeg",
  calories: 33,
  fat: 0.2,
  protein: 1.9,
  carb: 7.5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "cauliflower",
  name: "قرنبيط(زهره)",
  image: "https://j.top4top.io/p_34872w5kc3.jpeg",
  calories: 25,
  fat: 0.3,
  protein: 1.9,
  carb: 5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "broccoli",
  name: "بروكلي",
  image: "https://k.top4top.io/p_3487ts27q4.jpeg",
  calories: 34,
  fat: 0.4,
  protein: 2.8,
  carb: 6.6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "onion",
  name: "بصل",
  image: "https://l.top4top.io/p_3487wfnmd5.jpeg",
  calories: 40,
  fat: 0.1,
  protein: 1.1,
  carb: 9.3,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "garlic",
  name: "ثوم",
  image: "https://a.top4top.io/p_3487xjjfy6.jpeg",
  calories: 149,
  fat: 0.5,
  protein: 6.4,
  carb: 33,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "tomato",
  name: "طماطم",
  image: "https://b.top4top.io/p_34870vls97.jpeg",
  calories: 18,
  fat: 0.2,
  protein: 0.9,
  carb: 3.9,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "cherry_tomato",
  name: "طماطم كرزية",
  image: "https://c.top4top.io/p_3487syknk8.jpeg",
  calories: 18,
  fat: 0.2,
  protein: 0.9,
  carb: 3.9,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "beetroot",
  name: "شمندر",
  image: "https://d.top4top.io/p_3487hski09.jpeg",
  calories: 43,
  fat: 0.2,
  protein: 1.6,
  carb: 10,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "radish",
  name: "فجل",
  image: "https://b.top4top.io/p_3487qen1p0.jpeg",
  calories: 16,
  fat: 0.1,
  protein: 0.7,
  carb: 3.4,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "ginger",
  name: "زنجبيل",
  image: "https://c.top4top.io/p_3487vmvqo1.jpeg",
  calories: 80,
  fat: 0.8,
  protein: 1.8,
  carb: 18,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
///ورقيات 
{
  id: "lettuce",
  name: "خس طازج",
  image: "https://up6.cc/2025/06/174897789224961.jpeg",
  calories: 17,
  fat: 0.3,
  protein: 1.2,
  carb: 3.3,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "arugula",
  name: "جرجير طازج",
  image: "https://up6.cc/2025/06/174897847946561.jpeg",
  calories: 25,
  fat: 0.7,
  protein: 2.6,
  carb: 3.7,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "coriander",
  name: "كزبرة طازجة",
  image: "https://up6.cc/2025/06/174897830260255.jpeg",
  calories: 23,
  fat: 0.5,
  protein: 2.1,
  carb: 3.7,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "كراث طازج",
  image: "https://up6.cc/2025/06/174897789229772.jpeg",
  calories: 61,
  fat: 0.3,
  protein: 1.5,
  carb: 14.2,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "mint",
  name: "نعناع بلدي طازج",
  image: "https://up6.cc/2025/06/174897789231693.jpeg",
  calories: 44,
  fat: 0.7,
  protein: 3.3,
  carb: 8.4,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "parsley",
  name: "بقدونس طازج",
  image: "https://up6.cc/2025/06/174897873817371.jpeg",
  calories: 36,
  fat: 0.8,
  protein: 3,
  carb: 6.3,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "سبانخ طازج",
  image: "https://up6.cc/2025/06/174897860095931.jpeg",
  calories: 23,
  fat: 0.3,
  protein: 3,
  carb: 3.8,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "ريحان طازج",
  image: "https://up6.cc/2025/06/174897830258332.jpeg",
  calories: 23,
  fat: 0.6,
  protein: 3.2,
  carb: 2.6,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "green_onion",
  name: "بصل أخضر طازج",
  image: "https://up6.cc/2025/06/174897887383661.jpeg",
  calories: 32,
  fat: 0.2,
  protein: 1.8,
  carb: 7.3,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "ملفوف اخضر",
  image: "https://up6.cc/2025/06/174897789232734.jpeg",
  calories: 25,
  fat: 0.1,
  protein: 1.3,
  carb: 5.8,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "ملفوف احمر",
  image: "https://up6.cc/2025/06/174897789234175.jpeg",
  calories: 31,
  fat: 0.2,
  protein: 1.4,
  carb: 7.4,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
//سلطات
 {
   id: "sultat fawaaka",
   name: "سلطة فواكة جاهزة",
   image: "https://up6.cc/2025/08/175858500690121.png",
   calories: 204,
   fat: 0.6,
   protein: 2,
   carb: 50.6,
   category: "الفواكه والخضروات",
   subcategory: "سلطات",
 },
//عصائر طبيعيه
//فواكة مجمده
//خضراوات مجمده
//مجففه
  {
    id: "dried_figs",
    name: "تين مجفف",
    image: "https://example.com/dried_figs.jpg",
    calories: 249,
    fat: 0.9,
    protein: 3.3,
    carb: 64,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_apricots",
    name: "مشمش مجفف",
    image: "https://example.com/dried_apricots.jpg",
    calories: 241,
    fat: 0.5,
    protein: 3.4,
    carb: 63,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "raisins",
    name: "زبيب",
    image: "https://example.com/raisins.jpg",
    calories: 299,
    fat: 0.5,
    protein: 3.1,
    carb: 79,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_prunes",
    name: "برقوق مجفف (قراصيا)",
    image: "https://example.com/dried_prunes.jpg",
    calories: 240,
    fat: 0.4,
    protein: 2.2,
    carb: 64,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_mango",
    name: "مانجو مجفف",
    image: "https://example.com/dried_mango.jpg",
    calories: 319,
    fat: 1.2,
    protein: 2.5,
    carb: 78,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_pineapple",
    name: "أناناس مجفف",
    image: "https://example.com/dried_pineapple.jpg",
    calories: 245,
    fat: 0.6,
    protein: 1.6,
    carb: 63,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_cranberries",
    name: "توت بري مجفف",
    image: "https://example.com/dried_cranberries.jpg",
    calories: 308,
    fat: 1.4,
    protein: 0.2,
    carb: 82,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_banana",
    name: "موز مجفف",
    image: "https://example.com/dried_banana.jpg",
    calories: 346,
    fat: 1.8,
    protein: 3.9,
    carb: 88,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_papaya",
    name: "بابايا مجففة",
    image: "https://example.com/dried_papaya.jpg",
    calories: 325,
    fat: 0.6,
    protein: 3.2,
    carb: 81,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_peaches",
    name: "خوخ مجفف",
    image: "https://example.com/dried_peaches.jpg",
    calories: 239,
    fat: 0.8,
    protein: 3.2,
    carb: 62,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_pears",
    name: "كمثرى مجففة",
    image: "https://example.com/dried_pears.jpg",
    calories: 262,
    fat: 0.6,
    protein: 1.9,
    carb: 70,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_apples",
    name: "تفاح مجفف",
    image: "https://example.com/dried_apples.jpg",
    calories: 243,
    fat: 0.3,
    protein: 0.9,
    carb: 66,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_cherries",
    name: "كرز مجفف",
    image: "https://example.com/dried_cherries.jpg",
    calories: 333,
    fat: 0.7,
    protein: 2.1,
    carb: 80,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_blueberries",
    name: "توت أزرق مجفف",
    image: "https://example.com/dried_blueberries.jpg",
    calories: 317,
    fat: 2.5,
    protein: 2.5,
    carb: 77,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_guava",
    name: "جوافة مجففة",
    image: "https://example.com/dried_guava.jpg",
    calories: 250,
    fat: 1.2,
    protein: 4.2,
    carb: 58,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_starfruit",
    name: "كارامبولا مجففة (فاكهة النجمة)",
    image: "https://example.com/dried_starfruit.jpg",
    calories: 320,
    fat: 0.8,
    protein: 3.1,
    carb: 78,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_kiwi",
    name: "كيوي مجفف",
    image: "https://example.com/dried_kiwi.jpg",
    calories: 285,
    fat: 1.1,
    protein: 3.2,
    carb: 69,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_melon",
    name: "شمام مجفف",
    image: "https://example.com/dried_melon.jpg",
    calories: 341,
    fat: 0.9,
    protein: 4.7,
    carb: 83,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_coconut",
    name: "جوز الهند المجفف",
    image: "https://example.com/dried_coconut.jpg",
    calories: 660,
    fat: 64.5,
    protein: 6.9,
    carb: 23.7,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
//الحليب و مشتقاته/الحليب
{
  id:"alsueudia_fresh_milk_Fll_fat",
  name: "حليب السعودية طازج كامل الدسم",
  image: "https://up6.cc/2025/08/175758292115691.png",
  calories: 60,
  fat: 3,
  protein: 3,
  carb: 5,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب"
},
{
  id: "almraay_hlyb_brwtyn_khaly_mn_allaktwz",
  name: "المراعي حليب بروتين خالي من اللاكتوز ( 400ml)",
  image: "https://up6.cc/2025/10/175985647275631.jpeg",
  calories: 44.5,
  fat: 1.25,
  protein: 4.8,
  carb: 3.2,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},

{
  id: "almraay_hlyb_aaly_albrwtyn_bnkhh_alqhwh",
  name: "المراعي حليب عالي البروتين بنكهة القهوة (400ml)",
  image: "https://up6.cc/2025/10/175985647276622.jpeg",
  calories: 77,
  fat: 0.25,
  protein: 8.5,
  carb: 10,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "almraay_hlyb_aaly_albrwtyn_bnkhh_alshwkwlath",
  name: "المراعي حليب عالي البروتين بنكهة الشوكولاتة(400ml)",
  image: "https://up6.cc/2025/10/175985647277573.jpeg",
  calories: 82.5,
  fat: 0.4,
  protein: 8.5,
  carb: 11,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "almraay_hlyb_aaly_albrwtyn_bnkhh_alfanyla",
  name: "المراعي حليب عالي البروتين بنكهة الفانيلا ( 400 ml )",
  image: "https://up6.cc/2025/10/175985647279394.jpeg",
  calories: 76,
  fat: 0.25,
  protein: 8.5,
  carb: 10,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id:"almraay_hlyb_aaly_albrwtyn_bnkhh_alfrwalh_walmwz",
  name: "المراعي حليب عالي البروتين بنكهة الفروالة والموز",
  image: "https://up6.cc/2025/10/175985647280355.jpeg",
  calories: 75.5,
  fat: 0.3,
  protein: 8.5,
  carb: 9.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "nadk_hlyb_tazj_qlyl_aldsm",
  name: "نادك حليب طازج قليل الدسم (200ml)",
  image: "https://up6.cc/2025/10/175985659981991.jpeg",
  calories: 40,
  fat: 1,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id:"nadk_hlyb_tazj_kaml_aldsm",
  name: "نادك حليب طازج كامل الدسم(200ml)",
  image: "https://up6.cc/2025/10/175985659985862.jpeg",
  calories: 58,
  fat: 3,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
id: "almraay_hlyb_tazj_qlyl_aldsm",
  name: "المراعي حليب طازج قليل الدسم(250)",
  image: "https://up6.cc/2025/10/175985659988413.jpeg",
  calories: 42.8,
  fat: 1.08,
  protein: 3.12,
  carb: 4.88,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "almraay_hlyb_tazj_kaml_aldsm",
  name: "المراعي حليب طازج كامل الدسم (180ml)",
  image: "https://up6.cc/2025/10/175985659990754.jpeg",
  calories: 61.1,
  fat: 3.16,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "alsawdyh_hlyb_qlyl_aldsm",
  name: "السعودية حليب قليل الدسم(200ml)",
  image: "https://up6.cc/2025/10/17598565999275.jpeg",
  calories: 45,
  fat: 1.3,
  protein: 3,
  carb: 5,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
//اللالبان
{
  id: "nadk_lbn_tazj_qlyl_aldsm",
  name: "نادك لبن طازج قليل الدسم (180ml)",
  image: "https://up6.cc/2025/10/175985673595911.jpeg",
  calories: 40,
  fat: 1,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الالبان",
},
{
  id: "nadk_lbn_tazj_kaml_aldsm",
  name: "نادك لبن طازج كامل الدسم (180ml)",
  image: "https://up6.cc/2025/10/175985673598992.jpeg",
  calories: 58,
  fat: 3,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الالبان",
},
// لبنه
{
    id: "labneh",
    name: "لبنة",
    image: "https://example.com/labneh.jpg",
    calories: 135,
    fat: 10,
    protein: 6,
    carb: 4,
    category: "الحليب و مشتقاته",
    subcategory: "لبنه"
  },
// الأجبان
  {
    id: "Almarai-cheese",
    name:"جبنة المراعي طعم كريمة ",
    image: "https://up6.cc/2025/06/175062643955771.jpeg",
    calories: 343.3,
    fat: 33.3,
    protein: 5.3,
    carb: 3.3,
    category: "الحليب و مشتقاته",
    subcategory: "الاجبان"
  },
 {
   id: "Cheese-Puck",
   name: "جبن طعم كريمة بوك ",
   image: "https://up6.cc/2025/06/175062643957382.jpeg",
   calories: 323,
   fat: 31,
   protein: 8.7,
   carb: 1.9,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
  {
   id: "cheese-Nadec",
   name: "جبن بطعم الشيدر نادك",
   image: "https://up6.cc/2025/06/175062643959344.jpeg",
   calories: 317,
   fat: 30,
   protein: 8,
   carb: 3.7,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
  {
   id: "cheese-Nadec",
   name: "جبنة بطعم الكريمة (نادك",
   image: "https://up6.cc/2025/06/175062643958393.jpeg",
   calories: 314,
   fat: 30,
   protein: 7,
   carb: 4,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
  {
   id: "Triangle-cheese",
   name: "جبنة مثلثات(نادك",
   image: "https://up6.cc/2025/06/175062643960275.jpeg",
   calories: 279,
   fat: 24,
   protein: 10.4,
   carb: 5.4,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
 {
  id: "Almarai-cheese",
  name: "جبنة المربعات بالقشطة من المراعي",
  image: "https://up6.cc/2025/06/175062732565111.jpeg",
  calories: 92.6,
  fat: 9.2,
  protein: 1.8,
  carb: 0.92,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Almarai-cheese-slices",
  name: "جبنة شرائح البرجر من المراعي",
  image: "https://up6.cc/2025/06/175062732569012.jpeg",
  calories: 270,
  fat: 25,
  protein: 15,
  carb: 5,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Nadec-cheese-slices",
  name: "جبنة شرائح برجر من نادك",
  image: "https://up6.cc/2025/06/175062732570593.jpeg",
  calories: 282,
  fat: 22,
  protein: 14,
  carb: 7,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Almarai-Mozzarella-cheese",
  name: "جبنة الموزاريلا المبشورة كاملة الدسم من المراعي",
  image: "https://up6.cc/2025/06/175062739669421.jpeg",
  calories: 290,
  fat: 23.3,
  protein: 23.3,
  carb: 0,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Nadec-Mozzarella-cheese",
  name: "جبنة الموزاريلا المبشورة كاملة الدسم من نادك",
  image: "https://up6.cc/2025/06/175062739673162.jpeg",
  calories: 325,
  fat: 25,
  protein: 15,
  carb: 10,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
//المخبوزات
{
  id: "jona-white-samoli",
  name: "خبز صامولي ابيض -جونا",
  image: "https://l.top4top.io/p_3490pfr305.png",
  calories: 273,
  fat: 1,
  protein: 9,
  carb: 56,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-white-sandwich",
  name: "خبز ساندويتش ابيض - لوزين",
  image: "https://a.top4top.io/p_3490dbh106.png",
  calories: 272,
  fat: 4,
  protein: 8,
  carb: 50,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-milk-sandwich",
  name: "خبز ساندويتش بالحليب - لوزين",
  image: "https://b.top4top.io/p_34905pqo87.png",
  calories: 294,
  fat: 6,
  protein: 10,
  carb: 48,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-brown-sandwich",
  name: "خبز ساندويش بر - لوزين",
  image: "https://c.top4top.io/p_3490xoic38.png",
  calories: 272,
  fat: 4,
  protein: 10,
  carb: 48,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "harvey-white",
  name: "خبز ابيض - هرفي",
  image: "https://d.top4top.io/p_3490qu6yd9.png",
  calories: 268,
  fat: 4,
  protein: 8,
  carb: 51,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "al-mithali-white-samoli",
  name: "خبز صامولي ابيض - المثالي",
  image: "https://f.top4top.io/p_3490ocepd0.png",
  calories: 306.6,
  fat: 7.2,
  protein: 12,
  carb: 48,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "al-najah-jumbo-sesame",
  name: "خبز جامبو بالسمسم - مخابز النجاح",
  image: "https://g.top4top.io/p_3490fejam1.png",
  calories: 292,
  fat: 5,
  protein: 10,
  carb: 51,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-brioche-burger",
  name: "خبز برجر بريوش - لوزين",
  image: "https://h.top4top.io/p_3490tc6262.png",
  calories: 320.8,
  fat: 8.9,
  protein: 10.4,
  carb: 47.7,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-sesame-burger",
  name: "خبز برجر بالسمسم - لوزين",
  image: "https://i.top4top.io/p_3490q2fj73.png",
  calories: 280.5,
  fat: 3,
  protein: 12,
  carb: 49.2,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "fushia-sesame-burger",
  name: "خبز برجر بالسمسم - فوشية",
  image: "https://j.top4top.io/p_34902mekm4.png",
  calories: 310.6,
  fat: 7.9,
  protein: 11,
  carb: 48.4,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "al-najah-brown-flat",
  name: "خبز مفرود بر النجاح",
  image: "https://h.top4top.io/p_3490cfky91.png",
  calories: 253,
  fat: 1.2,
  protein: 8.5,
  carb: 52,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "al-najah-flat",
  name: "خبز مفرود النجاح",
  image: "https://g.top4top.io/p_34902ng9j0.png",
  calories: 266,
  fat: 1,
  protein: 8.5,
  carb: 55.8,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "yumi-flat",
  name: "خبز مفرود من يومي",
  image: "https://i.top4top.io/p_3490n436p2.png",
  calories: 291.6,
  fat: 0,
  protein: 11.1,
  carb: 63.8,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "chocies-flat",
  name: "خبز مفرود شوكيز",
  image: "https://j.top4top.io/p_3490lz97p3.png",
  calories: 252.3,
  fat: 1,
  protein: 8.4,
  carb: 18.4,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "jona-flat",
  name: "خبز مفرود جونا",
  image: "https://k.top4top.io/p_3490wot6r4.png",
  calories: 294,
  fat: 1,
  protein: 10,
  carb: 63,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "luzain-milk",
  name: "خبز بالحليب شريحة(30g) - لوزين",
  image: "https://k.top4top.io/p_3490zmh0m5.png",
  calories: 280,
  fat: 6.6,
  protein: 10,
  carb: 46.6,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-white",
  name: "خبز ابيض شريحة(30g)- لوزين",
  image: "https://l.top4top.io/p_349050mwf6.png",
  calories: 263.3,
  fat: 3.3,
  protein: 10,
  carb: 50,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-grain",
  name: "خبز بالحبوب شريحة(30g)- لوزين",
  image: "https://a.top4top.io/p_3490i0ump7.png",
  calories: 276.6,
  fat: 6.6,
  protein: 10,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-bran",
  name: "خبز بالنخالة شريحة(31g)- لوزين",
  image: "https://b.top4top.io/p_3490hm5nn8.png",
  calories: 256.6,
  fat: 4,
  protein: 10,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-brown",
  name: "خبز بر شريحة(30g)- لوزين",
  image: "https://c.top4top.io/p_3490qyh0h9.png",
  calories: 256.6,
  fat: 3.3,
  protein: 10,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "yumi-white",
  name: "خبز ابيض - يومي",
  image: "https://a.top4top.io/p_3490edjds0.png",
  calories: 253.3,
  fat: 3.3,
  protein: 9.6,
  carb: 44,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "yumi-brown",
  name: "خبز بر - يومي",
  image: "https://b.top4top.io/p_3490ey74u1.png",
  calories: 266.6,
  fat: 1.3,
  protein: 9.6,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "fushia-white",
  name: "خبز ابيض - فوشية",
  image: "https://c.top4top.io/p_3490k2j4u2.png",
  calories: 272.4,
  fat: 3.4,
  protein: 8.9,
  carb: 51,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "fushia-brown",
  name: "خبز بر - قوشية",
  image: "https://d.top4top.io/p_3490fe3fz3.png",
  calories: 241.3,
  fat: 2.7,
  protein: 8.6,
  carb: 45.5,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "fushia-milk",
  name: "خبز بالحليب - قوشية",
  image: "https://e.top4top.io/p_34901rno44.png",
  calories: 276.6,
  fat: 3.63,
  protein: 9.3,
  carb: 51.2,
  category: "المخبوزات",
  subcategory: "توست",
},
//فطائر //
{
  id:"lwzyn_tsbyrh_sandwtsh_jbnh_alkrym",
  name: "لوزين تصبيره ساندوتش جبنة الكريم",
  image: "https://up6.cc/2025/08/175445911724162.png",
  calories: 296,
  fat: 13.3,
  protein: 9.7,
  carb: 33.7,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
id: "sfn_dayz_krwasan_alshwkwlath",
  name: "سفن دايز كرواسان الشوكولاته 55 جم",
  image: "https://up6.cc/2025/08/175866617942181.png",
  calories: 467.2,
  fat: 27.2,
  protein: 7.2,
  carb: 45.4,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
id:"lwzyn_tsbyrh_ftyrh_alshwkwlath",
  name: "لوزين تصبيرة فطيرة الشوكولاته 70 جم",
  image: "https://up6.cc/2025/08/175866617951083.png",
  calories: 375.7,
  fat: 17.14,
  protein: 10,
  carb: 45.7,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_tsbyrh_ftyrh_aljbnh",
  name: "لوزين تصبيرة فطيرة الجبنة 70 جم",
  image: "https://up6.cc/2025/08/175866617947892.png",
  calories: 378.5,
  fat: 41.4,
  protein: 10,
  carb: 35.7,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_krwasan_aljbnh_walzatr",
  name: "لوزين كرواسان الجبنة والزعتر 60 جم",
  image: "https://up6.cc/2025/08/17586661795424.png",
  calories: 408.3,
  fat: 21.6,
  protein: 11.6,
  carb: 41.6,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_tsbyrh_bkrymh_albskwyt",
  name: "لوزين تصبيرة بكريمة البسكويت 83 جم",
  image: "https://up6.cc/2025/08/175866617955615.png",
  calories: 503.6,
  fat: 32.5,
  protein: 9.6,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_tsbyrh_ftyrh_altfah",
  name: "لوزين تصبيرة فطيرة التفاح 70 جم",
  image: "https://up6.cc/2025/08/17586662486551.png",
  calories: 341.4,
  fat: 12.8,
  protein: 8.5,
  carb: 47.1,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "sfn_dayz_bhshwh_albndq_w_alkakaw",
  name: "سفن دايز بحشوة البندق و الكاكاو",
  image: "https://up6.cc/2025/08/175926547781441.png",
  calories: 486,
  fat: 31,
  protein: 8,
  carb: 43,
  category: "المخبوزات",
  subcategory: "فطائر",
},
//السكريات-ايسكريم
{
  id: "alaml_ayskrym_manjw",
  name: "الأمل ايسكريم مانجو",
  image: "https://up6.cc/2025/10/176018493623183.jpeg",
  calories: 130,
  fat: 2.8,
  protein: 1.8,
  carb: 25,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-cherry-vanilla-icecream",
  name: "كواليتي ايسكريم فروتي الكرز بالفانيليا",
  image: "https://f.top4top.io/p_34923p8980.png",
  calories: 163.3,
  fat: 4.3,
  protein: 3.3,
  carb: 30,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-red-berry-icecream",
  name: "كواليتي ايسكريم فروتي التوت الأحمر",
  image: "https://g.top4top.io/p_3492tbz381.png",
  calories: 93.3,
  fat: 0,
  protein: 0,
  carb: 23.3,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-mango-icecream",
  name: "كواليتي ايسكريم فروتي مانجو",
  image: "https://h.top4top.io/p_3492oddhy2.png",
  calories: 143.3,
  fat: 2.5,
  protein: 5,
  carb: 23.3,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-milky-berry-icecream",
  name: "كواليتي ايسكريم مثلوج حليبي التوت",
  image: "https://i.top4top.io/p_3492bz1kr3.png",
  calories: 153.3,
  fat: 4.1,
  protein: 3.3,
  carb: 20,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-choco-bar",
  name: "كواليتي ايسكريم شوكو بار",
  image: "https://j.top4top.io/p_3492ov8wj4.png",
  calories: 263,
  fat: 16.9,
  protein: 6.1,
  carb: 21.5,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-vanilla-sandwich",
  name: "السعودية ايسكريم ساندويش بالفانيليا",
  image: "https://k.top4top.io/p_34923d5sm5.png",
  calories: 130,
  fat: 3,
  protein: 2,
  carb: 24,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-vanilla-biscuit",
  name: "السعودية بابو ايسكريم بسكويت الفانيلا",
  image: "https://l.top4top.io/p_3492zsqsp6.png",
  calories: 136.3,
  fat: 6.3,
  protein: 1.8,
  carb: 19,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-choco-biscuit",
  name: "السعودية بابو ايسكريم بسكويت شوكولاته",
  image: "https://a.top4top.io/p_34929w2tl7.png",
  calories: 136.3,
  fat: 6.3,
  protein: 1.8,
  carb: 19,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-strawberry-biscuit",
  name: "السعودية ايسكريم بسكويت فراولة",
  image: "https://b.top4top.io/p_3492j688e8.png",
  calories: 136.6,
  fat: 6.3,
  protein: 1.8,
  carb: 19,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-cappuccino-biscuit",
  name: "السعودية ايسكريم بسكويت كابتشينو",
  image: "https://c.top4top.io/p_3492h1hlj9.png",
  calories: 145.2,
  fat: 6,
  protein: 1.7,
  carb: 20.8,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-feast-chocolate",
  name: "السعودية فيست  ايسكريم شوكولاتة",
  image: "https://f.top4top.io/p_34929krvu0.png",
  calories: 272.2,
  fat: 18.9,
  protein: 5.5,
  carb: 20,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-yofo-icecream",
  name: "السعودية يوفو  ايسكريم",
  image: "https://g.top4top.io/p_3492cwac41.png",
  calories: 289.1,
  fat: 18,
  protein: 3.6,
  carb: 29,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "oreo-vanilla-sandwich",
  name: "أوريوا ايسكريم شوكولاته سندويش بنكهة فانيليا",
  image: "https://h.top4top.io/p_3492yi8842.png",
  calories: 300,
  fat: 11,
  protein: 5.1,
  carb: 43,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "galaxy-heart-icecream",
  name: "جالكسي ايسكريم شكل قلب",
  image: "https://i.top4top.io/p_3492ftr1j3.png",
  calories: 307,
  fat: 18,
  protein: 4.1,
  carb: 31,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "baskin-robbins-praline",
  name: "باسكن روبنز ايسكريم كراميل بالكريمة",
  image: "https://j.top4top.io/p_3492qmsan4.png",
  calories: 154,
  fat: 8.4,
  protein: 1.9,
  carb: 17.7,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "baskin-robbins-candy",
  name: "باسكن روبنز ايسكريم حلوى القطن",
  image: "https://k.top4top.io/p_3492ygbq35.png",
  calories: 132,
  fat: 7.6,
  protein: 2,
  carb: 13.9,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-chocolate-box",
  name: "السعودية ايسكريم الشوكولاتة علبة",
  image: "https://l.top4top.io/p_3492scy6c6.png",
  calories: 105,
  fat: 5.4,
  protein: 2,
  carb: 12,
category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-strawberry-box",
  name: "السعودية ايسكريم فراولة علبة",
  image: "https://a.top4top.io/p_3492ej2rb7.png",
  calories: 100,
  fat: 5.2,
  protein: 2,
  carb: 11.2,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-mango-box",
  name: "السعودية ايسكريم المانجو",
  image: "https://b.top4top.io/p_3492n5jey8.png",
  calories: 108,
  fat: 5,
  protein: 2,
  carb: 14,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "loacker-icecream-sandwich",
  name: "لواكر ايسكريم ساندوتش",
  image: "https://c.top4top.io/p_349210gya9.png",
  calories: 350,
  fat: 14,
  protein: 5.3,
  carb: 50,
  category: "السكريات",
  subcategory: "🍦ايسكريم"
},
{
  id: "alaml_ayskrym_sandwysh_balfanylya",
  name: "الامل ايسكريم ساندويش بالفانيليا",
  image: "https://c.top4top.io/p_3500xx7g01.png",
  calories: 142,
  fat: 3.7,
  protein: 2.1,
  carb: 25,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "alamil-bialkaraz",
  name: "الامل ايسكريم بالكرز",
  image: "https://up6.cc/2025/08/175692864241341.png",
  calories: 136.3,
  fat: 3.3,
  protein: 2.3,
  carb: 25,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "tuyst-sandutsh-ayskirim",
  name: "تويست ايسكريم ساندوتش",
  image: "https://up6.cc/2025/08/175692864243262.png",
  calories: 278.8,
  fat: 10,
  protein: 4.8,
  carb: 42.3,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
//—شوكولاتة 
{
  id: "break-soba",
  name: "شوكولاته بريك سوبا 30 جم",
  image: "https://up6.cc/2025/10/175985749853571.jpeg",
  calories: 496.67,
  fat: 23.33,
  protein: 3.33,
  carb: 70,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "break-star",
  name: "شوكولاته بريك ستار 13 جم",
  image: "https://up6.cc/2025/10/176018493620272.jpeg",
  calories: 530.77,
  fat: 30.77,
  protein: 7.69,
  carb: 53.85,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "baskreem-caramel",
  name: "بسكريم بكريمة الكراميل 36 جم",
  image: "https://up6.cc/2025/10/175985791850291.jpeg",
  calories: 181,
  fat: 13.89,
  protein: 2.78,
  carb: 36.11,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "snykrz_awryjynal",
  name: "سنيكرز أوريجينال 40 جم",
  image: "https://up6.cc/2025/10/175984429527481.jpeg",
  calories: 482.5,
  fat: 23.25,
  protein: 8.5,
  carb: 60,
  category: "السكريات",
  subcategory: "شوكولاتة",
},

{
  id: "wyf_ab_akstra_wyfr_balbndq",
  name: "ويف اب اكسترا ويفر بالبندق 29 جم",
  image: "https://up6.cc/2025/10/175984429531142.jpeg",
  calories: 544.8,
  fat: 33.44,
  protein: 12.75,
  carb: 48.2,
  category: "السكريات",
  subcategory: "شوكولاتة",
},

{
  id: "jalksy_shwkwlath_krysby",
  name: "جالكسي شوكولاته كريسبي ( 16جم)",
  image: "https://up6.cc/2025/10/175984429534823.jpeg",
  calories: 531.25,
  fat: 31.25,
  protein: 6.25,
  carb: 62.5,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "maltyzrz_krat_alshwkwlath",
  name: "مالتيزرز كرات الشوكولاته 37 جم",
  image: "https://up6.cc/2025/10/17598442953714.jpeg",
  calories: 502.7,
  fat: 24.59,
  protein: 8.6,
  carb: 62.16,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{ 
 id:"awlkr_dylwks_wyfr_bkrymh_albndq",
  name: "أولكر ديلوكس ويفر بكريمة البندق 40 جم",
  image: "https://up6.cc/2025/10/175984429539435.jpeg",
  calories: 501,
  fat: 24,
  protein: 6.5,
  carb: 62.9,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "kyndr_bwynw-(21.5g)",
  name: "كيندر بوينو 2 اصابع للواحد 21.5 جم",
  image: "https://up6.cc/2025/10/176018493618161.jpeg",
  calories: 572,
  fat: 38,
  protein: 8.6,
  carb: 52,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
//كيك
{
  id: "choco-caramel-bar",
  name: "كيك بار الشوكولاته بالكراميل 40 جم",
  image: "https://up6.cc/2024/12/173555886146151.jpeg",
  calories: 395,
  fat: 17.5,
  protein: 3.75,
  carb: 57.5,
  category: "السكريات",
  subcategory: "كيك",
},
{
  id: "dima-fantasy",
  name: "ديمة فانتزي كيك بالشوكولاته 40 جم",
  image: "https://up6.cc/2025/10/175985729682431.jpeg",
  calories: 390,
  fat: 57.5,
  protein: 15,
  carb: 40,
  category: "السكريات",
  subcategory: "كيك",
},
//سكر
 {
   id: "sugar",
   name: "سكر",
   image: "https://up6.cc/2025/08/175715390643771.jpeg",
   calories: 387,
   fat: 0,
   protein: 0,
   carb: 100,
   category: "السكريات",
   subcategory: "سكر",
 },
//فصفص
{
  id: "dlfn_hb_msry",
  name: "دلفن حب مصري",
  image: "https://b.top4top.io/p_35004y3wy0.png",
  calories: 371.4,
  fat: 3.5,
  protein: 17.8,
  carb: 64.2,
  category: "موالح",
  subcategory: "فصفص",
},
//المعلبات
{
id: "alnakhluh-halawat-tahinia",
  name: "النخله حلاوة طحينية",
  image: "https://up6.cc/2025/08/175758266980491.png",
  calories: 571.4,
  fat: 35.7,
  protein: 14.2,
  carb: 47.6,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},
//اسماك معلبة
{
  id: "goody_twna_balmaa_walmlh",
  name: "GOODY قودي تونا بالماء والملح 185 جم",
  image: "https://up6.cc/2025/10/175958678402781.jpeg",
  calories: 110,
  fat: 1.2,
  protein: 24.8,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "tryfa_twnh_khfyfh",
  name: "تريفا تونة خفيفة بالزيت النباتي 80 جم",
  image: "https://up6.cc/2025/10/175958678408982.jpeg",
  calories: 130,
  fat: 4,
  protein: 24,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "ryw_mary_slth_alkhdar_ma_altwnh_alkhlth_almksykyh",
  name: "ريو ماري سلطة الخضار مع التونة الخلطة المكسيكية 160جم",
  image: "https://up6.cc/2025/10/175958678412423.jpeg",
  calories: 197,
  fat: 13,
  protein: 10,
  carb: 12,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "qwdy_tndryna_twna",
  name: "قودي تندرينا تونا ناعمة 185 جم",
  image: "https://up6.cc/2025/10/175958678415494.jpeg",
  calories: 209,
  fat: 13.7,
  protein: 21.4,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "rwtanh_lhm_twna_",
  name: "روتانه لحم تونا بالزيت النباتي 160 جم",
  image: "https://up6.cc/2025/10/175958678417215.jpeg",
  calories: 130,
  fat: 4,
  protein: 23,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
////مشروبات
  {
    id: "pepsi-diet",
    name: "بيبسي دايت",
    image: "https://up6.cc/2025/06/174900382452171.jpeg",
    calories: 0.28,
    fat: 0,
    protein: 0,
    carb: 0,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
{
  id: "pepsi",
  name: "بيبسي",
  image: "https://up6.cc/2025/06/175057123274813.jpeg",
  calories: 42,
  fat: 0,
  protein: 0,
  carb: 11,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "7up-zero",
  name: "سفن اب زيرو سكر",
  image: "https://up6.cc/2025/06/175057123275874.jpeg",
  calories: 2,
  fat: 0,
  protein: 0,
  carb: 0,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
  {
    id: "miranda-green-apple",
    name: "ميرندا تفاح أخضر",
    image: "https://up6.cc/2025/06/174900382459664.jpeg",
    calories: 49,
    fat: 0,
    protein: 0,
    carb: 3.61,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
 {
    id: "miranda-orange",
    name: "ميرندا برتقال",
    image: "https://up6.cc/2025/06/174900382461025.jpeg",
    calories: 47.22,
    fat: 0,
    protein: 0,
    carb: 3.89,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "barbican-strawberry",
    name: "بربيكان شعير فراولة",
    image: "https://up6.cc/2025/06/174900382457843.jpeg",
    calories: 33,
    fat: 0,
    protein: 0,
    carb: 8.4,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "miranda-strawberry",
    name: "ميرندا فراولة",
    image: "https://up6.cc/2025/06/174900409498351.jpeg",
    calories: 42.67,
    fat: 0,
    protein: 0,
    carb: 3.61,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "Dew",
    name: "ديو",
    image: "https://up6.cc/2025/06/175057123269621.jpeg",
    calories: 48,
    fat: 0,
    protein: 0,
    carb: 12,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "kinza-apple-mint",
name: "كينزا كوكتيل تفاح ونعناع",
    image: "https://up6.cc/2025/06/174900382455112.jpeg",
    calories: 37.36,
    fat: 0,
    protein: 0,
    carb: 3.67,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
{
  id: "Rita Blue",
  name: "ريتا بلو",
  image: "https://up6.cc/2025/06/175057123273392.jpeg",
  calories: 59,
  fat: 0,
  protein: 0,
  carb: 14,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
  {
    id: "shani-fruit-flavor",
    name: "شاني بنكهة الفواكة",
    image: "https://up6.cc/2025/06/174900409502112.jpeg",
    calories: 46.22,
    fat: 0,
    protein: 0,
    carb: 3.89,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
{
  id: "miranda-hamdayat",
  name: "ميرندا حمضيات",
  image: "https://d.top4top.io/p_34893w8d70.png",
  calories: 48,
  fat: 0,
  protein: 0,
  carb: 12,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "kinza-hamdayat",
  name: "حمضيات كينزا",
  image: "https://e.top4top.io/p_3489t1w8t1.png",
  calories: 50.5,
  fat: 0,
  protein: 0,
  carb: 13,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "kinza-cola",
  name: "كينزا كولا",
  image: "https://f.top4top.io/p_3489zs5t22.png",
  calories: 44.5,
  fat: 0,
  protein: 0,
  carb: 11,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "kinza-orange",
  name: "كينزا برتقال",
  image: "https://g.top4top.io/p_34898a1ti3.png",
  calories: 56.6,
  fat: 0,
  protein: 0,
  carb: 14,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "sprite",
  name: "سبرايت",
  image: "https://h.top4top.io/p_34899jdig4.png",
  calories: 47,
  fat: 0,
  protein: 0,
  carb: 11.8,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-red",
  name: "ريتا رد",
  image: "https://i.top4top.io/p_3489d273w5.png",
  calories: 58,
  fat: 0,
  protein: 0,
  carb: 14,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-berry",
  name: "ريتا توت",
  image: "https://j.top4top.io/p_34897wq8d6.png",
  calories: 60,
  fat: 0,
  protein: 0,
  carb: 15,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-red-sugar-free",
  name: "ريتا رد بدون سكر",
  image: "https://k.top4top.io/p_3489irekk7.png",
  calories: 3,
  fat: 0,
  protein: 0,
  carb: 0,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-passion-fruit",
  name: "ريتا باشون فروت",
  image: "https://l.top4top.io/p_3489cfzjh8.png",
  calories: 62.3,
  fat: 0,
  protein: 0,
  carb: 15,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "barbican-apple",
  name: "بربيكان بالتفاح",
  image: "https://a.top4top.io/p_3489nbk509.png",
  calories: 33,
  fat: 0,
  protein: 0,
  carb: 8.4,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "barbican-citrus",
  name: "بربيكان شراب الشعير بنكهة الحمضيات",
  image: "https://h.top4top.io/p_3489u18j00.png",
  calories: 54.4,
  fat: 0,
  protein: 0,
  carb: 13.6,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
//مشروبات طاقة
//مشروبات ساخنة
{
  id: "qhwh_Saudi_hyl",
  name: "قهوة سعودية ( هيل )",
  image: "https://up6.cc/2025/08/175923970130031.png",
  calories: 2,
  fat: 0,
  protein: 0,
  carb: 0.1,
  category: "المشروبات",
  subcategory: "مشروبات ساخنة",
},
//عصائر
{
  id: "nadk_nktar_frawlh_ma_fwakh_mshklh",
  name: "نادك نكتار فراولة مع فواكه مشكلة",
  image: "https://up6.cc/2025/08/175445911722831.png",
  calories: 48,
  fat: 0,
  protein: 0,
  carb: 12,
  category: "المشروبات",
  subcategory: "عصائر",
},
//اظرف 
{
  id: "zrf_shay_krk",
  name: "ظرف شاي كرك",
  image: "https://up6.cc/2025/08/175715259501061.jpeg",
  calories: 400,
  fat: 7.8,
  protein: 4.8,
  carb: 78,
  category: "المشروبات",
  subcategory: "اظرف سريعة التحضير",
},
///لحوم و بيض
      {
id: "chicken",
name: "دجاج",
image:"###",
        calories: 239,
        fat: 14,
        protein: 27,
        carb: 0,
        category: "اللحوم والبيض",
        subcategory: "دواجن🐓",
      },
      {
        id: "egg",
        name: "بيض",
        image:
          "https://placehold.co/200x150/png?text=بيض+صورة+للطعام",
        calories: 155,
        fat: 11,
        protein: 13,
        carb: 1.1,
        category: "اللحوم والبيض",
        subcategory: "بيض🥚",
      },
      {
        id: "beef",
        name: "لحم بقري",
        image:
          "https://placehold.co/200x150/png?text=لحم+بقري+صورة+للطعام",
        calories: 250,
        fat: 15,
        protein: 26,
        carb: 0,
        category: "اللحوم والبيض",
        subcategory: "لحم بقري",
      },
{
  id: "fish",
        name: "سمك",
        image:
          "https://placehold.co/200x150/png?text=سمك+صورة+للطعام",
        calories: 206,
        fat: 12,
        protein: 22,
        carb: 0,
        category: "اللحوم والبيض",
        subcategory: "أسماك",
      },
//حبوب و بذور (كورن فليكس)
{
  id: "Nesquik-kurn filiks shwkwlatat",
name: "Nesquik كورن فليكس شوكولاتة",
image:"https://up6.cc/2025/08/175844583336451.png",
calories: 377,
fat: 2.8,
protein: 8.5,
carb: 75.2,
category: "الحبوب والبذور",
subcategory: "كورن فليكس",
  },
{
  id: "xx",
  name: "كورن فليكس (Kellogg's)كيلوقز",
  image: "https://up6.cc/2025/08/175844583339482.png",
  calories: 378,
  fat: 0.9,
  protein: 7,
  carb: 84,
  category: "الحبوب والبذور",
  subcategory: "كورن فليكس",
},
//دهون

 {
        id: "oliveOil",
        name: "زيت زيتون",
        image:"https://placehold.co/200x150/png?text",
        calories: 793,
        fat: 90,
        protein: 0,
        carb: 0,
        category: "الزيوت و الدهون",
        subcategory: "زيوت",
      },
/// مطاعم عالمية 
      {
id: "ماك",
name: "ساندوتش جراند تشيكن سبيشال",
image:"https://up6.cc/2025/06/174935351545021.png",
        calories: 257.6,
        fat: 14.3,
        protein: 11,
        carb: 22.5,
        category: "مطاعم عالميه",
        subcategory: "ماكدونالدز🍔",
      },
    ];

  // Load custom foods from localStorage
  function loadCustomFoods() {
    const stored = localStorage.getItem("customFoods");
    if (stored) {
      try {
        const customFoods = JSON.parse(stored);
        // Remove old custom foods from foodsData
        for (let i = foodsData.length - 1; i >= 0; i--) {
          if (foodsData[i].id.startsWith("custom_")) {
            foodsData.splice(i, 1);
          }
        }
        foodsData.push(...customFoods);
      } catch {}
    }
  }
  loadCustomFoods();

  // State
  let sidebarOpen = false;
  let calendarVisible = true;
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let selectedDate = new Date(currentYear, currentMonth, currentDate.getDate());
  let mealsData = {};
  let favorites = JSON.parse(localStorage.getItem("nutritionAppFavorites")) || [];

  // Elements
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const openSidebarBtn = document.getElementById("openSidebarBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const toggleCalendarBtn = document.getElementById("toggleCalendarBtn");
  const calendarSection = document.getElementById("calendarSection");
  const calendarMonthYear = document.getElementById("calendarMonthYear");
  const calendarDays = document.getElementById("calendarDays");
  const prevMonthBtn = document.getElementById("prevMonthBtn");
  const nextMonthBtn = document.getElementById("nextMonthBtn");
  const deleteAllBtn = document.getElementById("deleteAllBtn");
  const goTodayBtn = document.getElementById("goTodayBtn");
  const openAddFoodModalBtn = document.getElementById("openAddFoodModalBtn");
  const addFoodModal = document.getElementById("addFoodModal");
  const closeAddFoodModalBtn = document.getElementById("closeAddFoodModalBtn");
  const mainCategoriesContainer = document.getElementById("mainCategories");
  const subCategoriesContainer = document.getElementById("subCategories");
  const foodListContainer = document.getElementById("foodList");
  const foodSearchForm = document.getElementById("foodSearchForm");
  const foodSearchInput = document.getElementById("foodSearchInput");
  const foodFilterSelect = document.getElementById("foodFilterSelect");
  const mealsSection = document.getElementById("mealsSection");
  const caloriesSummary = document.getElementById("caloriesSummary");
  const fatSummary = document.getElementById("fatSummary");
  const proteinSummary = document.getElementById("proteinSummary");
  const carbSummary = document.getElementById("carbSummary");
  const foodDetailModal = document.getElementById("foodDetailModal");
  const closeFoodDetailModalBtn = document.getElementById("closeFoodDetailModalBtn");
  const foodDetailModalTitle = document.getElementById("foodDetailModalTitle");
  const foodDetailImage = document.getElementById("foodDetailImage");
  const foodNutritionDetails = document.getElementById("foodNutritionDetails");
  const addFoodToMealForm = document.getElementById("addFoodToMealForm");
  const mealSelect = document.getElementById("mealSelect");
  const quantityInput = document.getElementById("quantityInput");
  const addFoodToMealBtn = document.getElementById("addFoodToMealBtn");

  // Floating menu elements
  const floatingBtn = document.getElementById("floatingMenuBtn");
  const floatingOptions = document.getElementById("floatingMenuOptions");
  const btnAddFood = document.getElementById("btnAddFood");
  const btnCreateFood = document.getElementById("btnCreateFood");
  const btnFavorites = document.getElementById("btnFavorites");

  // Create Food Modal elements
  const createFoodModal = document.getElementById("createFoodModal");
  const closeCreateFoodModalBtn = document.getElementById("closeCreateFoodModalBtn");
  const createFoodForm = document.getElementById("createFoodForm");

  // Favorites Modal elements
  const favoritesModal = document.getElementById("favoritesModal");
  const closeFavoritesModalBtn = document.getElementById("closeFavoritesModalBtn");
  const favoritesList = document.getElementById("favoritesList");

  // Utility functions
  function formatDate(date) {
    return date.toISOString().split("T")[0];
  }
  function formatNumber(num) {
    return num.toLocaleString("ar-EG");
  }
  function getMonthName(monthIndex) {
    const months = [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ];
    return months[monthIndex];
  }
  function isSameDate(d1, d2) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  // LocalStorage keys
  const STORAGE_KEY = "nutritionAppData";
  const FAVORITES_KEY = "nutritionAppFavorites";

  // Load data from localStorage
  function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      try {
        mealsData = JSON.parse(data);
      } catch {
        mealsData = {};
      }
    }
  }
  // Save data to localStorage
  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mealsData));
  }
  // Save favorites
  function saveFavorites() {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
  // Check if food is favorite
  function isFavorite(foodId) {
    return favorites.some(f => f.id === foodId);
  }
  // Toggle favorite
  function toggleFavorite(food) {
    const idx = favorites.findIndex(f => f.id === food.id);
    if (idx >= 0) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(food);
    }
    saveFavorites();
  }

  // Sidebar open/close
  function openSidebar() {
    sidebar.classList.remove("closed");
    sidebarOverlay.classList.remove("hidden");
    sidebarOpen = true;
    openSidebarBtn.setAttribute("aria-expanded", "true");
  }
  function closeSidebar() {
    sidebar.classList.add("closed");
    sidebarOverlay.classList.add("hidden");
    sidebarOpen = false;
    openSidebarBtn.setAttribute("aria-expanded", "false");
  }
  openSidebarBtn.addEventListener("click", openSidebar);
  closeSidebarBtn.addEventListener("click", closeSidebar);
  sidebarOverlay.addEventListener("click", closeSidebar);

  // Toggle calendar visibility
  toggleCalendarBtn.addEventListener("click", () => {
    calendarVisible = !calendarVisible;
    calendarSection.style.display = calendarVisible ? "block" : "none";
    toggleCalendarBtn.setAttribute("aria-expanded", calendarVisible.toString());
    toggleCalendarBtn.querySelector("i").classList.toggle("fa-chevron-down", calendarVisible);
    toggleCalendarBtn.querySelector("i").classList.toggle("fa-chevron-up", !calendarVisible);
  });

  // Calendar rendering
  function renderCalendar(year, month) {
    calendarMonthYear.textContent = `${getMonthName(month)} ${year}`;
    calendarDays.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let startDay = firstDay.getDay();

    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = startDay - 1; i >= 0; i--) {
      const dayNum = prevMonthLastDay - i;
      const div = document.createElement("div");
      div.className = "text-gray-300 text-sm select-none";
      div.textContent = dayNum;
      calendarDays.appendChild(div);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dateObj = new Date(year, month, day);
      const dateStr = formatDate(dateObj);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "relative text-sm font-normal text-gray-800 py-1 rounded-md w-full";
      btn.textContent = day;

      if (isSameDate(dateObj, selectedDate)) {
        btn.classList.add("bg-gray-300", "font-semibold");
      }

      if (mealsData[dateStr]) {
        const dot = document.createElement("span");
        dot.className = "dot";
        btn.classList.add("day-with-food");
        btn.appendChild(dot);
      }

      btn.addEventListener("click", () => {
        selectedDate = dateObj;
        renderCalendar(currentYear, currentMonth);
        renderMealsForSelectedDate();
        updateNutritionSummary();
      });

      calendarDays.appendChild(btn);
    }

    const totalCells = calendarDays.children.length;
    const cellsToAdd = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= cellsToAdd; i++) {
      const div = document.createElement("div");
      div.className = "text-gray-300 text-sm select-none";
      div.textContent = i;
      calendarDays.appendChild(div);
    }
  }

  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
  });
  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
  });

  goTodayBtn.addEventListener("click", () => {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
    selectedDate = new Date(currentYear, currentMonth, currentDate.getDate());
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
  });

  deleteAllBtn.addEventListener("click", () => {
    if (confirm("هل أنت متأكد من حذف جميع البيانات؟ سيتم حذف كل الأطعمة المضافة في جميع الأيام.")) {
      mealsData = {};
      saveData();
      renderCalendar(currentYear, currentMonth);
      renderMealsForSelectedDate();
      updateNutritionSummary();
    }
  });

  // متغيرات وظيفة التمرير
  let startX = 0;
  let currentX = 0;
  let swipedItem = null;
  let swipedContent = null;
  let isDragging = false;
  const SWIPE_THRESHOLD = 50;

  function addSwipeListeners(container, content) {
    container.addEventListener("touchstart", (e) => {
      if (swipedContent && swipedContent !== content) {
        resetSwipe(swipedContent);
      }
      startX = e.touches[0].clientX;
      currentX = startX;
      swipedItem = container;
      swipedContent = content;
      isDragging = true;
      content.style.transition = "none";
    });

    container.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      let deltaX = currentX - startX;
      if (deltaX < 0) {
        e.preventDefault();
        if (deltaX < -80) deltaX = -80;
        content.style.transform = `translateX(${deltaX}px)`;
      }
    });

    container.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;
      let deltaX = currentX - startX;
      content.style.transition = "transform 0.3s ease";
      if (deltaX < -SWIPE_THRESHOLD) {
        content.style.transform = `translateX(-60px)`;
      } else {
        content.style.transform = `translateX(0)`;
        swipedContent = null;
        swipedItem = null;
      }
    });

    container.addEventListener("mousedown", (e) => {
      if (swipedContent && swipedContent !== content) {
        resetSwipe(swipedContent);
      }
      startX = e.clientX;
      currentX = startX;
      swipedItem = container;
      swipedContent = content;
      isDragging = true;
      content.style.transition = "none";
      e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
      let deltaX = currentX - startX;
      if (deltaX < 0) {
        e.preventDefault();
        if (deltaX < -80) deltaX = -80;
        content.style.transform = `translateX(${deltaX}px)`;
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      let deltaX = currentX - startX;
      content.style.transition = "transform 0.3s ease";
      if (deltaX < -SWIPE_THRESHOLD) {
        content.style.transform = `translateX(-60px)`;
      } else {
        content.style.transform = `translateX(0)`;
        swipedContent = null;
        swipedItem = null;
      }
    });
  }

  function resetSwipe(content) {
    if (!content) return;
    content.style.transition = "transform 0.3s ease";
    content.style.transform = "translateX(0)";
    swipedContent = null;
    swipedItem = null;
  }

  function deleteFoodFromMeal(dateStr, mealKey, foodIndex) {
    if (confirm(`هل أنت متأكد من حذف هذا الطعام من ${mealKey}?`)) {
      mealsData[dateStr][mealKey].splice(foodIndex, 1);
      if (
        mealsData[dateStr][mealKey].length === 0 &&
        Object.values(mealsData[dateStr]).every((arr) => arr.length === 0)
      ) {
        delete mealsData[dateStr];
      }
      saveData();
      renderCalendar(currentYear, currentMonth);
      renderMealsForSelectedDate();
      updateNutritionSummary();
    }
  }

//ملخص التغذية
  function updateNutritionSummary() {
    const dateStr = formatDate(selectedDate);
    const dayMeals = mealsData[dateStr] || {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: [],
    };
    let totalCalories = 0;
    let totalFat = 0;
    let totalProtein = 0;
    let totalCarb = 0;

    for (const mealKey in dayMeals) {
      dayMeals[mealKey].forEach((food) => {
        const factor = food.quantity / 100;
        totalCalories += food.calories * factor;
        totalFat += food.fat * factor;
        totalProtein += food.protein * factor;
        totalCarb += food.carb * factor;
      });
    }

    caloriesSummary.textContent = formatNumber(Math.round(totalCalories));
    fatSummary.textContent = `${totalFat.toFixed(1).replace(".", ",")} ج`;
    proteinSummary.textContent = `${totalProtein.toFixed(1).replace(".", ",")} ج`;
    carbSummary.textContent = `${totalCarb.toFixed(1).replace(".", ",")} ج`;
  }
  
  // عرض الفئات الرئيسية
  function renderMainCategories() {
    mainCategoriesContainer.innerHTML = "";
    Object.entries(categoriesData).forEach(([catName, catData]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "flex flex-col items-center gap-1 px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 min-w-[80px] text-xs text-gray-700";
      btn.setAttribute("role", "listitem");
      btn.setAttribute("aria-label", catName);
      btn.dataset.category = catName;

      const icon = document.createElement("i");
      icon.className = `${catData.icon} text-lg`;
      btn.appendChild(icon);

      const span = document.createElement("span");
      span.textContent = catName;
      btn.appendChild(span);

      btn.addEventListener("click", () => {
        Array.from(mainCategoriesContainer.children).forEach((c) =>
          c.classList.remove("bg-gray-200", "font-semibold")
        );
        btn.classList.add("bg-gray-200", "font-semibold");
        renderSubCategories(catName);
        renderFoodList(catName, null, foodSearchInput.value.trim());
      });

      mainCategoriesContainer.appendChild(btn);
    });
  }

  // Render subcategories for a main category
  function renderSubCategories(mainCategory) {
    subCategoriesContainer.innerHTML = "";
    if (!mainCategory || !categoriesData[mainCategory]) return;
    if (mainCategory === "كل الأطعمة") return;
    categoriesData[mainCategory].subcategories.forEach((subcat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 text-xs text-gray-700 whitespace-nowrap";
      btn.setAttribute("role", "listitem");
      btn.textContent = subcat;
      btn.dataset.subcategory = subcat;

      btn.addEventListener("click", () => {
        Array.from(subCategoriesContainer.children).forEach((c) =>
          c.classList.remove("bg-gray-200", "font-semibold")
        );
        btn.classList.add("bg-gray-200", "font-semibold");
        renderFoodList(mainCategory, subcat, foodSearchInput.value.trim());
      });

      subCategoriesContainer.appendChild(btn);
    });
  }

  // تصفية وفرز الأطعمة
  function filterAndSortFoods(mainCategory, subCategory, searchTerm, filter) {
    let filtered = foodsData.filter((food) => {
      if (mainCategory && mainCategory !== "كل الأطعمة" && food.category !== mainCategory) return false;
      if (subCategory && food.subcategory !== subCategory) return false;
      if (searchTerm && !food.name.includes(searchTerm)) return false;
      return true;
    });

    switch (filter) {
      case "caloriesAsc":
        filtered.sort((a, b) => a.calories - b.calories);
        break;
      case "caloriesDesc":
        filtered.sort((a, b) => b.calories - a.calories);
        break;
      case "fatAsc":
        filtered.sort((a, b) => a.fat - b.fat);
        break;
      case "fatDesc":
        filtered.sort((a, b) => b.fat - a.fat);
        break;
      case "proteinAsc":
        filtered.sort((a, b) => a.protein - b.protein);
        break;
      case "proteinDesc":
        filtered.sort((a, b) => b.protein - a.protein);
        break;
      case "carbAsc":
        filtered.sort((a, b) => a.carb - b.carb);
        break;
      case "carbDesc":
        filtered.sort((a, b) => b.carb - a.carb);
        break;
      case "random":
      default:
        for (let i = filtered.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }
        break;
    }
    return filtered;
  }
  // عرض قائمة الطعام مع زر الحذف للأطعمة المخصصة
  let currentMainCategory = null;
  let currentSubCategory = null;
  function renderFoodList(mainCategory, subCategory, searchTerm) {
    currentMainCategory = mainCategory;
    currentSubCategory = subCategory;
    foodListContainer.innerHTML = "";
    const filter = foodFilterSelect.value;
    const foods = filterAndSortFoods(mainCategory, subCategory, searchTerm, filter);

    if (foods.length === 0) {
      const p = document.createElement("p");
      p.className = "text-center text-gray-500 text-sm";
      p.textContent = "لا توجد أطعمة مطابقة";
      foodListContainer.appendChild(p);
      return;
    }

    foods.forEach((food) => {
      const div = document.createElement("div");
      div.className =
        "relative flex gap-3 items-center border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100";
      div.tabIndex = 0;
      div.setAttribute("role", "button");
      div.setAttribute("aria-label", `عرض تفاصيل ${food.name}`);

      const img = document.createElement("img");
      img.src = food.image;
      img.alt = `صورة ${food.name}`;
      img.className = "w-16 h-12 object-cover rounded-md flex-shrink-0";
      div.appendChild(img);

      const infoDiv = document.createElement("div");
      infoDiv.className = "flex flex-col flex-1";

      const nameP = document.createElement("p");
      nameP.className = "font-semibold text-sm";
      nameP.textContent = food.name;
      infoDiv.appendChild(nameP);

      const nutritionP = document.createElement("p");
      nutritionP.className = "text-xs text-gray-600";
      nutritionP.innerHTML = `
        سعرات: ${formatNumber(food.calories)} Cal<br/>
        دهون: ${food.fat.toFixed(1).replace(".", ",")} ج<br/>
        بروتين: ${food.protein.toFixed(1).replace(".", ",")} ج<br/>
        كارب: ${food.carb.toFixed(1).replace(".", ",")} ج
      `;
      infoDiv.appendChild(nutritionP);

      div.appendChild(infoDiv);

      div.addEventListener("click", () => {
        openFoodDetailModal(food);
      });

      // Add delete button for custom foods in "وجباتي" category
      if (food.id.startsWith("custom_") && food.category === "وجباتي") {
        const delBtn = document.createElement("div");
        delBtn.className = "custom-food-delete-btn";
        delBtn.title = "حذف الطعام";
        delBtn.innerHTML = "&times;";
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (confirm(`هل أنت متأكد من حذف الطعام "${food.name}"؟`)) {
            // Remove from foodsData
            foodsData = foodsData.filter(f => f.id !== food.id);
            // Update localStorage for custom foods
            localStorage.setItem("customFoods", JSON.stringify(foodsData.filter(f => f.id.startsWith("custom_"))));
            // Re-render food list
            renderFoodList(currentMainCategory, currentSubCategory, foodSearchInput.value.trim());
          }
        });
        div.appendChild(delBtn);
      }

      foodListContainer.appendChild(div);
    });
  }

  // Render meals for selected date with favorite star
  function renderMealsForSelectedDate() {
    mealsSection.innerHTML = "";
    const dateStr = formatDate(selectedDate);
    const dayMeals = mealsData[dateStr] || {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: [],
    };

    const mealNames = {
      breakfast: "وجبة الفطور☀️",
      lunch: "وجبة الغداء🌖",
      dinner: "وجبة العشاء🌑",
      snack: "وجبة خفيفة➕",
    };
    for (const mealKey of Object.keys(mealNames)) {
      const mealFoods = dayMeals[mealKey] || [];
      const mealDiv = document.createElement("article");
      mealDiv.className = "flex flex-col gap-2";
      const mealTitle = document.createElement("h2");
      mealTitle.className = "font-semibold text-base";
      mealTitle.textContent = mealNames[mealKey];
      mealDiv.appendChild(mealTitle);
      if (mealFoods.length === 0) {
        const noFoodP = document.createElement("p");
        noFoodP.className = "text-gray-400 text-xs";
        noFoodP.textContent = "لا توجد أطعمة مضافة";
        mealDiv.appendChild(noFoodP);
      } else {
        const ul = document.createElement("ul");
        ul.className = "flex flex-col gap-2";
        mealFoods.forEach((food, index) => {
          const li = document.createElement("li");
          li.className = "swipe-container rounded-md border border-gray-200";
          const swipeContent = document.createElement("div");
          swipeContent.className = "swipe-content flex items-center gap-3 p-2";
          const img = document.createElement("img");
          img.src = food.image;
          img.alt = `صورة ${food.name}`;
          img.className = "w-12 h-12 object-cover rounded-md flex-shrink-0";
          swipeContent.appendChild(img);
          const infoDiv = document.createElement("div");
          infoDiv.className = "food-info flex flex-col flex-1";
          const nameP = document.createElement("p");
          nameP.className = "font-semibold text-sm";
          nameP.textContent = food.name;
          infoDiv.appendChild(nameP);
          const nutritionP = document.createElement("p");
          nutritionP.className = "text-xs text-gray-600";
          nutritionP.textContent = `كمية: ${food.quantity} جرام - سعرات: ${formatNumber(
            Math.round((food.calories * food.quantity) / 100)
          )} Cal`;
          infoDiv.appendChild(nutritionP);

          swipeContent.appendChild(infoDiv);

          const star = document.createElement("i");
          star.className = "favorite-star fas fa-star";
          if (isFavorite(food.id)) star.classList.add("favorited");
          star.title = "إضافة/إزالة من المفضلة";
          star.setAttribute("tabindex", "0");
          star.setAttribute("role", "button");
          star.setAttribute("aria-pressed", isFavorite(food.id));
          star.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(food);
            star.classList.toggle("favorited");
            star.setAttribute("aria-pressed", star.classList.contains("favorited"));
          });
          star.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              star.click();
            }
          });
          swipeContent.appendChild(star);

          swipeContent.style.cursor = "pointer";
          swipeContent.addEventListener("click", () => {
            openFoodDetailModal(food, mealKey, index);
          });
          const deleteBtn = document.createElement("div");
          deleteBtn.className = "delete-btn";
          deleteBtn.textContent = "حذف";
          deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteFoodFromMeal(dateStr, mealKey, index);
          });
          li.appendChild(deleteBtn);
          li.appendChild(swipeContent);
          ul.appendChild(li);
          addSwipeListeners(li, swipeContent);
        });
        mealDiv.appendChild(ul);
      }
      mealsSection.appendChild(mealDiv);
    }
  }
  // حالة نموذجية لتفاصيل الطعام
  let currentFoodDetail = null;
  let currentFoodDetailMeal = null;
  let currentFoodDetailIndex = null;

  function openFoodDetailModal(food, mealKey = null, foodIndex = null) {
    currentFoodDetail = food;
    currentFoodDetailMeal = mealKey;
    currentFoodDetailIndex = foodIndex;

    foodDetailModalTitle.textContent = food.name;
    foodDetailImage.src = food.image;
    foodDetailImage.alt = `صورة ${food.name}`;

    foodNutritionDetails.innerHTML = `
      <li>سعرات: ${formatNumber(food.calories)} Cal</li>
      <li>دهون: ${food.fat.toFixed(1).replace(".", ",")} ج</li>
      <li>بروتين: ${food.protein.toFixed(1).replace(".", ",")} ج</li>
      <li>كارب: ${food.carb.toFixed(1).replace(".", ",")} ج</li>
    `;

    mealSelect.value = mealKey || "";
    quantityInput.value = 100;

    foodDetailModal.classList.remove("hidden");
  }

  closeFoodDetailModalBtn.addEventListener("click", () => {
    foodDetailModal.classList.add("hidden");
    currentFoodDetail = null;
    currentFoodDetailMeal = null;
    currentFoodDetailIndex = null;
  });

  addFoodToMealForm.addEventListener("submit", () => {
    if (!mealSelect.value) {
      alert("يرجى اختيار الوجبة");
      return;
    }
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
      alert("يرجى إدخال كمية صحيحة");
      return;
    }
    const dateStr = formatDate(selectedDate);
    if (!mealsData[dateStr]) {
      mealsData[dateStr] = {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
      };
    }
    if (currentFoodDetailMeal !== null && currentFoodDetailIndex !== null) {
      mealsData[dateStr][currentFoodDetailMeal][currentFoodDetailIndex] = {
        ...currentFoodDetail,
        quantity,
      };
    } else {
      mealsData[dateStr][mealSelect.value].push({
        ...currentFoodDetail,
        quantity,
      });
    }
    saveData();
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
    foodDetailModal.classList.add("hidden");
    addFoodModal.classList.add("hidden");
    currentFoodDetail = null;
    currentFoodDetailMeal = null;
    currentFoodDetailIndex = null;
  });

  // Floating menu toggle
  let floatingOpen = false;
  function toggleFloatingMenu() {
    floatingOpen = !floatingOpen;
    floatingOptions.style.display = floatingOpen ? "flex" : "none";
    floatingBtn.setAttribute("aria-expanded", floatingOpen);
    floatingOptions.setAttribute("aria-hidden", !floatingOpen);
  }
  floatingBtn.addEventListener("click", toggleFloatingMenu);
  floatingBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFloatingMenu();
    }
  });
  document.addEventListener("click", (e) => {
    if (!floatingBtn.contains(e.target) && !floatingOptions.contains(e.target)) {
      floatingOpen = false;
      floatingOptions.style.display = "none";
      floatingBtn.setAttribute("aria-expanded", false);
      floatingOptions.setAttribute("aria-hidden", true);
    }
  });

  // أزرار القائمة العائمة
  btnAddFood.addEventListener("click", () => {
    toggleFloatingMenu();
    addFoodModal.classList.remove("hidden");
    foodSearchInput.value = "";
    foodFilterSelect.value = "random";
    Array.from(mainCategoriesContainer.children).forEach((c) =>
      c.classList.remove("bg-gray-200", "font-semibold")
    );
    Array.from(subCategoriesContainer.children).forEach((c) =>
      c.classList.remove("bg-gray-200", "font-semibold")
    );
    foodListContainer.innerHTML = "";
    currentMainCategory = null;
    currentSubCategory = null;
  });
  btnCreateFood.addEventListener("click", () => {
    toggleFloatingMenu();
    createFoodModal.style.display = "flex";
  });
  closeCreateFoodModalBtn.addEventListener("click", () => {
    createFoodModal.style.display = "none";
    createFoodForm.reset();
  });
  btnFavorites.addEventListener("click", () => {
    toggleFloatingMenu();
    renderFavoritesList();
    favoritesModal.style.display = "flex";
  });
  closeFavoritesModalBtn.addEventListener("click", () => {
    favoritesModal.style.display = "none";
  });

  // عرض قائمة المفضلة
  function renderFavoritesList() {
    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
      const p = document.createElement("p");
      p.className = "text-center text-gray-500";
      p.textContent = "لا توجد أطعمة مفضلة";
      favoritesList.appendChild(p);
      return;
    }
    favorites.forEach(food => {
      const div = document.createElement("div");
      div.tabIndex = 0;
      div.setAttribute("role", "button");
      div.setAttribute("aria-label", `إضافة ${food.name} إلى الوجبة`);
      div.className = "favorite-item";

      const img = document.createElement("img");
      img.src = food.image;
      img.alt = `صورة ${food.name}`;
      div.appendChild(img);

      const nameSpan = document.createElement("span");
      nameSpan.className = "fav-name";
      nameSpan.textContent = food.name;
      div.appendChild(nameSpan);

      const removeBtn = document.createElement("i");
      removeBtn.className = "remove-fav fas fa-times";
      removeBtn.title = "إزالة من المفضلة";
      removeBtn.setAttribute("tabindex", "0");
      removeBtn.setAttribute("role", "button");
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeFavorite(food.id);
      });
      removeBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          removeBtn.click();
        }
      });
      div.appendChild(removeBtn);

      div.addEventListener("click", () => {
        openFoodDetailModal(food);
        favoritesModal.style.display = "none";
      });
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          div.click();
        }
      });

      favoritesList.appendChild(div);
    });
  }
  function removeFavorite(foodId) {
    const idx = favorites.findIndex(f => f.id === foodId);
    if (idx >= 0) {
      favorites.splice(idx, 1);
      saveFavorites();
      renderFavoritesList();
    }
  }

  // إنشاء نموذج إرسال الطعام مع التنبيه وإغلاق النافذة المنبثقة
  createFoodForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value.trim();
    const companyName = form.companyName.value.trim();
    const category = form.foodCategory.value.trim() || "وجباتي";
    const portion = form.portion.value.trim();
    const weight = parseFloat(form.weight.value);
    const weightUnit = form.weightUnit.value;
    const calories = parseFloat(form.calories.value);
    const protein = parseFloat(form.protein.value);
    const carb = parseFloat(form.carb.value);
    const fat = parseFloat(form.fat.value);
    let imageUrl = form.imageUrl.value.trim();
    const imageFile = form.imageFile.files[0];

    if (!foodName) {
      alert("يرجى إدخال اسم الطعام");
      return;
    }
    if (!weight || weight <= 0) {
      alert("يرجى إدخال الوزن الصحيح");
      return;
    }
    if (!weightUnit) {
      alert("يرجى اختيار وحدة الوزن");
      return;
    }
    if (isNaN(calories) || isNaN(protein) || isNaN(carb) || isNaN(fat)) {
      alert("يرجى إدخال القيم الغذائية بشكل صحيح");
      return;
    }
    if (!imageUrl && !imageFile) {
      alert("يرجى إدخال رابط صورة أو اختيار صورة");
      return;
    }

    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }

    const newFood = {
      id: `custom_${Date.now()}`,
      name: foodName,
      company: companyName,
      category,
      subcategory: "وجباتي",
      portion,
      weight,
      weightUnit,
      calories,
      protein,
      carb,
      fat,
      image: imageUrl || "https://placehold.co/200x150/png?text=صورة+غير+متوفرة",
    };

    foodsData.push(newFood);
    localStorage.setItem("customFoods", JSON.stringify(foodsData.filter(f => f.id.startsWith("custom_"))));

    alert("تم إضافة الطعام في تصنيف وجباتي");
    createFoodModal.style.display = "none";
    form.reset();

    if (currentMainCategory === "انشاء طعام" || currentMainCategory === "وجباتي") {
      renderFoodList("وجباتي", null, "");
    }
  });

  // البحث عن الأحداث وتصفيتها
  foodSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    renderFoodList(currentMainCategory, currentSubCategory, foodSearchInput.value.trim());
  });
  foodFilterSelect.addEventListener("change", () => {
    renderFoodList(currentMainCategory, currentSubCategory, foodSearchInput.value.trim());
  });

  // فتح زر إضافة الطعام
  openAddFoodModalBtn.addEventListener("click", () => {
    addFoodModal.classList.remove("hidden");
    foodSearchInput.value = "";
    foodFilterSelect.value = "random";
    Array.from(mainCategoriesContainer.children).forEach((c) =>
      c.classList.remove("bg-gray-200", "font-semibold")
    );
    Array.from(subCategoriesContainer.children).forEach((c) =>
      c.classList.remove("bg-gray-200", "font-semibold")
    );
    foodListContainer.innerHTML = "";
    currentMainCategory = null;
    currentSubCategory = null;
  });

  // إغلاق زر إضافة الطعام
  closeAddFoodModalBtn.addEventListener("click", () => {
    addFoodModal.classList.add("hidden");
  });

  // إغلاق زر إضافة الطعام
  closeFoodDetailModalBtn.addEventListener("click", () => {
    foodDetailModal.classList.add("hidden");
    currentFoodDetail = null;
    currentFoodDetailMeal = null;
    currentFoodDetailIndex = null;
  });

  // تهيئة
  function init() {
    loadData();
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
    renderMainCategories();
    calendarSection.style.display = calendarVisible ? "block" : "none";
    toggleCalendarBtn.setAttribute("aria-expanded", calendarVisible.toString());
  }
  init();

  // حفظ/إعادة تعيين متتبع التغذية
// عناصر
const editBtn = document.getElementById("editBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const needsForm = document.getElementById("needsForm");

// مربعات العرض
const caloriesValue = document.getElementById("caloriesValue");
const fatValue = document.getElementById("fatValue");
const carbValue = document.getElementById("carbValue");
const proteinValue = document.getElementById("proteinValue");

// مدخلات
const caloriesInput = document.getElementById("caloriesInput");
const fatInput = document.getElementById("fatInput");
const carbInput = document.getElementById("carbInput");
const proteinInput = document.getElementById("proteinInput");

// فتح النافذة
editBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  // تحميل القيم القديمة
  caloriesInput.value = localStorage.getItem("calories") || 0;
  fatInput.value = localStorage.getItem("fat") || 0;
  carbInput.value = localStorage.getItem("carb") || 0;
  proteinInput.value = localStorage.getItem("protein") || 0;
});

// إغلاق النافذة
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// حفظ البيانات
needsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // القيم الجديدة
  const calories = caloriesInput.value;
  const fat = fatInput.value;
  const carb = carbInput.value;
  const protein = proteinInput.value;
  
  // تحديث العرض
  caloriesValue.textContent = calories;
  fatValue.textContent = fat;
  carbValue.textContent = carb;
  proteinValue.textContent = protein;
  
  // حفظ في LocalStorage
  localStorage.setItem("calories", calories);
  localStorage.setItem("fat", fat);
  localStorage.setItem("carb", carb);
  localStorage.setItem("protein", protein);
  
  popup.style.display = "none";
});

// عند تحميل الصفحة استرجاع القيم
window.addEventListener("load", () => {
  caloriesValue.textContent = localStorage.getItem("calories") || 0;
  fatValue.textContent = localStorage.getItem("fat") || 0;
  carbValue.textContent = localStorage.getItem("carb") || 0;
  proteinValue.textContent = localStorage.getItem("protein") || 0;
});
//التعرف على الطعام 
 // زر تحليل الاطعمة

})();
