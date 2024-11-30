import React, { useState, useEffect, useContext } from "react";
import CommentList from "./CommentList"; // Assume that this component exists to display comments.
import { CommentsContext } from "../context/CommentsContext"; // Assuming CommentsContext is defined in your app

const RealTimeComments = ({ initialComments }) => {
  const { comments, setComments } = useContext(CommentsContext); // Access global state for comments

  useEffect(() => {
    // Simulate real-time updates with a WebSocket-like approach
    const interval = setInterval(() => {
      const newComment = generateRandomComment(); // Simulates receiving a new comment
      setComments((prevComments) => [...prevComments, newComment]); // Update global state
    }, 5000); // Adds a new comment every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [setComments]);

  const generateRandomComment = () => {
    const randomNames = ["Alice", "Bob", "Charlie", "Dana"];
    const randomMessages = [
      "Super article, merci !",
      "J'adore React !",
      "Très intéressant, merci !",
      "Continuez comme ça !",
    ];
    return {
      id: comments.length + 1,
      articleId: 1, // Assuming it belongs to the first article
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      comment: randomMessages[Math.floor(Math.random() * randomMessages.length)],
      date: new Date().toISOString().slice(0, 10),
    };
  };

  return (
    <div>
      <h2>Commentaires en Temps Réel</h2>
      <CommentList comments={comments} />
    </div>
  );
};

export default RealTimeComments;
