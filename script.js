 (() => {
      // Data for recipes (example data for 30 recipes)
      const recipes = [
{
id: 1,
name: "باستا الدجاج المشوي",
calories: 280,
image:"https://up6.cc/2025/10/176495274035491.jpeg",
macros: "بروتين: 24 جم، كربوهيدرات: 40 جم، دهون: 11 جم",
ingredients: [
{ emoji: "🍝", name: "باستا بيني", amount: "50 جم"
},
{ emoji: "🍅", name:"صلصة طماطم معلبة او تم تحضيرها", amount: "70 جم" },
{ emoji: "🍗", name:"صدور دجاج مشوي مقطع", amount: "60 جم" },
{ emoji: "🍄‍🟫", name:"فطر شرائح", amount: "30 جم" },
{ emoji: "", name:"سبانخ", amount: "20 جم" },
{ emoji: "🫒", name:"زيت زيتون", amount: "8 مل" },
{ emoji: "", name:"ملح و فلفل حسب الرغبة", amount: "0 جم" },
{ emoji: "🍀", name:"بقدونس لمسه جماليه", amount: "0 جم" },
        ],

preparation: [
"سلق الباستا: اضف 50 جم و اطبخها نصف نضج قبل 3 دقايق من الوقت المحدد قم بتصفيتها و احتفظ بـ كوب كبير من ماء سلق الباستا جانباً قبل التصفيه ",
 "تحضير حشوة الدجاج والخضار: في مقلاة صغيرة، سخّن زيت الزيتون (8 مل) --- أضف شرائح الفطر واطبخها لمدة 3-4 دقائق حتى تلين --- أضف مكعبات الدجاج المشوي وقلبها لتسخن. --- اضف السبانخ و الملح و الفلفل استمر بالتقليب حتى يذبل السبانخ",
"دمج المكونات: في نفس المقلاة اضف صلصة الطماطم ( 70 جم ) --- اضف ماء سلق الباستا الذي احتفضت به سيساعد على كثافة الصلصة --- اضف الباستا نصف نضج --- اضف خليط الدجاج و الفطر و السبانخ للمقلاة قلب حتى تمتزج تماماً ",
"مشروبك المفضل و الافضل بدون سكر  بالعافيه عليك",
],
        },
{
id: 2,
name: "سلطة فواكه",
          calories: 60,
image:"https://up6.cc/2025/08/175881308746151.jpeg",
macros: "بروتين: 0.6 جم، كربوهيدرات: 15.5 جم، دهون: 0.3 جم",
          ingredients: [
{ emoji: "🍎", name: "تفاح أحمر", amount: "40 جم" },
{ emoji: "🥭", name: "مانجو طازج", amount: "40 جم" },
{ emoji: "🍍", name: "اناساس طازج", amount: "30 جم" },
          ],
preparation: [
"غسل الفواكه وتقطيعها إلى مكعبات صغيرة.",
"وضع الفواكه في طبق التقديم.",
          ],
category: "snacks",
        },
        {
id: 3,
name: "البيض المسلوق والأفوكادو",
calories: 442,
image:"https://up6.cc/2025/10/176513072771191.jpeg",
macros: "بروتين: 20.20 جم، كربوهيدرات: 38 جم، دهون: 24.38 جم",
          ingredients: [
{ emoji: "🥚", name: "بيض متوسط", amount: "حبتين تقريباً 100جم" },
{ emoji: "🍞", name: "توست لوزين ابيض", amount: "شريحتين 60جم" },
{ emoji: "🥑", name: "افوكادو", amount: "نصف الأفوكادو 70جم" },
          ],
     preparation: [
"تحضير البيض: ضع البيض في الماء و على النار لمدة لا تقل عن 10 دقائق",
   "تحضير التوست و الأفوكادو: قم بتحميص التوست حسب الرغبة / الأفوكادو اهرس الكمية المطلوبة في صحن ثم رش عليه فلفل (اختياري)",
"جمع الوجبة: ادهن الأفوكادو على الخبز بالتساوي / قشر البيض المسلوق ثم قطعه إلى شرايح و ضعه فوق الخبز / رش فلفل اسود (اختياري)",
 ],
 category: "breakfast",
    },
{
id: 4,
name: "شوربة دجاج",
          calories: 219,
          image:
            "https://storage.googleapis.com/a1aa/image/db9416ea-ca6a-40bd-33b3-327f4cda7f1b.jpg",
          macros: "بروتين: 20 جم، كربوهيدرات: 10 جم، دهون: 8 جم",
          ingredients: [
            { emoji: "🍗", name: "دجاج", amount: "100 جم" },
            { emoji: "🥕", name: "جزر", amount: "50 جم" },
          ],
          preparation: [
            "سلق الدجاج مع الخضروات.",
            "تقديم الشوربة ساخنة.",
          ],
          category: "lunch",
        },
        {
id: 5,
          name: "سلطة خضراء",
          calories: 150,
          image:
            "https://placehold.co/96x96/png?text=سلطة+خضراء",
          macros: "بروتين: 3 جم، كربوهيدرات: 10 جم، دهون: 7 جم",
          ingredients: [
            { emoji: "🥬", name: "خس", amount: "50 جم" },
            { emoji: "🍅", name: "طماطم", amount: "30 جم" },
          ],
          preparation: [
            "غسل الخضروات.",
            "خلط المكونات معًا.",
          ],
          category: "snacks",
        },
        {
id: 6,
          name: "عصير برتقال",
          calories: 110,
          image:
            "https://placehold.co/96x96/png?text=عصير+برتقال",
          macros: "بروتين: 1 جم، كربوهيدرات: 25 جم، دهون: 0 جم",
          ingredients: [
            { emoji: "🍊", name: "برتقال", amount: "200 مل" },
          ],
          preparation: [
            "عصر البرتقال.",
            "تقديم العصير باردًا.",
          ],
          category: "breakfast",
        },
        {
id: 7,
          name: "شوربة عدس",
          calories: 180,
          image:
            "https://placehold.co/96x96/png?text=شوربة+عدس",
          macros: "بروتين: 12 جم، كربوهيدرات: 30 جم، دهون: 2 جم",
          ingredients: [
            { emoji: "🍲", name: "عدس", amount: "100 جم" },
            { emoji: "🥕", name: "جزر", amount: "50 جم" },
          ],
          preparation: [
            "سلق العدس مع الخضروات.",
            "تقديم الشوربة ساخنة.",
          ],
          category: "dinner",
        },
        {
id: 8,
          name: "ساندويتش دجاج",
          calories: 350,
          image:
            "https://placehold.co/96x96/png?text=ساندويتش+دجاج",
          macros: "بروتين: 25 جم، كربوهيدرات: 30 جم، دهون: 10 جم",
          ingredients: [
            { emoji: "🍗", name: "دجاج", amount: "100 جم" },
            { emoji: "🍞", name: "خبز", amount: "2 شريحة" },
          ],
          preparation: [
            "شوي الدجاج.",
            "وضع الدجاج في الخبز مع الخضروات.",
          ],
          category: "lunch",
        },
        {
id: 9,
          name: "زبادي بالفواكه",
          calories: 120,
          image:
            "https://placehold.co/96x96/png?text=زبادي+بالفواكه",
          macros: "بروتين: 8 جم، كربوهيدرات: 15 جم، دهون: 2 جم",
          ingredients: [
            { emoji: "🍓", name: "فراولة", amount: "50 جم" },
            { emoji: "🍦", name: "زبادي", amount: "100 جم" },
          ],
          preparation: [
            "خلط الزبادي مع الفواكه.",
            "تقديم باردًا.",
          ],
          category: "snacks",
        },
        {
id: 10,
          name: "شوربة خضار",
          calories: 130,
          image:
            "https://placehold.co/96x96/png?text=شوربة+خضار",
          macros: "بروتين: 5 جم، كربوهيدرات: 20 جم، دهون: 3 جم",
          ingredients: [
            { emoji: "🥕", name: "جزر", amount: "50 جم" },
            { emoji: "🥦", name: "بروكلي", amount: "50 جم" },
          ],
          preparation: [
            "سلق الخضروات.",
            "تقديم الشوربة ساخنة.",
          ],
          category: "dinner",
        },
/////المزيد هنا قم بلصقه هنا///////

// أضف المزيد من الوصفات حتى 30 وصفة ذات بنية مماثلة
      ];
updateWaterUI
// املأ ما يصل إلى 30 وصفة ببيانات وهمية إذا كان العدد أقل من 30


      // Elements
      const body = document.body;
      const darkModeBtn = document.getElementById("darkModeBtn");
      const menuBtn = document.getElementById("menuBtn");
      const sideMenu = document.getElementById("sideMenu");
      const closeMenuBtn = document.getElementById("closeMenuBtn");
      const favoritesBtn = document.getElementById("favoritesBtn");
      const favoritesWindow = document.getElementById("favoritesWindow");
      const closeFavoritesBtn = document.getElementById("closeFavoritesBtn");
      const editFavoritesBtn = document.getElementById("editFavoritesBtn");
      const favoritesList = document.getElementById("favoritesList");
      const favoritesEmpty = document.getElementById("favoritesEmpty");
      const recipeDetailWindow = document.getElementById("recipeDetailWindow");
      const closeRecipeDetailBtn = document.getElementById("closeRecipeDetailBtn");
      const recipeDetailImage = document.getElementById("recipeDetailImage");
      const recipeDetailName = document.getElementById("recipeDetailName");
      const recipeDetailCalories = document.getElementById("recipeDetailCalories");
      const recipeDetailMacros = document.getElementById("recipeDetailMacros");
      const recipeIngredients = document.getElementById("recipeIngredients");
      const recipePreparation = document.getElementById("recipePreparation");
      const toggleFavoriteRecipeBtn = document.getElementById("toggleFavoriteRecipeBtn");
      const moreBtn = document.getElementById("moreBtn");
      const moreRecipesWindow = document.getElementById("moreRecipesWindow");
      const closeMoreRecipesBtn = document.getElementById("closeMoreRecipesBtn");
      const moreRecipesList = document.getElementById("moreRecipesList");
      const recipeSearchInput = document.getElementById("recipeSearchInput");
      const calorieFilter = document.getElementById("calorieFilter");
      const homeRecipesList = document.getElementById("homeRecipesList");
      const privacyPolicyBtn = document.getElementById("privacyPolicyBtn");
      const privacyPolicyWindow = document.getElementById("privacyPolicyWindow");
      const closePrivacyPolicyBtn = document.getElementById("closePrivacyPolicyBtn");
      const waterAmountDisplay = document.getElementById("waterAmountDisplay");
      const waterIncreaseBtn = document.getElementById("waterIncreaseBtn");
      const waterDecreaseBtn = document.getElementById("waterDecreaseBtn");
      const waterQuickInput = document.getElementById("waterQuickInput");
      const waterQuickDoneBtn = document.getElementById("waterQuickDoneBtn");
      const waterGoalInput = document.getElementById("waterGoalInput");
      // ...
const waterProgressBar = document.getElementById("waterProgressBar");
const waterProgressPercent = document.getElementById("waterProgressPercent");
const waterCupFill = document.getElementById("waterCupFill"); // NEW
const waterProgressPercentCup = document.getElementById("waterProgressPercentCup"); // NEW
const drinkWaterBtn = document.createElement("button");
// ...
      const resetWaterBtn = document.getElementById("resetWaterBtn");
      const waterDetailsBtn = document.getElementById("waterDetailsBtn");
      const waterDetailsWindow = document.getElementById("waterDetailsWindow");
      const closeWaterDetailsBtn = document.getElementById("closeWaterDetailsBtn");
      const waterLiters = document.getElementById("waterLiters");
      const bestWaterDay = document.getElementById("bestWaterDay");
      const clearWaterDataBtn = document.createElement("button");
      const waterMotivation = document.getElementById("waterMotivation");
      const topImages = document.querySelectorAll("section.flex > img");

      // State
      let darkMode = false;
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      let editingFavorites = false;
      let currentRecipe = null;
      let waterAmount = parseInt(localStorage.getItem("waterAmount")) || 50;
      let waterGoal = parseInt(localStorage.getItem("waterGoal")) || 3000;
      let waterIntakeRecords = JSON.parse(localStorage.getItem("waterIntakeRecords")) || [];

      // Helper functions
      function saveFavorites() {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }

      function saveWaterData() {
        localStorage.setItem("waterAmount", waterAmount);
        localStorage.setItem("waterGoal", waterGoal);
        localStorage.setItem("waterIntakeRecords", JSON.stringify(waterIntakeRecords));
      }

function updateWaterUI() {
  waterAmountDisplay.textContent = waterAmount;
  waterQuickInput.value = waterAmount;
  waterGoalInput.value = waterGoal;
  
  // Calculate current total intake
  const currentIntake = waterIntakeRecords.reduce((a, r) => a + r.amount, 0);
  
  // Calculate percentage (clamped at 100% for the visual fill)
  let percent = Math.min(100, Math.round((currentIntake / waterGoal) * 100));
  
  // Update cup fill and percentage
  waterProgressPercentCup.textContent = percent + "%";
  waterCupFill.style.height = `${percent}%`;
  
  // Update progress bar
  waterProgressPercent.textContent = percent + "%";
  waterProgressBar.style.background = `linear-gradient(to right, #7fb6d9 0%, #7fb6d9 ${percent}%, #a7d1e8 ${percent}%, #a7d1e8 100%)`;
}
waterProgressBar
      function renderRecipeCard(recipe, container, showDelete = false) {
        const card = document.createElement("div");
        card.className = "flex-shrink-0 w-24 relative cursor-pointer select-none";
        card.setAttribute("data-id", recipe.id);
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `فتح وصفة ${recipe.name}`);

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = `صورة وصفة ${recipe.name}`;
        img.className = "w-24 h-24 rounded-xl object-cover";
        card.appendChild(img);

        const nameP = document.createElement("p");
        nameP.className = "text-xs font-semibold mt-1 text-center dark:text-white";
        nameP.textContent = recipe.name;
        card.appendChild(nameP);

        const calP = document.createElement("p");
        calP.className = "text-xs text-center text-gray-600 dark:text-gray-400 flex justify-center items-center space-x-1 space-x-reverse";
        calP.innerHTML = `<span>${recipe.calories}</span><span>CAL</span><i class="fas fa-fire text-red-600 dark:text-red-400 text-xs"></i>`;
        card.appendChild(calP);

        if (showDelete) {
          const deleteBtn = document.createElement("button");
          deleteBtn.className = "absolute top-0 left-0 bg-red-600 text-white rounded-full w-6 h-6 flex justify-center items-center text-sm focus:outline-none";
          deleteBtn.title = "حذف من المفضلة";
          deleteBtn.innerHTML = "&times;";
          deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            removeFavorite(recipe.id);
          });
          card.appendChild(deleteBtn);
        }

        card.addEventListener("click", () => {
          openRecipeDetail(recipe.id);
        });

        container.appendChild(card);
      }

      function renderHomeRecipes() {
        homeRecipesList.innerHTML = "";
        const homeRecipes = recipes.slice(0, 10);
        homeRecipes.forEach((r) => renderRecipeCard(r, homeRecipesList));
      }

      function renderFavorites() {
        favoritesList.innerHTML = "";
        if (favorites.length === 0) {
          favoritesEmpty.style.display = "block";
          return;
        }
        favoritesEmpty.style.display = "none";
        favorites.forEach((id) => {
          const recipe = recipes.find((r) => r.id === id);
          if (recipe) {
            renderRecipeCard(recipe, favoritesList, editingFavorites);
          }
        });
      }

      function openRecipeDetail(id) {
        const recipe = recipes.find((r) => r.id === id);
        if (!recipe) return;
        currentRecipe = recipe;
        recipeDetailImage.src = recipe.image;
        recipeDetailImage.alt = `صورة وصفة ${recipe.name}`;
        recipeDetailName.textContent = recipe.name;
        recipeDetailCalories.textContent = recipe.calories;
        recipeDetailMacros.textContent = recipe.macros;
        recipeIngredients.innerHTML = "";
        recipe.ingredients.forEach((ing) => {
          const li = document.createElement("li");
          li.textContent = `${ing.emoji} ${ing.name}: ${ing.amount}`;
          recipeIngredients.appendChild(li);
        });
        recipePreparation.innerHTML = "";
        recipe.preparation.forEach((step) => {
          const li = document.createElement("li");
          li.textContent = step;
          recipePreparation.appendChild(li);
        });
        updateFavoriteIcon();
        recipeDetailWindow.classList.remove("hidden");
      }

      function updateFavoriteIcon() {
        if (!currentRecipe) return;
        if (favorites.includes(currentRecipe.id)) {
          toggleFavoriteRecipeBtn.innerHTML = '<i class="fas fa-heart"></i>';
          toggleFavoriteRecipeBtn.classList.add("text-red-600");
          toggleFavoriteRecipeBtn.classList.remove("text-red-400");
        } else {
          toggleFavoriteRecipeBtn.innerHTML = '<i class="far fa-heart"></i>';
          toggleFavoriteRecipeBtn.classList.remove("text-red-600");
          toggleFavoriteRecipeBtn.classList.add("text-red-400");
        }
      }

      function toggleFavoriteCurrentRecipe() {
        if (!currentRecipe) return;
        const index = favorites.indexOf(currentRecipe.id);
        if (index === -1) {
          favorites.push(currentRecipe.id);
        } else {
          favorites.splice(index, 1);
        }
        saveFavorites();
        updateFavoriteIcon();
        renderFavorites();
      }

      function removeFavorite(id) {
        const index = favorites.indexOf(id);
        if (index !== -1) {
          favorites.splice(index, 1);
          saveFavorites();
          renderFavorites();
        }
      }

      function openFavorites() {
        editingFavorites = false;
        editFavoritesBtn.textContent = "تعديل";
        renderFavorites();
        favoritesWindow.classList.remove("hidden");
      }

      function closeFavorites() {
        favoritesWindow.classList.add("hidden");
        editingFavorites = false;
        editFavoritesBtn.textContent = "تعديل";
      }

      function toggleEditFavorites() {
        editingFavorites = !editingFavorites;
        editFavoritesBtn.textContent = editingFavorites ? "تم" : "تعديل";
        renderFavorites();
      }

      function openSideMenu() {
        sideMenu.classList.remove("translate-x-full");
      }

      function closeSideMenu() {
        sideMenu.classList.add("translate-x-full");
      }

      function toggleDarkMode() {
        darkMode = !darkMode;
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("darkMode", "true");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("darkMode", "false");
        }
      }

      function openMoreRecipes() {
        moreRecipesWindow.classList.remove("hidden");
        renderMoreRecipes();
      }

      function closeMoreRecipes() {
        moreRecipesWindow.classList.add("hidden");
        recipeSearchInput.value = "";
        calorieFilter.value = "all";
      }

      function renderMoreRecipes() {
        const searchTerm = recipeSearchInput.value.trim().toLowerCase();
        const calorieVal = calorieFilter.value;
        let filtered = recipes;

        if (searchTerm) {
          filtered = filtered.filter((r) => r.name.includes(searchTerm));
        }

        if (calorieVal !== "all") {
          filtered = filtered.filter((r) => {
            if (calorieVal === "low") return r.calories < 200;
            if (calorieVal === "medium") return r.calories >= 200 && r.calories <= 400;
            if (calorieVal === "high") return r.calories > 400;
            return true;
          });
        }

        moreRecipesList.innerHTML = "";
        filtered.slice(0, 30).forEach((r) => renderRecipeCard(r, moreRecipesList));
      }

      function openPrivacyPolicy() {
        privacyPolicyWindow.classList.remove("hidden");
      }

      function closePrivacyPolicy() {
        privacyPolicyWindow.classList.add("hidden");
      }

      function openWaterDetails() {
        waterDetailsWindow.classList.remove("hidden");
        renderWaterDetails();
      }

      function closeWaterDetails() {
        waterDetailsWindow.classList.add("hidden");
      }

      function renderWaterDetails() {
        // Calculate total liters
        const totalMl = waterIntakeRecords.reduce((a, r) => a + r.amount, 0);
        waterLiters.textContent = (totalMl / 1000).toFixed(2);

        // Find best day
        if (waterIntakeRecords.length === 0) {
          bestWaterDay.textContent = "لا يوجد بيانات";
        } else {
          const daySums = {};
          waterIntakeRecords.forEach((r) => {
            const day = new Date(r.date).toLocaleDateString("ar-EG");
            daySums[day] = (daySums[day] || 0) + r.amount;
          });
          const bestDay = Object.entries(daySums).reduce((a, b) => (a[1] > b[1] ? a : b));
          bestWaterDay.textContent = `${bestDay[0]} (${(bestDay[1] / 1000).toFixed(2)} لتر)`;
        }

        // Render chart using Chart.js
        if (!window.Chart) {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/chart.js";
          script.onload = () => renderWaterChart();
          document.head.appendChild(script);
        } else {
          renderWaterChart();
        }
      }

      function renderWaterChart() {
        const ctx = document.getElementById("waterChart").getContext("2d");
        if (window.waterChartInstance) {
          window.waterChartInstance.destroy();
        }
        // Group by day
        const daySums = {};
        waterIntakeRecords.forEach((r) => {
          const day = new Date(r.date).toLocaleDateString("ar-EG");
          daySums[day] = (daySums[day] || 0) + r.amount;
        });
        const labels = Object.keys(daySums);
        const data = Object.values(daySums).map((v) => (v / 1000).toFixed(2));
        window.waterChartInstance = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "لتر",
                data,
                backgroundColor: "#7fb6d9",
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "لتر",
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }

      function addWaterIntake(amount) {
        if (amount <= 0) return;
        waterIntakeRecords.push({ amount, date: new Date().toISOString() });
        saveWaterData();
        updateWaterUI();
      }

      function resetWaterData() {
        waterIntakeRecords = [];
        saveWaterData();
        updateWaterUI();
      }

      // Event Listeners
      darkModeBtn.addEventListener("click", () => {
        toggleDarkMode();
      });

      menuBtn.addEventListener("click", () => {
        openSideMenu();
      });

      closeMenuBtn.addEventListener("click", () => {
        closeSideMenu();
      });

      favoritesBtn.addEventListener("click", () => {
        openFavorites();
      });

      closeFavoritesBtn.addEventListener("click", () => {
        closeFavorites();
      });

      editFavoritesBtn.addEventListener("click", () => {
        toggleEditFavorites();
      });

      toggleFavoriteRecipeBtn.addEventListener("click", () => {
        toggleFavoriteCurrentRecipe();
      });

      closeRecipeDetailBtn.addEventListener("click", () => {
        recipeDetailWindow.classList.add("hidden");
        currentRecipe = null;
      });

      moreBtn.addEventListener("click", () => {
        openMoreRecipes();
      });

      closeMoreRecipesBtn.addEventListener("click", () => {
        closeMoreRecipes();
      });

      recipeSearchInput.addEventListener("input", () => {
        renderMoreRecipes();
      });

      calorieFilter.addEventListener("change", () => {
        renderMoreRecipes();
      });

      moreRecipesList.addEventListener("click", (e) => {
        const card = e.target.closest("[data-id]");
        if (!card) return;
        const id = parseInt(card.getAttribute("data-id"));
        openRecipeDetail(id);
        closeMoreRecipes();
      });

      favoritesList.addEventListener("click", (e) => {
        if (editingFavorites) return; // delete handled by button
        const card = e.target.closest("[data-id]");
        if (!card) return;
        const id = parseInt(card.getAttribute("data-id"));
        openRecipeDetail(id);
        closeFavorites();
      });

      homeRecipesList.addEventListener("click", (e) => {
        const card = e.target.closest("[data-id]");
        if (!card) return;
        const id = parseInt(card.getAttribute("data-id"));
        openRecipeDetail(id);
      });

      // أفضل الصور انقر على الملفات المفتوحة لأول 3 صور
 // تحديد الصور اللي لها data-file
 const images = document.querySelectorAll("img[data-file]");
 
 images.forEach(img => {
   img.addEventListener("click", () => {
     const file = img.getAttribute("data-file");
     if (file) {
       window.location.href = file; // يفتح الملف المرتبط بالصورة
     }
   });
 });
    
