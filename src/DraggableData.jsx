import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-dragdata";

const options = {
  tooltips: { enabled: true },
  scales: {
    xAxes: [
      {
        gridLines: { display: false, color: "grey" },
        ticks: { fontColor: "#3C3C3C", fontSize: 14 }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Color Strength",
          fontSize: 14
        },
        ticks: {
          display: true,
          min: -5,
          max: 100,
          scaleSteps: 50,
          scaleStartValue: -50,
          maxTicksLimit: 4,
          fontColor: "#9B9B9B",
          padding: 30,
          callback: point => (point < 0 ? "" : point)
        },
        gridLines: {
          display: false,
          offsetGridLines: true,
          color: "3C3C3C",
          tickMarkLength: 4
        }
      }
    ]
  },
  legend: {
    display: true
  },
  dragData: true,
  onDragStart: function(e) {
    console.log(e);
  },
  onDrag: function(e, datasetIndex, index, value) {
    console.log(datasetIndex, index, value);
  },
  onDragEnd: function(e, datasetIndex, index, value) {
    console.log(datasetIndex, index, value);
  }
};

class DraggableGraph extends React.Component {
  state = {
    dataSet: [[65, 59, 80, 81, 56, 55, 40], [35, 39, 50, 91, 46, 85, 10]],
    labels: ["January", "February", "March", "April", "May", "June", "July"]
  };

  render() {
    const data = {
      labels: this.state.labels,
      datasets: [
        {
          label: "My First dataset",
          data: this.state.dataSet[0],
          borderColor: "9B9B9B",
          borderWidth: 1,
          pointRadius: 10,
          pointHoverRadius: 10,
          pointBackgroundColor: "#609ACF",
          pointBorderWidth: 0,
          spanGaps: false
        },
        {
          label: "Predict",
          data: this.state.dataSet[1],
          borderColor: "9B9B9B",
          borderWidth: 1,
          pointRadius: 10,
          pointHoverRadius: 10,
          pointBackgroundColor: "#302BE0",
          pointBorderWidth: 0,
          spanGaps: false,
          dragData: false
        }
      ]
    };

    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default DraggableGraph;
