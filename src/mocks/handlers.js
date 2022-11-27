import { rest } from "msw"

const baseURL = 'https://react-project-5.herokuapp.com/'

export const handlers = [
    rest.get(`${baseUrl}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 6,
            username: "SatoshiKon",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 6,
            profile_image: "https://res.cloudinary.com/dbybmxt1u/image/upload/v1/media/../photo_react_main"
          })
        );
    }),
    rest.post(`${baseUrl}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
]