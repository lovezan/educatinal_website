import React, { useState } from 'react';
import { Fab, Box, Typography, TextField, IconButton, Paper } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import './chatbox.css';

const Chatbox = () => {
  const [isChatboxOpen, setChatboxOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbox = () => {
    setChatboxOpen(!isChatboxOpen);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
    }
  };

  return (
    <>
      <Fab className="styled-fab left" color="primary" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
       <WhatsAppIcon className="Allicon" /> 
      </Fab>
      {!isChatboxOpen && (
        <Fab
          className="styled-fab right"
          color="secondary"
          onClick={toggleChatbox}
        >
          <ChatIcon className="Allicon" />
        </Fab>
      )}

      <Paper className={`chatbox-container ${isChatboxOpen ? 'open' : ''}`}>
        {isChatboxOpen && (
          <>
            <Box className="chatbox-header">
              <Typography>Chat</Typography>
              <IconButton size="small" color="inherit" onClick={toggleChatbox}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box className="messages-container">
              {messages.map((message, index) => (
                <Box key={index} className={`message ${message.sender === 'user' ? 'user' : 'other'}`}>
                  {message.text}
                </Box>
              ))}
            </Box>
            <Box className="input-container">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
              />
              <IconButton color="primary" onClick={handleSend}>
                <SendIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Paper>
    </>
  );
};

export default Chatbox;
