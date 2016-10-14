/**
*
* StickyFooter
*
*/

import React from 'react';

import styles from './styles.css';
import './styles.less';

import TabBar from 'antd-mobile/lib/tab-bar';

class StickyFooter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
    };
  }

  render() {
    return (
      <div className={styles.stickyFooter}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={require('./home.png')}
            selectedIcon={require('./home (1).png')}
            selected={this.state.selectedTab === 'homeTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'homeTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            title="购物车"
            key="购物车"
            icon={require('./cart.png')}
            selectedIcon={require('./cart (1).png')}
            selected={this.state.selectedTab === 'cartTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'cartTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="我的"
            icon={require('./account.png')}
            selectedIcon={require('./account (1).png')}
            selected={this.state.selectedTab === 'accountTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'accountTab',
              });
            }}
          >
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}

export default StickyFooter;
