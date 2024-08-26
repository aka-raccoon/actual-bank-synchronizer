import dotenv from 'dotenv';
import api from '@actual-app/api';

dotenv.config();

const requiredEnvVars = ['DATA_DIR', 'SERVER_URL', 'PASSWORD', 'SYNC_ID'];

function checkEnvVars() {
  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingVars.length > 0) {
    console.error(`Error: Missing required environment variables: ${missingVars.join(', ')}`);
    process.exit(1);
  }
}

checkEnvVars();

(async () => {
  try {
    await api.init({
      dataDir: process.env.DATA_DIR,
      serverURL: process.env.SERVER_URL,
      password: process.env.PASSWORD,
    });

    await api.downloadBudget(process.env.SYNC_ID);
    await api.runBankSync();
    await api.shutdown();
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1); 
  }
})();
