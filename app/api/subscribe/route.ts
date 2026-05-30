import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter subscribe endpoint.
 *
 * Env-gated: set KLAVIYO_API_KEY (private key) and KLAVIYO_LIST_ID in Vercel
 * and this will push subscribers straight into your Klaviyo list. Until those
 * are set, it accepts the request gracefully so the UI still confirms and
 * nothing breaks in production.
 */
export async function POST(req: Request) {
  let email = "";
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }

  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  // Not configured yet: accept gracefully so the UI still confirms.
  if (!apiKey || !listId) {
    return NextResponse.json({ ok: true, configured: false });
  }

  try {
    const res = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs",
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          revision: "2024-10-15",
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email,
                      subscriptions: {
                        email: { marketing: { consent: "SUBSCRIBED" } },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: { data: { type: "list", id: listId } },
            },
          },
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Klaviyo subscribe failed:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "provider_error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, configured: true });
  } catch (err) {
    console.error("Klaviyo subscribe error:", err);
    return NextResponse.json(
      { ok: false, error: "network_error" },
      { status: 502 }
    );
  }
}
