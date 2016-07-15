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
						        <img src="../images/poster1.jpg" className="avatar img-square img-thumbnail" alt="avatar"/>
						      </div>
						    </div>
						  
						    <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
						      	<h3>EVENT DESCRIPTION</h3>
							</div>
					  	</div>
					</div>
				</div>



				
				<h4>codes for edit profile page</h4>

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
			</div>
		);
	}
});

module.exports = ProfilePage;