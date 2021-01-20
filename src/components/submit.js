import Button from '@material-ui/core/Button';
function Submit(props) {
	return (
		<div>
			<Button variant="contained" color="primary" type="submit" disabled={props.disabled || false}>
				Translate
			</Button>
		</div>
	);
}
export default Submit;
