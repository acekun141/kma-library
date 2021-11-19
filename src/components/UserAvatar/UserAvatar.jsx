import React, { useMemo } from "react";
import "./style.scss";

const UserAvatar = () => {
  const first_name = "Le Viet"
  const last_name = "Hung"

  const userShortName = useMemo(() => {
    return `${first_name.charAt(0)}${last_name.charAt(0)}`;
  }, [first_name, last_name]);

  return (
    <div className="user-avatar">
      <p>{userShortName}</p>
    </div>
  );
}

export default UserAvatar;