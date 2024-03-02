const getOptionChart1 = () => {
    return {
        title: {
            text: 'Temperature (°C) vs Time (h)',
        },
        tooltip: {
          show: true,
            trigger: 'axis',
          formatter: 'Temperature : <br/>{b}h : {c}°C',

        },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
              }
            ]
          
    };
}

const getOptionChart2 = () => {
    return {
        legend: {
          data: ['Altitude (km) vs Temperature (°C)']
        },
        title: {
            text: 'Altitude (km) vs Temperature (°C)',
        },
        tooltip: {
          trigger: 'axis',
          formatter: 'Temperature : <br/>{b}km : {c}°C'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { onZero: false },
          axisLabel: {
            formatter: '{value} km'
          },
          boundaryGap: true,
          data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
        },
        toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 110,
            bottom: 110,
            z: 100,
            
          },
          {
            type: 'group',
            left: '10%',
            top: 'center',
           
          }
        ],
        series: [
          {
            name: '高度(km)与气温(°C)变化关系',
            type: 'line',
            smooth: true,
            data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
          }
        ]
    };
}


const initCharts = () => {
    const chart1 = echarts.init(document.getElementById('chart1'));
    const chart2 = echarts.init(document.getElementById('chart2'));
    chart1.setOption(getOptionChart1());
    chart2.setOption(getOptionChart2());
    
}

window.addEventListener('load', () => {
    initCharts();
});