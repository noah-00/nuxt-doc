export const useUtils = () => {
  const sayHello: () => void = () => {
    console.log("Hello World");
  };
  return {
    sayHello,
  };
};
