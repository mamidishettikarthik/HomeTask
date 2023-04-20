import React from "react";

function Detail({ selected, closeDetail }) {
return (
	<section className="detail">
	<div className="content">
		<h2>{selected.title}</h2>
		<span>{selected.year}</span>
		<p className="rating">Rating: {selected.imdbRating}</p>

		<div className="about">
		<img src={selected.Poster} alt="" />
			
                <p>{selected.Plot}</p>

		</div>
		<button className="close" onClick={closeDetail}>
		Close
		</button>
	</div>
	</section>
);
}

export default Detail;
