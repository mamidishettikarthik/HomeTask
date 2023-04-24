import React from "react";

function Result({ result, openDetail }) {
	return (
		<div className="result" onClick=
			{() => openDetail(result.imdbID)}>
			<img src={result.Poster}  alt="poster result"/>
			<h3>{result.title}</h3>
		</div>
	);
}

export default Result;
