import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar /> 
      <Route path='/' element={<Feed />} /> 
      <Routes>
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
     </Routes>
     </Box> 
  </BrowserRouter>
);

export default App;