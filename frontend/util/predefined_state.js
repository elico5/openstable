export default (user) => {
    return {
        entities: {
            users: {
                [user.id]: user
            },
            stables: {

            },
            reservations: {

            },
            reviews: {

            }
        },
        ui: {
            modal: null
        },
        errors: {

        },
        session: {
            id: user.id
        }
    };
};