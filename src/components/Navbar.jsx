import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../utils/metube-trans.png';
import Lottie from "lottie-react";
import youtubeLogo from "../utils/youtube-logo.json";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: "sticky", background: 'pink', top: 0, justifyContent: 'space-between'}}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Lottie animationData={youtubeLogo} className="metube-animate" />
    </Link>

        <img src={ logo } alt="logo" className="metube-font" />
  
    <SearchBar />
</Stack>
 
  )


export default Navbar