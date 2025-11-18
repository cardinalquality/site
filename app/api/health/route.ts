export async function GET() {
  return Response.json({
    status: 'ok',
    message: 'Cardinal Quality Consulting site is running',
    timestamp: new Date().toISOString()
  });
}
