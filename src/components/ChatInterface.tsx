import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Trash2, Send, Star, ArrowRight } from "lucide-react";
import mountainBg from "@/assets/mountain-background.jpg";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [roomName] = useState("Room Name");

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${mountainBg})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button variant="glass" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <span className="text-sm text-white/70">Chat screen</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-lg font-medium text-white">{roomName}</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/70">Delete Room</span>
            <Button variant="accent" size="sm" className="gap-2">
              <Trash2 className="w-4 h-4" />
              Delete Room
            </Button>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-4xl">
            <div 
              className="w-full h-96 bg-glass border border-glass-border backdrop-blur-md rounded-2xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${mountainBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
              <div className="relative z-10 h-full flex items-center justify-center">
                {/* Chat content area - empty for now */}
                <div className="text-white/50 text-center">
                  <p className="text-lg">Start a conversation...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input Area */}
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-center">
              <span className="text-white/70 text-sm">Type your message</span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Message Input */}
              <div className="flex-1 relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message....."
                  className="bg-glass border-glass-border backdrop-blur-md text-white placeholder:text-white/50 h-12 rounded-full pr-12"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="glass" size="icon" className="rounded-full w-12 h-12">
                  <Star className="w-5 h-5" />
                </Button>
                
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-sm">Improve</span>
                  <span className="text-white/70 text-sm">Send</span>
                </div>
                
                <Button variant="glass" size="icon" className="rounded-full w-12 h-12">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;