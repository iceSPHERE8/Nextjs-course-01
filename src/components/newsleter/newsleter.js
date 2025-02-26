import { useRef } from "react";

export default function Newsletter() {
  const emailInputRef = useRef();

  const newsletterHandler = (event) => {
    event.preventDefault();

    if (emailInputRef.current) {
      fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInputRef.current.value }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
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
