import { Suspense } from "react";
import UserList from "../../components/UserList";

// const usersPromise = fetch('').then(res => res.json())

const getUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    return res.json();
};

const Users2Page = () => {
    const usersPromise = getUsers();
    return (
        <div className="text-center">
            <h2 className="text-3xl">Users2 with suspence</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UserList usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
};

export default Users2Page;
