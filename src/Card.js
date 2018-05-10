import React from 'react';


//as function not with class yet
const Card = ({name, email, id}) => {
	// const {name, email, id} = props; // so i don't need props.name ect just name;
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt="robo pic" src={`https://robohash.org/${id}?size=150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;