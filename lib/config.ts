// Environment variables are loaded from .env file by Next.js automatically

type Environment = 'development' | 'test' | 'production';

interface Config {
  environment: Environment;
  database: {
    url: string;
  };
  serverUrl: string;
}

// Default to development if NODE_ENV is not set
const environment = (process.env.NODE_ENV || 'development') as Environment;

const baseConfig: Config = {
  environment,
  database: {
    url: process.env.DATABASE_URL || 'file:./dev.db',
  },
  // Default URL for the server based on environment
  serverUrl: 
    environment === 'production' 
      ? 'https://your-production-url.com' 
      : environment === 'test'
        ? 'http://localhost:3000'
        : 'http://localhost:3000',
};

// Export the configuration based on the current environment
export const config: Config = baseConfig;

export default config; 