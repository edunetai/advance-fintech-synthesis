import express from 'express';
import cors from 'cors';
import { 
  initDatabase, 
  insertRegistration, 
  getAllRegistrations, 
  getAllTeams,
  getRegistrationById,
  validateRegistration 
} from './database.js';

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

// Start server
const portNum = Number(PORT);
app.listen(portNum, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${portNum}`);
});
