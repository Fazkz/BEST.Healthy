 // Data for nutrients: vitamins, minerals, fats, carbs, others, calories
    const nutrientsData = {
      vitamins: {
        title: "الفيتامينات",
        items: {
          "Vitamin A": {
            name: "فيتامين أ",
            definition:
              "فيتامين أ هو فيتامين ضروري للرؤية، النمو، وظيفة المناعة، وصحة الجلد.",
benefits:
"يساعد في تحسين الرؤية، دعم الجهاز المناعي، وتعزيز صحة الجلد.",
dailyNeeds: 
"[للبالغين ] للنساء700-للرجال900 ميكرو غرام يوميًا [الاطفال] 300-600 ميكرو غرام يومياً (حسب العمر) [الرضع]400 ميكرو غرام يومياً",
deficiencySymptoms:
"ضعف الرؤية الليلية، جفاف الجلد، وزيادة خطر العدوى.",
foodSources: [
{
name: "الجزر",
image:"https://up6.cc/2025/07/175146494820751.jpeg",
vitaminAmount: "835 ميكروغرام فيتامين أ لكل 100 جرام",
},
{
name: "السبانخ",
image:
"https://up6.cc/2025/06/174897860095931.jpeg",
vitaminAmount: "469 ميكروغرام فيتامين أ لكل 100 جرام",
},
              {
                name: "الكبد",
                image:
                  "https://placehold.co/200x150/png?text=كبد+صورة+طعام+فيتامين+أ",
                vitaminAmount: "6500 ميكروغرام فيتامين أ لكل 100 جرام",
              },
            ],
          },
          "Vitamin B1": {
            name: "فيتامين ب1 (ثيامين)",
            definition:
              "فيتامين ب1 هو فيتامين مهم لتحويل الغذاء إلى طاقة ووظائف الجهاز العصبي.",
            benefits:
              "يدعم وظيفة الأعصاب، يساعد في إنتاج الطاقة، ويحسن صحة القلب.",
            dailyNeeds: "1.1-1.2 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "الإرهاق، فقدان الشهية، مشاكل في الأعصاب، ومتلازمة بيريبيري.",
            foodSources: [
              {
                name: "الحبوب الكاملة",
                image:
                  "https://placehold.co/200x150/png?text=حبوب+كاملة+صورة+طعام+فيتامين+B1",
                vitaminAmount: "0.4 ملغ فيتامين ب1 لكل 100 جرام",
              },
              {
                name: "البازلاء",
image:"https://h.top4top.io/p_3487b27mq1.jpeg",
vitaminAmount: "0.3 ملغ فيتامين ب1 لكل 100 جرام",
              },
            ],
          },
          "Vitamin B2": {
            name: "فيتامين ب2 (ريبوفلافين)",
            definition:
              "فيتامين ب2 يساعد في إنتاج الطاقة وصحة الجلد والعينين.",
            benefits:
              "يدعم إنتاج الطاقة، يحافظ على صحة الجلد، ويساعد في وظيفة العين.",
            dailyNeeds: "1.1-1.3 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "تشقق الشفاه، التهاب الجلد، وحساسية للضوء.",
            foodSources: [
              {
                name: "البيض",
                image:
                  "https://placehold.co/200x150/png?text=بيض+صورة+طعام+فيتامين+B2",
                vitaminAmount: "0.5 ملغ فيتامين ب2 لكل 100 جرام",
              },
              {
                name: "اللوز",
                image:
                  "https://placehold.co/200x150/png?text=لوز+صورة+طعام+فيتامين+B2",
                vitaminAmount: "1.1 ملغ فيتامين ب2 لكل 100 جرام",
              },
{
name: "السبانخ",
image:"https://up6.cc/2025/06/174897860095931.jpeg",
vitaminAmount: "0.2 ملغ فيتامين ب2 لكل 100 جرام",
},
            ],
},
"Vitamin B3": {
            name: "فيتامين ب3 (نياسين)",
            definition:
              "فيتامين ب3 يساعد في تحويل الغذاء إلى طاقة ويحافظ على صحة الجلد والجهاز العصبي.",
            benefits:
              "يدعم صحة الجلد، الجهاز العصبي، ويخفض الكوليسترول الضار.",
            dailyNeeds: "14-16 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "التهاب الجلد، الإسهال، والارتباك (بيلاغرا).",
            foodSources: [
              {
                name: "الدجاج",
                image:
                  "https://placehold.co/200x150/png?text=دجاج+صورة+طعام+فيتامين+B3",
                vitaminAmount: "13.7 ملغ فيتامين ب3 لكل 100 جرام",
              },
              {
                name: "التونة",
                image:
                  "https://placehold.co/200x150/png?text=تونة+صورة+طعام+فيتامين+B3",
                vitaminAmount: "22.1 ملغ فيتامين ب3 لكل 100 جرام",
              },
              {
                name: "الفول السوداني",
                image:
                  "https://placehold.co/200x150/png?text=فول+سوداني+صورة+طعام+فيتامين+B3",
                vitaminAmount: "12.1 ملغ فيتامين ب3 لكل 100 جرام",
              },
            ],
          },
          "Vitamin B5": {
            name: "فيتامين ب5 (حمض البانتوثينيك)",
            definition:
              "فيتامين ب5 ضروري لإنتاج الطاقة وتكوين الهرمونات.",
            benefits:
              "يساعد في إنتاج الطاقة، تصنيع الهرمونات، وتعزيز التئام الجروح.",
            dailyNeeds: "5 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "التعب، اضطرابات النوم، وخدر في الأطراف.",
            foodSources: [
              {
                name: "الأفوكادو",
                image:
                  "https://placehold.co/200x150/png?text=أفوكادو+صورة+طعام+فيتامين+B5",
                vitaminAmount: "1.4 ملغ فيتامين ب5 لكل 100 جرام",
              },
              {
                name: "الفطر",
                image:
                  "https://placehold.co/200x150/png?text=فطر+صورة+طعام+فيتامين+B5",
                vitaminAmount: "1.5 ملغ فيتامين ب5 لكل 100 جرام",
              },
              {
                name: "البطاطا",
                image:
                  "https://placehold.co/200x150/png?text=بطاطا+صورة+طعام+فيتامين+B5",
                vitaminAmount: "0.6 ملغ فيتامين ب5 لكل 100 جرام",
              },
            ],
          },
          "Vitamin B6": {
            name: "فيتامين ب6 (بيريدوكسين)",
            definition:
              "فيتامين ب6 يشارك في عمليات الأيض ووظائف الجهاز العصبي.",
            benefits:
              "يدعم الأيض، صحة الدماغ، وتكوين خلايا الدم الحمراء.",
            dailyNeeds: "1.3-1.7 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "التهاب الجلد، الاكتئاب، والارتباك.",
            foodSources: [
              {
                name: "الموز",
                image:
                  "https://placehold.co/200x150/png?text=موز+صورة+طعام+فيتامين+B6",
                vitaminAmount: "0.4 ملغ فيتامين ب6 لكل 100 جرام",
              },
              {
                name: "الدجاج",
                image:
                  "https://placehold.co/200x150/png?text=دجاج+صورة+طعام+فيتامين+B6",
                vitaminAmount: "0.5 ملغ فيتامين ب6 لكل 100 جرام",
              },
              {
                name: "البطاطا",
                image:
                  "https://placehold.co/200x150/png?text=بطاطا+صورة+طعام+فيتامين+B6",
                vitaminAmount: "0.3 ملغ فيتامين ب6 لكل 100 جرام",
              },
            ],
          },
          "Vitamin B9": {
            name: "فيتامين ب9 (حمض الفوليك)",
            definition:
              "فيتامين ب9 ضروري لتكوين الحمض النووي وتكوين خلايا الدم الحمراء.",
            benefits:
              "يدعم النمو الخلوي، يمنع التشوهات الخلقية، ويحسن صحة القلب.",
            dailyNeeds: "400 ميكروغرام للبالغين يوميًا.",
            deficiencySymptoms:
              "فقر الدم، التعب، وتشوهات الأنبوب العصبي عند الأجنة.",
            foodSources: [
              {
                name: "السبانخ",
                image:
                  "https://placehold.co/200x150/png?text=سبانخ+صورة+طعام+فيتامين+B9",
                vitaminAmount: "194 ميكروغرام فيتامين ب9 لكل 100 جرام",
              },
              {
                name: "العدس",
                image:
                  "https://placehold.co/200x150/png?text=عدس+صورة+طعام+فيتامين+B9",
                vitaminAmount: "181 ميكروغرام فيتامين ب9 لكل 100 جرام",
              },
              {
                name: "الأفوكادو",
                image:
                  "https://placehold.co/200x150/png?text=أفوكادو+صورة+طعام+فيتامين+B9",
                vitaminAmount: "81 ميكروغرام فيتامين ب9 لكل 100 جرام",
              },
            ],
          },
          "Vitamin B12": {
            name: "فيتامين ب12 (كوبالامين)",
            definition:
              "فيتامين ب12 ضروري لتكوين خلايا الدم الحمراء ووظائف الجهاز العصبي.",
            benefits:
              "يدعم تكوين الدم، صحة الأعصاب، والوظائف الإدراكية.",
            dailyNeeds: "2.4 ميكروغرام للبالغين يوميًا.",
            deficiencySymptoms:
              "فقر الدم، التنميل، ومشاكل في الذاكرة.",
            foodSources: [
              {
                name: "اللحوم الحمراء",
                image:
                  "https://placehold.co/200x150/png?text=لحوم+حمراء+صورة+طعام+فيتامين+B12",
                vitaminAmount: "2.6 ميكروغرام فيتامين ب12 لكل 100 جرام",
              },
              {
                name: "الأسماك",
                image:
                  "https://placehold.co/200x150/png?text=أسماك+صورة+طعام+فيتامين+B12",
                vitaminAmount: "3.2 ميكروغرام فيتامين ب12 لكل 100 جرام",
              },
              {
                name: "البيض",
                image:
                  "https://placehold.co/200x150/png?text=بيض+صورة+طعام+فيتامين+B12",
                vitaminAmount: "1.1 ميكروغرام فيتامين ب12 لكل 100 جرام",
              },
            ],
          },
          Choline: {
            name: "كولين",
            definition:
              "الكولين مهم لوظائف الكبد، الدماغ، والعضلات.",
            benefits:
              "يدعم صحة الكبد، وظائف الدماغ، وتطور الأعصاب.",
            dailyNeeds: "425-550 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "تلف الكبد، ضعف العضلات، ومشاكل في الذاكرة.",
            foodSources: [
              {
                name: "البيض",
                image:
                  "https://placehold.co/200x150/png?text=بيض+صورة+طعام+كولين",
                vitaminAmount: "147 ملغ كولين لكل 100 جرام",
              },
              {
                name: "الكبد",
                image:
                  "https://placehold.co/200x150/png?text=كبد+صورة+طعام+كولين",
                vitaminAmount: "420 ملغ كولين لكل 100 جرام",
              },
              {
                name: "اللوز",
                image:
                  "https://placehold.co/200x150/png?text=لوز+صورة+طعام+كولين",
                vitaminAmount: "52 ملغ كولين لكل 100 جرام",
              },
            ],
          },
          "Vitamin C": {
            name: "فيتامين ج",
            definition:
              "فيتامين ج مضاد للأكسدة ويساعد في تقوية المناعة.",
            benefits:
              "يعزز المناعة، يساعد في التئام الجروح، ويحسن امتصاص الحديد.",
            dailyNeeds: "75-90 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "نزيف اللثة، ضعف المناعة، والتعب.",
            foodSources: [
              {
                name: "البرتقال",
                image:
                  "https://placehold.co/200x150/png?text=برتقال+صورة+طعام+فيتامين+C",
                vitaminAmount: "53 ملغ فيتامين ج لكل 100 جرام",
              },
              {
                name: "الفراولة",
                image:
                  "https://placehold.co/200x150/png?text=فراولة+صورة+طعام+فيتامين+C",
                vitaminAmount: "59 ملغ فيتامين ج لكل 100 جرام",
              },
              {
                name: "الفلفل الأحمر",
                image:
                  "https://placehold.co/200x150/png?text=فلفل+أحمر+صورة+طعام+فيتامين+C",
                vitaminAmount: "127 ملغ فيتامين ج لكل 100 جرام",
              },
            ],
          },
          "Vitamin D": {
            name: "فيتامين د",
            definition:
              "فيتامين د ضروري لصحة العظام وتنظيم الكالسيوم.",
            benefits:
              "يعزز امتصاص الكالسيوم، يدعم صحة العظام، ويقوي الجهاز المناعي.",
            dailyNeeds: "600-800 وحدة دولية للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف العظام، الكساح، وآلام العضلات.",
            foodSources: [
              {
                name: "سمك السلمون",
                image:
                  "https://placehold.co/200x150/png?text=سلمون+صورة+طعام+فيتامين+D",
                vitaminAmount: "526 وحدة دولية فيتامين د لكل 100 جرام",
              },
              {
                name: "صفار البيض",
                image:
                  "https://placehold.co/200x150/png?text=صفار+بيض+صورة+طعام+فيتامين+D",
                vitaminAmount: "37 وحدة دولية فيتامين د لكل 100 جرام",
              },
              {
                name: "الحليب المدعم",
                image:
                  "https://placehold.co/200x150/png?text=حليب+مدعم+صورة+طعام+فيتامين+D",
                vitaminAmount: "49 وحدة دولية فيتامين د لكل 100 جرام",
              },
            ],
          },
          "Vitamin E": {
            name: "فيتامين هـ",
            definition:
              "فيتامين هـ مضاد للأكسدة يحمي الخلايا من التلف.",
            benefits:
              "يحمي الخلايا، يدعم المناعة، ويحسن صحة الجلد.",
            dailyNeeds: "15 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف العضلات، مشاكل في الرؤية، واضطرابات الأعصاب.",
            foodSources: [
              {
                name: "اللوز",
                image:
                  "https://placehold.co/200x150/png?text=لوز+صورة+طعام+فيتامين+E",
                vitaminAmount: "25.6 ملغ فيتامين هـ لكل 100 جرام",
              },
              {
                name: "السبانخ",
                image:
                  "https://placehold.co/200x150/png?text=سبانخ+صورة+طعام+فيتامين+E",
                vitaminAmount: "2.0 ملغ فيتامين هـ لكل 100 جرام",
              },
              {
                name: "زيت دوار الشمس",
                image:
                  "https://placehold.co/200x150/png?text=زيت+دوار+شمس+صورة+طعام+فيتامين+E",
                vitaminAmount: "41.1 ملغ فيتامين هـ لكل 100 جرام",
              },
            ],
          },
          "Vitamin K1": {
            name: "فيتامين ك1",
            definition:
              "فيتامين ك1 ضروري لتخثر الدم وصحة العظام.",
            benefits:
              "يساعد في تخثر الدم، يدعم صحة العظام، ويمنع النزيف.",
            dailyNeeds: "90-120 ميكروغرام للبالغين يوميًا.",
            deficiencySymptoms:
              "نزيف غير طبيعي، سهولة الكدمات، وضعف العظام.",
            foodSources: [
              {
                name: "الكرنب",
                image:
                  "https://placehold.co/200x150/png?text=كرنب+صورة+طعام+فيتامين+K1",
                vitaminAmount: "817 ميكروغرام فيتامين ك1 لكل 100 جرام",
              },
              {
                name: "السبانخ",
                image:
                  "https://placehold.co/200x150/png?text=سبانخ+صورة+طعام+فيتامين+K1",
                vitaminAmount: "483 ميكروغرام فيتامين ك1 لكل 100 جرام",
              },
              {
                name: "الخس",
                image:
                  "https://placehold.co/200x150/png?text=خس+صورة+طعام+فيتامين+K1",
                vitaminAmount: "126 ميكروغرام فيتامين ك1 لكل 100 جرام",
              },
            ],
          },
          "Vitamin K2": {
            name: "فيتامين ك2",
            definition:
              "فيتامين ك2 يدعم صحة العظام والأوعية الدموية.",
            benefits:
              "يعزز صحة العظام، يمنع ترسب الكالسيوم في الشرايين، ويدعم صحة القلب.",
            dailyNeeds: "90-120 ميكروغرام للبالغين يوميًا.",
            deficiencySymptoms:
              "مشاكل في العظام، تصلب الشرايين، ونزيف.",
            foodSources: [
              {
                name: "الجبن",
                image:
                  "https://placehold.co/200x150/png?text=جبن+صورة+طعام+فيتامين+K2",
                vitaminAmount: "76 ميكروغرام فيتامين ك2 لكل 100 جرام",
              },
              {
                name: "ناتو (فول الصويا المخمر)",
                image:
                  "https://placehold.co/200x150/png?text=ناتو+صورة+طعام+فيتامين+K2",
                vitaminAmount: "1103 ميكروغرام فيتامين ك2 لكل 100 جرام",
              },
              {
                name: "البيض",
                image:
                  "https://placehold.co/200x150/png?text=بيض+صورة+طعام+فيتامين+K2",
                vitaminAmount: "32 ميكروغرام فيتامين ك2 لكل 100 جرام",
              },
            ],
          },
        },
      },
      minerals: {
        title: "المعادن",
        items: {
          Iron: {
            name: "الحديد",
            definition:
              "الحديد معدن ضروري لتكوين الهيموغلوبين في الدم ونقل الأكسجين.",
            benefits:
              "يساعد في نقل الأكسجين، دعم الجهاز المناعي، وتحسين الطاقة.",
            dailyNeeds: "8-18 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "فقر الدم، التعب، ضعف التركيز، وشحوب الجلد.",
            foodSources: [
              {
                name: "اللحوم الحمراء",
                image:
                  "https://placehold.co/200x150/png?text=لحوم+حمراء+صورة+طعام+حديد",
                vitaminAmount: "2.6 ملغ حديد لكل 100 جرام",
              },
              {
                name: "السبانخ",
                image:
                  "https://placehold.co/200x150/png?text=سبانخ+صورة+طعام+حديد",
                vitaminAmount: "2.7 ملغ حديد لكل 100 جرام",
              },
              {
                name: "العدس",
                image:
                  "https://placehold.co/200x150/png?text=عدس+صورة+طعام+حديد",
                vitaminAmount: "3.3 ملغ حديد لكل 100 جرام",
              },
            ],
          },
          Calcium: {
            name: "الكالسيوم",
            definition:
              "الكالسيوم معدن مهم لصحة العظام والأسنان ووظائف العضلات.",
            benefits:
              "يدعم صحة العظام، وظيفة العضلات، وتخثر الدم.",
            dailyNeeds: "1000 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف العظام، تشنجات عضلية، وتسوس الأسنان.",
            foodSources: [
              {
                name: "الحليب ومنتجاته",
                image:
                  "https://placehold.co/200x150/png?text=حليب+صورة+طعام+كالسيوم",
                vitaminAmount: "120 ملغ كالسيوم لكل 100 جرام",
              },
              {
                name: "الجبن",
                image:
                  "https://placehold.co/200x150/png?text=جبن+صورة+طعام+كالسيوم",
                vitaminAmount: "721 ملغ كالسيوم لكل 100 جرام",
              },
              {
                name: "السبانخ",
                image:
                  "https://placehold.co/200x150/png?text=سبانخ+صورة+طعام+كالسيوم",
                vitaminAmount: "99 ملغ كالسيوم لكل 100 جرام",
              },
            ],
          },
          Sodium: {
            name: "الصوديوم",
            definition:
              "الصوديوم معدن ضروري لتنظيم توازن السوائل ووظائف الأعصاب والعضلات.",
            benefits:
              "يساعد في تنظيم ضغط الدم، توازن السوائل، ووظائف الأعصاب.",
            dailyNeeds: "1500 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "تشنجات عضلية، دوار، وضعف التركيز.",
            foodSources: [
              {
                name: "الملح",
                image:
                  "https://placehold.co/200x150/png?text=ملح+صورة+طعام+صوديوم",
                vitaminAmount: "38758 ملغ صوديوم لكل 100 جرام",
              },
              {
                name: "الخبز",
                image:
                  "https://placehold.co/200x150/png?text=خبز+صورة+طعام+صوديوم",
                vitaminAmount: "491 ملغ صوديوم لكل 100 جرام",
              },
              {
                name: "الجبن",
                image:
                  "https://placehold.co/200x150/png?text=جبن+صورة+طعام+صوديوم",
                vitaminAmount: "621 ملغ صوديوم لكل 100 جرام",
              },
            ],
          },
          Potassium: {
            name: "البوتاسيوم",
            definition:
              "البوتاسيوم معدن مهم لوظائف القلب والعضلات وتوازن السوائل.",
            benefits:
              "يدعم وظيفة القلب، العضلات، وتوازن السوائل في الجسم.",
            dailyNeeds: "2600-3400 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف العضلات، تشنجات، واضطرابات في ضربات القلب.",
            foodSources: [
              {
                name: "الموز",
                image:
                  "https://placehold.co/200x150/png?text=موز+صورة+طعام+بوتاسيوم",
                vitaminAmount: "358 ملغ بوتاسيوم لكل 100 جرام",
              },
              {
                name: "البطاطا",
                image:
                  "https://placehold.co/200x150/png?text=بطاطا+صورة+طعام+بوتاسيوم",
                vitaminAmount: "421 ملغ بوتاسيوم لكل 100 جرام",
              },
              {
                name: "السبانخ",
                image:
                  "https://placehold.co/200x150/png?text=سبانخ+صورة+طعام+بوتاسيوم",
                vitaminAmount: "558 ملغ بوتاسيوم لكل 100 جرام",
              },
            ],
          },
          Phosphorus: {
            name: "الفوسفور",
            definition:
              "الفوسفور معدن ضروري لتكوين العظام والأسنان وإنتاج الطاقة.",
            benefits:
              "يدعم صحة العظام، إنتاج الطاقة، ووظائف الخلايا.",
            dailyNeeds: "700 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف العظام، تعب، وضعف العضلات.",
            foodSources: [
              {
                name: "اللحوم",
                image:
                  "https://placehold.co/200x150/png?text=لحوم+صورة+طعام+فوسفور",
                vitaminAmount: "200 ملغ فوسفور لكل 100 جرام",
              },
              {
                name: "الأسماك",
                image:
                  "https://placehold.co/200x150/png?text=أسماك+صورة+طعام+فوسفور",
                vitaminAmount: "300 ملغ فوسفور لكل 100 جرام",
              },
              {
                name: "الحليب",
                image:
                  "https://placehold.co/200x150/png?text=حليب+صورة+طعام+فوسفور",
                vitaminAmount: "95 ملغ فوسفور لكل 100 جرام",
              },
            ],
          },
          Zinc: {
            name: "الزنك",
            definition:
              "الزنك معدن مهم لوظائف المناعة، التئام الجروح، والنمو.",
            benefits:
              "يدعم الجهاز المناعي، التئام الجروح، ووظائف الخلايا.",
            dailyNeeds: "8-11 ملغ للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف المناعة، تأخر التئام الجروح، وفقدان الشهية.",
            foodSources: [
              {
                name: "اللحوم الحمراء",
                image:
                  "https://placehold.co/200x150/png?text=لحوم+حمراء+صورة+طعام+زنك",
                vitaminAmount: "4.8 ملغ زنك لكل 100 جرام",
              },
              {
                name: "المحار",
                image:
                  "https://placehold.co/200x150/png?text=محار+صورة+طعام+زنك",
                vitaminAmount: "16 ملغ زنك لكل 100 جرام",
              },
              {
                name: "البذور",
                image:
                  "https://placehold.co/200x150/png?text=بذور+صورة+طعام+زنك",
                vitaminAmount: "7.8 ملغ زنك لكل 100 جرام",
              },
            ],
          },
        },
      },
      fats: {
        title: "الدهون",
        items: {
          Fat: {
            name: "الدهون",
            definition:
              "الدهون هي مصدر مركز للطاقة وتساعد في امتصاص الفيتامينات.",
            benefits:
              "توفر الطاقة، تحمي الأعضاء، وتساعد في امتصاص الفيتامينات.",
            dailyNeeds: "20-35% من السعرات اليومية.",
            deficiencySymptoms:
              "جفاف الجلد، ضعف المناعة، ومشاكل في النمو.",
            foodSources: [
              {
                name: "زيت الزيتون",
                image:
                  "https://placehold.co/200x150/png?text=زيت+زيتون+صورة+طعام+دهون",
                vitaminAmount: "100 جرام دهون لكل 100 جرام",
              },
              {
                name: "الأفوكادو",
                image:
                  "https://placehold.co/200x150/png?text=أفوكادو+صورة+طعام+دهون",
                vitaminAmount: "15 جرام دهون لكل 100 جرام",
              },
              {
                name: "المكسرات",
                image:
                  "https://placehold.co/200x150/png?text=مكسرات+صورة+طعام+دهون",
                vitaminAmount: "50 جرام دهون لكل 100 جرام",
              },
            ],
          },
        },
      },
      carbohydrates: {
        title: "الكربوهيدرات",
        items: {
          Carbohydrates: {
            name: "الكربوهيدرات",
            definition:
              "الكربوهيدرات هي المصدر الرئيسي للطاقة في الجسم.",
            benefits:
              "توفر الطاقة، تدعم وظائف الدماغ، وتحافظ على صحة الجهاز الهضمي.",
            dailyNeeds: "45-65% من السعرات اليومية.",
            deficiencySymptoms:
              "التعب، ضعف التركيز، وفقدان الوزن.",
            foodSources: [
              {
                name: "الخبز",
                image:
                  "https://placehold.co/200x150/png?text=خبز+صورة+طعام+كربوهيدرات",
                vitaminAmount: "49 جرام كربوهيدرات لكل 100 جرام",
              },
              {
                name: "الأرز",
                image:
                  "https://placehold.co/200x150/png?text=أرز+صورة+طعام+كربوهيدرات",
                vitaminAmount: "28 جرام كربوهيدرات لكل 100 جرام",
              },
              {
                name: "المكرونة",
                image:
                  "https://placehold.co/200x150/png?text=مكرونة+صورة+طعام+كربوهيدرات",
                vitaminAmount: "25 جرام كربوهيدرات لكل 100 جرام",
              },
            ],
          },
        },
      },
      others: {
        title: "عناصر أخرى",
        items: {
          Water: {
            name: "الماء",
            definition:
              "الماء هو عنصر أساسي للحياة ويدعم جميع وظائف الجسم.",
            benefits:
              "يرطب الجسم، ينظم درجة الحرارة، ويساعد في التخلص من السموم.",
            dailyNeeds: "2-3 لترات يوميًا.",
            deficiencySymptoms:
              "الجفاف، الصداع، والتعب.",
            foodSources: [
              {
                name: "الماء",
                image:
                  "https://placehold.co/200x150/png?text=ماء+صورة+طعام+ماء",
                vitaminAmount: "100% ماء",
              },
              {
                name: "الخيار",
                image:
                  "https://placehold.co/200x150/png?text=خيار+صورة+طعام+ماء",
                vitaminAmount: "95% ماء",
              },
              {
                name: "البطيخ",
                image:
                  "https://placehold.co/200x150/png?text=بطيخ+صورة+طعام+ماء",
                vitaminAmount: "92% ماء",
              },
            ],
          },
          Caffeine: {
            name: "الكافيين",
            definition:
              "الكافيين هو منبه طبيعي يؤثر على الجهاز العصبي المركزي.",
            benefits:
              "يزيد اليقظة، يحسن التركيز، ويقلل التعب.",
            dailyNeeds: "حتى 400 ملغ يوميًا.",
            deficiencySymptoms:
              "الصداع، التعب، وانخفاض التركيز.",
            foodSources: [
              {
                name: "القهوة",
                image:
                  "https://placehold.co/200x150/png?text=قهوة+صورة+طعام+كافيين",
                vitaminAmount: "40-175 ملغ كافيين لكل كوب",
              },
              {
                name: "الشاي",
                image:
                  "https://placehold.co/200x150/png?text=شاي+صورة+طعام+كافيين",
                vitaminAmount: "20-70 ملغ كافيين لكل كوب",
              },
              {
                name: "مشروبات الطاقة",
                image:
                  "https://placehold.co/200x150/png?text=مشروب+طاقة+صورة+طعام+كافيين",
                vitaminAmount: "80 ملغ كافيين لكل 250 مل",
              },
            ],
          },
          Protein: {
            name: "البروتين",
            definition:
              "البروتين هو عنصر غذائي أساسي لبناء وإصلاح الأنسجة.",
            benefits:
              "يدعم نمو العضلات، إصلاح الأنسجة، وإنتاج الإنزيمات والهرمونات.",
            dailyNeeds: "46-56 جرام للبالغين يوميًا.",
            deficiencySymptoms:
              "ضعف العضلات، تأخر التئام الجروح، وضعف المناعة.",
            foodSources: [
              {
                name: "اللحوم",
                image:
                  "https://placehold.co/200x150/png?text=لحوم+صورة+طعام+بروتين",
                vitaminAmount: "26 جرام بروتين لكل 100 جرام",
              },
              {
                name: "البيض",
                image:
                  "https://placehold.co/200x150/png?text=بيض+صورة+طعام+بروتين",
                vitaminAmount: "13 جرام بروتين لكل 100 جرام",
              },
              {
                name: "العدس",
                image:
                  "https://placehold.co/200x150/png?text=عدس+صورة+طعام+بروتين",
                vitaminAmount: "9 جرام بروتين لكل 100 جرام",
              },
            ],
          },
          Cholesterol: {
            name: "الكوليسترول",
            definition:
              "الكوليسترول مادة دهنية ضرورية لتكوين الخلايا والهرمونات.",
            benefits:
              "يدعم تكوين الخلايا، إنتاج الهرمونات، ووظائف الجهاز العصبي.",
            dailyNeeds: "أقل من 300 ملغ يوميًا.",
            deficiencySymptoms:
              "نادراً ما يحدث نقص، لكن قد يؤثر على وظائف الخلايا.",
            foodSources: [
              {
                name: "اللحوم الحمراء",
                image:
                  "https://placehold.co/200x150/png?text=لحوم+حمراء+صورة+طعام+كوليسترول",
                vitaminAmount: "70 ملغ كوليسترول لكل 100 جرام",
              },
              {
                name: "البيض",
                image:
                  "https://placehold.co/200x150/png?text=بيض+صورة+طعام+كوليسترول",
                vitaminAmount: "373 ملغ كوليسترول لكل 100 جرام",
              },
              {
                name: "الجبن",
                image:
                  "https://placehold.co/200x150/png?text=جبن+صورة+طعام+كوليسترول",
                vitaminAmount: "100 ملغ كوليسترول لكل 100 جرام",
              },
            ],
          },
        },
      },
      calories: {
        title: "السعرات الحرارية",
        items: {
          calories: {
            name: "السعرات الحرارية",
            definition:
              "السعرات الحرارية هي وحدة قياس الطاقة التي يحصل عليها الجسم من الطعام.",
            benefits:
              "توفر الطاقة اللازمة للقيام بالأنشطة اليومية ووظائف الجسم الحيوية.",
            dailyNeeds: "تختلف حسب العمر، الجنس، ومستوى النشاط البدني.",
            deficiencySymptoms:
              "الشعور بالتعب، فقدان الوزن، وضعف الأداء البدني.",
          },
        },
      },
    };

    // Elements
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const overlay = document.getElementById("overlay");
    const favoritesBtn = document.getElementById("favoritesBtn");
    const favoritesModal = document.getElementById("favoritesModal");
    const closeFavoritesBtn = document.getElementById("closeFavoritesBtn");
    const favoritesList = document.getElementById("favoritesList");

    const nutrientListModal = document.getElementById("nutrientListModal");
    const closeNutrientListBtn = document.getElementById("closeNutrientListBtn");
    const nutrientListTitle = document.getElementById("nutrientListTitle");
    const nutrientList = document.getElementById("nutrientList");
    const nutrientSearchInput = document.getElementById("nutrientSearchInput");
    const nutrientSearchBtn = document.getElementById("nutrientSearchBtn");

    const nutrientDetailModal = document.getElementById("nutrientDetailModal");
    const closeNutrientDetailBtn = document.getElementById("closeNutrientDetailBtn");
    const nutrientDetailTitle = document.getElementById("nutrientDetailTitle");
    const nutrientDefinition = document.getElementById("nutrientDefinition");
    const nutrientBenefits = document.getElementById("nutrientBenefits");
    const nutrientDailyNeeds = document.getElementById("nutrientDailyNeeds");
    const nutrientDeficiencySymptoms = document.getElementById("nutrientDeficiencySymptoms");
    const nutrientFoodSourcesBtnContainer = document.getElementById("nutrientFoodSourcesBtnContainer");
    const showNutrientFoodSourcesBtn = document.getElementById("showNutrientFoodSourcesBtn");

    const foodSourcesModal = document.getElementById("foodSourcesModal");
    const closeFoodSourcesBtn = document.getElementById("closeFoodSourcesBtn");
    const foodSourcesTitle = document.getElementById("foodSourcesTitle");
    const foodSearchInput = document.getElementById("foodSearchInput");
    const foodSearchBtn = document.getElementById("foodSearchBtn");
    const foodList = document.getElementById("foodList");

    const foodDetailModal = document.getElementById("foodDetailModal");
    const closeFoodDetailBtn = document.getElementById("closeFoodDetailBtn");
    const foodDetailTitle = document.getElementById("foodDetailTitle");
    const foodDetailImage = document.getElementById("foodDetailImage");
    const foodVitaminAmount = document.getElementById("foodVitaminAmount");
    const foodDetailStarBtn = document.getElementById("foodDetailStarBtn");

    // State
    let currentCategoryKey = null;
    let currentItemKey = null;
    let currentFood = null;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Functions to open/close sidebar
    function openSidebar() {
      sidebarMenu.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      overlay.style.zIndex = "25";
      sidebarMenu.style.zIndex = "30";
    }
    function closeSidebar() {
      sidebarMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      overlay.style.zIndex = "";
      sidebarMenu.style.zIndex = "";
    }

    // Functions to open/close modals
    function openModal(modal) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      overlay.style.zIndex = "35";
      modal.style.zIndex = "40";
      document.body.style.overflow = "hidden";
    }
    function closeModal(modal) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
      overlay.style.zIndex = "";
      modal.style.zIndex = "";
      document.body.style.overflow = "";
    }

    // Hamburger menu events
    hamburgerBtn.addEventListener("click", openSidebar);
    closeSidebarBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", () => {
      closeSidebar();
      closeModal(favoritesModal);
      closeModal(nutrientListModal);
      closeModal(nutrientDetailModal);
      closeModal(foodSourcesModal);
      closeModal(foodDetailModal);
    });

    // Favorites modal events
    favoritesBtn.addEventListener("click", () => {
      renderFavorites();
      openModal(favoritesModal);
    });
    closeFavoritesBtn.addEventListener("click", () => {
      closeModal(favoritesModal);
    });

    // Render favorites list
    function renderFavorites() {
      favoritesList.innerHTML = "";
      if (favorites.length === 0) {
        favoritesList.innerHTML =
          '<li class="text-center text-gray-500">لا توجد أطعمة مفضلة حتى الآن.</li>';
        return;
      }
      favorites.forEach((food) => {
        const li = document.createElement("li");
        li.className =
          "flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded p-2";
        li.setAttribute("tabindex", "0");
        li.setAttribute("role", "button");
        li.setAttribute("aria-label", `عرض تفاصيل ${food.name}`);
        li.textContent = food.name;
        li.addEventListener("click", () => {
          openFoodDetail(food);
          closeModal(favoritesModal);
        });
        li.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openFoodDetail(food);
            closeModal(favoritesModal);
          }
        });
        favoritesList.appendChild(li);
      });
    }

    // Open nutrient list modal
    function openNutrientList(categoryKey) {
      currentCategoryKey = categoryKey;
      nutrientListTitle.textContent = nutrientsData[categoryKey].title;
      nutrientSearchInput.value = "";
      renderNutrientList();
      openModal(nutrientListModal);
    }

    // Render nutrient list with optional filter
    function renderNutrientList(filter = "") {
      nutrientList.innerHTML = "";
      const items = Object.values(nutrientsData[currentCategoryKey].items).filter((item) =>
        item.name.includes(filter)
      );
      if (items.length === 0) {
        nutrientList.innerHTML =
          '<li class="col-span-2 text-center text-gray-500">لا توجد عناصر مطابقة للبحث.</li>';
        return;
      }
      items.forEach((item) => {
        const li = document.createElement("li");
        li.className =
          "cursor-pointer border border-[#3a9ca6] rounded-md p-3 text-center hover:bg-[#3a9ca6] hover:text-white transition-colors";
        li.textContent = item.name;
        li.setAttribute("tabindex", "0");
        li.setAttribute("role", "button");
        li.setAttribute("aria-label", `عرض تفاصيل ${item.name}`);
        li.addEventListener("click", () => {
          openNutrientDetail(item.name);
        });
        li.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openNutrientDetail(item.name);
          }
        });
        nutrientList.appendChild(li);
      });
    }

    nutrientSearchBtn.addEventListener("click", () => {
      renderNutrientList(nutrientSearchInput.value.trim());
    });
    nutrientSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        renderNutrientList(nutrientSearchInput.value.trim());
      }
    });

    closeNutrientListBtn.addEventListener("click", () => {
      closeModal(nutrientListModal);
    });

    // Open nutrient detail modal
    function openNutrientDetail(itemName) {
      const item = Object.values(nutrientsData[currentCategoryKey].items).find(
        (i) => i.name === itemName
      );
      if (!item) return;
      currentItemKey = itemName;
      nutrientDetailTitle.textContent = item.name;
      nutrientDefinition.textContent = item.definition;
      nutrientBenefits.textContent = item.benefits;
      nutrientDailyNeeds.textContent = item.dailyNeeds;
      nutrientDeficiencySymptoms.textContent = item.deficiencySymptoms;
      // Show or hide food sources button depending on presence of foodSources
      if (item.foodSources && item.foodSources.length > 0) {
        nutrientFoodSourcesBtnContainer.style.display = "block";
      } else {
        nutrientFoodSourcesBtnContainer.style.display = "none";
      }
      closeModal(nutrientListModal);
      closeModal(foodSourcesModal);
      closeModal(foodDetailModal);
      openModal(nutrientDetailModal);
    }

    closeNutrientDetailBtn.addEventListener("click", () => {
      closeModal(nutrientDetailModal);
    });

    // Food sources modal logic
    showNutrientFoodSourcesBtn.addEventListener("click", () => {
      renderFoodSources();
      openModal(foodSourcesModal);
      closeModal(nutrientDetailModal);
    });
    closeFoodSourcesBtn.addEventListener("click", () => {
      closeModal(foodSourcesModal);
    });

    function renderFoodSources(filter = "") {
      const item = Object.values(nutrientsData[currentCategoryKey].items).find(
        (i) => i.name === currentItemKey
      );
      if (!item || !item.foodSources) return;
      foodSourcesTitle.textContent = `مصادر الغذاء لـ ${item.name}`;
      foodList.innerHTML = "";
      const foods = item.foodSources.filter((food) =>
        food.name.includes(filter)
      );
      if (foods.length === 0) {
        foodList.innerHTML =
          '<li class="col-span-2 text-center text-gray-500">لا توجد أطعمة مطابقة للبحث.</li>';
        return;
      }
      foods.forEach((food) => {
        const li = document.createElement("li");
        li.className =
          "border border-gray-300 rounded-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow";
        li.setAttribute("tabindex", "0");
        li.setAttribute("role", "button");
        li.setAttribute("aria-label", `عرض تفاصيل ${food.name}`);
        const img = document.createElement("img");
        img.src = food.image;
        img.alt = `صورة ${food.name} تحتوي على ${item.name}`;
        img.className = "w-full h-28 object-cover rounded-md mb-2";
        const nameP = document.createElement("p");
        nameP.textContent = food.name;
        nameP.className = "font-semibold text-lg text-center";
        li.appendChild(img);
        li.appendChild(nameP);
        li.addEventListener("click", () => {
          openFoodDetail(food);
          closeModal(foodSourcesModal);
        });
        li.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openFoodDetail(food);
            closeModal(foodSourcesModal);
          }
        });
        foodList.appendChild(li);
      });
    }

    foodSearchBtn.addEventListener("click", () => {
      renderFoodSources(foodSearchInput.value.trim());
    });
    foodSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        renderFoodSources(foodSearchInput.value.trim());
      }
    });

    // Food detail modal logic
    function openFoodDetail(food) {
      currentFood = food;
      foodDetailTitle.textContent = food.name;
      foodDetailImage.src = food.image;
      foodDetailImage.alt = `صورة ${food.name}`;
      foodVitaminAmount.textContent = food.vitaminAmount || "";
      updateFoodStarIcon();
      openModal(foodDetailModal);
    }
    closeFoodDetailBtn.addEventListener("click", () => {
      closeModal(foodDetailModal);
    });

    // Favorite foods logic
    function updateFoodStarIcon() {
      if (isFavorite(currentFood)) {
        foodDetailStarBtn.innerHTML = '<i class="fas fa-star text-yellow-400"></i>';
        foodDetailStarBtn.title = "إزالة من المفضلة";
        foodDetailStarBtn.setAttribute("aria-label", "إزالة من المفضلة");
      } else {
        foodDetailStarBtn.innerHTML = '<i class="far fa-star"></i>';
        foodDetailStarBtn.title = "إضافة إلى المفضلة";
        foodDetailStarBtn.setAttribute("aria-label", "إضافة إلى المفضلة");
      }
    }
    function isFavorite(food) {
      return favorites.some((f) => f.name === food.name);
    }
    foodDetailStarBtn.addEventListener("click", () => {
      if (!currentFood) return;
      if (isFavorite(currentFood)) {
        favorites = favorites.filter((f) => f.name !== currentFood.name);
      } else {
        favorites.push(currentFood);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      updateFoodStarIcon();
    });

    // Accessibility: close modals with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!favoritesModal.classList.contains("hidden")) closeModal(favoritesModal);
        if (!nutrientListModal.classList.contains("hidden")) closeModal(nutrientListModal);
        if (!nutrientDetailModal.classList.contains("hidden")) closeModal(nutrientDetailModal);
        if (!foodSourcesModal.classList.contains("hidden")) closeModal(foodSourcesModal);
        if (!foodDetailModal.classList.contains("hidden")) closeModal(foodDetailModal);
        if (!sidebarMenu.classList.contains("translate-x-full")) closeSidebar();
      }
    });

    // Click handlers for main nutrient icons
    document.querySelectorAll("[data-nutrient]").forEach((el) => {
      el.addEventListener("click", () => {
        const category = el.getAttribute("data-nutrient");
        if (category === "calories") {
          // Show calories detail directly without food sources button
          currentCategoryKey = "calories";
          currentItemKey = "calories";
          const item = nutrientsData.calories.items.calories;
          nutrientDetailTitle.textContent = item.name;
          nutrientDefinition.textContent = item.definition;
          nutrientBenefits.textContent = item.benefits;
          nutrientDailyNeeds.textContent = item.dailyNeeds;
          nutrientDeficiencySymptoms.textContent = item.deficiencySymptoms;
          nutrientFoodSourcesBtnContainer.style.display = "none";
          openModal(nutrientDetailModal);
        } else {
          openNutrientList(category);
        }
      });
    });