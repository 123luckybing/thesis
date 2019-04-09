const menu = [{
  title: '历史数据查询',
  path:'/home/search',
  children:[{
    title:'地区批次线查询',
    path: '/home/search/area'
  },{
    title:'高校各专业地区录取分数线',
    path: '/home/search/high'
  },{
    title:'高校分地区录取分数线',
    path: '/home/search/high-area'
  },{
    title:'高校基本信息',
    path: '/home/search/detail'
  }]
},
{
  title: '报考推荐',
  path: '/home/recommend',
  children:[{
    title: '专业推荐',
    path:'/home/recommend/major',
  },{
    title: '学校推荐',
    path:'/home/recommend/school',
  },{
    title: '十大热门专业解析',
    path:'/home/recommend/all',
  }]
}];
export default menu;