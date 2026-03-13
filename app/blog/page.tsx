import { decode } from "html-entities"

async function getPosts() {
  const res = await fetch(
    "https://www.sovaaka.com/blog/wp-json/custom/v1/posts",
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }

  return res.json()
}

export default async function BlogPage() {

  const data = await getPosts()
  const posts = data.posts || []

  return (

    <div>

      {/* HERO SECTION */}

      <section className="relative h-[50vh] flex items-center justify-center">

        <img
          src="https://picsum.photos/1600/900"
          className="absolute w-full h-full object-cover"
          alt="Blog Hero"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Our Blog
          </h1>

        </div>

      </section>


      {/* BLOG SECTION */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          {/* SECTION HEADER */}

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold mb-4">
              Latest Articles
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Read our latest insights, technology updates and industry news.
            </p>

          </div>


          {/* BLOG GRID */}

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">

            {posts.map((post: any) => (

              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden group"
              >

                {/* BLOG IMAGE */}

                <img
                  src={post.image || "https://picsum.photos/600/400"}
                  alt={decode(post.title)}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* BLOG CONTENT */}

                <div className="p-6">

                  {/* BLOG TITLE */}

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                    {decode(post.title)}
                  </h3>

                  {/* BLOG EXCERPT */}

                  <p
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: decode(post.excerpt) }}
                  ></p>

                  {/* READ MORE */}

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  )
}