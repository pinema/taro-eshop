import React, { Component } from 'react'
import { AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/icon.scss";

export default class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '购买', iconType: 'shopping-bag' },
          { title: '好物', iconType: 'bullet-list' },
          { title: '购物车', iconType: 'shopping-cart', text: '100', max: 99 },
          { title: '我', iconType: 'user', text: '100', max: 99 }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
