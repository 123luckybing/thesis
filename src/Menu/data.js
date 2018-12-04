const menu = [{
  title: '历史数据查询',
  path:'/home/search',
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
    title: '专业及学校推荐',
    path:'/home/recommend/all',
  }]
},{
  title: '在线咨询',
  path:'/home/qa'
}];
export default menu;