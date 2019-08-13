export const getUserInfo = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    });
};

export const changeUserInfo = (userId, email, firstName, lastName, phoneNumber, ridingLocation) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: {
            userInfo: {
                email,
                firstName,
                lastName,
                phoneNumber,
                ridingLocation
            }
        }
    });
};

export const changeUserPassword = (userId, password) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: {
            password: {
                password
            }
        }
    });
};