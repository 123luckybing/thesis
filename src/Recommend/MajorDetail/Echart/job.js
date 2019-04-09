import echarts from 'echarts';
export default function Employment(jobArr, jobRate) {
  let arr = []
  for(var i = 0; i < jobArr.length; i++) {
    arr.push({ value: jobRate[i], name: jobArr[i]})
  } // 数据生成echart符合的对象
  var job = echarts.init(document.getElementById('job'));
  job.setOption({
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c}%"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: jobArr
    },
    series: [
      {
          name:'岗位分布',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: arr // 数据
        }
      ]
  })
}