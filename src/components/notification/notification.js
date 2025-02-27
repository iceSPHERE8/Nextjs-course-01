import { useContext } from "react";

import NotificationContext from "../../../store/notification-context";

export default function Notification({ title, text, status }) {
  const notificationCtx = useContext(NotificationContext);

  let style =
    "bg-red-500 fixed bottom-0 w-full h-12 flex justify-center items-center border text-white";

  if (status === "pending") {
    style = "bg-blue-500 fixed bottom-0 w-full h-12 flex justify-center items-center border text-white";
  }
  if (status === "success") {
    style = "bg-green-500 fixed bottom-0 w-full h-12 flex justify-center items-center border text-white";
  }
  if (status === "error") {
    style = "bg-red-500 fixed bottom-0 w-full h-12 flex justify-center items-center border text-white";
  }

  return (
    <div className={style} onClick={notificationCtx.hideNotification}>
      <div>{title}</div>
      <div className="ml-2 uppercase">{text}</div>
    </div>
  );
}
