export default async function delay(seconds) {
  return await new Promise(resolve => setTimeout(resolve, seconds * 1000));
}