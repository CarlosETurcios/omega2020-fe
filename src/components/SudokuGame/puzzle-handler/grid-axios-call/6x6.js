import axios from 'axios';

export const Get6x6 = () =>
  axios
    .get('https://omega2020.herokuapp.com/puzzle')
    .then((res) => {
      console.log('AXIOS', res.data);
      return res.data;
    })
    .catch((err) => console.log(err.response));
