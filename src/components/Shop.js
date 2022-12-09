import { motion } from "framer-motion";

function Shop() {
    return (
        <motion.section className="generalContainer"
        initial= {{opacity:0, transition: {duration: 0.1}}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
            <div className="generalBackground shopBackground">
                <h2 className="section-title">Shop</h2>
                <div className="shop-flex">
                    <h3 style={{color: 'white',fontSize: '2rem'}}>Under Construction</h3>
                </div>
            </div>
        </motion.section>
    );
}

export default Shop;