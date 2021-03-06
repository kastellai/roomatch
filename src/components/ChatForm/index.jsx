import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMessage } from "../../store/actions";
import styles from "./ChatForm.module.scss";

const ChatForm = ({ interlocutor, setVisible }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleMessage = e => {
    e.preventDefault();
    if (message.trim() !== "") {
      dispatch(
        newMessage({
          myId: user._id,
          friendId: interlocutor,
          message: {
            date: new Date(),
            author: user._id,
            text: message,
            read: false,
          },
        })
      );
      setMessage("");
    }
  };

  return (
    <div className={styles.main}>
      <form onSubmit={e => handleMessage(e)}>
        <input
          onFocus={() => setVisible(false)}
          onBlur={() => setVisible(true)}
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
          id="message"
          name="message"
          autoComplete="off"
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
