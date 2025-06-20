import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [refHero, inViewHero] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refStory, inViewStory] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refGallery, inViewGallery] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refValues, inViewValues] = useInView({ triggerOnce: true, threshold: 0.1 });

  const moodImages = [
    "https://images.unsplash.com/photo-1698864551605-fab9fed03af5",
    "https://images.pexels.com/photos/19046437/pexels-photo-19046437.jpeg",
    "https://images.unsplash.com/photo-1488229297570-58520851e868",
    "https://images.unsplash.com/uploads/1412739483594d16c8046/a9a53469"
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and explore new frontiers in creative expression."
    },
    {
      title: "Quality",
      description: "Every creation is crafted with meticulous attention to detail and excellence."
    },
    {
      title: "Community",
      description: "We build lasting relationships and foster collaborative creativity."
    },
    {
      title: "Legacy",
      description: "Our work creates lasting impact that inspires future generations."
    }
  ];

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
              Our Story
            </h1>
            <p className="font-bebas text-2xl md:text-3xl tracking-widest opacity-80">
              A TAPESTRY OF NOSTALGIA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Narrative */}
      <section ref={refStory} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewStory ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-anton text-5xl text-dreamland-black mb-8 text-center">
              Our Brand Journey
            </h2>
            
            <div className="space-y-8 text-dreamland-gray-700 font-inter leading-relaxed">
              <p className="text-xl">
                Welcome to Dreamland, where <span className="text-dreamland-gold font-semibold">inspiration meets creation</span>. 
                Our journey began with a simple belief: that every creation should tell a story, evoke emotion, and leave a lasting impact.
              </p>
              
              <p className="text-lg">
                We weave together a tapestry of nostalgia, blending timeless craftsmanship with contemporary innovation. 
                Each piece we create is more than just a product—it's a bridge between past and future, tradition and progress.
              </p>
              
              <p className="text-lg">
                Our commitment to excellence drives us to explore new frontiers while honoring the foundations that have shaped us. 
                We believe in creating lasting legacies that inspire, transform, and endure through generations.
              </p>
              
              <blockquote className="border-l-4 border-dreamland-gold pl-6 italic text-xl text-dreamland-darkred">
                "In every creation lies the power to inspire, to transform, and to create lasting legacies that transcend time."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mood Board Gallery */}
      <section ref={refGallery} className="py-20 bg-dreamland-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewGallery ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-5xl text-dreamland-black mb-6">
              Visual Inspiration
            </h2>
            <p className="font-inter text-xl text-dreamland-gray-600 max-w-2xl mx-auto">
              Explore the visual elements that define our aesthetic and inspire our creative process.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moodImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inViewGallery ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Community */}
      <section ref={refValues} className="py-20 bg-dreamland-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewValues ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-5xl text-dreamland-gold mb-6">
              Our Values
            </h2>
            <p className="font-inter text-xl opacity-80 max-w-2xl mx-auto">
              The principles that guide our creative process and shape our community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inViewValues ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-dreamland-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-anton text-2xl text-dreamland-black">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bebas text-2xl text-dreamland-gold mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="font-inter opacity-80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Community Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inViewValues ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="max-w-3xl mx-auto bg-dreamland-darkred/20 rounded-3xl p-12 glass-dark">
              <h3 className="font-anton text-4xl text-dreamland-gold mb-6">
                Join Our Community
              </h3>
              <p className="font-inter text-lg opacity-90 mb-8">
                Connect with fellow creators, share your stories, and be part of a community that celebrates inspiration in every creation.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="btn-primary px-8 py-3 rounded-full font-bebas text-lg tracking-wide text-dreamland-black">
                  Follow Us
                </button>
                <button className="btn-secondary px-8 py-3 rounded-full font-bebas text-lg tracking-wide">
                  Newsletter
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;