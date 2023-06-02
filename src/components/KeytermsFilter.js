import '../styles/header.css';

export const KeytermsFilter = ({ categories, filterCategory }) => {
	return (
		<div className='categories'>
			{categories.map(category => (
				<button
					type='button'
					className='btn-category'
					onClick={() => filterCategory(category)}
					key={category}
				>
					{category}
				</button>
			))}
		</div>
	);
};