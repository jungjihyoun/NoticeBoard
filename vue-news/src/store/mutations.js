export default {
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_USER(state, user){
        state.user = user;
    },
    SET_ITEM(state,item){
        state.item = item;
    }
}

//  mutations 는 동기적 로직을 정의