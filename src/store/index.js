import { createStore } from 'vuex';
import foodModule from './modules/food';
import authenticationModule from './modules/authentication';
import restaurentModule from './modules/restaurents';
const store = createStore({
  modules:{
    food:foodModule,
    authentication:authenticationModule,
    restuarant: restaurentModule
  }
});

export default store;