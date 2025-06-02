
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

interface Message {
  id: string;
  sender: 'student' | 'mentor';
  message: string;
  timestamp: Date;
}

interface CourseChatProps {
  mentorName: string;
  courseTitle: string;
}

const CourseChat = ({ mentorName, courseTitle }: CourseChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'mentor',
      message: `Hi! I'm ${mentorName}. Feel free to ask me any questions about the "${courseTitle}" course. I'm here to help you understand what's included and if it's right for you!`,
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const studentMessage: Message = {
      id: Date.now().toString(),
      sender: 'student',
      message: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, studentMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate mentor response
    setTimeout(() => {
      const mentorResponse = generateMentorResponse(newMessage);
      const mentorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'mentor',
        message: mentorResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, mentorMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const generateMentorResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('duration') || lowerMessage.includes('long') || lowerMessage.includes('time')) {
      return "The course includes 15-20 hours of structured content plus 1 month of group chat access. You can learn at your own pace with lifetime access to recordings.";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('payment')) {
      return "The course is priced at ₹12,999 plus GST. This includes all live sessions, recorded content, group mentorship, and trading tools. We also offer a 7-day money-back guarantee.";
    }
    
    if (lowerMessage.includes('live') || lowerMessage.includes('session')) {
      return "Yes, the course includes live sessions where you can interact with me directly. All sessions are also recorded so you won't miss anything if you can't attend live.";
    }
    
    if (lowerMessage.includes('group') || lowerMessage.includes('chat') || lowerMessage.includes('community')) {
      return "You'll get access to our exclusive group chat for 1 month where you can ask questions, share insights with fellow students, and get guidance from me directly.";
    }
    
    if (lowerMessage.includes('beginner') || lowerMessage.includes('experience') || lowerMessage.includes('level')) {
      return "This course is designed for all levels. I start with the basics and gradually move to advanced concepts. No prior trading experience is required.";
    }
    
    if (lowerMessage.includes('certificate') || lowerMessage.includes('certification')) {
      return "Yes, you'll receive a course completion certificate once you finish all modules and assignments. This shows your commitment to learning trading.";
    }
    
    if (lowerMessage.includes('refund') || lowerMessage.includes('guarantee')) {
      return "We offer a 7-day money-back guarantee. If you're not satisfied with the course content within the first week, we'll provide a full refund.";
    }
    
    if (lowerMessage.includes('strategy') || lowerMessage.includes('profit') || lowerMessage.includes('return') || lowerMessage.includes('stock') || lowerMessage.includes('trade')) {
      return "I focus on teaching you the course structure and methodology rather than specific trading strategies. The course will cover systematic approaches to learning trading concepts and risk management principles.";
    }
    
    return "That's a great question! This course focuses on structured learning with comprehensive modules, live interactions, and ongoing support. Would you like to know more about any specific aspect of the course structure or what's included?";
  };

  return (
    <Card className="h-96 flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageSquare className="w-5 h-5" />
          Chat with {mentorName}
        </CardTitle>
        <p className="text-sm text-gray-600">Ask questions about the course before you purchase</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'student'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'student' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                <p className="text-sm">Typing...</p>
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask about course duration, content, pricing..."
            className="flex-1"
          />
          <Button type="submit" size="sm" className="px-3">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CourseChat;
