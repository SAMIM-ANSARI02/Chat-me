import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setchats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/chat");
    setchats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return <div>{chats}</div>;
};

export default ChatPage;
