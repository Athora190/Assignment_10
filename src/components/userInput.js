import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import translateText from './APICallFunctions';
import Submit from './submit';

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
	}

	handleSubmit = (event) => {
		event.preventDefault();
		// this.setState({ event.target.user: event.target.value });
		// this.setState({
		// 	user: { value: event.target.value, error: this.state.user.error },
		// });

		// console.log(this.state.user.value);
		translateText('HELLO WORLD', 'es')
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		let style = {
			color: '#3678FA',
			fontSize: '30px',
			fontWeight: 'bold',
		};

		return (
			<Grid container>
				<div>
					<div>
						<p style={style}>Word Translater</p>
					</div>
					<div>
						<Grid item>
							<form onSubmit={this.handleSubmit}>
								<Grid>
									<TextField
										fullWidth
										id="outlined-multiline-static"
										label="ENTER TEXT"
										multiline
										onChange={(event) => this.state.user}
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
								<Submit></Submit>
							</form>
						</Grid>
					</div>
				</div>
			</Grid>
		);
	}
}

export default UserWords;