///37552852852752852852852852852
      privacyPolicyBtn.addEventListener("click", () => {
        openPrivacyPolicy();
      });

      closePrivacyPolicyBtn.addEventListener("click", () => {
        closePrivacyPolicy();
      });

      waterIncreaseBtn.addEventListener("click", () => {
        waterAmount += 50;
        waterQuickInput.value = waterAmount;
        updateWaterUI();
      });

      waterDecreaseBtn.addEventListener("click", () => {
        waterAmount = Math.max(0, waterAmount - 50);
        waterQuickInput.value = waterAmount;
        updateWaterUI();
      });

      waterQuickDoneBtn.addEventListener("click", () => {
        const val = parseInt(waterQuickInput.value);
        if (!isNaN(val) && val >= 0) {
          waterAmount = val;
          updateWaterUI();
        }
      });

      waterGoalInput.addEventListener("change", () => {
        const val = parseInt(waterGoalInput.value);
        if (!isNaN(val) && val > 0) {
          waterGoal = val;
          saveWaterData();
          updateWaterUI();
        }
      });

      // Drink button
      drinkWaterBtn.textContent = "اشرب";
      drinkWaterBtn.className =
        "mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-1 rounded focus:outline-none";
      drinkWaterBtn.type = "button";
      drinkWaterBtn.title = "تسجيل كمية الماء";
      drinkWaterBtn.addEventListener("click", () => {
        addWaterIntake(waterAmount);
      });
      // Append drink button below waterGoalInput container
      waterGoalInput.parentElement.appendChild(drinkWaterBtn);

      resetWaterBtn.addEventListener("click", () => {
        resetWaterData();
      });

      waterDetailsBtn.addEventListener("click", () => {
        openWaterDetails();
      });

      closeWaterDetailsBtn.addEventListener("click", () => {
        closeWaterDetails();
      });

      clearWaterDataBtn.textContent = "مسح جميع البيانات";
      clearWaterDataBtn.className =
        "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded focus:outline-none mt-4";
      clearWaterDataBtn.addEventListener("click", () => {
        resetWaterData();
        closeWaterDetails();
      });
      waterDetailsWindow.querySelector("div").appendChild(clearWaterDataBtn);

      // Side menu buttons open files (simulate)
      sideMenu.querySelectorAll("button[data-file]").forEach((btn) => {
        btn.addEventListener("click", () => {
          alert(`فتح الملف: ${btn.textContent}`);
          closeSideMenu();
        });
      });

      // Initial render
      renderHomeRecipes();
      renderFavorites();
      updateWaterUI();

      // Load dark mode from localStorage
      if (localStorage.getItem("darkMode") === "true") {
        darkMode = false;
        toggleDarkMode();
      }
    })();
    
