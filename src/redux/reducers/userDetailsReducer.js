const initialState = [
    {
        email: "sameenamajeed321@gmail.com",
        password: "a12345678"
    },
    {
        email: "sam@example.com",
        password: "b12345678"
    },
];

const UserDetailsReducers = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default UserDetailsReducers;