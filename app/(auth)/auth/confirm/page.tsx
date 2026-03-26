import { Suspense } from "react";
import ConfirmClient from "./ConfirmClient";

export const dynamic = "force-dynamic";

export default function ConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center">
          <p
            className="font-serif"
            style={{ fontSize: "var(--fluid-2xl)", color: "#ffffff" }}
          >
            Signing you in…
          </p>
        </div>
      }
    >
      <ConfirmClient />
    </Suspense>
  );
}
