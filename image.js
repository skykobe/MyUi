import React, {Component} from 'react'
import {blurLoad} from './util.js'
import './theme/css/amazeui.css'
import './css/style.less'

class Image extends Component {
  blurLoad () {
    this.refs.image.className += ' loaded'
    if(this.props.blurLoad == 'on') {
      let classname = this.refs.image.className
      let Node = this.refs.image
      let image = this.props.img
      blurLoad(classname, Node, image)
    }
  }
  render () {
    let className = 'am-img-responsive '
    if(this.props.radius) className += ' am-radius'
    if(this.props.round) className += ' am-round'
    if(this.props.circle) className += ' am-circle'
    if(this.props.className) className += ' '+this.props.className
    if(this.props.blurLoad == 'on') {
      className += ' blur'
      return (
        <div className="placehoder">
          <img src={this.props.src} className={className} ref='image'
            onLoad = {this.blurLoad.bind(this)} style={this.props.style}
          />
        </div>
      )
    } else {
      return (
        <img src={this.props.src} className={className} ref='image'
           style={this.props.style}
        />
      )
    }

  }
}
export default Image
