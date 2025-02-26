import { useRef, useState, useEffect } from "react";

import { useRouter } from "next/router";

import comments_data from "./comments-data";

export default function Comments({comments}) {
  const router = useRouter();
  const path = router.query;

  const emailInputRef = useRef();
  const contentInputRef = useRef();

  const [allComments, setComments] = useState(comments);
  // // console.log(allComments)
  // useEffect(() => {
  //   setComments(comments);
  //   // console.log(comments);
  // }, [comments])
  

  const commentsHandler = (event) => {
    event.preventDefault();

    fetch(`/api/comments/${path.eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        content: contentInputRef.current.value,
        eventId: path.eventId,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    fetch(`/api/comments/${path.eventId}`)
    .then((response) => response.json())
    .then((data) => setComments(data.comments))
  };

  // useEffect(() => {}, [])
  return (
    <div>
      {/* Comments list */}
      <div className="flex justify-center mx-8 border px-4">
        <ul className="w-full">
          {allComments &&
            allComments.map((item) => {
              return (
                <li
                  key={item._id}
                  className="flex justify-center border-b-2 py-4"
                >
                  <div className="text-gray-500">"{item.email}" said:</div>
                  <div className="ml-4">{item.content}</div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex justify-center mt-8 mb-12">
        <form className="w-96" onSubmit={commentsHandler}>
          <div>
            <label>Email:</label>
            <input
              ref={emailInputRef}
              type="email"
              className="border p-2 outline-none w-full"
            />
          </div>
          <div className="mt-4">
            <label>Reply:</label>
            <textarea
              ref={contentInputRef}
              className="border p-2 outline-none w-full"
            />
          </div>
          <div>
            <button className="btn px-2 py-2 mt-4 uppercase bg-gray-200 w-full">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


