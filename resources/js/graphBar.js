
let btn = document.getElementById()

function makeChart(numbers){
let points = numbers.map(d => {
    return{ x: d.Date, y: d.Number};
});
const chart = new JSC.Chart("graph", {
    type: "line",
    xAxis_scale_type: 'date',
    series: [{points: points,
        defaultPoint_label_text: "%yValue"}]
  });
  chart.options({title: {label: {text: "Averages"}}});
}