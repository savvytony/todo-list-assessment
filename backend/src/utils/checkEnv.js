import config from '../configs/config.js';

export const isProd = () => config.env.startsWith('prod');

export const isDev = () => config.env.startsWith('dev');
