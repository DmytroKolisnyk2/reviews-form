import { GracefulShutdown } from '@utils';
import { app } from './app';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

process.on('SIGTERM', (process) => {
  new GracefulShutdown(process, server).shutdown();
});
process.on('SIGINT', (process) => {
  new GracefulShutdown(process, server).shutdown();
});