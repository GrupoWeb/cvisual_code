import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        access_token: sessionStorage.getItem('access_token') || null,
        layoutType: 'vertical',
        layoutWidth: 'fluid',
        leftSidebarType: 'dark',
        topbar: 'dark',
        loader: false
    }),

    actions: {
        changeLayoutType({ commit }, { layoutType }) {
            commit('CHANGE_LAYOUT', layoutType);
        },
    
        changeLayoutWidth({ commit }, { layoutWidth }) {
            commit('CHANGE_LAYOUT_WIDTH', layoutWidth)
        },
    
        changeLeftSidebarType({ commit }, { leftSidebarType }) {
            commit('CHANGE_LEFT_SIDEBAR_TYPE', leftSidebarType)
        },
    
        changeTopbar({ commit }, { topbar }) {
            commit('CHANGE_TOPBAR', topbar)
        },
    
        changeLoaderValue({ commit }, { loader }) {
           commit('LOADER', loader)
        },

        auth(data){
            this.user = data.user;
            sessionStorage.user = JSON.stringify(data.user);
            this.access_token = data.access_token;
            sessionStorage.access_token = data.access_token;
        },
        setUser(user) {
            this.user = user;
        },
        logout() {
            sessionStorage.clear();
            this.access_token = null;
            this.user = {
                email_verified_at: null,
                calificada: null
            }
        },
        getters: {
            isLoggedIn(state) {
                return state.access_token !== null;
            },
            isVerified(state) {
                return state.user.email_verified_at != null
            },
            isQualified(state) {
                return state.user.email_verified_at != null && state.user.calificada != null
            },
            // isAdmin(state) {
            //     return state.user.role_id == 2
            // },
            // personaId(state) {
            //     return btoa(state.user.persona_id)
            // }
        },
    },

    mutations: {
        CHANGE_LAYOUT(state, layoutType) {
            state.layoutType = layoutType;
          },
        CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
            state.layoutWidth = layoutWidth;
          },
        CHANGE_LEFT_SIDEBAR_TYPE(state, leftSidebarType) {
            state.leftSidebarType = leftSidebarType;
          },
        CHANGE_TOPBAR(state, topbar) {
            state.topbar = topbar;
          },
        LOADER(state, loader) {}
            
    }
});