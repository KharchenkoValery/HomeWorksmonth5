// import { types } from "./types";

// const initialState = {
//     password: [],
//     confirmPassword: []
// };

// export default function passwordReducer(state = initialState, action) {
//     if (action.type === types.PASSWORD && password == confirmPassword) {
//         return { password: action.payload, confirmPassword: action.payload };
//     } else if (password === '' && password !== confirmPassword) {
//         return console.error(e)
//     }
//     return state;
// }


import { types } from "./types";

const initialState = {
    password: [],
    confirmPassword: []
};

export default function passwordReducer(state = initialState, action) {
    switch (action.type) {
        case types.PASSWORD:
            if (action.payload.password === action.payload.confirmPassword) {
                return { password: action.payload.password, confirmPassword: action.payload.confirmPassword };
            } else {
                console.error('Passwords do not match');
                return state;
            }
        default:
            return state;
    }
}
