import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams(); 
  console.log(videos)

  useEffect(() => {
    // const fetchResults = async () => {
    //   const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)}})
    //   setChannelDetail(data.items[0])
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos (data.items));
    }, [id])

  
  return (
    <Box>
      <Box>
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display= "flex" p="2">
        <Box sx={{ mr: { sm: '100px' }}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail;