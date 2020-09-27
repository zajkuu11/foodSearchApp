import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer rJz6_xnrrfV667vjVAjwYSSkV8XWw7jXmBZJxmnZi2un3O6KO_oLPEpfoiKrVS3YByl8sMuWBZ25WaF3mlnVBXjIR4vPBFtD_nfSZ0hQ1GXZR55M6FQ64PlCAkZvX3Yx',
  },
});
