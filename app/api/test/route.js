export async function GET(req) {
  return new Response(JSON.stringify({ status: "API is working" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
