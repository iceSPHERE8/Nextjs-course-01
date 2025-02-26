import { useContext } from "react";

import MainHeader from "./main-header";
import Notification from "@/components/notification/notification";

import NotificationContext from "../../../store/notification-context";

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          text={activeNotification.text}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
