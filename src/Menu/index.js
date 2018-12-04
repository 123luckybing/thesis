import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import menu from './data';
const SubMenu = Menu.SubMenu;
class MenuCom extends Component {
  constructor() {
    super();
    this.listMap = this.listMap.bind(this);
  }

  listMap(data) {
    return data.map((elem,index) => {
      if(elem.children) {
        return(
          <SubMenu key={elem.path} title={<span>{elem.title}</span>}>
            {this.listMap(elem.children)}
          </SubMenu>
        )
      } else {
        return (
         <Menu.Item key={elem.path}>
          <Link to={elem.path}>{elem.title}</Link> 
         </Menu.Item>
        )
      }
    });
  }

  render() {
    return (
      <div>
        <Menu
          mode='vertical'
          theme='dark'
          style={{ height: '100vh' }}
        >
          {this.listMap(menu)}
        </Menu>
      </div>
    )
  }
}
export default MenuCom;