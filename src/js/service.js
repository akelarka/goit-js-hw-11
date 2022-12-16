import axios from 'axios';
import { variables } from './variables';

const URL = 'https://pixabay.com/api';
const KEY = '24774444-704b802232309115ec5a78cea';
axios.defaults.baseURL = URL;

const fetchImages = async input => {
  const queryParams = new URLSearchParams({
    key: KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: variables.limit,
    page: variables.page,
  });

  const { data } = await axios.get('?' + queryParams.toString());
  return data;
};

export default fetchImages;