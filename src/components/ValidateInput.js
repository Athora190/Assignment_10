function validateInput(word) {
	if (word > 100) {
		return 'only 100 characters';
	}
	return null;
}
export default validateInput;
