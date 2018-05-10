import React from 'react';

const SearchBox = ({searchfeild, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue tc' 
				type='search' 
				placeholder='search robots' 
				onChange = {searchChange} //onchange is HTML 
			/>
		</div>
	)
}

export default SearchBox;