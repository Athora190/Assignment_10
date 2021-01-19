import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import UserWords from './components/userInput';
import Submit from './components/submit.js';

function App() {
	let appStyle = {
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	};
	return (
		<Grid container align="center" justify="center" direction="column">
			<Grid item>
				<UserWords />
			</Grid>
			<Submit />
			<Grid></Grid>
		</Grid>
	);
}

export default App;
