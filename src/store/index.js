

import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false,
    userType: null,
    user: {
      fname: '',
    },
cnum:'',
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status;
    },
    SET_USER_TYPE(state, userType) {
      state.userType = userType;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_CNUM(state, cnum) {
      state.user.cnum = cnum;
    },
  },
  actions: {
    async login({ commit }, { userType, fname }) {
      commit('SET_LOGIN_STATUS', true);
      commit('SET_USER_TYPE', userType);
      commit('SET_USER', { fname });

      const response = await fetch(`http://localhost:3000/driverregister?fname=${fname}`);
      const userData = await response.json();
  
      if (userData.length > 0) {
        const cnum = userData[0].cnum; 
        commit('SET_CNUM', cnum);
      } else {
       
        commit('SET_CNUM', ''); 
      }
    },

    
    logout({ commit }) {
      commit('SET_LOGIN_STATUS', false);
      commit('SET_USER_TYPE', null);
      commit('SET_USER', { fname: '' });
      commit('SET_CNUM', { cnum: '' });
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    userType: state => state.userType,
    userName: state => state.user.fname,
    cnum: state => state.user.cnum,
  },
});

