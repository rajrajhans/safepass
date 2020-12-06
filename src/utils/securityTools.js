import bcrypt from 'bcryptjs';
import sjcl from 'sjcl';
import { key } from '../config';

export const encrypt = data => {
  if (!data) {
    return null;
  }

  let temp = data;

  if (typeof data === 'object') {
    temp = JSON.stringify({ ...data });
  }

  return sjcl.encrypt(key, temp);
};

export const decrypt = data => {
  if (!data) {
    return null;
  }

  const decrypted = sjcl.decrypt(key, data);

  return JSON.parse(decrypted);
};

export const generatePasswordHash = password => {
  if (!password) {
    return null;
  }

  return bcrypt.hashSync(password, 10);
};

export const compareHashToPassword = (password, hash) => {
  if (!password || !hash) {
    return null;
  }

  return bcrypt.compareSync(password, hash);
};
