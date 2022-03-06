const guestGuard = (to, from, next) => {
    let isAuthenticated= false;
    let loc_store = JSON.parse(localStorage.getItem('vuex'));
    if(loc_store) {
        if(loc_store.auth.is_authenticated) {
            isAuthenticated = true;
        } else {
            isAuthenticated= false;
        }
    }


    if(isAuthenticated) {
        next('/');
    } else {
        next();
    }
}

const authGuard = (to, from, next) => {
    let isAuthenticated= false;
    let loc_store = JSON.parse(localStorage.getItem('vuex'));
    if(loc_store) {
        if(loc_store.auth.is_authenticated) {
            isAuthenticated = true;
        } else {
            isAuthenticated= false;
        }
    }

    if(!isAuthenticated) {
        next('login');
    } else {
        next();
    }
}

export {guestGuard, authGuard}
