import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const [refHero, inViewHero] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refArticles, inViewArticles] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const articles = [
    {
      title: "The Art of Creative Storytelling",
      excerpt: "Discover how powerful narratives can transform your brand and create lasting connections with your audience.",
      date: "June 15, 2025",
      author: "Sarah Chen",
      tags: ["Storytelling", "Branding", "Content"],
      image: "https://images.unsplash.com/photo-1499540633125-484965b60031",
      readTime: "5 min read"
    },
    {
      title: "Innovation in Digital Design",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of digital experiences.",
      date: "June 10, 2025",
      author: "Marcus Rivera",
      tags: ["Design", "Technology", "Innovation"],
      image: "https://images.unsplash.com/photo-1550309533-b1f8d1ff6112",
      readTime: "7 min read"
    },
    {
      title: "Building Authentic Brand Communities",
      excerpt: "Learn how to foster genuine connections and create communities that truly resonate with your values.",
      date: "June 5, 2025",
      author: "Emma Thompson",
      tags: ["Community", "Branding", "Engagement"],
      image: "https://images.unsplash.com/photo-1698864551605-fab9fed03af5",
      readTime: "6 min read"
    },
    {
      title: "The Psychology of Color in Design",
      excerpt: "Understanding how color choices influence emotions and drive user behavior in creative projects.",
      date: "May 30, 2025",
      author: "David Kim",
      tags: ["Design", "Psychology", "Color Theory"],
      image: "https://images.unsplash.com/uploads/1412739483594d16c8046/a9a53469",
      readTime: "8 min read"
    },
    {
      title: "Sustainable Creativity",
      excerpt: "Exploring how creative practices can contribute to environmental sustainability and social responsibility.",
      date: "May 25, 2025",
      author: "Luna Martinez",
      tags: ["Sustainability", "Creativity", "Impact"],
      image: "https://images.unsplash.com/photo-1524274568576-60ae522c1719",
      readTime: "4 min read"
    },
    {
      title: "The Future of Interactive Media",
      excerpt: "Diving into emerging technologies and their potential to revolutionize how we create and consume content.",
      date: "May 20, 2025",
      author: "Alex Foster",
      tags: ["Technology", "Interactive", "Future"],
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868",
      readTime: "9 min read"
    }
  ];

  const tags = ["All", "Design", "Technology", "Branding", "Storytelling", "Innovation", "Community", "Sustainability"];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const articleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section ref={refHero} className="py-20 bg-dreamland-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-anton text-6xl md:text-8xl text-dreamland-gold mb-8">
              Journal
            </h1>
            <p className="font-bebas text-2xl md:text-3xl tracking-widest opacity-80 mb-6">
              INSIGHTS & INSPIRATION
            </p>
            <p className="font-inter text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              Explore thoughts, insights, and stories from our creative journey. 
              Discover trends, techniques, and the inspiration behind our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-dreamland-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border-2 border-dreamland-gray-200 focus:border-dreamland-gold focus:outline-none font-inter text-dreamland-gray-700 bg-white"
              />
              <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dreamland-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full font-bebas text-sm tracking-wide transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-dreamland-gold text-dreamland-black'
                      : 'bg-white text-dreamland-gray-600 hover:bg-dreamland-gold hover:text-dreamland-black'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={refArticles} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inViewArticles ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.article
                key={index}
                variants={articleVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              >
                {/* Article Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-dreamland-gold/20 text-dreamland-darkred text-xs font-bebas tracking-wide rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-anton text-2xl text-dreamland-black mb-3 group-hover:text-dreamland-gold transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-inter text-dreamland-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-dreamland-gray-500">
                    <div className="flex items-center space-x-2">
                      <span className="font-inter">{article.author}</span>
                      <span>•</span>
                      <span className="font-inter">{article.date}</span>
                    </div>
                    <span className="font-inter">{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="font-anton text-3xl text-dreamland-gray-500 mb-4">
                No Articles Found
              </h3>
              <p className="font-inter text-dreamland-gray-400">
                Try adjusting your search terms or filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-dreamland-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-5xl md:text-6xl text-dreamland-black mb-8">
              Stay Inspired
            </h2>
            <p className="font-inter text-xl text-dreamland-black/80 mb-12 max-w-2xl mx-auto">
              Get the latest insights, creative tips, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-dreamland-black/20 focus:border-dreamland-black focus:outline-none font-inter text-dreamland-black bg-white/80"
              />
              <button className="bg-dreamland-black text-dreamland-gold px-8 py-4 rounded-full font-bebas text-lg tracking-wide hover:bg-dreamland-darkred transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;