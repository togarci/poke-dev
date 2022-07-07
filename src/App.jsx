import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/SCSS/main.scss';
import { Router } from "./Routes";

function App() {
	return (
		<div className="App flex-column">
			<Header/>
			<Router/>
		</div>
	)
}

export default App
