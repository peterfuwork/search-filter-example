import React from 'react';
import Loader from './Loader';
import SortBySearch from './SortBySearch';
import SortByIngredients from './SortByIngredients';
import SortByUsages from './SortByUsages';
import ResultList from './ResultList';
import Footer from './Footer';

const Page = (props) => {
	const { currentPage, dishPerPage, filteredDishes } = props;
	const indexOfLastDish = currentPage * dishPerPage;
	const indexOfFirstDish = indexOfLastDish - dishPerPage;
	const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);
	const renderDish = currentDishes.map((dish) => {
		return (
			<li className="col-sm-6 dish-list" key={dish.name}>
				<div className="border">
					<div className="dish-img-wrapper">
						<img
							onLoad={() => props.imgOnLoad(dish)}
							className="dish-img"
							data-image={dish.name}
							src={dish.image}
							alt={dish.name}
						/>
						{!dish.imageLoad && <Loader />}
					</div>
					<div className="information">
						<h4>{dish.name}</h4>
						<ul className="recipes">
							{dish.recipes.map((recipe) => {
								const quantity = dish.recipeObj;
								return (
									<li className="recipe-list" key={recipe}>
										{recipe}:
										<span className="quantity">&nbsp;{quantity[recipe]}</span>
									</li>
								);
							})}
						</ul>
						<br />
						<ul className="usages">
							{dish.usages.map((usage) => {
								const desc = dish.usageObj;
								return (
									<li className="usage-list" key={usage}>
										{usage}:<span className="desc">&nbsp;{desc[usage]}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</li>
		);
	});

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(filteredDishes.length / dishPerPage); i++) {
		pageNumbers.push(i);
	}

	const renderPageNumbers = pageNumbers.map((number) => {
		return (
			<span
				className={currentPage === number ? 'active ' : ''}
				key={number}
				id={number}
				onClick={props.onClickPage}
			>
				{number}
			</span>
		);
	});

	return (
		<div className="container">
			{props.match.path === '/' ? (
				<div className="sorting">
					<span
						className="link"
						data-link="/SortByIngredients"
						onClick={(event) => props.resetWhenChangePage(event, props)}
					>
						搜尋食材
					</span>
					&nbsp;&nbsp;
					<span
						className="link"
						data-link="/SortByUsages"
						onClick={(event) => props.resetWhenChangePage(event, props)}
					>
						搜尋料理屬性
					</span>
					<SortBySearch
						filteredDishes={renderDish}
						onChangeSearch={props.onChangeSearch}
					/>
				</div>
			) : props.match.path === '/SortByIngredients' ? (
				<div className="sorting">
					<span
						className="link"
						data-link="/"
						onClick={(event) => props.resetWhenChangePage(event, props)}
					>
						搜尋食譜
					</span>
					&nbsp;&nbsp;
					<span
						className="link"
						data-link="/SortByUsages"
						onClick={(event) => props.resetWhenChangePage(event, props)}
					>
						搜尋料理屬性
					</span>
					<SortByIngredients
						filteredDishes={renderDish}
						onHandleChangeIngredients={props.onHandleChangeIngredients}
						resetAllCheckboxes={props.resetAllCheckboxes}
					/>
				</div>
			) : (
				<div className="sorting">
					<span
						className="link"
						data-link="/"
						onClick={(event) => props.resetWhenChangePage(event, props)}
					>
						搜尋食譜
					</span>
					&nbsp;&nbsp;
					<span
						className="link"
						data-link="/SortByIngredients"
						onClick={(event) => props.resetWhenChangePage(event, props)}
					>
						搜尋食材
					</span>
					<SortByUsages
						filteredDishes={renderDish}
						onHandleChangeUsages={props.onHandleChangeUsages}
						resetAllCheckboxes={props.resetAllCheckboxes}
					/>
				</div>
			)}
			<div className="pagination">{renderPageNumbers}</div>
			<ResultList filteredDishes={renderDish} />
			<Footer />
		</div>
	);
};

export default Page;
