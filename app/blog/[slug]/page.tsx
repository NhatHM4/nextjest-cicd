type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug} <p>HoleText</p></h1>
      <p>This is a dynamic route segment.</p>
      <p>Dynamic segments are useful for creating pages that depend on the URL, such as blog posts.</p>
    </>
  );
}

