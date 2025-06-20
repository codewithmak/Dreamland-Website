import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const [refCards, inViewCards] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: "Products",
      subtitle: "Discover Our Creations",
      description: "Explore our innovative products and services designed to inspire and transform.",
      path: "/products",
      image: "https://images.unsplash.com/photo-1550309533-b1f8d1ff6112",
      gradient: "from-dreamland-gold to-amber-400"
    },
    {
      title: "Story",
      subtitle: "Our Brand Journey",
      description: "Learn about our tapestry of nostalgia and the lasting legacies we create.",
      path: "/about",
      image: "https://images.unsplash.com/photo-1698864551605-fab9fed03af5",
      gradient: "from-dreamland-darkred to-red-600"
    },
    {
      title: "Contact",
      subtitle: "Connect With Us",
      description: "Start a conversation and become part of our creative community.",
      path: "/contact",
      image: "https://images.unsplash.com/photo-1524274568576-60ae522c1719",
      gradient: "from-dreamland-deepred to-red-800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      ref={refCards}
      variants={containerVariants}
      initial="hidden"
      animate={inViewCards ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          variants={cardVariants}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <div className="aspect-[4/5] relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${card.image}')` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-80`} />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inViewCards ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <h3 className="font-anton text-4xl mb-2 group-hover:text-dreamland-gold transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-bebas text-xl mb-4 tracking-wide opacity-90">
                  {card.subtitle}
                </p>
                <p className="font-inter text-sm mb-6 opacity-80 leading-relaxed">
                  {card.description}
                </p>
                
                <Link
                  to={card.path}
                  className="inline-flex items-center font-bebas text-lg tracking-wide hover:text-dreamland-gold transition-colors duration-300"
                >
                  Explore
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default QuickLinks;