import echarts from 'echarts';
export default function Employment(arr, rate) {
  var Employment = echarts.init(document.getElementById('Employment'));
  Employment.setOption({
    title: {
      text: '就业行业分布',
      subtext: '数据来自网络'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{b}<br/> {a} : ({c}%)",
      axisPointer: {
        type: 'shadow',
      }
    },
    legend: {
      data: ['占比']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      data: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: arr // 纵轴
    },
    series: [
      {
        name: '占比',
        type: 'bar',
        data: rate // 比率
      }
    ]
  })
}