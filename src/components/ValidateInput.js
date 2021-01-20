function validateInput(word) {
	if (word.length > 100) {
		return 'only 100 characters';
	}
	return null;
}
export default validateInput;
