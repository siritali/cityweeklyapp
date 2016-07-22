'use strict';

var React = require('react');


var ProfilePage = React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<div className="container">
					  	<h1 className="page-header">Rehab Beach Club | Flux Pavilion</h1>
					  	<h4>Saturday, July 30, 2016</h4>
					  	<div className="row">
				
						    <div className="col-md-4 col-sm-6 col-xs-12">
						        <div className="text-center">
						        	<img src="../images/poster2.jpg" className="avatar img-square img-thumbnail" alt="avatar"/>
						        </div>
						        <div>
						        	<h1>Location</h1>
						        </div>
						    </div>
						  
						    <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
						      	<h3 className="page-header">EVENT DESCRIPTION</h3>
						      	<div>
						      		<p>Rehab Beach Club is the infamous Las Vegas pool party set in a tropical oasis at Hard Rock Hotel & Casino. Party in true VIP fashion at Rehab Beach Club's multiple options of cabanas and daybeds. Dance to your favorite amped up top 40 hits, electronic dance music and performances from some of the hottest DJ's and stars in the music industry.</p>
						      	</div>
							</div>

							<div className="col-md-8 col-sm-6 col-xs-12 personal-info">
						      	<h3 className="page-header">FEATURED ARTIST</h3>
						      	<div className="col-md-4 col-sm-6 col-xs-12">
							        <div className="text-center">
							        	<img src="../images/poster3.jpg" className="avatar img-square img-thumbnail" alt="avatar"/>
							        </div>
							    </div>
							    <div>
						        	<p>Flux Pavilion's polymath-like ability to involve himself in all aspects of music cannot be understated. Known as Joshua Steele to friends and family, Flux is a singer-songwriter, record producer and label owner who plays the drums, guitar, saxophone and piano. His achievements range from releasing his first vinyl at 19 years old to selling out the legendary Red Rocks Amphitheatre in Colorado twice, notching up a UK top 10 hit with Sway and having Kanye West & Jay Z sample his dance floor anthem 'I Can't Stop' in addition to featuring in DJ Magazine's Top 100 DJ's 2015. Not bad for a guy who started out replaying jingles he'd heard on TV on his Casio keyboard.</p>
						        	<p>Influenced by the likes of David Bowie, The Beatles and Frank Zappa in the early years, it was when he heard The Prodigy and The Chemical Brothers that Flux Pavilion knew he had found a musical direction he truly wanted to explore for himself. A deluge of musical projects followed, writing instrumental hip hop and dirty drum & bass, joining local bands and producing for other acts all while studying at university. But the major turning point for this unquestionably talented musician was a visit to London superclub Fabric:</p>
						        </div>
							</div>
					  	</div>
					</div>
				</div>



				<div className="row page-header">
				<h4>codes for edit profile page</h4>
				</div>
				<div className="container">
				  	<h1 className="page-header">Edit Profile</h1>
				  	<div className="row">
			
					    <div className="col-md-4 col-sm-6 col-xs-12">
					      <div className="text-center">
					        <img src="../images/headshot.jpeg" className="avatar img-circle img-thumbnail" alt="avatar"/>
					        <h6>Upload a different photo...</h6>
					        <input type="file" className="text-center center-block well well-sm"/>
					      </div>
					    </div>
					  
					    <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
					      	<div className="alert alert-info alert-dismissable">
						        <a className="panel-close close" data-dismiss="alert">×</a> 
						        <i className="fa fa-coffee"></i>
						        This is where you <strong>UPDATE</strong> your information!.
					      	</div>
					      	<h3>Personal info</h3>
					      	<form className="form-horizontal" role="form">
						        <div className="form-group">
						            <label className="col-lg-3 control-label">Name:</label>
						            <div className="col-lg-8">
						              	<input className="form-control" value="John Doe" type="text"/>
						            </div>
						        </div>
						        <div className="form-group">
						            <label className="col-lg-3 control-label">Email:</label>
					          		<div className="col-lg-8">
						            	<input className="form-control" value="example@email.com" type="text"/>
						          	</div>
						        </div>
						        <div className="form-group">
						          	<label className="col-md-3 control-label">Password:</label>
					          		<div className="col-md-8">
						            	<input className="form-control" value="Password" type="password"/>
						          	</div>
						        </div>
						        <div className="form-group">
						          	<label className="col-md-3 control-label">Confirm password:</label>
						          	<div className="col-md-8">
						            	<input className="form-control" value="Confirm Password" type="password"/>
						          	</div>
						        </div>
						        <div className="form-group">
						          	<label className="col-md-3 control-label"></label>
					          		<div className="col-md-8">
						            	<input className="btn btn-primary" value="Save Changes" type="button"/>
						            	<span></span>
						            	<input className="btn btn-default" value="Cancel" type="reset"/>
						          	</div>
						        </div>
						    </form>
						</div>
				  	</div>
				</div>



				<div className="col-md-12">
				    <div className="media">
				        <a className="media-left waves-light">
				            <img className="img-circle" src="http://mdbootstrap.com/wp-content/uploads/2015/10/team-avatar-1.jpg" alt="placeholder image"/>
				        </a>
				        <div className="media-body">
				            <h4 className="media-heading">John Doe</h4>
				            <ul className="rating inline-ul">
				                <li><i className="fa fa-star amber-text"></i></li>
				                <li><i className="fa fa-star amber-text"></i></li>
				                <li><i className="fa fa-star amber-text"></i></li>
				                <li><i className="fa fa-star"></i></li>
				                <li><i className="fa fa-star"></i></li>
				            </ul>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate temporibus iure soluta. Quasi mollitia maxime nemo quam accusamus possimus, voluptatum expedita assumenda. Earum sit id ullam eum vel delectus!</p>
				        </div>
				    </div>
				</div>



				



			</div>
		);
	}
});

module.exports = ProfilePage;