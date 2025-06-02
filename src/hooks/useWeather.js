import { useEffect, useState } from "react";
import getWeather from "../services/getWeather";

export default function useWeather() {
	const [weather, setWeather] = useState({});

	async function getData() {
		const data = await getWeather();
		setWeather(data);
	}

	useEffect(() => {
		getData();
	}, []);

	return { weather, getData };
}