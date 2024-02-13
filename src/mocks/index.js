export const initMocks = async () => {
  try {
    const { worker } = await import('@/mocks/browser');
    await worker.start();
    return true;
  } catch (e) {
    console.error(`Failed to start worker. Error is : ${e}`);
    return false;
  }
};
