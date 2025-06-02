import { useEffect, useState } from "react";
import getWeather from "../services/getWeather";

export default function useWeatherById(id) {
	const [weather, setWeather] = useState({});

	async function getData(myId) {
		const data = await getWeather(myId);
		setWeather(data);
	}

	useEffect(() => {
		getData(id);
	}, [id]);

	return { weather, getData };
}