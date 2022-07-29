import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import self from '../assets/image_self.png'
import Social from '../components/Social';
import WorkExp from './WorkExp';

const About = () => {

	// var presentDate = new Date();
	// var presentYear = presentDate.getFullYear();
	// var age = presentYear - 1999;
	// if (presentDate.getMonth() === 1 && presentDate.getDay() < 13) {
	// 	age--;
	// }

	return (
		<Fragment>
			<div className="row">
				<div className="col-8 row">
					<Route path='/work-experience'>
						<WorkExp />
					</Route>
				</div>
				<div className="col-3 row m-0 p-0">
					<img className='p-0' src={self} alt="self" style={{ height: 'fit-content' }} />
				</div>
				<div className="col-1">
					<Social />
				</div>
			</div>
		</Fragment>
	)
}

export default About