import { useLocation, useNavigate } from "react-router";

export default function Footer() {
	const location = useLocation();
	console.log(location);
	const navigate = useNavigate();

	return (
		<div>
			<p>Footer</p>
			<input
				type="button"
				value="Goooo!"
				onClick={() => navigate('/')}
			/>
		</div>
	);
}
