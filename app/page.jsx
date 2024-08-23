import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Welcome to TaskFlow, your streamlined solution for managing tasks and
        tracking progress. Our intuitive platform helps you stay organized and
        ensures that nothing falls through the cracks. Whether you're managing
        personal to-dos or collaborating with a team, TaskFlow makes task
        management simple and effective.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>Welcome Our New Web Developer!</h3>
        <p>
          We're excited to announce that Jane Doe has joined our web development
          team. Jane brings over 5 years of experience in full-stack development
          and is eager to contribute to our upcoming projects. Join us in
          welcoming Jane to the TaskFlow family!
        </p>
      </div>
      <div className="card">
        <h3>New Website is Live!</h3>
        <p>
          We are thrilled to unveil our new and improved website! The redesigned
          site offers a more user-friendly experience, with easier navigation
          and a fresh look. Explore the new features and let us know what you
          think. We're constantly working to improve your experience with
          TaskFlow.
        </p>
      </div>
    </main>
  );
}
