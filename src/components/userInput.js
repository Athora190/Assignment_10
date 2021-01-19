import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import translateText from './APICallFunctions';

class UserWords extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				value: '',
				error: '',
			},
			result: {
				value: '',
			},
		};

		translateText('', 'en')
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});

		

	// 	handleSubmit = event =>{
	// 	    this.setState(
	// 			// {[e.target.name]:e.target.value});
		    
	// 	    // const InputError = validateInput(this.state.user)}
	// }
	render() {
		let style = {
			color: '#3678FA',
			fontSize: '30px',
			fontWeight: 'bold',
		};

		return (
			<div>
				<div>
					<p style={style}>Word Translater</p>
				</div>
				<div>
					<Grid md="4">
						<form onSubmit={this.handleSubmit}>
							<Grid>
								<TextField
									fullWidth
									id="outlined-multiline-static"
									label="ENTER TEXT"
									multiline
									value ={this.user.value}
									rows={4}
									placeholder="Please Enter The Text You Would Like To Translate"
									variant="outlined"
								></TextField>
							</Grid>
							<br />
							<Grid>
								<TextField
									disabled
									fullWidth
									id="outlined-multiline-static"
									label="TRANSLATION"
									multiline
									rows={4}
									placeholder="TRANSLATION"
									variant="outlined"
								></TextField>
							</Grid>
							<br />
						</form>
					</Grid>
				</div>
			</div>
		);
	}
}

export default UserWords;
