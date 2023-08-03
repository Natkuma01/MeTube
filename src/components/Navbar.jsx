import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logo, me_tube } from '../utils/constants'

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: "sticky", background: 'pink', top: 0, justifyContent: 'space-between'}}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="metube" height={40} />
    </Link>

        <img src={me_tube} alt="logo" height={65} />
  
    <SearchBar />
</Stack>
 
  )


export default Navbar