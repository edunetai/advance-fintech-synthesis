import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  initDatabase,
  insertRegistration,
  getAllRegistrations,
  getAllTeams,
  getRegistrationById,
  validateRegistration
} from './database.js';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database
initDatabase();

// API Routes

// POST /api/register - Submit a new registration
app.post('/api/register', (req, res) => {
  try {
    const data = req.body;
    
    // Validate incoming data
    const validation = validateRegistration(data);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        errors: validation.errors
      });
    }
    
    // Insert into database
    const id = insertRegistration(data);
    
    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
      id
    });
  } catch (error) {
    console.error('Error inserting registration:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/registrations - Get all registrations (admin)
app.get('/api/registrations', (req, res) => {
  try {
    const registrations = getAllRegistrations();
    res.json({
      success: true,
      data: registrations
    });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/teams - Get all teams for teams table
app.get('/api/teams', (req, res) => {
  try {
    const teams = getAllTeams();
    res.json({
      success: true,
      data: teams
    });
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/registrations/:id - Get a specific registration (admin)
app.get('/api/registrations/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const registration = getRegistrationById(id);
    
    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }
    
    res.json({
      success: true,
      data: registration
    });
  } catch (error) {
    console.error('Error fetching registration:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Load context files for chatbot
let chatbotContext = '';
try {
  const contextDir = path.join(process.cwd(), 'backend', 'context');
  const files = fs.readdirSync(contextDir).filter(f => f.endsWith('.txt'));
  
  for (const file of files) {
    const filePath = path.join(contextDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    chatbotContext += `\n\n=== ${file} ===\n${content}`;
  }
  console.log('Chatbot context loaded successfully');
} catch (error) {
  console.error('Error loading chatbot context:', error);
}

// POST /api/chat - Handle chat with Ollama AI
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'Message is required'
      });
    }

    // Get Ollama configuration from environment variables
    const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
    const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2';

    // Build messages with context
    const systemPrompt = `You are an AI assistant for the AFS 2026 (Advance Fintech Synthesis) competition. 
This is a fintech innovation competition organized by UII Incubator in Vietnam.

Use the following context information to answer questions:
${chatbotContext}

When answering questions about the competition, use the context provided above. Be helpful and informative about fintech topics, especially related to Vietnam's fintech ecosystem and the AFS 2026 competition.`;

    // Call Ollama OpenAI-compatible API
    const ollamaResponse = await fetch(`${ollamaUrl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: ollamaModel,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 512,
        temperature: 0.7,
        stream: false
      })
    });

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();
      console.error('Ollama error:', errorText);
      return res.status(500).json({
        success: false,
        error: 'Failed to get response from Ollama'
      });
    }

    const data = await ollamaResponse.json();
    
    res.json({
      success: true,
      response: data.choices[0].message.content
    });
  } catch (error) {
    console.error('Error generating AI response:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate AI response'
    });
  }
});

// Start server
const portNum = Number(PORT);
app.listen(portNum, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${portNum}`);
});
