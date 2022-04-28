import { makeObservable, observable, runInAction } from "mobx";
import axios from "axios";

export default class UserStore {
    @observable
    state = {
        users: [],
        loading: false,
        error: null,
    };

    constructor() {
        makeObservable(this);
    }

    // 비동기 처리 방법 1
    @action
    pending() {
        this.state.loading = true;
        this.state.error = null;
    }
    @action
    success(users) {
        this.state.users = users;
        this.state.loading = false;
        this.state.error = null;
    }
    @action
    fail(error) {
        this.state.loading = false;
        this.state.error = error;
    }

    // 비동기 처리 방법 2
    async getUsers() {
        try {
            runInAction(() => {
                this.state.loading = true;
                this.state.error = null;
            });
            const res = await axios.get("https://api.github.com/users");
            runInAction(() => {
                this.state.users = res.data;
                this.state.loading = false;
                this.state.error = null;
            });
        } catch (error) {
            runInAction(() => {
                this.state.loading = false;
                this.state.error = error;
            });
        }
    }

    //비동기 처리 방법 3
    @flow
    *getUsersFlow() {
        try {
            this.state.loading = true;
            this.state.error = null;
            const res = yield axios.get("https://api.github.com/users");

            this.state.users = res.data;
            this.state.loading = false;
            this.state.error = null;
        } catch (error) {
            this.state.loading = false;
            this.state.error = error;
        }
    }
}
