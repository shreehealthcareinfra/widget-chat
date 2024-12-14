// Embeddable Chat Widget
(function() {
    // Create styles
    const styles = `
        #chat-widget-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
        #chat-widget-button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        #chat-widget-button:hover {
            background-color: #0056b3;
        }
        #chat-iframe-container {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 350px;
            height: 500px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            display: none;
            background: white;
            overflow: hidden;
            transition: all 0.3s ease;
            z-index: 1001;
        }
        #chat-close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #f44336;
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
        }
        #chat-iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 10px;
        }
    `;

    // Create style element
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    // Create widget container
    const container = document.createElement('div');
    container.id = 'chat-widget-container';

    // Create chat button
    const chatButton = document.createElement('button');
    chatButton.id = 'chat-widget-button';
    chatButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    `;

    // Create iframe container
    const iframeContainer = document.createElement('div');
    iframeContainer.id = 'chat-iframe-container';

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.id = 'chat-close-button';
    closeButton.innerHTML = '×';

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'chat-iframe';
    // Replace with your actual chat URL
    iframe.src = 'https://your-chat-platform-url.com/embed';

    // Append elements
    iframeContainer.appendChild(closeButton);
    iframeContainer.appendChild(iframe);
    container.appendChild(chatButton);
    container.appendChild(iframeContainer);
    document.body.appendChild(container);

    // Toggle chat window
    function toggleChatWindow() {
        const isOpen = iframeContainer.style.display === 'block';
        
        if (isOpen) {
            // Close the chat window
            iframeContainer.style.display = 'none';
            chatButton.style.transform = 'rotate(0deg)';
        } else {
            // Open the chat window
            iframeContainer.style.display = 'block';
            chatButton.style.transform = 'rotate(90deg)';
        }
    }

    // Add event listeners
    chatButton.addEventListener('click', toggleChatWindow);

    closeButton.addEventListener('click', toggleChatWindow);
})();
