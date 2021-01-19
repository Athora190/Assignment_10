// Import translate
const { Translate } = require('@google-cloud/translate').v2;

// Credentials from api folder
const CREDENTIALS = require('../api_keys/test.json');

// Configuration for the client
const translate = new Translate({
	credentials: CREDENTIALS,
	projectId: CREDENTIALS.project_id,
});

//Translate Function - Take text input and target language
const translateText = async (text, targetLanguage) => {
	try {
		let [response] = await translate.translate(text, targetLanguage);
		return response;
	} catch (error) {
		console.log(`Error at translateText --> ${error}`);
		return 0;
	}
};
// export default translateText;

translateText('Good Morning', 'es')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
