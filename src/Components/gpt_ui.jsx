import "./gpt_ui.css";
export default function gpt_ui() {
  return (
    <div class="chat-container">
      <div class="chat-header">ChatGPT</div>
      <div class="chat-body" id="chat-body">
        <div class="message bot-message">
          Welcome to ChatGPT. How can I assist you?
        </div>
      </div>
      <div class="message-input-container">
      <form action="/" method="post" >
      <input
          type="text"
          class="message-input"
          id="user-input"
          placeholder="Type your message..."
        />
        <button type="submit" class="send-btn">
          Send
        </button>
      </form>
      </div>
    </div>
  );
}
