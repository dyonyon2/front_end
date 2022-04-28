import { inject, observer } from "mobx-react";
import { useCallback } from "react";
import UserList from "../components/UserList";
import axios from "axios";

const UserListContainer = ({ userStore }) => {
    // 비동기 처리 방법 1
    // const getUsers = useCallback(async () => {
    //     try {
    //         userStore.pending();
    //         const res = await axios.get("https://api.github.com/users");
    //         userStore.success(res.data);
    //     } catch (error) {
    //         userStore.fail(error);
    //     }
    // }, [userStore]);

    // 비동기 처리 방법 2
    // const users = userStore.state.users;
    // const getUsers = useCallback(() => {
    //     userStore.getUsers();
    // }, [userStore]);

    // 비동기 처리 방법 3
    const users = userStore.state.users;
    const getUsers = useCallback(() => {
        userStore.getUsersFlow();
    }, [userStore]);

    return <UserList getUsers={getUsers} users={users} />;
};

export default inject("userStore")(observer(UserListContainer));
