 // Data for exercises with sub exercises and details
    const exercisesData = [
      {
        id: 1,
        name: "عضلات البطن",
        count: 15,
        image: "https://up6.cc/2024/10/172978417464441.jpeg",
        alt: "رسم توضيحي لعضلات البطن باللون الأحمر على جسم بشري رمادي",
        level: "مبتدئ",
        equipment: ["bodyweight"],
        targetMuscle: "عضلات البطن",
        steps:
          "1. استلقِ على ظهرك.\n2. ارفع الجزء العلوي من الجسم نحو الركبتين.\n3. انزل ببطء وكرر.",
        caloriesPerMinute: 8,
        subExercises: [
          {
            id: 101,
            name: "تمرين البطن 1",
            image: "https://placehold.co/150x100/png?text=تمرين+البطن+1",
            level: "مبتدئ",
            equipment: ["bodyweight"],
            targetMuscle: "عضلات البطن",
            videoUrl: "https://www.youtube.com/embed/1minu2v6v5k",
            steps: "1. استلقِ على ظهرك.\n2. ارفع الجزء العلوي من الجسم.\n3. انزل ببطء.",
            caloriesPerMinute: 7,
            repetitions: 10,
            minutesPerRep: 1,
          },
          {
            id: 102,
            name: "تمرين البطن 2",
            image: "https://placehold.co/150x100/png?text=تمرين+البطن+2",
            level: "متوسط",
            equipment: ["bodyweight", "exercise-ball"],
            targetMuscle: "عضلات البطن",
            videoUrl: "https://www.youtube.com/embed/2minu2v6v5k",
            steps: "1. اجلس على الكرة.\n2. قم بتمارين البطن.\n3. استرح وكرر.",
            caloriesPerMinute: 9,
            repetitions: 12,
            minutesPerRep: 1,
          },
        ],
      },
      {
        id: 2,
        name: "الظهر",
        count: 15,
        image: "https://up6.cc/2024/10/172978419937091.jpeg",
        alt: "رسم توضيحي لعضلات الظهر باللون الأحمر على جسم بشري رمادي",
        level: "متوسط",
        equipment: ["machines", "bar"],
        targetMuscle: "الظهر",
        steps: "1. قف مع ثني الركبتين قليلاً.\n2. اسحب الوزن نحو صدرك.\n3. أعد الوزن ببطء.",
        caloriesPerMinute: 10,
        subExercises: [
          {
            id: 201,
            name: "تمرين الظهر 1",
            image: "https://placehold.co/150x100/png?text=تمرين+الظهر+1",
            level: "متوسط",
            equipment: ["machines", "bar"],
            targetMuscle: "الظهر",
            videoUrl: "https://www.youtube.com/embed/3minu2v6v5k",
            steps: "1. قف.\n2. اسحب الوزن.\n3. أعد الوزن.",
            caloriesPerMinute: 11,
            repetitions: 8,
            minutesPerRep: 2,
          },
          {
            id: 202,
            name: "تمرين الظهر 2",
            image: "https://placehold.co/150x100/png?text=تمرين+الظهر+2",
            level: "متقدم",
            equipment: ["machines"],
            targetMuscle: "الظهر",
            videoUrl: "https://www.youtube.com/embed/4minu2v6v5k",
            steps: "1. اجلس.\n2. اسحب.\n3. استرح.",
            caloriesPerMinute: 12,
            repetitions: 10,
            minutesPerRep: 1,
          },
        ],
      },
      {
        id: 4,
        name: "الساقين",
        count: 15,
        image: "https://up6.cc/2024/10/17297883320191.jpeg",
        alt: "رسم توضيحي",
        level: "متقدم",
        equipment: ["machines"],
        targetMuscle: "تمرين ساقين",
        steps: "1. قف مستقيمًا.\n2. ارفع كعبك ببطء.\n3. انزل وكرر.",
        caloriesPerMinute: 6,
        subExercises: [
          {
            id: 401,
            name: "تمرين الرِبْلَة 1",
            image: "https://placehold.co/150x100/png?text=تمرين+الرِبْلَة+1",
            level: "متقدم",
            equipment: ["machines"],
            targetMuscle: "الرِبْلَة",
            videoUrl: "https://www.youtube.com/embed/6minu2v6v5k",
            steps: "1. قف.\n2. ارفع.\n3. انزل.",
            caloriesPerMinute: 5,
            repetitions: 15,
            minutesPerRep: 1,
          },
        ],
      },
      {
        id: 5,
        name: "الصدر",
        count: 15,
        image: "https://up6.cc/2024/10/172972719691361.jpeg",
        alt: "رسم توضيحي لعضلات الصدر باللون الأحمر على جسم بشري رمادي",
        level: "متوسط",
        equipment: ["bench", "bar"],
        targetMuscle: "الصدر",
        steps: "1. استلقِ على المقعد.\n2. ارفع الوزن للأعلى.\n3. انزل ببطء وكرر.",
        caloriesPerMinute: 9,
        subExercises: [
          {
            id: 501,
            name: "تمرين الصدر 1",
            image: "https://placehold.co/150x100/png?text=تمرين+الصدر+1",
            level: "متوسط",
            equipment: ["bench", "bar"],
            targetMuscle: "الصدر",
            videoUrl: "https://www.youtube.com/embed/7minu2v6v5k",
            steps: "1. استلقِ.\n2. ارفع.\n3. انزل.",
            caloriesPerMinute: 8,
            repetitions: 10,
            minutesPerRep: 2,
          },
        ],
      },
      {
        id: 6,
        name: "الفخذ",
        count: 15,
        image:"https://up6.cc/2024/10/17300325433831.jpeg",
        alt: "تمرين الفخذ",
        level: "مبتدئ",
        equipment: ["dumbbells"],
        targetMuscle: "الفخذ",
        steps: "1. امسك.\n2. قم  المعصم.\n3.  ببطء .",
        caloriesPerMinute: 5,
        subExercises: [
          {
            id: 601,
            name: "تمرين الفخذ",
            image: "https://placehold.co/150x100/png?text=تمرين+الساعد+1",
            level: "مبتدئ",
            equipment: ["dumbbells"],
            targetMuscle: "فخذ",
            videoUrl: "https://www.youtube.com/embed/8minu2v6v5k",
            steps: "1. امسك الدمبلز.\n2. اثنِ.\n3. انزل.",
            caloriesPerMinute: 4,
            repetitions: 15,
            minutesPerRep: 1,
          },
        ],
      },
{
id: 6,
name: "الذراعين",
count: 15,
image:"https://up6.cc/2024/10/172978359728521.jpeg",
alt: "تمرين الذراعين",
level: "مبتدئ",
equipment: ["dumbbells"],
targetMuscle: "الذراعين",
steps: "1. امسك.\n2. قم  المعصم.\n3.  ببطء .",
caloriesPerMinute: 5,
subExercises: [
  //هنا التمارين •••••
        ],
      },
    ];

    // User created exercises stored in localStorage key 'userExercises'
    let userExercises = JSON.parse(localStorage.getItem("userExercises") || "[]");

    // Equipment data with images and names
    const equipmentData = [
      {
        id: "all",
        name: "الكل",
        image: "https://www2.0zz0.com/2025/08/30/22/108881877.jpeg",
      },
      {
        id: "resistance-band",
        name: "شريط المقاومة",
        image: "https://www2.0zz0.com/2025/08/30/22/472732292.jpeg",
      },
      {
        id: "bar",
        name: "بار",
        image: "https://www2.0zz0.com/2025/08/30/22/471685808.jpeg",
      },
      {
        id: "machines",
        name: "آلات",
        image: "https://www2.0zz0.com/2025/08/30/22/914116392.jpeg",
      },
      {
        id: "bench",
        name: "مقعد",
        image: "https://www2.0zz0.com/2025/08/30/22/136123699.jpeg",
      },
      {
        id: "dumbbells",
        name: "دمبلز",
        image: "https://www2.0zz0.com/2025/08/30/22/525038262.jpeg",
      },
      {
        id: "bodyweight",
        name: "وزن الجسم",
        image: "https://www2.0zz0.com/2025/08/30/22/236799137.jpeg",
      },
      {
        id: "pull-up-bar",
        name: "بار العقلة",
        image: "https://www2.0zz0.com/2025/08/30/22/239083326.jpeg",
      },
      {
        id: "exercise-ball",
        name: "كرة التمرين",
        image: "https://www2.0zz0.com/2025/08/30/22/576541797.jpeg",
      },
      {
        id: "weight-plates",
        name: "أوزان",
        image: "https://www2.0zz0.com/2025/08/30/22/525480646.jpeg",
      },
      {
        id: "cardio",
        name: "كارديو",
        image: "https://www2.0zz0.com/2025/08/30/22/876575745.jpeg",
      },
      {
        id: "kettlebell",
        name: "كتلبل",
        image: "https://www2.0zz0.com/2025/08/30/22/689831423.jpeg",
      },
      {
        id: "other",
        name: "أخرى",
        image: "https://www2.0zz0.com/2025/08/30/22/753853876.jpeg",
      },
    ];

    // State variables
    let selectedLevel = "all";
    let selectedEquipment = "all";
    let filteredExercises = [...exercisesData];
    let filteredUserExercises = [...userExercises];
    let searchTerm = "";
    let currentTab = "allExercises"; // Changed default to allExercises

    // Timer variables
    let timerInterval = null;
    let timerSeconds = 0;
    let caloriesBurned = 0;
    let currentExerciseCaloriesPerMinute = 0;
    let currentRepetitions = 1;
    let currentMinutesPerRep = 1;

    // DOM Elements
    const sidebar = document.getElementById("sidebar");
    const sidebarOpenBtn = document.getElementById("sidebarOpenBtn");
    const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
    const overlay = document.getElementById("overlay");
    const recordWorkoutBtn = document.getElementById("recordWorkoutBtn");
    const recordWorkoutModal = document.getElementById("recordWorkoutModal");
    const recordWorkoutCloseBtn = document.getElementById("recordWorkoutCloseBtn");
    const workoutTextarea = document.getElementById("workoutTextarea");
    const saveWorkoutBtn = document.getElementById("saveWorkoutBtn");
    const filterOpenBtn = document.getElementById("filterOpenBtn");
    const filterModal = document.getElementById("filterModal");
    const filterCloseBtn = document.getElementById("filterCloseBtn");
    const equipmentList = document.getElementById("equipmentList");
    const showResultsBtn = document.getElementById("showResultsBtn");
    const exercisesList = document.getElementById("exercisesList");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const noExercisesMsg = document.getElementById("noExercisesMsg");
    const subExercisesModal = document.getElementById("subExercisesModal");
    const subExercisesCloseBtn = document.getElementById("subExercisesCloseBtn");
    const subExercisesTitle = document.getElementById("subExercisesTitle");
    const subExercisesList = document.getElementById("subExercisesList");
    const exerciseDetailModal = document.getElementById("exerciseDetailModal");
    const exerciseDetailCloseBtn = document.getElementById("exerciseDetailCloseBtn");
    const exerciseDetailTitle = document.getElementById("exerciseDetailTitle");
    const exerciseDetailImage = document.getElementById("exerciseDetailImage");
    const exerciseDetailVideo = document.getElementById("exerciseDetailVideo");
    const exerciseSteps = document.getElementById("exerciseSteps");
    const exerciseLevel = document.getElementById("exerciseLevel");
    const exerciseEquipment = document.getElementById("exerciseEquipment");
    const exerciseTargetMuscle = document.getElementById("exerciseTargetMuscle");
    const timerDisplay = document.getElementById("timerDisplay");
    const startTimerBtn = document.getElementById("startTimerBtn");
    const stopTimerBtn = document.getElementById("stopTimerBtn");
    const caloriesBurnedSpan = document.getElementById("caloriesBurned");
    const repetitionsInput = document.getElementById("repetitionsInput");
    const minutesPerRepInput = document.getElementById("minutesPerRepInput");
    const createExerciseModal = document.getElementById("createExerciseModal");
    const createExerciseCloseBtn = document.getElementById("createExerciseCloseBtn");
    const createExerciseForm = document.getElementById("createExerciseForm");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const createExerciseTabBtn = document.getElementById("createExerciseTabBtn");

    // Sidebar open/close
    sidebarOpenBtn.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      sidebar.setAttribute("aria-hidden", "false");
      sidebarOpenBtn.setAttribute("aria-expanded", "true");
      sidebarCloseBtn.focus();
    });
    sidebarCloseBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", () => {
      closeSidebar();
      closeRecordWorkoutModal();
      closeFilterModal();
      closeExerciseDetailModal();
      closeSubExercisesModal();
      closeCreateExerciseModal();
    });

    function closeSidebar() {
      sidebar.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      sidebar.setAttribute("aria-hidden", "true");
      sidebarOpenBtn.setAttribute("aria-expanded", "false");
      sidebarOpenBtn.focus();
    }

    // Sidebar links (just close sidebar on click)
    document.querySelectorAll(".sidebar-link").forEach((btn) => {
      btn.addEventListener("click", () => {
        closeSidebar();
      });
    });

    // Record Workout Modal open/close
    recordWorkoutBtn.addEventListener("click", () => {
      workoutTextarea.value = localStorage.getItem("tomorrowWorkout") || "";
      recordWorkoutModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      workoutTextarea.focus();
    });
    recordWorkoutCloseBtn.addEventListener("click", closeRecordWorkoutModal);

    function closeRecordWorkoutModal() {
      recordWorkoutModal.classList.add("hidden");
      overlay.classList.add("hidden");
      recordWorkoutBtn.focus();
    }

    saveWorkoutBtn.addEventListener("click", () => {
      const text = workoutTextarea.value.trim();
      localStorage.setItem("tomorrowWorkout", text);
      alert("تم حفظ تمرين الغد!");
      closeRecordWorkoutModal();
    });

    // Filter Modal open/close
    filterOpenBtn.addEventListener("click", () => {
      filterModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      filterModal.querySelector("[aria-pressed='true']").focus();
    });
    filterCloseBtn.addEventListener("click", closeFilterModal);

    function closeFilterModal() {
      filterModal.classList.add("hidden");
      overlay.classList.add("hidden");
      filterOpenBtn.focus();
    }

    // Populate equipment list
    function renderEquipment() {
      equipmentList.innerHTML = "";
      equipmentData.forEach((eq) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "flex flex-col items-center gap-1 p-2 border border-gray-300 rounded hover:bg-[#E26A56] hover:text-white transition text-center";
        btn.setAttribute("aria-pressed", eq.id === "all" ? "true" : "false");
        btn.dataset.equipment = eq.id;
        btn.innerHTML = `
          <img src="${eq.image}" alt="صورة ${eq.name}" class="w-12 h-12 object-contain" />
          <span class="text-sm">${eq.name}</span>
        `;
        btn.addEventListener("click", () => {
          equipmentList.querySelectorAll("button").forEach((b) => {
            b.setAttribute("aria-pressed", "false");
            b.classList.remove("bg-[#E26A56]", "text-white");
          });
          btn.setAttribute("aria-pressed", "true");
          btn.classList.add("bg-[#E26A56]", "text-white");
          selectedEquipment = eq.id;
        });
        equipmentList.appendChild(btn);
      });
    }
    renderEquipment();

    // Workout level buttons
    const levelButtons = Array.from(document.querySelectorAll(".filter-level-btn"));
    levelButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        levelButtons.forEach((b) => {
          b.setAttribute("aria-pressed", "false");
          b.classList.remove("bg-[#E26A56]", "text-white");
        });
        btn.setAttribute("aria-pressed", "true");
        btn.classList.add("bg-[#E26A56]", "text-white");
        selectedLevel = btn.dataset.level;
      });
    });

    // Show results button
    showResultsBtn.addEventListener("click", () => {
      filterModal.classList.add("hidden");
      overlay.classList.add("hidden");
      filterOpenBtn.focus();
      applyFilters();
    });

    // Tabs switching including create exercise tab
    function setActiveTab(tab) {
      currentTab = tab;
      tabButtons.forEach((b) => {
        b.setAttribute("aria-selected", "false");
        b.classList.remove("border-[#E26A56]", "text-[#E26A56]");
        b.classList.add("border-transparent", "text-gray-700");
      });
      createExerciseTabBtn.classList.remove("border-[#E26A56]", "text-[#E26A56]");
      createExerciseTabBtn.classList.add("border-transparent", "text-gray-700");

      if (tab === "createExercise") {
        createExerciseTabBtn.setAttribute("aria-selected", "true");
        createExerciseTabBtn.classList.add("border-[#E26A56]", "text-[#E26A56]");
        exercisesList.innerHTML = "";
        noExercisesMsg.classList.add("hidden");
        openCreateExerciseModal();
        searchInput.value = "";
      } else {
        const btn = Array.from(tabButtons).find((b) => b.dataset.tab === tab);
        if (btn) {
          btn.setAttribute("aria-selected", "true");
          btn.classList.add("border-[#E26A56]", "text-[#E26A56]");
          btn.classList.remove("border-transparent", "text-gray-700");
        }
        closeCreateExerciseModal();
        searchInput.value = "";
        searchTerm = "";
        noExercisesMsg.classList.add("hidden");
        applyFilters();
      }
    }

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        setActiveTab(btn.dataset.tab);
      });
    });

    createExerciseTabBtn.addEventListener("click", () => {
      setActiveTab("createExercise");
    });

    // Apply filters and render exercises
    function applyFilters() {
      if (currentTab === "myExercises") {
        filteredUserExercises = userExercises.filter((ex) => {
          const levelMatch =
            selectedLevel === "all" || ex.level === selectedLevel || selectedLevel === "all";
          const equipmentMatch =
            selectedEquipment === "all" ||
            (ex.equipment &&
              ex.equipment.some((eq) =>
                eq.toLowerCase().includes(selectedEquipment.toLowerCase())
              ));
          return levelMatch && equipmentMatch;
        });
        renderExercisesWithSwipe(filteredUserExercises);
      } else if (currentTab === "allExercises") {
        filteredExercises = exercisesData.filter((ex) => {
          const levelMatch =
            selectedLevel === "all" || ex.level === selectedLevel || selectedLevel === "all";
          const equipmentMatch =
            selectedEquipment === "all" || ex.equipment.includes(selectedEquipment);
          return levelMatch && equipmentMatch;
        });
        renderExercises(filteredExercises);
      }
    }

    // Render exercises list (normal)
    function renderExercises(exercises, highlightName = "") {
      exercisesList.innerHTML = "";
      if (exercises.length === 0) {
        noExercisesMsg.classList.remove("hidden");
        return;
      } else {
        noExercisesMsg.classList.add("hidden");
      }
      exercises.forEach((ex) => {
        const article = document.createElement("article");
        article.className = "flex items-center justify-between cursor-pointer";
        if (highlightName && ex.name === highlightName) {
          article.classList.add("searched-highlight");
        }
        article.setAttribute("tabindex", "0");
        article.setAttribute("role", "button");
        article.setAttribute("aria-label", `عرض تفاصيل التمرين ${ex.name}`);
        article.innerHTML = `
          <div class="flex items-center gap-4">
            <button aria-label="توسيع التمرين" class="text-gray-400 text-xl pointer-events-none" type="button">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div>
              <h2 class="text-black text-xl font-semibold leading-tight">${ex.name}</h2>
              ${
                currentTab === "myExercises"
                  ? ""
                  : `<span class="inline-block mt-1 bg-black text-white text-xs rounded-full px-3 py-1 font-semibold">${ex.count} التمارين</span>`
              }
            </div>
          </div>
          <img src="${ex.image || "https://placehold.co/80x80/png?text=No+Image"}" alt="${ex.alt || "صورة التمرين"}" class="w-20 h-20 rounded-lg bg-gray-100 object-contain" />
        `;
        article.addEventListener("click", () => {
          if (currentTab === "myExercises") {
            openExerciseDetail(ex);
          } else {
            openSubExercises(ex);
          }
        });
        article.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (currentTab === "myExercises") {
              openExerciseDetail(ex);
            } else {
              openSubExercises(ex);
            }
          }
        });
        exercisesList.appendChild(article);
      });
    }

    // Render exercises list with swipe to delete for myExercises
    function renderExercisesWithSwipe(exercises) {
      exercisesList.innerHTML = "";
      if (exercises.length === 0) {
        noExercisesMsg.classList.remove("hidden");
        return;
      } else {
        noExercisesMsg.classList.add("hidden");
      }
      exercises.forEach((ex) => {
        const container = document.createElement("article");
        container.className = "swipe-item rounded-lg shadow-sm border border-gray-300";
        container.style.position = "relative";
        container.setAttribute("tabindex", "0");
        container.setAttribute("role", "button");
        container.setAttribute("aria-label", `عرض تفاصيل التمرين ${ex.name}`);

        // Delete button
        const deleteBtn = document.createElement("div");
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("aria-label", `حذف التمرين ${ex.name}`);
        deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (confirm(`هل أنت متأكد من حذف التمرين "${ex.name}"؟`)) {
            deleteUserExercise(ex.id);
          }
        });
        container.appendChild(deleteBtn);

        // Swipe content
        const content = document.createElement("div");
        content.className = "swipe-content p-3 flex items-center justify-between cursor-pointer bg-white rounded-lg";
        content.innerHTML = `
          <div class="flex items-center gap-4">
            <button aria-label="توسيع التمرين" class="text-gray-400 text-xl pointer-events-none" type="button">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div>
              <h2 class="text-black text-xl font-semibold leading-tight">${ex.name}</h2>
            </div>
          </div>
          <img src="${ex.image || "https://placehold.co/80x80/png?text=No+Image"}" alt="${ex.alt || "صورة التمرين"}" class="w-20 h-20 rounded-lg bg-gray-100 object-contain" />
        `;
        content.addEventListener("click", () => {
          openExerciseDetail(ex);
        });
        content.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openExerciseDetail(ex);
          }
        });
        container.appendChild(content);
        exercisesList.appendChild(container);

        // Swipe handling
        addSwipeListeners(container, content);
      });
    }

    // Swipe to left to reveal delete button
    function addSwipeListeners(container, content) {
      let startX = 0;
      let currentX = 0;
      let translateX = 0;
      let dragging = false;
      const threshold = 80; // px to reveal delete button fully
      const maxTranslate = -threshold;

      function onTouchStart(e) {
        if (e.touches && e.touches.length === 1) {
          startX = e.touches[0].clientX;
          dragging = true;
          content.style.transition = "none";
        }
      }
      function onTouchMove(e) {
        if (!dragging) return;
        currentX = e.touches[0].clientX;
        let deltaX = currentX - startX;
        // Only allow swipe left (negative deltaX)
        if (deltaX > 0) deltaX = 0;
        if (deltaX < maxTranslate) deltaX = maxTranslate;
        translateX = deltaX;
        content.style.transform = `translateX(${translateX}px)`;
      }
      function onTouchEnd() {
        if (!dragging) return;
        dragging = false;
        // If swiped more than half threshold, keep delete shown, else reset
        if (translateX < maxTranslate / 2) {
          translateX = maxTranslate;
        } else {
          translateX = 0;
        }
        content.style.transition = "transform 0.3s ease";
        content.style.transform = `translateX(${translateX}px)`;
      }

      // Mouse events for desktop support
      let mouseDown = false;
      function onMouseDown(e) {
        mouseDown = true;
        startX = e.clientX;
        dragging = true;
        content.style.transition = "none";
      }
      function onMouseMove(e) {
        if (!mouseDown || !dragging) return;
        currentX = e.clientX;
        let deltaX = currentX - startX;
        if (deltaX > 0) deltaX = 0;
        if (deltaX < maxTranslate) deltaX = maxTranslate;
        translateX = deltaX;
        content.style.transform = `translateX(${translateX}px)`;
      }
      function onMouseUp() {
        if (!mouseDown) return;
        mouseDown = false;
        dragging = false;
        if (translateX < maxTranslate / 2) {
          translateX = maxTranslate;
        } else {
          translateX = 0;
        }
        content.style.transition = "transform 0.3s ease";
        content.style.transform = `translateX(${translateX}px)`;
      }

      content.addEventListener("touchstart", onTouchStart, { passive: true });
      content.addEventListener("touchmove", onTouchMove, { passive: true });
      content.addEventListener("touchend", onTouchEnd);
      content.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    // Delete user exercise by id
    function deleteUserExercise(id) {
      userExercises = userExercises.filter((ex) => ex.id !== id);
      localStorage.setItem("userExercises", JSON.stringify(userExercises));
      applyFilters();
    }

    // Search functionality
    searchBtn.addEventListener("click", () => {
      const term = searchInput.value.trim();
      if (!term) {
        applyFilters();
        return;
      }
      searchTerm = term;
      let source = currentTab === "myExercises" ? filteredUserExercises : filteredExercises;
      const matched = source.filter((ex) => ex.name.includes(term));
      if (matched.length === 0) {
        noExercisesMsg.classList.remove("hidden");
        if (currentTab === "myExercises") {
          renderExercisesWithSwipe([]);
        } else {
          renderExercises([]);
        }
      } else {
        noExercisesMsg.classList.add("hidden");
        const firstMatch = matched[0];
        const others = source.filter((ex) => !matched.includes(ex));
        if (currentTab === "myExercises") {
          renderExercisesWithSwipe([firstMatch, ...others], firstMatch.name);
        } else {
          renderExercises([firstMatch, ...others], firstMatch.name);
        }
      }
    });

    // Sub Exercises Modal open/close
    function openSubExercises(exercise) {
      subExercisesTitle.textContent = `${exercise.name} - ${exercise.count} تمرين آخر`;
      subExercisesList.innerHTML = "";
      if (!exercise.subExercises || exercise.subExercises.length === 0) {
        subExercisesList.innerHTML = `<p class="text-center text-gray-500">لا توجد تمارين فرعية لهذا التمرين.</p>`;
      } else {
        exercise.subExercises.forEach((subEx) => {
          const div = document.createElement("div");
          div.className =
            "border border-gray-300 rounded p-3 cursor-pointer hover:bg-[#E26A56] hover:text-white transition flex gap-3 items-center";
          div.setAttribute("tabindex", "0");
          div.setAttribute("role", "button");
          div.setAttribute("aria-label", `عرض تفاصيل التمرين الفرعي ${subEx.name}`);
          div.innerHTML = `
            <img src="${subEx.image}" alt="صورة ${subEx.name}" class="w-24 h-16 object-contain rounded"/>
            <div class="flex flex-col flex-1">
              <h3 class="font-semibold text-lg">${subEx.name}</h3>
              <p><strong>المستوى:</strong> ${subEx.level}</p>
              <p><strong>الأدوات:</strong> ${subEx.equipment.map(e => getEquipmentName(e)).join(", ")}</p>
              <p><strong>العَضَلَة المستهدفة:</strong> ${subEx.targetMuscle}</p>
            </div>
          `;
          div.addEventListener("click", () => {
            openExerciseDetail(subEx);
          });
          div.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openExerciseDetail(subEx);
            }
          });
          subExercisesList.appendChild(div);
        });
      }
      subExercisesModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      subExercisesCloseBtn.focus();
    }
    subExercisesCloseBtn.addEventListener("click", closeSubExercisesModal);

    function closeSubExercisesModal() {
      subExercisesModal.classList.add("hidden");
      overlay.classList.add("hidden");
      searchInput.focus();
    }

    // Exercise detail modal open/close
    function openExerciseDetail(exercise) {
      exerciseDetailTitle.textContent = exercise.name;
      exerciseDetailImage.src = exercise.image || "https://placehold.co/400x300/png?text=No+Image";
      exerciseDetailImage.alt = `صورة ${exercise.name}`;
      // For user exercises, videoUrl may be empty or user provided
      let videoUrl = exercise.videoUrl || "";
      if (videoUrl && !videoUrl.includes("embed")) {
        // Convert normal YouTube URL to embed URL
        const ytMatch = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
        if (ytMatch) {
          videoUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
        } else {
          videoUrl = "";
        }
      }
      exerciseDetailVideo.src = videoUrl;
      exerciseSteps.textContent = exercise.steps || "";
      exerciseLevel.textContent = exercise.level || "";
      exerciseEquipment.textContent = exercise.equipment ? exercise.equipment.map(e => getEquipmentName(e)).join(", ") : "";
      exerciseTargetMuscle.textContent = exercise.targetMuscle || "";
      timerSeconds = 0;
      caloriesBurned = 0;
      currentExerciseCaloriesPerMinute = exercise.caloriesPerMinute || 0;
      currentRepetitions = exercise.repetitions || 1;
      currentMinutesPerRep = exercise.minutesPerRep || 1;
      repetitionsInput.value = currentRepetitions;
      minutesPerRepInput.value = currentMinutesPerRep;
      updateTimerDisplay();
      caloriesBurnedSpan.textContent = caloriesBurned;
      exerciseDetailModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      startTimerBtn.focus();
      closeSubExercisesModal();
      closeCreateExerciseModal();
    }
    exerciseDetailCloseBtn.addEventListener("click", closeExerciseDetailModal);

    function closeExerciseDetailModal() {
      exerciseDetailModal.classList.add("hidden");
      overlay.classList.add("hidden");
      stopTimer();
      searchInput.focus();
    }

    // Timer functions
    function updateTimerDisplay() {
      const minutes = Math.floor(timerSeconds / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (timerSeconds % 60).toString().padStart(2, "0");
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    function startTimer() {
      if (timerInterval) return;
      timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
        caloriesBurned = Math.floor(
          (timerSeconds / 60) * currentExerciseCaloriesPerMinute
        );
        caloriesBurnedSpan.textContent = caloriesBurned;
      }, 1000);
    }

    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }

    startTimerBtn.addEventListener("click", startTimer);
    stopTimerBtn.addEventListener("click", stopTimer);

    // Update repetitions and minutes per rep
    repetitionsInput.addEventListener("change", () => {
      let val = parseInt(repetitionsInput.value);
      if (isNaN(val) || val < 1) val = 1;
      repetitionsInput.value = val;
      currentRepetitions = val;
    });
    minutesPerRepInput.addEventListener("change", () => {
      let val = parseInt(minutesPerRepInput.value);
      if (isNaN(val) || val < 1) val = 1;
      minutesPerRepInput.value = val;
      currentMinutesPerRep = val;
    });

    // Create Exercise Modal open/close
    function openCreateExerciseModal() {
      createExerciseForm.reset();
      createExerciseModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      document.getElementById("exerciseName").focus();
    }
    createExerciseCloseBtn.addEventListener("click", () => {
      closeCreateExerciseModal();
      // After closing create modal, switch to myExercises tab and render
      setActiveTab("myExercises");
    });

    function closeCreateExerciseModal() {
      createExerciseModal.classList.add("hidden");
      overlay.classList.add("hidden");
    }

    // Handle create exercise form submission
    createExerciseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = e.target.exerciseName.value.trim();
      const level = e.target.exerciseLevel.value;
      const equipmentRaw = e.target.exerciseEquipment.value.trim();
      const equipment = equipmentRaw ? equipmentRaw.split(",").map((s) => s.trim()) : [];
      const targetMuscle = e.target.exerciseTargetMuscle.value.trim();
      const steps = e.target.exerciseSteps.value.trim();
      const imageUrl = e.target.exerciseImageUrl.value.trim();
      let videoUrl = e.target.exerciseVideoUrl.value.trim();

      if (!name || !level || !steps) {
        alert("يرجى ملء الحقول المطلوبة: اسم التمرين، المستوى، وخطوات التمرين.");
        return;
      }

      // Normalize video URL to embed if YouTube
      if (videoUrl && !videoUrl.includes("embed")) {
        const ytMatch = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
        if (ytMatch) {
          videoUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
        } else {
          videoUrl = "";
        }
      }

      // Create new exercise object
      const newExercise = {
        id: Date.now(),
        name,
        level,
        equipment,
        targetMuscle,
        steps,
        image: imageUrl || "https://placehold.co/80x80/png?text=No+Image",
        videoUrl,
        caloriesPerMinute: 5, // default value
        repetitions: 1,
        minutesPerRep: 1,
      };

      userExercises.push(newExercise);
      localStorage.setItem("userExercises", JSON.stringify(userExercises));
      alert("تم إنشاء التمرين بنجاح!");
      closeCreateExerciseModal();
      // Switch to myExercises tab and refresh list
      setActiveTab("myExercises");
    });

    // Helper functions
    function getEquipmentName(id) {
      const eq = equipmentData.find((e) => e.id === id);
      return eq ? eq.name : id;
    }

    // Load saved workout text on page load
    window.addEventListener("load", () => {
      setActiveTab("allExercises"); // Start on allExercises tab
    });

    // Accessibility: close modals with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!recordWorkoutModal.classList.contains("hidden")) {
          closeRecordWorkoutModal();
        } else if (!filterModal.classList.contains("hidden")) {
          closeFilterModal();
        } else if (!exerciseDetailModal.classList.contains("hidden")) {
          closeExerciseDetailModal();
        } else if (!subExercisesModal.classList.contains("hidden")) {
          closeSubExercisesModal();
        } else if (!createExerciseModal.classList.contains("hidden")) {
          closeCreateExerciseModal();
          setActiveTab("myExercises");
        } else if (!sidebar.classList.contains("translate-x-full")) {
          closeSidebar();
        }
      }
    });