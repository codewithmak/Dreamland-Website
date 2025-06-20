import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { Float, Box } from "@react-three/drei";
import * as THREE from "three";

const ProductShowcase3D = ({ color = "#f0d06a" }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Box args={[2, 2, 2]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Box>
      </Float>
    </Canvas>
  );
};

const Products = () => {
  const [refHero, inViewHero] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refProducts, inViewProducts] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const products = [
    {
      title: "Creative Solutions",
      category: "Design Services",
      description: "Transformative design experiences that elevate your brand and create lasting impressions.",
      features: ["Brand Identity", "Visual Design", "User Experience"],
      color: "#f0d06a",
      image: "https://images.unsplash.com/photo-1550309533-b1f8d1ff6112"
    },
    {
      title: "Digital Experiences",
      category: "Web Development",
      description: "Cutting-edge digital platforms that engage audiences and drive meaningful interactions.",
      features: ["Web Applications", "Mobile Solutions", "Interactive Media"],
      color: "#b12b14",
      image: "https://images.unsplash.com/uploads/1412739483594d16c8046/a9a53469"
    },
    {
      title: "Brand Storytelling",
      category: "Content Creation",
      description: "Compelling narratives that connect with your audience and build authentic relationships.",
      features: ["Content Strategy", "Visual Narratives", "Brand Messaging"],
      color: "#760504",
      image: "https://images.unsplash.com/photo-1698864551605-fab9fed03af5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
              Products
            </h1>
            <p className="font-bebas text-2xl md:text-3xl tracking-widest opacity-80 mb-6">
              CREATIVITY MEETS INNOVATION
            </p>
            <p className="font-inter text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              Discover our comprehensive suite of creative solutions designed to transform ideas into reality. 
              Each offering is crafted with precision, passion, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={refProducts} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inViewProducts ? "visible" : "hidden"}
            className="space-y-20"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                variants={productVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 3D Showcase */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="relative w-full h-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64">
                          <ProductShowcase3D color={product.color} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <span className="font-bebas text-dreamland-gold text-lg tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="font-anton text-5xl text-dreamland-black mt-2 mb-4">
                        {product.title}
                      </h3>
                      <p className="font-inter text-lg text-dreamland-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-bebas text-xl text-dreamland-black tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-dreamland-gold rounded-full" />
                            <span className="font-inter text-dreamland-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex space-x-4 pt-4">
                      <button className="btn-primary px-8 py-3 rounded-full font-bebas text-lg tracking-wide text-dreamland-black">
                        Learn More
                      </button>
                      <button className="btn-secondary px-8 py-3 rounded-full font-bebas text-lg tracking-wide">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dreamland-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-5xl md:text-6xl text-dreamland-black mb-8">
              Ready to Create?
            </h2>
            <p className="font-inter text-xl text-dreamland-black/80 mb-12 max-w-2xl mx-auto">
              Let's bring your vision to life. Our team is ready to transform your ideas into extraordinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-dreamland-black text-dreamland-gold px-12 py-4 rounded-full font-bebas text-xl tracking-wide hover:bg-dreamland-darkred transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-dreamland-black text-dreamland-black px-12 py-4 rounded-full font-bebas text-xl tracking-wide hover:bg-dreamland-black hover:text-dreamland-gold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;