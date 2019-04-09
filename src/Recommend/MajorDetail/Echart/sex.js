import echarts from 'echarts';
export default function sex(rate) {
  const man = rate.split(':')[0]
  const woman = rate.split(':')[1]
  var sex = echarts.init(document.getElementById('sexRate'));
  const color = ['rgb(225,157,76)', 'rgb(76,193,227)']
  sex.setOption({
    color: color,
    title : {
      text: '性别比例',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{b} : ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['男生','女生']
    },
    series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value: man, name:'男生'},
              {value: woman, name:'女生'},
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
    ]
  })
}
