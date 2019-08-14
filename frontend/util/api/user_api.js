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
            user: {
                email,
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                riding_location: ridingLocation
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