import { BiHome, BiBook, BiBookmark, BiUser, BiDoorOpen } from "react-icons/bi";

const logout = () => {
  localStorage.clear();
  window.location.reload();
};

export const adminItems = [
  { name: "Dashboard", path: "/admin-dashboard", icon: BiHome, isAdmin: true, active: true },
  { name: "Books", path: "/books", icon: BiBook, isAdmin: false },
  { name: "Ebooks", path: "/ebooks", icon: BiBookmark, isAdmin: false },
  { name: "Students", path: "/students", icon: BiUser, isAdmin: true },
  { name: "Logout", icon: BiDoorOpen, isAdmin: false, bottom: true, action: logout },
]

export const userItems = [
  { name: "Dashboard", path: "/dashboard", icon: BiHome, isAdmin: false },
  { name: "Books", path: "/books", icon: BiBook, isAdmin: false },
  { name: "Ebooks", path: "/ebooks", icon: BiBookmark, isAdmin: false },
  { name: "Logout", icon: BiDoorOpen, isAdmin: false, bottom: true, action: logout },
]