import { Home, UserRound } from "lucide-react";

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Profile",
    href: "/profile/{userId}",
    icon: UserRound,
  },
];
