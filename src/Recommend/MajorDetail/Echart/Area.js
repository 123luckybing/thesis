import echarts from 'echarts';
export default function area (areaArr,areaRate) {
  var area = echarts.init(document.getElementById('area'));
  area.setOption({
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {
        type : 'shadow'
      },
      formatter: "{b}<br/> {a} : {c}%",
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
          type : 'category',
          data : areaArr, // 横轴
          axisTick: {
              alignWithLabel: true
          }
      }
    ],
    yAxis : [
      {
          type : 'value'
      }
    ],
    series : [
        {
            name:'就业分布',
            type:'bar',
            barWidth: '60%',
            data: areaRate // 纵坐标
        }
    ]
  })
}