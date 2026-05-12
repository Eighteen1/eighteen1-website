import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete User Data",
  description: "Request deletion of your user data from Eighteen1 Studios.",
};

export default function DeleteDataPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Delete User Data
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            This section applies exclusively to our Car Quiz App for Android and
            iOS.
          </p>

          <p>
            All data associated with your account (such as scores, unlocked
            quizzes, coins, and more) is stored in our database indefinitely
            until you choose to delete your account.
          </p>

          <p>
            To delete your account, follow these steps: open the app, sign in,
            navigate to your profile, and select &quot;Delete Account.&quot;
            This will permanently erase all your user data and authentication
            details.
          </p>

          <p>
            If you&apos;d like to delete specific data, please contact us at{" "}
            <a
              href="mailto:info@eighteen1.com"
              className="text-accent hover:underline"
            >
              info@eighteen1.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:eighteen1.studios@gmail.com"
              className="text-accent hover:underline"
            >
              eighteen1.studios@gmail.com
            </a>{" "}
            using the email linked to your account. Additionally, if you&apos;re
            unable to access the app, we can assist with account deletion upon
            request.
          </p>
        </div>
      </div>
    </section>
  );
}
