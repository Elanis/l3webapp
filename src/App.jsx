import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Weather from './pages/Weather';

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/weather" element={<Weather />} />
			</Route>
		</Routes>
	);
}
