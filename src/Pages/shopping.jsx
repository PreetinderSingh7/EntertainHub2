// import { useState, useEffect } from 'react';

// // Styles
// const styles = {
//   app: {
//     fontFamily: 'Arial, sans-serif',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 0',
//     borderBottom: '1px solid #e0e0e0',
//     marginBottom: '20px',
//   },
//   logo: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#ff9900',
//   },
//   search: {
//     display: 'flex',
//     flex: '1',
//     margin: '0 20px',
//   },
//   searchInput: {
//     flex: '1',
//     padding: '8px',
//     fontSize: '16px',
//     border: '1px solid #ddd',
//     borderRadius: '4px 0 0 4px',
//   },
//   searchButton: {
//     padding: '8px 16px',
//     backgroundColor: '#ff9900',
//     color: 'white',
//     border: 'none',
//     borderRadius: '0 4px 4px 0',
//     cursor: 'pointer',
//   },
//   navLinks: {
//     display: 'flex',
//     gap: '20px',
//   },
//   navLink: {
//     color: '#333',
//     textDecoration: 'none',
//     position: 'relative',
//   },
//   cartCount: {
//     position: 'absolute',
//     top: '-8px',
//     right: '-8px',
//     backgroundColor: '#ff9900',
//     color: 'white',
//     borderRadius: '50%',
//     width: '20px',
//     height: '20px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '12px',
//   },
//   productsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '20px',
//     marginTop: '20px',
//   },
//   productCard: {
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px',
//     padding: '15px',
//     display: 'flex',
//     flexDirection: 'column',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   },
//   productCardHover: {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
//   },
//   productImage: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'contain',
//     marginBottom: '10px',
//   },
//   productTitle: {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   productPrice: {
//     fontSize: '18px',
//     color: '#B12704',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   productRating: {
//     color: '#ff9900',
//     marginBottom: '10px',
//   },
//   addToCartButton: {
//     backgroundColor: '#f0c14b',
//     border: '1px solid #a88734',
//     padding: '8px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: 'auto',
//     transition: 'background-color 0.3s ease',
//   },
//   addToCartButtonHover: {
//     backgroundColor: '#ddb347',
//   },
//   cart: {
//     position: 'fixed',
//     top: '0',
//     right: '0',
//     width: '400px',
//     height: '100vh',
//     backgroundColor: 'white',
//     boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
//     padding: '20px',
//     transform: 'translateX(100%)',
//     transition: 'transform 0.3s ease',
//     zIndex: '1000',
//     overflowY: 'auto',
//   },
//   cartOpen: {
//     transform: 'translateX(0)',
//   },
//   cartHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   cartTitle: {
//     fontSize: '20px',
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//   },
//   cartItem: {
//     display: 'flex',
//     borderBottom: '1px solid #e0e0e0',
//     padding: '10px 0',
//   },
//   cartItemImage: {
//     width: '80px',
//     height: '80px',
//     objectFit: 'contain',
//     marginRight: '10px',
//   },
//   cartItemDetails: {
//     flex: '1',
//   },
//   cartItemTitle: {
//     fontSize: '16px',
//     marginBottom: '5px',
//   },
//   cartItemPrice: {
//     color: '#B12704',
//     fontWeight: 'bold',
//   },
//   cartItemQuantity: {
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: '5px',
//   },
//   quantityButton: {
//     width: '25px',
//     height: '25px',
//     backgroundColor: '#f0f0f0',
//     border: '1px solid #ddd',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//   },
//   quantityInput: {
//     width: '40px',
//     height: '25px',
//     textAlign: 'center',
//     margin: '0 5px',
//     border: '1px solid #ddd',
//   },
//   cartFooter: {
//     marginTop: '20px',
//   },
//   cartTotal: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   checkoutButton: {
//     backgroundColor: '#ff9900',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '10px',
//     width: '100%',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   checkoutButtonHover: {
//     backgroundColor: '#e68a00',
//   },
//   toast: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     backgroundColor: '#333',
//     color: 'white',
//     padding: '10px 20px',
//     borderRadius: '4px',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
//     zIndex: '1001',
//     opacity: '0',
//     transition: 'opacity 0.3s ease',
//   },
//   toastVisible: {
//     opacity: '1',
//   },
//   overlay: {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: '999',
//     display: 'none',
//   },
//   overlayVisible: {
//     display: 'block',
//   },
//   modalContainer: {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: '1002',
//   },
//   modalHidden: {
//     display: 'none',
//   },
//   modal: {
//     backgroundColor: 'white',
//     borderRadius: '6px',
//     padding: '30px',
//     width: '500px',
//     maxWidth: '90%',
//     boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
//   },
//   modalHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   modalTitle: {
//     fontSize: '20px',
//     fontWeight: 'bold',
//   },
//   formGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     fontSize: '16px',
//   },
//   cardGroup: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gap: '10px',
//   },
//   smallInput: {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     fontSize: '16px',
//   },
//   payButton: {
//     backgroundColor: '#ff9900',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '10px',
//     width: '100%',
//     fontSize: '16px',
//     cursor: 'pointer',
//     marginTop: '15px',
//   },
//   categories: {
//     display: 'flex',
//     gap: '10px',
//     overflow: 'auto',
//     padding: '5px 0',
//     marginBottom: '20px',
//   },
//   categoryButton: {
//     padding: '8px 16px',
//     border: '1px solid #ddd',
//     borderRadius: '20px',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//     backgroundColor: 'white',
//   },
//   categoryButtonActive: {
//     backgroundColor: '#ff9900',
//     color: 'white',
//     border: '1px solid #ff9900',
//   },
//   progressBar: {
//     height: '4px',
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     marginBottom: '20px',
//   },
//   progressBarFill: {
//     height: '100%',
//     backgroundColor: '#ff9900',
//     width: '0%',
//     transition: 'width 0.3s ease',
//   },
//   successIcon: {
//     fontSize: '48px',
//     color: 'green',
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   successMessage: {
//     fontSize: '20px',
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   orderDetails: {
//     marginBottom: '20px',
//     padding: '10px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '4px',
//   },
//   continueShoppingButton: {
//     backgroundColor: '#ff9900',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '10px',
//     width: '100%',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
// };

// // Main component
// const ShoppingApp = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [toast, setToast] = useState({ message: '', visible: false });
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [checkoutStep, setCheckoutStep] = useState(1);
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [hoverStates, setHoverStates] = useState({});

//   // Mock categories
//   const categories = [
//     'all',
//     'electronics',
//     'clothing',
//     'books',
//     'home',
//     'toys',
//     'beauty',
//     'sports',
//     'garden',
//   ];

//   // Fetch products from API
//   useEffect(() => {
//     // Simulating API fetch
//     setTimeout(() => {
//       setProducts(mockProducts);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // Filter products by category
//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(product => product.category === selectedCategory);

//   // Add to cart function
//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);
    
//     if (existingItem) {
//       setCart(cart.map(item => 
//         item.id === product.id 
//           ? { ...item, quantity: item.quantity + 1 } 
//           : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
    
//     showToast(`Added ${product.title} to cart`);
//   };

//   // Update quantity in cart
//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
    
//     setCart(cart.map(item => 
//       item.id === id 
//         ? { ...item, quantity: newQuantity } 
//         : item
//     ));
//   };

//   // Remove from cart
//   const removeFromCart = (id) => {
//     const itemToRemove = cart.find(item => item.id === id);
//     setCart(cart.filter(item => item.id !== id));
//     showToast(`Removed ${itemToRemove.title} from cart`);
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   // Show toast message
//   const showToast = (message) => {
//     setToast({ message, visible: true });
//     setTimeout(() => {
//       setToast({ message: '', visible: false });
//     }, 3000);
//   };

//   // Handle checkout
//   const handleCheckout = () => {
//     setShowCheckout(true);
//     setShowCart(false);
//   };

//   // Process payment
//   const processPayment = () => {
//     setCheckoutStep(2);
//     // Simulate payment processing
//     setTimeout(() => {
//       setCheckoutStep(3);
//       setOrderPlaced(true);
//     }, 2000);
//   };

//   // Continue shopping after order
//   const continueShopping = () => {
//     setShowCheckout(false);
//     setCheckoutStep(1);
//     setOrderPlaced(false);
//     setCart([]);
//   };

//   // Handle mouse enter for hover effect
//   const handleMouseEnter = (id) => {
//     setHoverStates(prev => ({ ...prev, [id]: true }));
//   };

//   // Handle mouse leave for hover effect
//   const handleMouseLeave = (id) => {
//     setHoverStates(prev => ({ ...prev, [id]: false }));
//   };

//   return (
//     <div style={styles.app}>
//       {/* Header */}
//       <header style={styles.header}>
//         <div style={styles.logo}>AmazonClone</div>
//         <div style={styles.search}>
//           <input 
//             type="text" 
//             placeholder="Search products..." 
//             style={styles.searchInput} 
//           />
//           <button style={styles.searchButton}>Search</button>
//         </div>
//         <div style={styles.navLinks}>
//           <a href="#" style={styles.navLink}>Account</a>
//           <a href="#" style={styles.navLink}>Orders</a>
//           <a 
//             href="#" 
//             style={styles.navLink} 
//             onClick={() => setShowCart(true)}
//           >
//             Cart
//             {cart.length > 0 && (
//               <span style={styles.cartCount}>
//                 {cart.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             )}
//           </a>
//         </div>
//       </header>

//       {/* Categories */}
//       <div style={styles.categories}>
//         {categories.map(category => (
//           <button
//             key={category}
//             style={{
//               ...styles.categoryButton,
//               ...(selectedCategory === category ? styles.categoryButtonActive : {})
//             }}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Products */}
//       {loading ? (
//         <div>Loading products...</div>
//       ) : (
//         <div style={styles.productsGrid}>
//           {filteredProducts.map(product => (
//             <div 
//               key={product.id} 
//               style={{
//                 ...styles.productCard,
//                 ...(hoverStates[product.id] ? styles.productCardHover : {})
//               }}
//               onMouseEnter={() => handleMouseEnter(product.id)}
//               onMouseLeave={() => handleMouseLeave(product.id)}
//             >
//               <img 
//                 src={product.image} 
//                 alt={product.title} 
//                 style={styles.productImage} 
//               />
//               <h3 style={styles.productTitle}>{product.title}</h3>
//               <div style={styles.productRating}>
//                 {'★'.repeat(Math.floor(product.rating))}
//                 {'☆'.repeat(5 - Math.floor(product.rating))}
//                 <span> ({product.reviews})</span>
//               </div>
//               <div style={styles.productPrice}>${product.price.toFixed(2)}</div>
//               <button 
//                 style={{
//                   ...styles.addToCartButton,
//                   ...(hoverStates[product.id] ? styles.addToCartButtonHover : {})
//                 }}
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Cart Sidebar */}
//       <div style={{
//         ...styles.cart,
//         ...(showCart ? styles.cartOpen : {})
//       }}>
//         <div style={styles.cartHeader}>
//           <h2 style={styles.cartTitle}>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)</h2>
//           <button 
//             style={styles.closeButton}
//             onClick={() => setShowCart(false)}
//           >
//             ×
//           </button>
//         </div>
        
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             {cart.map(item => (
//               <div key={item.id} style={styles.cartItem}>
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   style={styles.cartItemImage} 
//                 />
//                 <div style={styles.cartItemDetails}>
//                   <h3 style={styles.cartItemTitle}>{item.title}</h3>
//                   <div style={styles.cartItemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//                   <div style={styles.cartItemQuantity}>
//                     <button 
//                       style={styles.quantityButton}
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     >
//                       -
//                     </button>
//                     <input 
//                       type="text" 
//                       value={item.quantity} 
//                       readOnly 
//                       style={styles.quantityInput} 
//                     />
//                     <button 
//                       style={styles.quantityButton}
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     >
//                       +
//                     </button>
//                     <button 
//                       style={{...styles.closeButton, margin: '0 0 0 10px'}}
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             <div style={styles.cartFooter}>
//               <div style={styles.cartTotal}>
//                 Total: ${calculateTotal().toFixed(2)}
//               </div>
//               <button 
//                 style={styles.checkoutButton}
//                 onClick={handleCheckout}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Overlay */}
//       <div 
//         style={{
//           ...styles.overlay, 
//           ...(showCart || showCheckout ? styles.overlayVisible : {})
//         }}
//         onClick={() => {
//           setShowCart(false);
//           if (!orderPlaced) setShowCheckout(false);
//         }}
//       />

//       {/* Checkout Modal */}
//       <div style={{
//         ...styles.modalContainer,
//         ...(showCheckout ? {} : styles.modalHidden)
//       }}>
//         <div style={styles.modal} onClick={e => e.stopPropagation()}>
//           {!orderPlaced ? (
//             <>
//               <div style={styles.modalHeader}>
//                 <h2 style={styles.modalTitle}>Checkout</h2>
//                 <button 
//                   style={styles.closeButton}
//                   onClick={() => setShowCheckout(false)}
//                 >
//                   ×
//                 </button>
//               </div>
              
//               {checkoutStep === 1 ? (
//                 <>
//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>Full Name</label>
//                     <input 
//                       type="text" 
//                       placeholder="John Doe" 
//                       style={styles.input} 
//                     />
//                   </div>
                  
//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>Email Address</label>
//                     <input 
//                       type="email" 
//                       placeholder="john@example.com" 
//                       style={styles.input} 
//                     />
//                   </div>
                  
//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>Shipping Address</label>
//                     <input 
//                       type="text" 
//                       placeholder="123 Main St" 
//                       style={styles.input} 
//                     />
//                   </div>
                  
//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>Credit Card Information</label>
//                     <input 
//                       type="text" 
//                       placeholder="1234 5678 9012 3456" 
//                       style={styles.input} 
//                     />
//                   </div>
                  
//                   <div style={styles.cardGroup}>
//                     <div style={styles.formGroup}>
//                       <label style={styles.label}>Expiry</label>
//                       <input 
//                         type="text" 
//                         placeholder="MM/YY" 
//                         style={styles.smallInput} 
//                       />
//                     </div>
                    
//                     <div style={styles.formGroup}>
//                       <label style={styles.label}>CVV</label>
//                       <input 
//                         type="text" 
//                         placeholder="123" 
//                         style={styles.smallInput} 
//                       />
//                     </div>
                    
//                     <div style={styles.formGroup}>
//                       <label style={styles.label}>ZIP</label>
//                       <input 
//                         type="text" 
//                         placeholder="12345" 
//                         style={styles.smallInput} 
//                       />
//                     </div>
//                   </div>
                  
//                   <button 
//                     style={styles.payButton}
//                     onClick={processPayment}
//                   >
//                     Pay ${calculateTotal().toFixed(2)}
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <div style={styles.progressBar}>
//                     <div 
//                       style={{
//                         ...styles.progressBarFill,
//                         width: `${(checkoutStep - 1) * 100}%`
//                       }}
//                     />
//                   </div>
//                   <p style={{textAlign: 'center'}}>Processing your payment...</p>
//                 </>
//               )}
//             </>
//           ) : (
//             <>
//               <div style={styles.successIcon}>✓</div>
//               <h2 style={styles.successMessage}>Order Placed Successfully!</h2>
//               <div style={styles.orderDetails}>
//                 <p><strong>Order #:</strong> {Math.floor(Math.random() * 1000000)}</p>
//                 <p><strong>Total:</strong> ${calculateTotal().toFixed(2)}</p>
//                 <p><strong>Estimated Delivery:</strong> {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
//               </div>
//               <button 
//                 style={styles.continueShoppingButton}
//                 onClick={continueShopping}
//               >
//                 Continue Shopping
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Toast Notification */}
//       <div style={{
//         ...styles.toast,
//         ...(toast.visible ? styles.toastVisible : {})
//       }}>
//         {toast.message}
//       </div>
//     </div>
//   );
// };

// // Mock products data
// const mockProducts = [
//   {
//     "id": 1,
//     "title": "DSLR Camera",
//     "price": 116.04,
//     "description": "Enhance airflow and keep your laptop cool.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 3.8,
//     "inStock": false
//   },
//   {
//     "id": 2,
//     "title": "Portable Charger 10000mAh",
//     "price": 26.52,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,Portable%20Charger%2010000mAh",
//     "rating": 4.4,
//     "inStock": true
//   },
//   {
//     "id": 3,
//     "title": "Wireless Mouse",
//     "price": 385.27,
//     "description": "Control with app or voice assistants.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Mouse",
//     "rating": 4.0,
//     "inStock": true
//   },
//   {
//     "id": 4,
//     "title": "Noise Cancelling Earbuds",
//     "price": 136.37,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Noise%20Cancelling%20Earbuds",
//     "rating": 3.6,
//     "inStock": false
//   },
//   {
//     "id": 5,
//     "title": "Fitness Tracker",
//     "price": 350.43,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Fitness%20Tracker",
//     "rating": 4.2,
//     "inStock": true
//   },
//   {
//     "id": 6,
//     "title": "Bluetooth Speaker",
//     "price": 108.84,
//     "description": "Track your steps, heart rate, and sleep quality.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.4,
//     "inStock": true
//   },
//   {
//     "id": 7,
//     "title": "Electric Toothbrush",
//     "price": 272.06,
//     "description": "Ergonomic fit with long battery life.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Electric%20Toothbrush",
//     "rating": 3.2,
//     "inStock": false
//   },
//   {
//     "id": 8,
//     "title": "USB-C Hub",
//     "price": 134.72,
//     "description": "Ergonomic fit with long battery life.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 4.6,
//     "inStock": false
//   },
//   {
//     "id": 9,
//     "title": "Bluetooth Speaker",
//     "price": 166.23,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.1,
//     "inStock": true
//   },
//   {
//     "id": 10,
//     "title": "Bluetooth Speaker",
//     "price": 142.73,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.2,
//     "inStock": true
//   },
//   {
//     "id": 11,
//     "title": "Electric Toothbrush",
//     "price": 227.95,
//     "description": "Expand your device\u2019s ports with ease.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Electric%20Toothbrush",
//     "rating": 3.9,
//     "inStock": false
//   },
//   {
//     "id": 12,
//     "title": "4K Action Camera",
//     "price": 157.61,
//     "description": "Track your steps, heart rate, and sleep quality.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.5,
//     "inStock": false
//   },
//   {
//     "id": 13,
//     "title": "Bluetooth Speaker",
//     "price": 282.18,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.4,
//     "inStock": false
//   },
//   {
//     "id": 14,
//     "title": "Laptop Cooling Pad",
//     "price": 204.19,
//     "description": "Crystal clear voice with noise reduction.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 4.3,
//     "inStock": false
//   },
//   {
//     "id": 15,
//     "title": "Wireless Mouse",
//     "price": 12.63,
//     "description": "Adjustable brightness with touch control.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Mouse",
//     "rating": 3.9,
//     "inStock": true
//   },
//   {
//     "id": 16,
//     "title": "Smartphone Stand",
//     "price": 247.46,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Smartphone%20Stand",
//     "rating": 4.2,
//     "inStock": true
//   },
//   {
//     "id": 17,
//     "title": "Laptop Cooling Pad",
//     "price": 335.2,
//     "description": "Ergonomic fit with long battery life.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 4.4,
//     "inStock": true
//   },
//   {
//     "id": 18,
//     "title": "Bluetooth Speaker",
//     "price": 201.78,
//     "description": "Enhance airflow and keep your laptop cool.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 4.0,
//     "inStock": true
//   },
//   {
//     "id": 19,
//     "title": "Laptop Cooling Pad",
//     "price": 171.05,
//     "description": "Track your steps, heart rate, and sleep quality.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 3.6,
//     "inStock": true
//   },
//   {
//     "id": 20,
//     "title": "Wireless Bluetooth Headphones",
//     "price": 169.19,
//     "description": "Control with app or voice assistants.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Bluetooth%20Headphones",
//     "rating": 3.7,
//     "inStock": true
//   },
//   {
//     "id": 21,
//     "title": "Mechanical Gaming Keyboard",
//     "price": 18.56,
//     "description": "Monitor your workouts and stay active.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Mechanical%20Gaming%20Keyboard",
//     "rating": 3.5,
//     "inStock": true
//   },
//   {
//     "id": 22,
//     "title": "DSLR Camera",
//     "price": 319.37,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 4.6,
//     "inStock": false
//   },
//   {
//     "id": 23,
//     "title": "Smart Fitness Watch",
//     "price": 397.03,
//     "description": "Monitor your workouts and stay active.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Smart%20Fitness%20Watch",
//     "rating": 4.1,
//     "inStock": true
//   },
//   {
//     "id": 24,
//     "title": "LED Desk Lamp",
//     "price": 59.87,
//     "description": "RGB lighting and tactile feedback for gamers.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,LED%20Desk%20Lamp",
//     "rating": 5.0,
//     "inStock": false
//   },
//   {
//     "id": 25,
//     "title": "Mechanical Gaming Keyboard",
//     "price": 391.06,
//     "description": "Crystal clear voice with noise reduction.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Mechanical%20Gaming%20Keyboard",
//     "rating": 5.0,
//     "inStock": false
//   },
//   {
//     "id": 26,
//     "title": "Android Smartphone",
//     "price": 89.55,
//     "description": "Ergonomic and responsive with silent clicks.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,Android%20Smartphone",
//     "rating": 4.8,
//     "inStock": false
//   },
//   {
//     "id": 27,
//     "title": "Fitness Tracker",
//     "price": 256.83,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Fitness%20Tracker",
//     "rating": 4.6,
//     "inStock": true
//   },
//   {
//     "id": 28,
//     "title": "Smartphone Stand",
//     "price": 62.58,
//     "description": "Control with app or voice assistants.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Smartphone%20Stand",
//     "rating": 4.4,
//     "inStock": false
//   },
//   {
//     "id": 29,
//     "title": "Bluetooth Speaker",
//     "price": 326.0,
//     "description": "Latest model with high-resolution camera.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.8,
//     "inStock": true
//   },
//   {
//     "id": 30,
//     "title": "Wireless Charger Pad",
//     "price": 184.96,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Charger%20Pad",
//     "rating": 4.1,
//     "inStock": false
//   },
//   {
//     "id": 31,
//     "title": "Noise Cancelling Earbuds",
//     "price": 446.31,
//     "description": "Enhance airflow and keep your laptop cool.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Noise%20Cancelling%20Earbuds",
//     "rating": 4.7,
//     "inStock": true
//   },
//   {
//     "id": 32,
//     "title": "DSLR Camera",
//     "price": 107.87,
//     "description": "Latest model with high-resolution camera.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 4.7,
//     "inStock": true
//   },
//   {
//     "id": 33,
//     "title": "Smartphone Stand",
//     "price": 456.12,
//     "description": "Fast wireless charging with LED indicator.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Smartphone%20Stand",
//     "rating": 4.2,
//     "inStock": true
//   },
//   {
//     "id": 34,
//     "title": "Laptop Cooling Pad",
//     "price": 341.23,
//     "description": "Capture stunning photos and videos.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 5.0,
//     "inStock": false
//   },
//   {
//     "id": 35,
//     "title": "Laptop Cooling Pad",
//     "price": 69.68,
//     "description": "Track your steps, heart rate, and sleep quality.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 3.7,
//     "inStock": false
//   },
//   {
//     "id": 36,
//     "title": "Wireless Charger Pad",
//     "price": 346.87,
//     "description": "Enhance airflow and keep your laptop cool.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Charger%20Pad",
//     "rating": 4.7,
//     "inStock": false
//   },
//   {
//     "id": 37,
//     "title": "Wireless Charger Pad",
//     "price": 220.84,
//     "description": "Capture stunning photos and videos.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Charger%20Pad",
//     "rating": 3.7,
//     "inStock": false
//   },
//   {
//     "id": 38,
//     "title": "LED Desk Lamp",
//     "price": 455.76,
//     "description": "Capture stunning photos and videos.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,LED%20Desk%20Lamp",
//     "rating": 4.7,
//     "inStock": false
//   },
//   {
//     "id": 39,
//     "title": "Wireless Charger Pad",
//     "price": 399.22,
//     "description": "Stylish and waterproof with multiple compartments.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Charger%20Pad",
//     "rating": 4.9,
//     "inStock": true
//   },
//   {
//     "id": 40,
//     "title": "Streaming Microphone",
//     "price": 288.1,
//     "description": "RGB lighting and tactile feedback for gamers.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,Streaming%20Microphone",
//     "rating": 4.1,
//     "inStock": false
//   },
//   {
//     "id": 41,
//     "title": "4K Action Camera",
//     "price": 152.27,
//     "description": "Control with app or voice assistants.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.7,
//     "inStock": false
//   },
//   {
//     "id": 42,
//     "title": "Bluetooth Speaker",
//     "price": 305.21,
//     "description": "Control with app or voice assistants.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.7,
//     "inStock": true
//   },
//   {
//     "id": 43,
//     "title": "Wireless Mouse",
//     "price": 190.01,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Mouse",
//     "rating": 3.6,
//     "inStock": false
//   },
//   {
//     "id": 44,
//     "title": "DSLR Camera",
//     "price": 54.91,
//     "description": "Foldable design, universal compatibility.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 3.2,
//     "inStock": true
//   },
//   {
//     "id": 45,
//     "title": "DSLR Camera",
//     "price": 453.0,
//     "description": "Foldable design, universal compatibility.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 4.5,
//     "inStock": true
//   },
//   {
//     "id": 46,
//     "title": "Bluetooth Speaker",
//     "price": 257.27,
//     "description": "Control with app or voice assistants.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 5.0,
//     "inStock": true
//   },
//   {
//     "id": 47,
//     "title": "DSLR Camera",
//     "price": 376.38,
//     "description": "Control with app or voice assistants.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 4.4,
//     "inStock": true
//   },
//   {
//     "id": 48,
//     "title": "Laptop Backpack",
//     "price": 268.37,
//     "description": "Ergonomic and responsive with silent clicks.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Backpack",
//     "rating": 4.5,
//     "inStock": true
//   },
//   {
//     "id": 49,
//     "title": "4K Action Camera",
//     "price": 184.48,
//     "description": "Track your steps, heart rate, and sleep quality.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.3,
//     "inStock": true
//   },
//   {
//     "id": 50,
//     "title": "Streaming Microphone",
//     "price": 432.24,
//     "description": "Waterproof with wide-angle lens.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Streaming%20Microphone",
//     "rating": 5.0,
//     "inStock": false
//   },
//   {
//     "id": 51,
//     "title": "Laptop Backpack",
//     "price": 297.15,
//     "description": "Expand your device\u2019s ports with ease.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Backpack",
//     "rating": 3.3,
//     "inStock": true
//   },
//   {
//     "id": 52,
//     "title": "Wireless Mouse",
//     "price": 82.22,
//     "description": "Foldable design, universal compatibility.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Mouse",
//     "rating": 3.6,
//     "inStock": false
//   },
//   {
//     "id": 53,
//     "title": "Wireless Charger Pad",
//     "price": 190.87,
//     "description": "Adjustable brightness with touch control.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Charger%20Pad",
//     "rating": 4.7,
//     "inStock": false
//   },
//   {
//     "id": 54,
//     "title": "LED Desk Lamp",
//     "price": 84.62,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,LED%20Desk%20Lamp",
//     "rating": 3.0,
//     "inStock": true
//   },
//   {
//     "id": 55,
//     "title": "Streaming Microphone",
//     "price": 284.94,
//     "description": "RGB lighting and tactile feedback for gamers.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Streaming%20Microphone",
//     "rating": 3.4,
//     "inStock": false
//   },
//   {
//     "id": 56,
//     "title": "Mechanical Gaming Keyboard",
//     "price": 489.5,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Mechanical%20Gaming%20Keyboard",
//     "rating": 4.5,
//     "inStock": false
//   },
//   {
//     "id": 57,
//     "title": "Mechanical Gaming Keyboard",
//     "price": 153.16,
//     "description": "Ergonomic and responsive with silent clicks.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Mechanical%20Gaming%20Keyboard",
//     "rating": 3.2,
//     "inStock": false
//   },
//   {
//     "id": 58,
//     "title": "LED Desk Lamp",
//     "price": 158.57,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,LED%20Desk%20Lamp",
//     "rating": 4.6,
//     "inStock": false
//   },
//   {
//     "id": 59,
//     "title": "LED Desk Lamp",
//     "price": 277.28,
//     "description": "Adjustable brightness with touch control.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,LED%20Desk%20Lamp",
//     "rating": 4.4,
//     "inStock": false
//   },
//   {
//     "id": 60,
//     "title": "Smart LED Bulb",
//     "price": 258.58,
//     "description": "Ergonomic and responsive with silent clicks.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,Smart%20LED%20Bulb",
//     "rating": 4.1,
//     "inStock": false
//   },
//   {
//     "id": 61,
//     "title": "Android Smartphone",
//     "price": 258.29,
//     "description": "Stylish and waterproof with multiple compartments.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Android%20Smartphone",
//     "rating": 5.0,
//     "inStock": true
//   },
//   {
//     "id": 62,
//     "title": "Smartphone Stand",
//     "price": 180.41,
//     "description": "Fast wireless charging with LED indicator.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Smartphone%20Stand",
//     "rating": 3.1,
//     "inStock": true
//   },
//   {
//     "id": 63,
//     "title": "4K Action Camera",
//     "price": 120.09,
//     "description": "Enhance airflow and keep your laptop cool.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.2,
//     "inStock": false
//   },
//   {
//     "id": 64,
//     "title": "Wireless Charger Pad",
//     "price": 243.24,
//     "description": "Crystal clear voice with noise reduction.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Charger%20Pad",
//     "rating": 3.6,
//     "inStock": true
//   },
//   {
//     "id": 65,
//     "title": "USB-C Hub",
//     "price": 278.93,
//     "description": "Foldable design, universal compatibility.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 4.1,
//     "inStock": true
//   },
//   {
//     "id": 66,
//     "title": "Electric Toothbrush",
//     "price": 490.68,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Electric%20Toothbrush",
//     "rating": 4.2,
//     "inStock": true
//   },
//   {
//     "id": 67,
//     "title": "Laptop Backpack",
//     "price": 498.5,
//     "description": "Capture stunning photos and videos.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Backpack",
//     "rating": 4.9,
//     "inStock": true
//   },
//   {
//     "id": 68,
//     "title": "4K Action Camera",
//     "price": 499.99,
//     "description": "Foldable design, universal compatibility.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.4,
//     "inStock": true
//   },
//   {
//     "id": 69,
//     "title": "USB-C Hub",
//     "price": 129.91,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 4.4,
//     "inStock": true
//   },
//   {
//     "id": 70,
//     "title": "Laptop Backpack",
//     "price": 241.69,
//     "description": "Monitor your workouts and stay active.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Backpack",
//     "rating": 3.1,
//     "inStock": true
//   },
//   {
//     "id": 71,
//     "title": "Noise Cancelling Earbuds",
//     "price": 210.33,
//     "description": "Enhance airflow and keep your laptop cool.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Noise%20Cancelling%20Earbuds",
//     "rating": 4.9,
//     "inStock": true
//   },
//   {
//     "id": 72,
//     "title": "Laptop Cooling Pad",
//     "price": 129.92,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 3.2,
//     "inStock": true
//   },
//   {
//     "id": 73,
//     "title": "USB-C Hub",
//     "price": 362.28,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 4.3,
//     "inStock": true
//   },
//   {
//     "id": 74,
//     "title": "Smart Fitness Watch",
//     "price": 492.6,
//     "description": "Fast charging and compact design for travel.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Smart%20Fitness%20Watch",
//     "rating": 4.2,
//     "inStock": false
//   },
//   {
//     "id": 75,
//     "title": "Electric Toothbrush",
//     "price": 170.2,
//     "description": "Crystal clear voice with noise reduction.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,Electric%20Toothbrush",
//     "rating": 3.1,
//     "inStock": false
//   },
//   {
//     "id": 76,
//     "title": "Portable Charger 10000mAh",
//     "price": 117.75,
//     "description": "Control with app or voice assistants.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Portable%20Charger%2010000mAh",
//     "rating": 4.0,
//     "inStock": false
//   },
//   {
//     "id": 77,
//     "title": "Bluetooth Speaker",
//     "price": 235.01,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 4.0,
//     "inStock": true
//   },
//   {
//     "id": 78,
//     "title": "Streaming Microphone",
//     "price": 347.97,
//     "description": "Foldable design, universal compatibility.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Streaming%20Microphone",
//     "rating": 3.6,
//     "inStock": false
//   },
//   {
//     "id": 79,
//     "title": "USB-C Hub",
//     "price": 210.45,
//     "description": "Latest model with high-resolution camera.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 3.7,
//     "inStock": false
//   },
//   {
//     "id": 80,
//     "title": "Bluetooth Speaker",
//     "price": 137.51,
//     "description": "Waterproof with wide-angle lens.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 3.6,
//     "inStock": true
//   },
//   {
//     "id": 81,
//     "title": "USB-C Hub",
//     "price": 126.74,
//     "description": "Monitor your workouts and stay active.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 3.7,
//     "inStock": false
//   },
//   {
//     "id": 82,
//     "title": "Bluetooth Speaker",
//     "price": 242.94,
//     "description": "Stylish and waterproof with multiple compartments.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 4.0,
//     "inStock": true
//   },
//   {
//     "id": 83,
//     "title": "4K Action Camera",
//     "price": 14.17,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 4.4,
//     "inStock": false
//   },
//   {
//     "id": 84,
//     "title": "Laptop Cooling Pad",
//     "price": 484.32,
//     "description": "Latest model with high-resolution camera.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 4.2,
//     "inStock": false
//   },
//   {
//     "id": 85,
//     "title": "DSLR Camera",
//     "price": 433.93,
//     "description": "Monitor your workouts and stay active.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 4.7,
//     "inStock": false
//   },
//   {
//     "id": 86,
//     "title": "Wireless Mouse",
//     "price": 44.58,
//     "description": "Ergonomic fit with long battery life.",
//     "category": "Home",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Mouse",
//     "rating": 4.6,
//     "inStock": true
//   },
//   {
//     "id": 87,
//     "title": "Electric Toothbrush",
//     "price": 193.28,
//     "description": "Waterproof with wide-angle lens.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Electric%20Toothbrush",
//     "rating": 4.4,
//     "inStock": true
//   },
//   {
//     "id": 88,
//     "title": "Portable Charger 10000mAh",
//     "price": 13.71,
//     "description": "Loud and clear audio with deep bass.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Portable%20Charger%2010000mAh",
//     "rating": 3.3,
//     "inStock": true
//   },
//   {
//     "id": 89,
//     "title": "DSLR Camera",
//     "price": 391.29,
//     "description": "2-minute timer and multiple brush modes.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,DSLR%20Camera",
//     "rating": 3.5,
//     "inStock": false
//   },
//   {
//     "id": 90,
//     "title": "USB-C Hub",
//     "price": 348.36,
//     "description": "Expand your device\u2019s ports with ease.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 3.3,
//     "inStock": true
//   },
//   {
//     "id": 91,
//     "title": "4K Action Camera",
//     "price": 415.13,
//     "description": "RGB lighting and tactile feedback for gamers.",
//     "category": "Electronics",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.4,
//     "inStock": true
//   },
//   {
//     "id": 92,
//     "title": "Wireless Mouse",
//     "price": 253.83,
//     "description": "Crystal clear voice with noise reduction.",
//     "category": "Wearables",
//     "image": "https://source.unsplash.com/400x400/?product,Wireless%20Mouse",
//     "rating": 4.9,
//     "inStock": true
//   },
//   {
//     "id": 93,
//     "title": "4K Action Camera",
//     "price": 133.12,
//     "description": "Ergonomic fit with long battery life.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,4K%20Action%20Camera",
//     "rating": 3.1,
//     "inStock": true
//   },
//   {
//     "id": 94,
//     "title": "Laptop Cooling Pad",
//     "price": 178.47,
//     "description": "Capture stunning photos and videos.",
//     "category": "Computers",
//     "image": "https://source.unsplash.com/400x400/?product,Laptop%20Cooling%20Pad",
//     "rating": 4.9,
//     "inStock": false
//   },
//   {
//     "id": 95,
//     "title": "Smart LED Bulb",
//     "price": 88.06,
//     "description": "Latest model with high-resolution camera.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Smart%20LED%20Bulb",
//     "rating": 5.0,
//     "inStock": true
//   },
//   {
//     "id": 96,
//     "title": "Streaming Microphone",
//     "price": 352.41,
//     "description": "Waterproof with wide-angle lens.",
//     "category": "Accessories",
//     "image": "https://source.unsplash.com/400x400/?product,Streaming%20Microphone",
//     "rating": 4.6,
//     "inStock": false
//   },
//   {
//     "id": 97,
//     "title": "USB-C Hub",
//     "price": 161.46,
//     "description": "Ergonomic fit with long battery life.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,USB-C%20Hub",
//     "rating": 4.0,
//     "inStock": true
//   },
//   {
//     "id": 98,
//     "title": "Noise Cancelling Earbuds",
//     "price": 496.35,
//     "description": "Monitor your workouts and stay active.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Noise%20Cancelling%20Earbuds",
//     "rating": 4.9,
//     "inStock": true
//   },
//   {
//     "id": 99,
//     "title": "Mechanical Gaming Keyboard",
//     "price": 339.39,
//     "description": "Adjustable brightness with touch control.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Mechanical%20Gaming%20Keyboard",
//     "rating": 4.3,
//     "inStock": false
//   },
//   {
//     "id": 100,
//     "title": "Bluetooth Speaker",
//     "price": 430.56,
//     "description": "Track your steps, heart rate, and sleep quality.",
//     "category": "Audio",
//     "image": "https://source.unsplash.com/400x400/?product,Bluetooth%20Speaker",
//     "rating": 4.3,
//     "inStock": true
//   }
// ];

// export default ShoppingApp;

import { useState, useEffect } from 'react';

const ShoppingApp = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoverStates, setHoverStates] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [categories, setCategories] = useState(['all']);
  const [categorizedProducts, setCategorizedProducts] = useState({});

  // Exchange rate - assuming 1 USD = 75 INR
  const exchangeRate = 75;

  // Carousel items
  const carouselItems = [
    {
      id: 1,
      image: "/api/placeholder/1280/400",
      title: "Summer Sale",
      description: "Up to 50% off on selected items",
      buttonText: "Shop Now",
      color: "#3b82f6"
    },
    {
      id: 2,
      image: "/api/placeholder/1280/400",
      title: "New Electronics",
      description: "Latest gadgets and tech accessories",
      buttonText: "Explore",
      color: "#8b5cf6"
    },
    {
      id: 3,
      image: "/api/placeholder/1280/400",
      title: "Fashion Collection",
      description: "Trendy styles for all seasons",
      buttonText: "View Collection",
      color: "#ea580c"
    }
  ];

  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentCarouselSlide(prev => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentCarouselSlide(prev => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isScrolling]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=100');
        const data = await response.json();
        setProducts(data);
        
        // Extract unique categories
        const uniqueCategories = ['all', ...new Set(data.map(product => 
          product.category?.name?.toLowerCase() || 'uncategorized'
        ))];
        setCategories(uniqueCategories);
        
        // Create categorized products object
        const productsByCategory = {};
        uniqueCategories.forEach(category => {
          if (category === 'all') {
            productsByCategory[category] = data;
          } else {
            productsByCategory[category] = data.filter(product => 
              product.category?.name?.toLowerCase() === category
            );
          }
        });
        setCategorizedProducts(productsByCategory);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Filter products by category and search query
  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || 
      (product.category?.name?.toLowerCase() === selectedCategory))
    .filter(product => 
      searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    showToast(`Added ${product.title} to cart`);
  };

  // Toggle wishlist
  const toggleWishlist = (product) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      showToast(`Removed ${product.title} from wishlist`);
    } else {
      setWishlist([...wishlist, product]);
      showToast(`Added ${product.title} to wishlist`);
    }
  };

  // Update quantity in cart
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));
    showToast(`Removed ${itemToRemove.title} from cart`);
  };

  // Calculate total price in rupees
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.price || 0;
      return total + (price * exchangeRate * item.quantity);
    }, 0);
  };

  // Show toast message
  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 3000);
  };

  // Handle checkout
  const handleCheckout = () => {
    setShowCheckout(true);
    setShowCart(false);
  };

  // Process payment (direct success without card details)
  const processPayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setOrderPlaced(true);
    }, 1500);
  };

  // Continue shopping after order
  const continueShopping = () => {
    setShowCheckout(false);
    setOrderPlaced(false);
    setCart([]);
  };

  // Handle mouse enter for hover effect
  const handleMouseEnter = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: true }));
  };

  // Handle mouse leave for hover effect
  const handleMouseLeave = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: false }));
  };

  // Get discount based on category
  const getDiscount = (category) => {
    const categoryName = category?.name?.toLowerCase();
    if (categoryName === 'electronics') return 10;
    if (categoryName === 'clothes' || categoryName === 'clothing') return 15;
    if (categoryName === 'furniture') return 20;
    return 0;
  };

  // Calculate discounted price
  const getDiscountedPrice = (price, category) => {
    const discount = getDiscount(category);
    if (discount === 0) return price * exchangeRate;
    return price * exchangeRate * (1 - discount/100);
  };

  return (
    <div className="shop-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo">ShopZone</div>
            <div className="tagline">Amazing deals everyday</div>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
          
          <div className="header-right">
            <button className="header-button">
              <span className="button-icon">👤</span>
              <span className="button-text">Account</span>
            </button>
            <button className="header-button">
              <span className="button-icon">📦</span>
              <span className="button-text">Orders</span>
            </button>
            <button 
              className="header-button cart-button"
              onClick={() => setShowCart(true)}
            >
              <span className="button-icon">🛒</span>
              <span className="button-text">Cart</span>
              {cart.length > 0 && (
                <span className="cart-count">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="main-container">
        {/* Carousel */}
        <div 
          className="carousel"
          onMouseEnter={() => setIsScrolling(true)}
          onMouseLeave={() => setIsScrolling(false)}
        >
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`carousel-slide ${index === currentCarouselSlide ? "active" : ""}`}
              style={{ 
                backgroundColor: item.color 
              }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="carousel-image"
              />
              <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-description">{item.description}</p>
                <button className="carousel-button">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
          
          <button 
            className="carousel-control prev"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          
          <button 
            className="carousel-control next"
            onClick={nextSlide}
          >
            &#10095;
          </button>
          
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button 
                key={index}
                className={`carousel-indicator ${index === currentCarouselSlide ? "active" : ""}`}
                onClick={() => setCurrentCarouselSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Popular Category Sections */}
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading amazing products for you...</p>
          </div>
        ) : (
          <>
            {/* Featured Section */}
            <section className="product-section">
              <h2 className="section-title">Featured Products</h2>
              <div className="products-grid">
                {filteredProducts.slice(0, 4).map(product => (
                  <div 
                    key={product.id} 
                    className={`product-card ${hoverStates[product.id] ? "hover" : ""}`}
                    onMouseEnter={() => handleMouseEnter(product.id)}
                    onMouseLeave={() => handleMouseLeave(product.id)}
                  >
                    <div className="product-image-container">
                      <img 
                        src={product.images?.[0] || "/api/placeholder/300/300"} 
                        alt={product.title} 
                        className="product-image" 
                      />
                      <button 
                        className={`wishlist-button ${wishlist.some(item => item.id === product.id) ? "active" : ""}`}
                        onClick={() => toggleWishlist(product)}
                      >
                        {wishlist.some(item => item.id === product.id) ? "❤️" : "🤍"}
                      </button>
                      {getDiscount(product.category) > 0 && (
                        <div className="discount-badge">
                          {getDiscount(product.category)}% OFF
                        </div>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-title">{product.title}</h3>
                      <div className="product-rating">
                        {'★'.repeat(Math.floor(3 + Math.random() * 2))}
                        {'☆'.repeat(5 - Math.floor(3 + Math.random() * 2))}
                        <span className="review-count">({Math.floor(100 + Math.random() * 900)})</span>
                      </div>
                      <div className="product-price">
                        <span className="price-amount">₹{getDiscountedPrice(product.price, product.category).toFixed(2)}</span>
                        {getDiscount(product.category) > 0 && (
                          <span className="original-price">₹{(product.price * exchangeRate).toFixed(2)}</span>
                        )}
                      </div>
                      <button 
                        className="add-to-cart-button"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Display products by category sections */}
            {categories.filter(cat => cat !== 'all').slice(0, 4).map(category => (
              <section className="product-section" key={category}>
                <div className="section-header">
                  <h2 className="section-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                  <a href="#" className="view-all">View All</a>
                </div>
                <div className="products-grid">
                  {products
                    .filter(product => product.category?.name?.toLowerCase() === category)
                    .slice(0, 4)
                    .map(product => (
                      <div 
                        key={product.id} 
                        className={`product-card ${hoverStates[product.id] ? "hover" : ""}`}
                        onMouseEnter={() => handleMouseEnter(product.id)}
                        onMouseLeave={() => handleMouseLeave(product.id)}
                      >
                        <div className="product-image-container">
                          <img 
                            src={product.images?.[0] || "/api/placeholder/300/300"} 
                            alt={product.title} 
                            className="product-image" 
                          />
                          <button 
                            className={`wishlist-button ${wishlist.some(item => item.id === product.id) ? "active" : ""}`}
                            onClick={() => toggleWishlist(product)}
                          >
                            {wishlist.some(item => item.id === product.id) ? "❤️" : "🤍"}
                          </button>
                          {getDiscount(product.category) > 0 && (
                            <div className="discount-badge">
                              {getDiscount(product.category)}% OFF
                            </div>
                          )}
                        </div>
                        <div className="product-info">
                          <h3 className="product-title">{product.title}</h3>
                          <div className="product-rating">
                            {'★'.repeat(Math.floor(3 + Math.random() * 2))}
                            {'☆'.repeat(5 - Math.floor(3 + Math.random() * 2))}
                            <span className="review-count">({Math.floor(100 + Math.random() * 900)})</span>
                          </div>
                          <div className="product-price">
                            <span className="price-amount">₹{getDiscountedPrice(product.price, product.category).toFixed(2)}</span>
                            {getDiscount(product.category) > 0 && (
                              <span className="original-price">₹{(product.price * exchangeRate).toFixed(2)}</span>
                            )}
                          </div>
                          <button 
                            className="add-to-cart-button"
                            onClick={() => addToCart(product)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            ))}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-section">
              <h3 className="footer-title">ShopZone</h3>
              <p className="footer-description">Your one-stop shop for amazing products at incredible prices.</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">FAQs</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Categories</h3>
              <ul className="footer-links">
                {categories.slice(1, 5).map(category => (
                  <li key={category}>
                    <a 
                      href="#" 
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCategory(category);
                        window.scrollTo({top: 0, behavior: 'smooth'});
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Stay Connected</h3>
              <p className="footer-description">Subscribe to our newsletter</p>
              <div className="subscribe-container">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="subscribe-input"
                />
                <button className="subscribe-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ShopZone. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${showCart ? "open" : ""}`}>
        <div className="cart-container">
          <div className="cart-header">
            <h2 className="cart-title">Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)</h2>
            <button 
              className="close-button"
              onClick={() => setShowCart(false)}
            >
              &times;
            </button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <p className="empty-cart-message">Your cart is empty</p>
                <p className="empty-cart-submessage">Add some products to your cart</p>
                <button 
                  className="continue-shopping-button"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="cart-items-list">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img 
                      src={item.images?.[0] || "/api/placeholder/300/300"} 
                      alt={item.title} 
                      className="cart-item-image" 
                    />
                    <div className="cart-item-details">
                      <div className="cart-item-header">
                        <h3 className="cart-item-title">{item.title}</h3>
                        <button 
                          className="remove-item-button"
                          onClick={() => removeFromCart(item.id)}
                        >
                          &times;
                        </button>
                      </div>
                      <div className="cart-item-price">₹{(getDiscountedPrice(item.price, item.category) * item.quantity).toFixed(2)}</div>
                      <div className="cart-item-quantity">
                        <button 
                          className="quantity-button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span className="total-label">Subtotal:</span>
                <span className="total-amount">₹{calculateTotal().toFixed(2)}</span>
              </div>
              <button 
                className="checkout-button"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`overlay ${showCart || showCheckout ? "visible" : ""}`}
        onClick={() => {
          setShowCart(false);
          if (!orderPlaced) setShowCheckout(false);
        }}
      />

      {/* Checkout Modal */}
      <div className={`checkout-modal ${showCheckout ? "open" : ""}`}>
        <div 
          className="checkout-container"
          onClick={e => e.stopPropagation()}
        >
          {!orderPlaced ? (
            <>
              <div className="checkout-header">
                <h2 className="checkout-title">Checkout</h2>
                <button 
                  className="close-button"
                  onClick={() => setShowCheckout(false)}
                >
                  &times;
                </button>
              </div>
              
              <div className="checkout-form">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Shipping Address</label>
                  <input 
                    type="text" 
                    placeholder="123 Main St" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input 
                    type="text" 
                    placeholder="Mumbai" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group half">
                    <label className="form-label">State</label>
                    <input 
                      type="text" 
                      placeholder="Maharashtra" 
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group half">
                    <label className="form-label">ZIP Code</label>
                    <input 
                      type="text" 
                      placeholder="400001" 
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="+91 98765 43210" 
                    className="form-input"
                  />
                </div>
                
                <div className="payment-options">
                  <h3 className="payment-title">Payment Method</h3>
                  <div className="payment-methods">
                    <label className="payment-method">
                      <input type="radio" name="payment" value="cod" defaultChecked />
                      <span className="payment-label">Cash on Delivery</span>
                    </label>
                    <label className="payment-method">
                      <input type="radio" name="payment" value="upi" />
                      <span className="payment-label">UPI</span>
                    </label>
                  </div>
                </div>
                
                <button 
                  className="place-order-button"
                  onClick={processPayment}
                >
                  Place Order - ₹{calculateTotal().toFixed(2)}
                </button>
              </div>
            </>
          ) : (
            <div className="order-success">
              <div className="success-icon">✓</div>
              <h2 className="success-title">Order Placed Successfully!</h2>
              <div className="order-details">
                <div className="order-detail">
                  <span className="detail-label">Order #:</span>
                  <span className="detail-value">{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="order-detail">
                  <span className="detail-label">Total:</span>
                  <span className="detail-value">₹{calculateTotal().toFixed(2)}</span>
                </div>
                <div className="order-detail">
                  <span className="detail-label">Estimated Delivery:</span>
                  <span className="detail-value">{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                </div>
              </div>
              <button 
                className="continue-button"
                onClick={continueShopping}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${toast.visible ? "visible" : ""}`}>
        <span className="toast-icon">✓</span>
        {toast.message}
      </div>
      <style>{`
      
      /* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background-color: #f8fafc;
}

.shop-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.header-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo {
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ffffff, #f0f9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 400;
}

.search-container {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  flex-grow: 1;
  max-width: 500px;
}

.search-container:focus-within {
  transform: scale(1.02);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.search-input {
  flex-grow: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
}

.search-input::placeholder {
  color: #999;
}

.search-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-button:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
}

.search-icon {
  font-size: 1.2rem;
}

.header-right {
  display: flex;
  gap: 1rem;
}

.header-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
}

.header-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.button-icon {
  font-size: 1.5rem;
}

.button-text {
  font-size: 0.8rem;
  font-weight: 500;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: 5px;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Main Container */
.main-container {
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

/* Carousel Styles */
.carousel {
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-content {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 50%;
}

.carousel-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  animation: slideInLeft 0.8s ease-out;
}

.carousel-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  animation: slideInLeft 0.8s ease-out 0.2s both;
}

.carousel-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideInLeft 0.8s ease-out 0.4s both;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.carousel-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.carousel-control.prev {
  left: 2rem;
}

.carousel-control.next {
  right: 2rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicator.active {
  background: white;
  transform: scale(1.3);
}

/* Categories */
.categories-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.category-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
}

.category-button:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.category-button.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
}

/* Loading */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: #64748b;
  font-size: 1.1rem;
}

/* Product Sections */
.product-section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
}

.view-all {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.view-all:hover {
  color: #5a67d8;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.product-image-container {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.wishlist-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.wishlist-button:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.wishlist-button.active {
  background: #ff4757;
  color: white;
}

.discount-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ff4757;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

.review-count {
  color: #64748b;
  font-size: 0.9rem;
}

.product-price {
  margin-bottom: 1rem;
}

.price-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.original-price {
  font-size: 1.1rem;
  color: #94a3b8;
  text-decoration: line-through;
  margin-left: 0.5rem;
}

.add-to-cart-button {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.add-to-cart-button:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f1f5f9;
}

.footer-description {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  line-height: 2;
}

.footer-link:hover {
  color: #667eea;
}

.subscribe-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.subscribe-input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #374151;
  background: #374151;
  color: white;
  border-radius: 8px;
  outline: none;
}

.subscribe-input::placeholder {
  color: #9ca3af;
}

.subscribe-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-button:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1rem;
  text-align: center;
  color: #94a3b8;
}

/* Cart Sidebar */
.cart-sidebar {
  position: fixed;
  top: 0;
  right: -500px;
  width: 500px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.cart-sidebar.open {
  right: 0;
}

.cart-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cart-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.cart-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: scale(1.1);
}

.cart-items {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
}

.empty-cart-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-cart-message {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.empty-cart-submessage {
  color: #64748b;
  margin-bottom: 2rem;
}

.continue-shopping-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-shopping-button:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
  transform: translateY(-2px);
}

.cart-items-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.cart-item:hover {
  background: #f1f5f9;
  transform: translateX(5px);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cart-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cart-item-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  flex-grow: 1;
}

.remove-item-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ef4444;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-item-button:hover {
  background: #fee2e2;
  transform: scale(1.1);
}

.cart-item-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-button {
  width: 30px;
  height: 30px;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quantity-button:hover {
  border-color: #667eea;
  color: #667eea;
  transform: scale(1.1);
}

.quantity-value {
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.cart-footer {
  border-top: 1px solid #e2e8f0;
  padding: 1.5rem;
  background: #f8fafc;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.total-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
}

.total-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.checkout-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-button:hover {
  background: linear-gradient(135deg, #059669, #047857);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1500;
}

.overlay.visible {
  opacity: 1;
  visibility: visible;
}

/* Checkout Modal */
.checkout-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 2500;
  padding: 2rem;
}

.checkout-modal.open {
  opacity: 1;
  visibility: visible;
}

.checkout-container {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-50px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.checkout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.checkout-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.half {
  flex: 1;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-label {
  font-weight: 600;
  color: #374151;
}

.form-input {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.payment-options {
  margin-top: 1rem;
}

.payment-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.payment-method:hover {
  border-color: #667eea;
  background: #f7fafc;
}

.payment-method input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #667eea;
}

.payment-label {
  font-weight: 600;
  color: #374151;
}

.place-order-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.place-order-button:hover {
  background: linear-gradient(135deg, #059669, #047857);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

/* Order Success */
.order-success {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  font-size: 5rem;
  color: #10b981;
  margin-bottom: 1rem;
  animation: checkmark 0.6s ease-in-out;
}

@keyframes checkmark {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.order-details {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.order-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.order-detail:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 600;
  color: #64748b;
}

.detail-value {
  font-weight: 700;
  color: #1a1a1a;
}

.continue-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-button:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* Toast Notification */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transform: translateX(400px);
  transition: transform 0.3s ease;
  z-index: 3000;
  font-weight: 600;
}

.toast.visible {
  transform: translateX(0);
}

.toast-icon {
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .header-left {
    order: 1;
  }
  
  .search-container {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }
  
  .header-right {
    order: 2;
  }
  
  .logo {
    font-size: 1.5rem;
  }
  
  .tagline {
    font-size: 0.8rem;
  }
  
  .main-container {
    padding: 1rem;
  }
  
  .carousel {
    height: 300px;
  }
  
  .carousel-title {
    font-size: 2rem;
  }
  
  .carousel-description {
    font-size: 1.2rem;
  }
  
  .carousel-content {
    max-width: 80%;
  }
  
  .carousel-control {
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 45px;
    height: 45px;
  }
  
  .carousel-control.prev {
    left: 1rem;
  }
  
  .carousel-control.next {
    right: 1rem;
  }
  
  .categories-container {
    gap: 0.5rem;
  }
  
  .category-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .product-card {
    transform: none;
  }
  
  .product-card:hover {
    transform: translateY(-4px);
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .cart-sidebar {
    width: 100%;
    right: -100%;
  }
  
  .footer-sections {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .subscribe-container {
    flex-direction: column;
  }
  
  .checkout-container {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .form-row {
    flex-direction: column;
  }
  
  .toast {
    right: 10px;
    left: 10px;
    transform: translateY(-100px);
  }
  
  .toast.visible {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 0.5rem;
  }
  
  .main-container {
    padding: 0.5rem;
  }
  
  .carousel {
    height: 250px;
    border-radius: 12px;
  }
  
  .carousel-title {
    font-size: 1.5rem;
  }
  
  .carousel-description {
    font-size: 1rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .checkout-container {
    margin: 0.5rem;
    padding: 1rem;
  }
  
  .checkout-title {
    font-size: 1.5rem;
  }
}

/* High contrast mode for accessibility */
@media (prefers-contrast: high) {
  .product-card {
    border: 2px solid #000;
  }
  
  .category-button {
    border-color: #000;
  }
  
  .category-button.active {
    background: #000;
    color: white;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .carousel-slide {
    transition: none;
  }
  
  .product-card:hover {
    transform: none;
  }
}
      `}</style>
    </div>
  );
};

export default ShoppingApp;