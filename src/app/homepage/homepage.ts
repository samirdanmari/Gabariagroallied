import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Product {
  name: string;
  description: string;
  image: string;
}
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}
@Component({
  selector: 'app-homepage',
  imports: [FormsModule, CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  title = 'GlobalTrade Import/Export';
  isMenuOpen = false;
  activeTab: 'agro' | 'minerals' | 'finished' = 'agro';

  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  };

  products = {
    agro: [
      { 
        name: 'Rice & wheat', 
        description: 'Premium quality rice, wheat, and other grains.  Our grains are TOTALLY stone-free! They are De-stoned before being packaged', 
        image: './assets/images/products/agro/rice1.png' 
      },
      { 
        name: 'Sesame Seed & ', 
        description: 'Fresh produce exported globally', 
        image: './assets/images/products/agro/sesame.png' 
      },
      { 
        name: 'Beans & SoyaBeans', 
        description: 'beans and soy products', 
        image: './assets/images/products/agro/beans.jpg' 
      },
      { 
        name: 'Coffee & Tea', 
        description: 'Premium coffee beans and tea leaves', 
        image: 'assets/images/products/agro/coffee.jpg' 
      },
      { 
        name: 'Ginger & Garlic', 
        description: 'Fresh ginger and garlic for culinary use', 
        image: 'assets/images/products/agro/ginnger.png' 
      },
      { 
        name: 'Chillly Pepper & Cashew Nuts', 
        description: 'Spicy chili peppers and crunchy cashew nuts', 
        image: 'assets/images/products/agro/cashew..png' 
      },
      { 
        name: 'Maize & Sorghum', 
        description: 'High-quality maize and sorghum grains', 
        image: 'assets/images/products/agro/maize.jpg' 
      }
    ],
    minerals: [
      { 
        name: 'Zink', 
        description: 'High-grade iron ore for steel production', 
        image: 'assets/images/products/minerals/zink.jpg' 
      },
      { 
        name: 'Copper', 
        description: 'Pure copper concentrate and cathodes', 
        image: 'assets/images/products/minerals/copper.jpg' 
      },
      { 
        name: 'Limestone', 
        description: 'Quality limestone for construction', 
        image: 'assets/images/products/minerals/limestone.jpg' 
      },
      { 
        name: 'Coal', 
        description: 'Thermal and coking coal', 
        image: 'assets/images/products/minerals/coal.jpg' 
      },
      { 
        name: 'Gold & Precious Metals', 
        description: 'Refined precious metals', 
        image: 'assets/images/products/minerals/gold.jpg' 
      },
      { 
        name: 'Bauxite', 
        description: 'Aluminum ore and derivatives', 
        image: 'assets/images/products/minerals/bauxite.jpg' 
      }
    ],
    finished: [
      { 
        name: 'Textiles & Garments', 
        description: 'Quality fabrics', 
        image: 'assets/images/products/finishedproduct/fabrics.jpeg' 
      },
      { 
        name: 'Food Items', 
        description: 'Consumer and industrial electronics', 
        image: 'assets/images/products/finishedproduct/indomie.jpg' 
      },
      { 
        name: 'Machinery', 
        description: 'Industrial and agricultural machinery', 
        image: 'assets/images/products/finishedproduct/farmingmachines.jpeg' 
      },

      { 
        name: 'Construction Materials', 
        description: 'Cement, steel, and building supplies', 
        image: 'assets/images/products/finishedproduct/construction.png' 
      }
    ]
  };

  services = [
    { icon: 'globe', title: 'Global Network', description: 'Worldwide shipping to 50+ countries' },
    { icon: 'package', title: 'Quality Assurance', description: 'Certified products meeting international standards' },
    { icon: 'shopping-cart', title: 'Custom Solutions', description: 'Tailored import/export packages' },
    { icon: 'trending-up', title: 'Competitive Pricing', description: 'Best rates with transparent pricing' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveTab(tab: 'agro' | 'minerals' | 'finished'): void {
    this.activeTab = tab;
  }

  getCurrentProducts(): Product[] {
    return this.products[this.activeTab];
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      alert('Thank you for your inquiry! We will contact you shortly.');
      this.resetForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      message: ''
    };
  }

  // Helper method to handle image loading errors
  onImageError(event: any): void {
    event.target.src = './assets/blacklogo.png'; // Fallback image
  }
}
//     title = 'GlobalTrade Import/Export';
//   isMenuOpen = false;
//   activeTab: 'agro' | 'minerals' | 'finished' = 'agro';

//   formData: ContactForm = {
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     product: '',
//     message: ''
//   };

//   products = {
//   agro: [
//       { 
//         name: 'Rice & Grains', 
//         description: 'Premium quality rice, wheat, and other grains', 
//         image: 'assets/images/products/agro/beans.jpg' 
//       },
//       { name: 'Fruits & Vegetables', description: 'Fresh produce exported globally', image: '' },
//       { name: 'Spices', description: 'Authentic spices and seasonings', image: '' },
//       { name: 'Coffee & Tea', description: 'Premium coffee beans and tea leaves', image: 'A' },
//       { name: 'Nuts & Seeds', description: 'Cashews, almonds, and various seeds', image: '' },
//       { name: 'Oils & Fats', description: 'Vegetable oils and natural fats', image: '' }
//     ],
//     minerals: [
//       { name: 'Iron Ore', description: 'High-grade iron ore for steel production', image: '⛏️' },
//       { name: 'Copper', description: 'Pure copper concentrate and cathodes', image: '🔩' },
//       { name: 'Limestone', description: 'Quality limestone for construction', image: '🪨' },
//       { name: 'Coal', description: 'Thermal and coking coal', image: '⚫' },
//       { name: 'Gold & Precious Metals', description: 'Refined precious metals', image: '✨' },
//       { name: 'Bauxite', description: 'Aluminum ore and derivatives', image: '🪨' }
//     ],
//     finished: [
//       { name: 'Textiles & Garments', description: 'Quality fabrics and ready-made garments', image: '👔' },
//       { name: 'Food & Beverages', description: 'Consumer and industrial food products', image: '📱' },
//       { name: 'Machinery', description: 'Industrial and agricultural machinery', image: '⚙️' },
//       { name: 'Pharmaceuticals', description: 'Certified medicines and healthcare products', image: '💊' },
//       // { name: 'Automotive Parts', description: 'Vehicle components and accessories', image: '🚗' },
//       { name: 'Construction Materials', description: 'Cement, steel, and building supplies', image: '🏗️' }
//     ]
//   };

//   services = [
//     { icon: 'globe', title: 'Global Network', description: 'Worldwide shipping to 50+ countries' },
//     { icon: 'package', title: 'Quality Assurance', description: 'Certified products meeting international standards' },
//     { icon: 'shopping-cart', title: 'Custom Solutions', description: 'Tailored import/export packages' },
//     { icon: 'trending-up', title: 'Competitive Pricing', description: 'Best rates with transparent pricing' }
//   ];

//    toggleMenu(): void {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   setActiveTab(tab: 'agro' | 'minerals' | 'finished'): void {
//     this.activeTab = tab;
//   }

//   getCurrentProducts(): Product[] {
//     return this.products[this.activeTab];
//   }

//   onSubmit(): void {
//     if (this.formData.name && this.formData.email && this.formData.message) {
//       alert('Thank you for your inquiry! We will contact you shortly.');
//       this.resetForm();
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   }

//   resetForm(): void {
//     this.formData = {
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       product: '',
//       message: ''
//     };
//   }

//   onImageError(event: any): void {
//     event.target.src = 'assets/images/placeholder.jpg'; // Fallback image
//   }
// }

