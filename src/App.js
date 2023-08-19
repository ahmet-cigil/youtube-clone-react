import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: "#FFF" }}>
			Navbar
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetail />} />
				<Route path="/channel/:id" exact element={<ChannelDetail />} />
				<Route path="/search/:searchTerm" exact element={<Feed />} />
				<Route path="/" exact element={<Feed />} />
				<Route path="/" exact element={<Feed />} />
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
