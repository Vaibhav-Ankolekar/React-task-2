import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import Comments from "./components/Comments";

const App = () => {

	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = async () => {
		const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments/");
		setComments(data);
	};

	return (
		<div className="App">
			<Header count={comments.length} />
			<Comments comments={comments} />
		</div>
	);
};

export default App;
