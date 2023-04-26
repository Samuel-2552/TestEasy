async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
  
    // Add user message to chat history
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("message", "user-message");
    userMessageDiv.innerText = userMessage;
    chatHistory.appendChild(userMessageDiv);
  
    // Clear chat input
    chatInput.value = "";
  
    // Send user message to OpenAI API
    const openaiAPIKey = "*************************************";
    const prompt = userMessage;
    const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
    const data = {
      prompt,
      max_tokens: 50,
      n: 1,
      stop: "\n",
    };
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiAPIKey}`,
        },
        body: JSON.stringify(data),
      });
      const { choices } = await response.json();
      const chatbotMessage = choices[0].text.trim();
  
      // Add chatbot message to chat history
      const chatbotMessageDiv = document.createElement("div");
      chatbotMessageDiv.classList.add("message", "chatbot-message");
      chatbotMessageDiv.innerText = chatbotMessage;
      chatHistory.appendChild(chatbotMessageDiv);
  
      // Scroll to bottom of chat history
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } catch (error) {
      console.error(error);
      // Display an error message in the chat history
      const errorMessageDiv = document.createElement("div");
      errorMessageDiv.classList.add("message", "error-message");
      errorMessageDiv.innerText = "Sorry, an error occurred. Please try again later.";
      chatHistory.appendChild(errorMessageDiv);
  
      // Scroll to bottom of chat history
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
    console.log("working");
  }
  