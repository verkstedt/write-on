export function onRequest(context) {
  const { searchParams } = new URL(request.url)
  let name = searchParams.get('name') ?? 'world'
  return new Response(`Hello, ${name}! 👋`)
}