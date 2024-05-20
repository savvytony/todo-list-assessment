import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import task from './modules/task'
import post from './modules/post'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
    task,
    post
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
