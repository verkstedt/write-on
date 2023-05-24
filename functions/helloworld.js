export function onRequest(context) {
  console.log(context.request)
  return new Response("Hello, world!")
}