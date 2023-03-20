import axios from 'axios';
const KEY = 'AIzaSyChdusahudhausduasbdyaiew90qied';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:'100',
        key:KEY
    }
});