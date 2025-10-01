window.MyChartLib = {
  createBarChart: function(canvasId, chartData, chartOptions = {}) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        ...chartOptions
      }
    });
  }
};

