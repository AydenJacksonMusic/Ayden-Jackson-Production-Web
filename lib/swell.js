import Swell from 'swell-js';

const { SWELL_API_KEY, SWELL_SECRET_KEY } = process.env;

const swell = new Swell({
  publicKey: SWELL_API_KEY,
  secretKey: SWELL_SECRET_KEY,
});

export default swell;