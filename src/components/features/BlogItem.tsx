import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}

const BlogItem = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group interactive border-t border-black py-8 flex flex-col md:flex-row gap-6 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="md:w-1/4">
        <span className="text-xs font-mono text-gray-400 block mb-1">
          {post.date}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">
          {post.category}
        </span>
      </div>
      <div className="md:w-3/4 flex flex-col md:flex-row gap-6">
        {post.image && (
          <div className="md:w-1/4 relative aspect-[3/2] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </div>
        )}
        <div className="flex-1 pr-4">
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:underline decoration-1 underline-offset-4">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
