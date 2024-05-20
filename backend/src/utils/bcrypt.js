import bcrypt from 'bcrypt';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

export const hash = (password) => bcrypt.hashSync(password, salt);

export const compare = (password, passwordEncrypted) => bcrypt.compareSync(password, passwordEncrypted);
