import React, {Component} from 'react'
import './theme/css/amazeui.css'

class Btn extends React.Component {
	constructor (props) {
		super(props)
		let color = '', size = '';
		if(this.props.Color || this.props.Size) {
			const matchArray = [{
				size: '1',
				Sname: 'am-btn-xs ',
				Cname: 'am-btn-primary',
				color: 'blue'
			}, {
				size: '2',
				Sname: 'am-btn-sm ',
				Cname: 'am-btn-secondary',
				color: 'hightlight'
			}, {
				size: '3',
				Sname: '',
				Cname: 'am-btn-success',
				color: 'green'
			}, {
				size: '4',
				Sname: 'am-btn-lg ',
				Cname: 'am-btn-warning',
				color: 'orange'
			}, {
				size: '5',
				Sname: 'am-btn-xl ',
				Cname: 'am-btn-danger',
				color: 'red'
			}]
			if(this.props.Color) {
				const colorArray = matchArray.filter(obj => obj.color == this.props.Color)
				color = colorArray[0].Cname
			}
			if(this.props.Size) {
				const sizeArray = matchArray.filter(obj => obj.size == this.props.Size)
				size = sizeArray[0].Sname
			}
		}
		
		this.state = {
			defaultClass:  'am-btn '  
						+ (this.props.radius? 'am-radius ' : '')
						+ (this.props.round? 'am-round ' : '')
						+ (this.props.block? 'am-btn-block ' : '')
						+ size + color
		}
		
	}
	handleClick () {
		this.props.onClick()
		if(this.props.nextText) {
			this.setState({showText: this.props.nextText})
		}
	}
	render () {
		return (
			<button className={ this.props.className || this.state.defaultClass } 
				onClick = {this.handleClick.bind(this)}
				disabled = {this.props.disabled}
				>
				{this.state.showText || this.props.children}
			</button>
		)
	}
}

export default Btn