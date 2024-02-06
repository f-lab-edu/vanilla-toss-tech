export const isReady = async () => {
  try {
    const { worker } = await import('@/mocks/browser');
    worker.start();
    return true;
  } catch (e) {
    console.error(`Failed to start worker. Error is : ${e}`);
    return false;
  }
};
