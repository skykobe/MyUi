import React, {Component} from 'react'
import './theme/css/amazeui.css'
class Input extends Component {
 	render () {
 		return (
 			<input type={this.props.type} className={ this.props.className || 'am-form-field'} {...this.props}/>
 		)
 	}
 }

 export default Input
