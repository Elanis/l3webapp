export default async function postData(data) {
	const res = await fetch(
		'https://example.tld/api/my/route', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	// res de type Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
	if (!res.ok) {
		throw new Error('Y\'a un probleme!');
	}
}