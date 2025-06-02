export default async function getWeather() {
	const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.9&longitude=1.86&hourly=temperature_2m');
	if (!res.ok) {
		throw new Error('Ca va pas !');
	}

	const data = await res.json();
	return data;
} 