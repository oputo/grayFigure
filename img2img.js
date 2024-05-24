document.getElementById('sendBtn').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = ''; // 入力フィールドをクリア
    
    if(userInput) {
        // ユーザーのメッセージを表示
        addMessageToChatBox('ユーザー', userInput);
        
        // Gemma API にリクエストを送信
        const apiKey = 'YOUR_API_KEY'; // ここに実際のAPIキーを使用
        const response = await fetch('https://gemma.googleapis.com/v1/your-endpoint', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
        },
        
        body: JSON.stringify({
        message: userInput
        })
        
        });
        
        const jsonResponse = await response.json();
        const aiResponse = jsonResponse.message; // 応答メッセージを抽出
        
        // Gemmaの応答をチャットボックスに表示
        addMessageToChatBox('Gemma', aiResponse);
    }
});
    
function addMessageToChatBox(sender, message) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // チャットボックスをスクロール
}