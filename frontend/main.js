
const xValues = ["Greene's Cleaning", "Marry Maids", "Maid Pro", "U-Clean", "local Cleaners"];
const yValues = [40, 45, 49, 50,50];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});