import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);


//vuex : 상태 관리 도구 . 상태? 여러 컴포넌트 간의 공유되는 데이터 속성들
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        news: [],
        ask:  [],
        jobs: [],
        user: {},
        item: {},
    },
    getters,
    mutations : mutations,
    actions,
    
    // 앞뒤 같으면 뒤에 생략 가능(문법)
})

// state : 컴포넌트 간에 공유할 Data
// view  : 데이터가 표현될 template
// actions: 사용자의 입력에 따라 반응할 methods / 비동기 처리(?)
// getters: state 값을 쉽게 접근할 수 있게 한다
// mutations: state(vuex의 값) 값을 변경
