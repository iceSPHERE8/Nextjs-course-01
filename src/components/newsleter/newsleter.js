import { useRef, useContext } from "react";

import NotificationContext from "../../../store/notification-context";

export default function Newsletter() {
  const emailInputRef = useRef();

  const notificationCtx = useContext(NotificationContext);

  const newsletterHandler = (event) => {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Subscribe...",
      text: "Wait a moment.",
      status: "pending",
    });

    if (emailInputRef.current) {
      fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInputRef.current.value }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return response.json().then((data) => {
            throw new Error(data.message || 'Something went wrong.')
          })
        })
        .then((data) => {
          notificationCtx.showNotification({
            title: "Success",
            text: "Thanks for your subscribe.",
            status: "success",
          });
        })
        .catch((error) => {
          notificationCtx.showNotification({
            title: "Error",
            text: error.message || "Something went wrong.",
            status: "error",
          });
        });
    }
  };

  return (
    <form onSubmit={newsletterHandler}>
      <input
        ref={emailInputRef}
        type="email"
        className="border p-2 outline-none w-72"
      />
      <button className="btn px-2 py-2 uppercase bg-gray-200 ml-2">
        Subscribe
      </button>
    </form>
  );
}
