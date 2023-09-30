import data from "./products.json";

// ----------------------useFetch----------------------
// export default defineEventHandler(async () => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// });

// ----------------------userAsyncData----------------------
let productCounter: number = 0;

export default defineEventHandler(async () => {
  await new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(productCounter++);
    }, 2000);
  });
  return productCounter;
});
