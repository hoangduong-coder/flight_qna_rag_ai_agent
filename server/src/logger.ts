const info = (message: string) => {
  console.log(`[INFO] ${message}`);
};

const error = (message: string) => {
  console.error(`[ERROR] ${message}`);
};

export default {info, error}