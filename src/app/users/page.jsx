const UsersPage = async () => {
    const res = await fetch("http://localhost:8000/users");
    const users = await res.json();

    console.log(users);
    return (
        <div className="text-center">
            <h2 className="text-5xl">Users: {users.length}</h2>
            <div className="grid grid-cols-3 gap-5 mt-10">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-slate-500 border p-10 rounded-xl"
                    >
                        <h3 className="text-3xl">User Name: {user.name}</h3>
                        <p>User Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
