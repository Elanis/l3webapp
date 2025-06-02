import useWeather from "../../hooks/useWeather";

export default function Weather() {
	const { weather, getData } = useWeather();

	console.log(weather);

	return (
		<div>
			<input type="button" onClick={getData} value="Press me!" />
		</div>
	);
}
