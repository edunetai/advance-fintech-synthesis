import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'data', 'registrations.db');

// Initialize database
const db = new Database(dbPath);

// Create tables if they don't exist
const initDatabase = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      team_name TEXT NOT NULL,
      team_leader_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      institution TEXT NOT NULL,
      team_size INTEGER DEFAULT 3,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  console.log('Database initialized successfully');
};

// Insert a new registration
const insertRegistration = (data: {
  teamName: string;
  teamLeaderName: string;
  email: string;
  phone: string;
  institution: string;
  teamSize: string;
}) => {
  const stmt = db.prepare(`
    INSERT INTO registrations (
      team_name, 
      team_leader_name, 
      email, 
      phone, 
      institution, 
      team_size,
      status
    ) VALUES (?, ?, ?, ?, ?, ?, 'pending')
  `);
  
  const result = stmt.run(
    data.teamName,
    data.teamLeaderName,
    data.email,
    data.phone,
    data.institution,
    parseInt(data.teamSize)
  );
  
  return result.lastInsertRowid;
};

// Get all registrations
const getAllRegistrations = () => {
  const stmt = db.prepare('SELECT * FROM registrations ORDER BY created_at DESC');
  return stmt.all();
};

// Get all teams (formatted for teams table)
const getAllTeams = () => {
  const stmt = db.prepare(`
    SELECT 
      id,
      team_name as teamName,
      team_leader_name as teamCaptainName,
      created_at as registrationDate,
      status
    FROM registrations 
    ORDER BY created_at DESC
  `);
  return stmt.all();
};

// Get registration by ID
const getRegistrationById = (id: number) => {
  const stmt = db.prepare('SELECT * FROM registrations WHERE id = ?');
  return stmt.get(id);
};

// Validate registration data
const validateRegistration = (data: {
  teamName: string;
  teamLeaderName: string;
  email: string;
  phone: string;
  institution: string;
}): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.teamName || data.teamName.trim() === '') {
    errors.push('Team name is required');
  }
  
  if (!data.teamLeaderName || data.teamLeaderName.trim() === '') {
    errors.push('Team leader name is required');
  }
  
  if (!data.email || data.email.trim() === '') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!data.phone || data.phone.trim() === '') {
    errors.push('Phone number is required');
  }
  
  if (!data.institution || data.institution.trim() === '') {
    errors.push('Institution is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

export { 
  initDatabase, 
  insertRegistration, 
  getAllRegistrations, 
  getAllTeams,
  getRegistrationById,
  validateRegistration 
};
