// تبديل الشريط الجانبي
const hamburgerBtn = document.getElementById("hamburger-btn");
const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("close-sidebar");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.remove("closed");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("closed");
});

    // Elements for calculator
    const genderMaleBtn = document.getElementById("gender-male");
    const genderFemaleBtn = document.getElementById("gender-female");
    const ageInput = document.getElementById("age");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const unitCmBtn = document.getElementById("unit-cm");
    const unitFtBtn = document.getElementById("unit-ft");
    const weightKgBtn = document.getElementById("weight-kg");
    const weightLbBtn = document.getElementById("weight-lb");
    const heightUnitLabel = document.getElementById("height-unit-label");
    const weightUnitLabel = document.getElementById("weight-unit-label");
    const activityButtons = [
      document.getElementById("activity-1"),
      document.getElementById("activity-2"),
      document.getElementById("activity-3"),
      document.getElementById("activity-4"),
    ];
    const macroButtons = [
      document.getElementById("macro-1"),
      document.getElementById("macro-2"),
      document.getElementById("macro-3"),
    ];
    const goalButtons = [
      document.getElementById("goal-1"),
      document.getElementById("goal-2"),
      document.getElementById("goal-3"),
      document.getElementById("goal-4"),
      document.getElementById("goal-5"),
      document.getElementById("goal-6"),
      document.getElementById("goal-7"),
    ];
    const calculateBtn = document.getElementById("calculate-btn");
    const resultsSection = document.getElementById("results-section");
    const bmiResultSpan = document.getElementById("bmi-result");
    const bmiCategorySpan = document.getElementById("bmi-category");
    const caloriesResultSpan = document.getElementById("calories-result");
    const macroResultP = document.getElementById("macro-result");
    const macroGramsP = document.getElementById("macro-grams");
    const calorieChartCtx = document.getElementById("calorieChart").getContext("2d");
    const macroPieChartCtx = document.getElementById("macroPieChart").getContext("2d");

    // State
    let selectedGender = null; // "male" or "female"
    let selectedHeightUnit = "cm"; // "cm" or "ft"
    let selectedWeightUnit = "kg"; // "kg" or "lb"
    let selectedActivityIndex = null;
    let selectedMacroIndex = null;
    let selectedGoalIndex = null;

    // Helper functions
    function setAriaPressed(buttons, pressedBtn) {
      buttons.forEach((btn) => {
        btn.setAttribute("aria-pressed", btn === pressedBtn ? "true" : "false");
        // Add or remove balloon
        if (btn === pressedBtn) {
          if (!btn.querySelector(".balloon")) {
            const balloon = document.createElement("span");
            balloon.className = "balloon";
            balloon.textContent = "✅";
            btn.appendChild(balloon);
          }
        } else {
          const balloon = btn.querySelector(".balloon");
          if (balloon) {
            balloon.remove();
          }
        }
      });
      validateInputs();
    }

    function convertFtInToCm(ftIn) {
      const feet = Math.floor(ftIn);
      const decimal = ftIn - feet;
      const inches = decimal * 12;
      const totalInches = feet * 12 + inches;
      return totalInches * 2.54;
    }

    function convertCmToFtIn(cm) {
      const totalInches = cm / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      return { feet, inches };
    }

    function convertLbToKg(lb) {
      return lb * 0.45359237;
    }

    function convertKgToLb(kg) {
      return kg / 0.45359237;
    }

    function getActivityFactor(index) {
      switch (index) {
        case 0:
          return 1.375;
        case 1:
          return 1.55;
        case 2:
          return 1.725;
        case 3:
          return 1.9;
        default:
          return 1.2;
      }
    }

    function calculateBMI(weightKg, heightM) {
      return weightKg / (heightM * heightM);
    }

    function getBMICategory(bmi) {
      if (bmi < 18.5) return "نقص في الوزن";
      if (bmi < 25) return "وزن طبيعي";
      if (bmi < 30) return "زيادة في الوزن";
      return "سمنة";
    }

    function calculateBMR(gender, weightKg, heightCm, age) {
      if (gender === "male") {
        return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
      } else if (gender === "female") {
        return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
      }
      return 0;
    }

    // Validate inputs and enable/disable calculate button
    function validateInputs() {
      const ageVal = parseInt(ageInput.value);
      const heightVal = parseFloat(heightInput.value);
      const weightVal = parseFloat(weightInput.value);
      const validAge = !isNaN(ageVal) && ageVal > 0 && ageVal <= 120;
      const validHeight = !isNaN(heightVal) && heightVal >= 50;
      const validWeight = !isNaN(weightVal) && weightVal >= 20;
      const validGender = selectedGender !== null;
      const validActivity = selectedActivityIndex !== null;
      const validMacro = selectedMacroIndex !== null;
      const validGoal = selectedGoalIndex !== null;

      if (validAge && validHeight && validWeight && validGender && validActivity && validMacro && validGoal) {
        calculateBtn.disabled = false;
      } else {
        calculateBtn.disabled = true;
      }
    }

    // Event handlers for inputs to validate on change
    [ageInput, heightInput, weightInput].forEach(input => {
      input.addEventListener("input", () => {
        validateInputs();
      });
    });

    genderMaleBtn.addEventListener("click", () => {
      selectedGender = "male";
      setAriaPressed([genderMaleBtn, genderFemaleBtn], genderMaleBtn);
    });
    genderFemaleBtn.addEventListener("click", () => {
      selectedGender = "female";
      setAriaPressed([genderMaleBtn, genderFemaleBtn], genderFemaleBtn);
    });

    unitCmBtn.addEventListener("click", () => {
      if (selectedHeightUnit !== "cm") {
        let val = parseFloat(heightInput.value);
        if (!isNaN(val)) {
          val = convertFtInToCm(val);
          heightInput.value = Math.round(val);
        }
        selectedHeightUnit = "cm";
        heightUnitLabel.textContent = "سم";
        setAriaPressed([unitCmBtn, unitFtBtn], unitCmBtn);
      }
    });

    unitFtBtn.addEventListener("click", () => {
      if (selectedHeightUnit !== "ft") {
        let val = parseFloat(heightInput.value);
        if (!isNaN(val)) {
          const ftIn = val / 30.48;
          heightInput.value = ftIn.toFixed(2);
        }
        selectedHeightUnit = "ft";
        heightUnitLabel.textContent = "قدم/إنش";
        setAriaPressed([unitCmBtn, unitFtBtn], unitFtBtn);
      }
    });

    weightKgBtn.addEventListener("click", () => {
      if (selectedWeightUnit !== "kg") {
        let val = parseFloat(weightInput.value);
        if (!isNaN(val)) {
          val = convertLbToKg(val);
          weightInput.value = Math.round(val);
        }
        selectedWeightUnit = "kg";
        weightUnitLabel.textContent = "كيلو جرام";
        setAriaPressed([weightKgBtn, weightLbBtn], weightKgBtn);
      }
    });

    weightLbBtn.addEventListener("click", () => {
      if (selectedWeightUnit !== "lb") {
        let val = parseFloat(weightInput.value);
        if (!isNaN(val)) {
          val = convertKgToLb(val);
          weightInput.value = Math.round(val);
        }
        selectedWeightUnit = "lb";
        weightUnitLabel.textContent = "رطل";
        setAriaPressed([weightKgBtn, weightLbBtn], weightLbBtn);
      }
    });

    activityButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        selectedActivityIndex = idx;
        setAriaPressed(activityButtons, btn);
      });
    });

    macroButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        selectedMacroIndex = idx;
        setAriaPressed(macroButtons, btn);
      });
    });

    goalButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        selectedGoalIndex = idx;
        setAriaPressed(goalButtons, btn);
      });
    });

    // Initialize default selections (none for gender, activity, macro, goal)
    // So user must select

    let calorieChart = null;
    let macroPieChart = null;

    calculateBtn.addEventListener("click", () => {
      if (!selectedGender) {
        alert("يرجى اختيار الجنس");
        return;
      }
      const age = parseInt(ageInput.value);
      if (isNaN(age) || age < 1 || age > 120) {
        alert("يرجى إدخال عمر صحيح بين 1 و 120");
        return;
      }
      let heightVal = parseFloat(heightInput.value);
      if (isNaN(heightVal) || heightVal < 50) {
        alert("يرجى إدخال طول صحيح (50 سم أو أكثر)");
        return;
      }
      let weightVal = parseFloat(weightInput.value);
      if (isNaN(weightVal) || weightVal < 20) {
        alert("يرجى إدخال وزن صحيح (20 كجم أو أكثر)");
        return;
      }
      if (selectedActivityIndex === null) {
        alert("يرجى اختيار مستوى النشاط اليومي");
        return;
      }
      if (selectedMacroIndex === null) {
        alert("يرجى اختيار توزيع المغذيات الكبرى");
        return;
      }
      if (selectedGoalIndex === null) {
        alert("يرجى اختيار هدفك");
        return;
      }

      let heightCm = heightVal;
      if (selectedHeightUnit === "ft") {
        heightCm = convertFtInToCm(heightVal);
      }

      let weightKg = weightVal;
      if (selectedWeightUnit === "lb") {
        weightKg = convertLbToKg(weightVal);
      }

      const heightM = heightCm / 100;
      const bmi = calculateBMI(weightKg, heightM);
      const bmiRounded = bmi.toFixed(1);
      const bmiCategory = getBMICategory(bmi);

      const bmr = calculateBMR(selectedGender, weightKg, heightCm, age);
      const activityFactor = getActivityFactor(selectedActivityIndex);
      let caloriesNeeded = bmr * activityFactor;

      // Adjust calories based on goal
      const goalBtn = goalButtons[selectedGoalIndex];
      const calorieAdjust = parseFloat(goalBtn.getAttribute("data-calorie-adjust"));
      // Adjust calories by +/- 10% per 0.25 step (approximation)
      caloriesNeeded = caloriesNeeded * (1 + calorieAdjust * 0.1);
      caloriesNeeded = Math.round(caloriesNeeded);

      bmiResultSpan.textContent = bmiRounded;
      bmiCategorySpan.textContent = bmiCategory;
      caloriesResultSpan.textContent = caloriesNeeded;

      // Macronutrient percentages based on selection
      let macroPercentages = { fat: 25, protein: 20, carbs: 55 };
      if (selectedMacroIndex === 1) {
        macroPercentages = { fat: 20, protein: 30, carbs: 50 };
      } else if (selectedMacroIndex === 2) {
        macroPercentages = { fat: 20, protein: 50, carbs: 30 };
      }
      // Calculate grams per macro (fat=9 cal/g, protein=4 cal/g, carbs=4 cal/g)
      const fatGrams = Math.round((caloriesNeeded * macroPercentages.fat) / 100 / 9);
      const proteinGrams = Math.round((caloriesNeeded * macroPercentages.protein) / 100 / 4);
      const carbsGrams = Math.round((caloriesNeeded * macroPercentages.carbs) / 100 / 4);

      macroResultP.textContent = `توزيع المغذيات: ${macroPercentages.fat}% دهون - ${macroPercentages.protein}% بروتين - ${macroPercentages.carbs}% كربوهيدرات`;
      macroGramsP.textContent = `الدهون: ${fatGrams} غرام، البروتين: ${proteinGrams} غرام، الكربوهيدرات: ${carbsGrams} غرام`;

      resultsSection.classList.remove("hidden");

      if (calorieChart) {
        calorieChart.destroy();
      }
      calorieChart = new Chart(calorieChartCtx, {
        type: "bar",
        data: {
          labels: ["السعرات الحرارية اليومية"],
          datasets: [
            {
              label: "سعرات حرارية",
              data: [caloriesNeeded],
              backgroundColor: "rgba(34,197,94,0.7)",
              borderColor: "rgba(34,197,94,1)",
              borderWidth: 1,
              borderRadius: 6,
              barPercentage: 0.5,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 200,
              },
              title: {
                display: true,
                text: "السعرات الحرارية",
                color: "#16a34a",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            x: {
              title: {
                display: true,
                text: "اليوم",
                color: "#16a34a",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  return context.parsed.y + " سعر حراري";
                },
              },
            },
          },
        },
      });
sidebar
      // Pie chart for macro distribution per meal (assuming 3 meals)
      const fatPerMeal = (fatGrams / 3).toFixed(1);
      const proteinPerMeal = (proteinGrams / 3).toFixed(1);
      const carbsPerMeal = (carbsGrams / 3).toFixed(1);

      if (macroPieChart) {
        macroPieChart.destroy();
      }
      macroPieChart = new Chart(macroPieChartCtx, {
        type: "doughnut",
        data: {
          labels: ["دهون (غ)", "بروتين (غ)", "كربوهيدرات (غ)"],
          datasets: [
            {
              label: "توزيع المغذيات لكل وجبة",
              data: [fatPerMeal, proteinPerMeal, carbsPerMeal],
              backgroundColor: [
                "rgba(244, 63, 94, 0.7)", // red-ish for fat
                "rgba(34, 197, 94, 0.7)", // green for protein
                "rgba(59, 130, 246, 0.7)", // blue for carbs
              ],
              borderColor: [
                "rgba(244, 63, 94, 1)",
                "rgba(34, 197, 94, 1)",
                "rgba(59, 130, 246, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.label + ": " + context.parsed + " غرام";
                },
              },
            },
          },
        },
      });
    });
