import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import translateText from './APICallFunctions';
import Submit from './submit';
import validateInput from './ValidateInput';

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
			busy: false,
		};
	}

	update_field(event) {
		// do a convenience error check
		const error = validateInput(event.target.value);
		console.log(error);
		this.setState({
			user: {
				value: event.target.value,
				error,
			},
		});

		// implied else
		// do nothing!
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state.user.error) return;

		this.setState({ busy: true });
		translateText(this.state.user.value, 'es')
			.then((res) => {
				this.setState({
					result: {
						value: res,
					},
					busy: false,
				});
			})
			.catch((err) => {
				this.setState({
					result: {
						error: err,
					},
					busy: false,
				});
			});
	};
	render() {
		let style = {
			color: '#3678FA',
			fontSize: '30px',
			fontWeight: 'bold',
		};

		return (
			<Grid align="center" justify="center" container>
				<Grid item md={12}>
					<div>
						<div>
							<Typography style={style}>Spanish Translator</Typography>
						</div>
						<div>
							<Grid>
								<form onSubmit={this.handleSubmit}>
									<Grid item md={3}>
										<TextField
											fullWidth
											id="outlined-multiline-static"
											label="ENTER TEXT"
											value={this.state.user.value}
											multiline
											onChange={(event) => {
												this.update_field(event);
											}}
											rows={4}
											placeholder="Please Enter The Text You Would Like To Translate"
											variant="outlined"
											disabled={this.state.busy}
											error={this.state.user.error}
											helperText={this.state.user.error}
										></TextField>
									</Grid>
									<br />
									<Grid md={3}>
										<TextField
											disabled
											fullWidth
											value={this.state.result.value}
											id="outlined-multiline-static"
											label="TRANSLATION"
											val
											multiline
											rows={4}
											placeholder="TRANSLATION"
											variant="outlined"
										></TextField>
									</Grid>
									<br />
									<Submit
										disabled={this.state.busy || !!this.state.user.error}
									/>
								</form>
							</Grid>
						</div>
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default UserWords;
