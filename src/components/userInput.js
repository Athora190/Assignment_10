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
			busy: false,
		};
	}

	update_field(event) {
		// do a convenience error check
		if (event.target.value.length < 20) {
			this.setState({
				user: {
					value: event.target.value,
					error: this.state.user.error,
				},
			});
		}

		// implied else
		// do nothing!
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ busy: true })
		translateText(this.state.user.value, 'es')
			.then((res) => {
				this.setState({
					result: {
						value: res,
					},
					busy: false
				});
			})
			.catch((err) => {
				this.setState({
					result: {
						error: err,
					},
					busy: false
				});
			});
			// .finally(() => {
			// 	this.setState({
			// 		busy: false
			// 	});
			// });
	};
	render() {
		let style = {
			color: '#3678FA',
			fontSize: '30px',
			fontWeight: 'bold',
		};

		return (
			<Grid container>
				<Grid item md={12}>
					<div>
						<div>
							<p style={style}>Word Translater</p>
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
									<Submit disabled={this.state.busy}/>
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
