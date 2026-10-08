import { ChatMessages, ChatInput } from "../components/Chat.jsx";

export default function chatInterface() {
  return (
    <main className="chat-container">
      {/* Passing messages state as props - DATA FLOW! */}
      <ChatMessages />
      <p>Test</p>
      {/* Passing callback function as props - CALLBACK PROPS! */}
      <ChatInput />
    </main>
  );
}
