import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: `Post: ` };
}

export default function Page() {
  return (
    <>
      <h1>Slug:  <p>HoleText</p></h1>
      <p>This is a dynamic route segment.</p>
      <p>Dynamic segments are useful for creating pages that depend on the URL, such as blog posts.</p>
    </>
  );
}