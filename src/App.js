import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: "#FFF" }}>
			{/* Navbar */}
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetail />} />
				<Route path="/channel/:id" element={<ChannelDetail />} />
				<Route path="/search/:searchTerm" element={<Searchfeed />} />
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
