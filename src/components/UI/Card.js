import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
	let { height, width, bgColor, blur, shadow, borderRadius, border, className, onClick } = props;
	return (
		<div className={`${classes.card} p-4 ${className}`}
			onClick={onClick}
			style={{
				height: height ? height : '',
				width: width ? width : '',
				background: bgColor ? bgColor : 'rgba( 255, 255, 255, 0.2 )',
				backdropFilter: blur ? blur : '5px',
				WebkitBackdropFilter: blur ? blur : '5px',
				shadow: shadow ? shadow : '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
				border: border ? border : '1px solid rgba( 255, 255, 255, 0.18 )',
				borderRadius: borderRadius ? borderRadius : '5px',
			}}
		>{props.children}</div>
	)
}

export default Card