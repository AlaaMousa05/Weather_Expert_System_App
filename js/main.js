    const todaySelect = document.getElementById("today");
    const rainfallSection = document.getElementById("rainOptions");
    const tempSection = document.getElementById("tempSection");
    const skySection = document.getElementById("skySection");
    const forme=document.querySelector('form');
    
    todaySelect.addEventListener("change", () => {
      const today = todaySelect.value;
      rainfallSection.style.display = today === "rain" ? "block" : "none";
      skySection.style.display = today === "dry" ? "block" : "none";
      tempSection.style.display = today !== "" ? "block" : "none";
    });

    const sliders = [
      { id: "confToday", valId: "valToday" },
      { id: "confRainfall", valId: "valRainfall" },
      { id: "confTemp", valId: "valTemp" },
      { id: "confSky", valId: "valSky" },
    ];

    sliders.forEach(({ id, valId }) => {
      const slider = document.getElementById(id);
      const display = document.getElementById(valId);
      slider.addEventListener("input", () => {
        display.textContent = slider.value;
      });
    });
  forme.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fact= {
        today:forme.today.value,
        rainfall: forme.rainfall.value,
        temperature: forme.temperature.value,
        sky: forme.sky.value,
        cf: {
          today: parseFloat(forme.confToday.value),
          rainfall: parseFloat(forme.confRainfall.value),
          temperature: parseFloat(forme.confTemp.value),
          sky: parseFloat(forme.confSky.value)
        }
    }
console.log(fact);
const result = Expert(fact);

if (result) {
  document.getElementById("predictionText").textContent =
    `Tomorrow's weather ${result.expression}.`;
  document.getElementById("predictionCF").textContent = Math.abs(result.cf.toFixed(2));
  
 
  chart.data.datasets[0].data = [
    fact.cf.rainfall ?? 0,
    fact.cf.temperature ?? 0,
    fact.cf.sky ?? 0
  ];
  chart.update();
}

  })
 