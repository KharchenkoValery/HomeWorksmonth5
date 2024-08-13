// import { types } from "./types"

// export function fetchUsersAction() {
//     return async function(dispatch) {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data); // Проверка данных
//         dispatch(getUsersAction(data));
//     }
// }



// import { types } from "./types";

// export function fetchUserMoreAction(userId) {
//     return async function(dispatch) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         const data = await response.json();
//         return data; // Возвращаем данные для использования в компоненте
//     };
// }

// export function getUsersAction(users) {
//     return {
//         type: types.USERS,
//         payload: users
//     };
// }

import { types } from "./types";

export function fetchUsersAction() {
    return async function(dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(getUsersAction(data));
    };
}

export function fetchUserMoreAction(userId) {
    return async function(dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        return data; // Возвращаем данные для использования в компоненте
    };
}

export function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    };
}

export function changeTitleActions() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function changeTitleWithParams(text) {
    return {
        type: types.WITH_PARAMS,
        payload: text
    }
}

export function changeInput (inputValue) {
    return {
        type: types.FROM_INPUT,
        payload: inputValue
    }
}

export function asyncFunctionAction () {
    return function () {
        setTimeout(() => {
            alert('Hello!')
        }, 2000)
    }
}
// export function fetchUsersAction () {
//     return async function(dispatch) {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         dispatch(getUsersAction(data))
        
        
//     }
// }

// export function getUsersAction(users) {
//     return {
//         type: types.USERS,
//         payload: users
//     }
    
// }

export function addUserAction(user) {
    return async function() {
        try {
            const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        alert('successfully')
        } catch (e) {
            console.error(e); 
        } 
    } 
}

// export function addPasswordAction(password) {
//     return async function() {
//         try {
//             const options = {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify(password)
//             }
//             const response = await fetch("https://jsonplaceholder.typicode.com/password", options)
//            if(password !== '' && password){
//             alert("Password Saved")
//            }
//             else {
//             alert("Incorrect password")
//            }
//         } catch (e) {
//             console.error(e);
//         }
//     }
// }

export function addPasswordAction(password) {
    return async function(dispatch) {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(password)
            };
            const response = await fetch("https://jsonplaceholder.typicode.com/password", options);
            if (password.password && password.confirmPassword && password.password === password.confirmPassword) {
                alert("Password Saved");
            } else {
                alert("Passwords do not match or fields are empty");
            }
        } catch (e) {
            console.error(e);
        }
    };
}

