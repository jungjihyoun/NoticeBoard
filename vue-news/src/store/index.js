
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
        ask: [],
        jobs: [],
        user: {},
        item: {}
    },
    getters,
    mutations : mutations,
    actions,
    // 앞뒤 같으면 뒤에 생략 가능(문법)
})