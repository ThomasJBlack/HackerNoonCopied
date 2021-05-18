import "./App.css";
import articles from "./hackerNoonArticles";

import Header from "./AppDir/HeaderDir/Header.js";
import MainContent from "./AppDir/MainContentDir/MainContent.js";
import Footer from "./AppDir/FooterDir/Footer.js";

function App() {
	return (
		<div className="App">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;

/* <header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<p>
		Edit <code>src/App.js</code> and save to reload.
	</p>
	<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
		Learn React
	</a>
</header>; */
