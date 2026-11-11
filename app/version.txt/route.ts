/**
 * The commit this deployment was built from, so automation can wait until a
 * change is really online (see .github/workflows/indexnow.yml).
 */
export function GET() {
  return new Response(process.env.VERCEL_GIT_COMMIT_SHA ?? "local", {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
