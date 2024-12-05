Highcharts.setOptions({
  chart: {
    events: {
      load: function () {
        const chart = this,
          xAxis = chart.xAxis[0],
          boxplotSeries = chart.series.filter(
            (series) => series.options.type === "boxplot",
          ),
          scatterSeries = chart.series.filter(
            (series) => series.options.type === "scatter",
          )

        boxplotSeries.forEach((boxplot) => {
          const scatter = scatterSeries.filter(
            (series) => series.options.linkedTo === boxplot.options.id,
          )
          const boxplotPoint = boxplot.points.find((point) => !point.isNull)
          if (boxplotPoint && boxplotPoint.graphic) {
            const boxplotBox = boxplotPoint.graphic.getBBox()
            console.log(boxplotBox.x)
            scatter.forEach((series) => {
              series.update(
                {
                  pointPlacement: xAxis.toValue(
                    boxplotBox.x + boxplotBox.width / 2 + chart.plotLeft,
                  ),
                },
                false,
              )
            })
          }
        });
        chart.redraw();
      }
    }
  }
}); 