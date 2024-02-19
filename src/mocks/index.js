export const initMocks = async () => {
  try {
    const { worker } = await import('@/mocks/browser');
    await worker.start();

    const { server } = await import('@/mocks/server');
    await server.listen();

    return true;
  } catch (e) {
    console.error(`Failed to start worker. Error is : ${e}`);
    return false;
  }
};
