import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER
    }),
    endpoints: (builder) => ({
        signinUser: builder.mutation({
            query: (body) => ({
                url: "/signin",
                method: "post",
                body
            })
        }),
        signupUser: builder.mutation({
            query: (body) => ({
                url: "/signup",
                method: "post",
                body
            })
        })
    })
});

export const { useSigninUserMutation, useSignupUserMutation } = authAPI;
export default authAPI.reducer;
