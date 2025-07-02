import { Cartas } from "./Cartas";
import { Encabezamiento } from "./Encabezamiento";
import { Navbar } from "./Navbar";

//create your first component
const Home = () => {
	return (
		<section>
			<Navbar></Navbar>
			<div class="container">
				<Encabezamiento></Encabezamiento>
				<Cartas></Cartas>
			</div>
		</section>
	);
};

export default Home;