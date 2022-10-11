import type http from 'http';
import { pool } from '../../db';

class GracefulShutdown {
  signal: string;

  server: http.Server;

  constructor(signal: string, server: http.Server) {
    this.signal = signal;
    this.server = server;
  }

  async shutdown(): Promise<void> {
    console.log('\x1b[32m', `${this.signal} signal received.`);
    this.server.close(() => {
      console.log('\x1b[31m', 'Http server closed.');
    });
    await pool
      .end()
      .then(() => console.log('\x1b[31m', 'Database connection closed.'));
    console.log('\x1b[0m', `${this.signal} successfully completed`);

    process.exit(0);
  }
}

export { GracefulShutdown };
