import withAuth from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
});

export const config = {
  matcher: ["/create-one", "/settings/account", "/settings/profile"],
};
