import { use } from "react";

const UserList = ({ usersPromise }) => {
    const users = use(usersPromise);
    // console.log(users);

    return (
        <div>
            <h2>Users inside | user list: {users.length}</h2>
        </div>
    );
};

export default UserList;
