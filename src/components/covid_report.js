import React, {useEffect, useState} from 'react';
import './covid.css';

const Covid = () => {
	const [data, setData] = useState([]); 
	const getCovidData = async () => {
		try{
			const res = await fetch('https://api.covid19india.org./data.json');
			const actualData = await res.json();
			console.log(actualData.statewise[26]);
			setData(actualData.statewise[26]);
		}catch(err){
			console.log(err);
		}
	}

	useEffect(() => {
		getCovidData();
	}, []);

	return (
			<>
				<section className="card container grid">
					<h2>COVID-19 CORONAVIRUS TRACKER</h2>
					<div className="card__container grid">
					
						<article className="card__content grid">

							<div className="card__pricing">
								<div className="card__pricing-number">
						          <span className="card__pricing-symbol">&#128308;</span> 
						        </div>
						        <span className="card__pricing-month">Live</span>	
							</div>

							<header className="card__header">
								<div className="card__header-circle grid">
						          <img src="corona.tif" alt="" className="card__header-img" />
						        </div>
						        <div className="card__header__content">
							        <span className="card__header-subtitle">OUR <b>STATE</b></span>
	        						<h1 className="card__header-title">ODISHA</h1>
	        					</div>
							</header>


						</article>
						
						<article className="card__content grid">

							<div className="card__pricing">
								<div className="card__pricing-number">
						          <span className="card__pricing-symbol">&#128308;</span> 
						        </div>
						        <span className="card__pricing-month">Live</span>	
							</div>

							<header className="card__header">
								<div className="card__header-circle grid">
						          <img src="corona.tif" alt="" className="card__header-img" />
						        </div>
						        <div className="card__header__content">
							        <span className="card__header-subtitle">TOTAL <b>RECOVERED</b></span>
	        						<h1 className="card__header-title">{data.recovered}</h1>
	        					</div>
							</header>


						</article>
						
						<article className="card__content grid">
							<div className="card__pricing">
								<div className="card__pricing-number">
						          <span className="card__pricing-symbol">&#128308;</span> 
						        </div>
						        <span className="card__pricing-month">Live</span>	
							</div>

							<header className="card__header">
								<div className="card__header-circle grid">
						          <img src="corona.tif" alt="" className="card__header-img" />
						        </div>
						        <div className="card__header__content">
							        <span className="card__header-subtitle">TOTAL <b>CONFIRMED</b></span>
	        						<h1 className="card__header-title">{data.confirmed}</h1>
	        					</div>
							</header>
						</article>

						<article className="card__content grid">
							<div className="card__pricing">
								<div className="card__pricing-number">
						          <span className="card__pricing-symbol">&#128308;</span> 
						        </div>
						        <span className="card__pricing-month">Live</span>	
							</div>

							<header className="card__header">
								<div className="card__header-circle grid">
						          <img src="corona.tif" alt="" className="card__header-img" />
						        </div>
						        <div className="card__header__content">
							        <span className="card__header-subtitle">TOTAL <b>DEATHS</b></span>
	        						<h1 className="card__header-title">{data.deaths}</h1>
	        					</div>
							</header>
						</article>

						<article className="card__content grid">
							<div className="card__pricing">
								<div className="card__pricing-number">
						          <span className="card__pricing-symbol">&#128308;</span> 
						        </div>
						        <span className="card__pricing-month">Live</span>	
							</div>

							<header className="card__header">
								<div className="card__header-circle grid">
						          <img src="corona.tif" alt="" className="card__header-img" />
						        </div>
						        <div className="card__header__content">
							        <span className="card__header-subtitle">TOTAL <b>ACTIVE</b></span>
	        						<h1 className="card__header-title">{data.active}</h1>
	        					</div>
							</header>
						</article>

						<article className="card__content grid">
							<div className="card__pricing">
								<div className="card__pricing-number">
						          <span className="card__pricing-symbol">&#128308;</span> 
						        </div>
						        <span className="card__pricing-month">Live</span>	
							</div>

							<header className="card__header">
								<div className="card__header-circle grid">
						          <img src="corona.tif" alt="" className="card__header-img" />
						        </div>
						        <div className="card__header__content">
							        <span className="card__header-subtitle">LAST <b>UPDATED</b></span>
	        						<h1 className="card__header-title">{data.lastupdatedtime}</h1>
	        					</div>
							</header>
						</article>
					</div>
				</section>
			</>
		)
}

export default Covid;