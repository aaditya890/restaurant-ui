import { CommonModule } from "@angular/common"
import { Component,  OnInit,  OnDestroy } from "@angular/core"

interface FoodItem {
  id: number
  name: string
  price: string
  image: string
  emoji: string
  bgColor: string
  nutrition: {
    calories: number
    protein: string
    fat: string
  }
}

interface NutritionCard {
  id: number
  label: string
  value: string
  unit: string
  icon: string
  bgColor: string
  iconColor: string
}

interface MenuCategory {
  id: string
  name: string
  shortName?: string
  icon: string
}

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  emoji: string
  category: string
  rating: number
  reviews: number
  prepTime: number
  bgGradient: string
}

interface CustomerReview {
  id: number
  name: string
  avatar: string
  avatarBg: string
  rating: number
  comment: string
  date: string
  orderType: string
}

interface HowItWorksStep {
  id: number
  number: string
  title: string
  description: string
  icon: string
  iconBg: string
  bgGradient: string
  numberBg: string
  accentColor: string
  actionText: string
}

interface SpecialOffer {
  id: number
  title: string
  description: string
  discount: string
  icon: string
  validUntil: string
  minOrder: string
  buttonText: string
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, OnDestroy {
  title = "foodie-angular"
  isMobileMenuOpen = false

  foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Delicious Burger",
      price: "$12.99",
      image: "/assets/f1.png",
      emoji: "🍔",
      bgColor: "linear-gradient(135deg, #ffdad5 0%, #ffecea 100%)",
      nutrition: {
        calories: 520,
        protein: "25g",
        fat: "18g",
      },
    },
    {
      id: 2,
      name: "Crispy Pizza",
      price: "$15.99",
      image: "/assets/f2.png",
      emoji: "🍕",
      bgColor: "linear-gradient(135deg, #fff4c5 0%, #fff0d6 100%)",
      nutrition: {
        calories: 680,
        protein: "28g",
        fat: "22g",
      },
    },
    {
      id: 3,
      name: "Fresh Sandwich",
      price: "$8.99",
      image: "/assets/f3.png",
      emoji: "🥪",
      bgColor: "linear-gradient(135deg, #d1f4f2 0%, #e6fcfa 100%)",
      nutrition: {
        calories: 420,
        protein: "18g",
        fat: "12g",
      },
    },
  ]

  menuCategories: MenuCategory[] = [
    { id: "all", name: "All Items", shortName: "All", icon: "🍽️" },
    { id: "burgers", name: "Burgers", icon: "🍔" },
    { id: "pizza", name: "Pizza", icon: "🍕" },
    { id: "sandwiches", name: "Sandwiches", shortName: "Sandwich", icon: "🥪" },
    { id: "drinks", name: "Drinks", icon: "🥤" },
    { id: "desserts", name: "Desserts", shortName: "Dessert", icon: "🍰" },
  ]

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with fresh lettuce, tomato, and our special sauce",
      price: "$12.99",
      emoji: "🍔",
      category: "burgers",
      rating: 4.8,
      reviews: 124,
      prepTime: 15,
      bgGradient: "linear-gradient(135deg, #ffdad5 0%, #ffecea 100%)",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil on crispy crust",
      price: "$15.99",
      emoji: "🍕",
      category: "pizza",
      rating: 4.9,
      reviews: 89,
      prepTime: 20,
      bgGradient: "linear-gradient(135deg, #fff4c5 0%, #fff0d6 100%)",
    },
    {
      id: 3,
      name: "Club Sandwich",
      description: "Triple-layer sandwich with turkey, bacon, lettuce, and tomato",
      price: "$8.99",
      emoji: "🥪",
      category: "sandwiches",
      rating: 4.7,
      reviews: 156,
      prepTime: 10,
      bgGradient: "linear-gradient(135deg, #d1f4f2 0%, #e6fcfa 100%)",
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella cheese and tomato sauce",
      price: "$17.99",
      emoji: "🍕",
      category: "pizza",
      rating: 4.8,
      reviews: 203,
      prepTime: 22,
      bgGradient: "linear-gradient(135deg, #fff4c5 0%, #fff0d6 100%)",
    },
    {
      id: 5,
      name: "Fresh Lemonade",
      description: "Refreshing homemade lemonade with fresh mint",
      price: "$4.99",
      emoji: "🥤",
      category: "drinks",
      rating: 4.6,
      reviews: 78,
      prepTime: 5,
      bgGradient: "linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich chocolate cake with creamy frosting",
      price: "$6.99",
      emoji: "🍰",
      category: "desserts",
      rating: 4.9,
      reviews: 145,
      prepTime: 8,
      bgGradient: "linear-gradient(135deg, #f3e5f5 0%, #fce4ec 100%)",
    },
  ]

  customerReviews: CustomerReview[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "👩",
      avatarBg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      rating: 5,
      comment:
        "Amazing food quality and super fast delivery! The burger was perfectly cooked and arrived hot. Will definitely order again!",
      date: "2 days ago",
      orderType: "Delivery",
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "👨",
      avatarBg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      rating: 5,
      comment:
        "Best pizza in town! The crust is crispy and the toppings are fresh. Customer service is also excellent.",
      date: "1 week ago",
      orderType: "Pickup",
    },
    {
      id: 3,
      name: "Emily Davis",
      avatar: "👩‍🦰",
      avatarBg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      rating: 4,
      comment:
        "Great variety of options and reasonable prices. The sandwich was delicious and the portion size was generous.",
      date: "3 days ago",
      orderType: "Dine-in",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      avatar: "👨‍🦱",
      avatarBg: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)",
      rating: 5,
      comment:
        "Foodie never disappoints! Fresh ingredients, great taste, and the app makes ordering so easy. Highly recommended!",
      date: "5 days ago",
      orderType: "Delivery",
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "👩‍💼",
      avatarBg: "linear-gradient(135deg, #ffd3a5 0%, #fd9853 100%)",
      rating: 5,
      comment: "Perfect for office lunch orders! Always on time and the food quality is consistent. The team loves it!",
      date: "1 week ago",
      orderType: "Catering",
    },
    {
      id: 6,
      name: "David Kim",
      avatar: "👨‍💻",
      avatarBg: "linear-gradient(135deg, #a8c8ec 0%, #7fcdff 100%)",
      rating: 4,
      comment:
        "Good food and fast service. The desserts are particularly amazing. Will try more items from the menu soon!",
      date: "4 days ago",
      orderType: "Pickup",
    },
    {
      id: 7,
      name: "Maria Garcia",
      avatar: "👩‍🍳",
      avatarBg: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
      rating: 5,
      comment:
        "As a chef myself, I'm impressed by the quality and presentation. The flavors are authentic and well-balanced.",
      date: "3 days ago",
      orderType: "Dine-in",
    },
    {
      id: 8,
      name: "James Wilson",
      avatar: "👨‍🎓",
      avatarBg: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
      rating: 4,
      comment:
        "Great student discounts and the portions are huge! Perfect for late-night study sessions. Fast delivery too.",
      date: "1 day ago",
      orderType: "Delivery",
    },
    {
      id: 9,
      name: "Sophie Turner",
      avatar: "👩‍💻",
      avatarBg: "linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)",
      rating: 5,
      comment: "The online ordering system is so user-friendly! Love the customization options and real-time tracking.",
      date: "4 days ago",
      orderType: "Pickup",
    },
  ]

  specialOffers: SpecialOffer[] = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 25% off on all pizza orders this weekend. Perfect for family gatherings!",
      discount: "25%",
      icon: "🍕",
      validUntil: "Dec 31, 2024",
      minOrder: "$20",
      buttonText: "Claim Offer",
    },
    {
      id: 2,
      title: "Student Discount",
      description: "Show your student ID and get 20% off on any order. Valid for dine-in and takeaway.",
      discount: "20%",
      icon: "🎓",
      validUntil: "Ongoing",
      minOrder: "$15",
      buttonText: "Get Discount",
    },
    {
      id: 3,
      title: "First Order Bonus",
      description: "New customers get 30% off their first order plus free delivery!",
      discount: "30%",
      icon: "🎉",
      validUntil: "Limited Time",
      minOrder: "$25",
      buttonText: "Order Now",
    },
  ]

  howItWorksSteps: HowItWorksStep[] = [
    {
      id: 1,
      number: "01",
      title: "Browse Menu",
      description: "Explore our delicious menu with detailed descriptions, prices, and nutritional information.",
      icon: "📱",
      iconBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      numberBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accentColor: "#667eea",
      actionText: "View Menu",
    },
    {
      id: 2,
      number: "02",
      title: "Place Order",
      description: "Add your favorite items to cart, customize your order, and choose delivery or pickup.",
      icon: "🛒",
      iconBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      numberBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accentColor: "#f093fb",
      actionText: "Order Now",
    },
    {
      id: 3,
      number: "03",
      title: "Secure Payment",
      description: "Pay safely using your preferred method - credit card, digital wallet, or cash on delivery.",
      icon: "💳",
      iconBg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      numberBg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      accentColor: "#4facfe",
      actionText: "Pay Secure",
    },
    {
      id: 4,
      number: "04",
      title: "Enjoy Food",
      description: "Sit back and relax! Your fresh, hot food will be delivered to your doorstep in no time.",
      icon: "🍽️",
      iconBg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      numberBg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      accentColor: "#43e97b",
      actionText: "Track Order",
    },
  ]

  // Current active food index
  activeIndex = 0
  animationState: "enter" | "center" | "exit" = "center"
  isTransitioning = false

  // Menu state
  activeMenuCategory = "all"

  // Reviews slider state
  currentReviewSlide = 0
  reviewAnimationState: "enter" | "center" | "exit" = "center"
  isReviewTransitioning = false
  reviewSlides: CustomerReview[][] = []

  private autoRotationTimer: any
  private centerTimer: any
  private exitTimer: any
  private reviewSliderTimer: any
  private reviewCenterTimer: any
  private reviewExitTimer: any

  ngOnInit() {
    this.startAutoRotation()
    this.initializeReviewSlider()
    this.startReviewSlider()
  }

  ngOnDestroy() {
    this.clearAllTimers()
  }

  get currentFood(): FoodItem {
    return this.foodItems[this.activeIndex]
  }

  get nutritionCards(): NutritionCard[] {
    const current = this.currentFood
    return [
      {
        id: 1,
        label: "Calories",
        value: current.nutrition.calories.toString(),
        unit: "kcal",
        icon: "🔥",
        bgColor: "#fff1f2",
        iconColor: "#ef4444",
      },
      {
        id: 2,
        label: "Protein",
        value: current.nutrition.protein,
        unit: "",
        icon: "💪",
        bgColor: "#f0f9ff",
        iconColor: "#3b82f6",
      },
      {
        id: 3,
        label: "Fat",
        value: current.nutrition.fat,
        unit: "",
        icon: "🥑",
        bgColor: "#f0fdf4",
        iconColor: "#22c55e",
      },
    ]
  }

  get filteredMenuItems(): MenuItem[] {
    if (this.activeMenuCategory === "all") {
      return this.menuItems
    }
    return this.menuItems.filter((item) => item.category === this.activeMenuCategory)
  }

  private initializeReviewSlider(): void {
    // Group reviews into slides of 3 for desktop, 2 for tablet, 1 for mobile
    const reviewsPerSlide = 3
    this.reviewSlides = []

    for (let i = 0; i < this.customerReviews.length; i += reviewsPerSlide) {
      this.reviewSlides.push(this.customerReviews.slice(i, i + reviewsPerSlide))
    }
  }

  private startReviewSlider(): void {
    this.reviewSliderTimer = setTimeout(() => {
      if (!this.isReviewTransitioning) {
        const nextSlide = (this.currentReviewSlide + 1) % this.reviewSlides.length
        this.triggerReviewTransition(nextSlide)
      }
      this.startReviewSlider()
    }, 5000) // Change slide every 5 seconds
  }

  private triggerReviewTransition(newSlide: number): void {
    if (this.isReviewTransitioning) return

    this.isReviewTransitioning = true
    this.reviewAnimationState = "exit"

    this.reviewExitTimer = setTimeout(() => {
      this.currentReviewSlide = newSlide
      this.reviewAnimationState = "enter"

      this.reviewCenterTimer = setTimeout(() => {
        this.reviewAnimationState = "center"
        this.isReviewTransitioning = false
      }, 600)
    }, 400)
  }

  goToReviewSlide(slideIndex: number): void {
    if (slideIndex === this.currentReviewSlide || this.isReviewTransitioning) return

    this.clearReviewTimers()
    this.triggerReviewTransition(slideIndex)

    setTimeout(() => {
      this.startReviewSlider()
    }, 3000)
  }

  private triggerFoodTransition(newIndex: number): void {
    if (this.isTransitioning) return

    this.isTransitioning = true
    this.animationState = "exit"

    this.exitTimer = setTimeout(() => {
      this.activeIndex = newIndex
      this.animationState = "enter"

      this.centerTimer = setTimeout(() => {
        this.animationState = "center"
        this.isTransitioning = false
      }, 600)
    }, 400)
  }

  private startAutoRotation(): void {
    this.autoRotationTimer = setTimeout(() => {
      if (!this.isTransitioning) {
        const nextIndex = (this.activeIndex + 1) % this.foodItems.length
        this.triggerFoodTransition(nextIndex)
      }
      this.startAutoRotation()
    }, 4000)
  }

  private clearAllTimers(): void {
    if (this.autoRotationTimer) {
      clearTimeout(this.autoRotationTimer)
      this.autoRotationTimer = null
    }
    if (this.centerTimer) {
      clearTimeout(this.centerTimer)
      this.centerTimer = null
    }
    if (this.exitTimer) {
      clearTimeout(this.exitTimer)
      this.exitTimer = null
    }
    this.clearReviewTimers()
  }

  private clearReviewTimers(): void {
    if (this.reviewSliderTimer) {
      clearTimeout(this.reviewSliderTimer)
      this.reviewSliderTimer = null
    }
    if (this.reviewCenterTimer) {
      clearTimeout(this.reviewCenterTimer)
      this.reviewCenterTimer = null
    }
    if (this.reviewExitTimer) {
      clearTimeout(this.reviewExitTimer)
      this.reviewExitTimer = null
    }
  }

  // Mobile menu methods
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false
  }

  // Event handlers
  onBuyNow(): void {
    console.log(`Buy Now clicked for ${this.currentFood.name}`)
  }

  onHowToOrder(): void {
    console.log("How To Order clicked")
  }

  onLogin(): void {
    console.log("Login clicked")
    this.closeMobileMenu()
  }

  onSignUp(): void {
    console.log("Sign Up clicked")
    this.closeMobileMenu()
  }

  selectFood(index: number): void {
    if (index === this.activeIndex || this.isTransitioning) return

    this.clearAllTimers()
    this.triggerFoodTransition(index)

    setTimeout(() => {
      this.startAutoRotation()
    }, 3000)
  }

  selectMenuCategory(categoryId: string): void {
    this.activeMenuCategory = categoryId
  }

  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0)
  }

  // How It Works section methods
  onStepAction(stepId: number): void {
    console.log(`Step ${stepId} action clicked`)
    switch (stepId) {
      case 1:
        // Navigate to menu
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
        break
      case 2:
        // Start ordering process
        this.onBuyNow()
        break
      case 3:
        // Show payment options
        console.log("Show payment options")
        break
      case 4:
        // Track order
        console.log("Track order")
        break
    }
  }

  onOrderNow(): void {
    console.log("Order Now clicked from How It Works")
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  onDownloadApp(): void {
    console.log("Call & Book")
    // Add app download logic here
  }

  // Special offers methods
  claimOffer(offerId: number): void {
    console.log(`Claiming offer ${offerId}`)
    // Add offer claiming logic here
  }

  // TrackBy functions for performance
  trackByCardId(index: number, card: any): any {
    return card.id
  }

  trackByCategoryId(index: number, category: any): any {
    return category.id
  }

  trackByMenuItemId(index: number, item: any): any {
    return item.id
  }

  trackByReviewId(index: number, review: any): any {
    return review.id
  }

  trackByStepId(index: number, step: any): any {
    return step.id
  }

  trackByOfferId(index: number, offer: any): any {
    return offer.id
  }

  trackBySlideIndex(index: number, slide: any): any {
    return index
  }

  getProgressWidth(label: string): string {
    switch (label.toLowerCase()) {
      case "calories":
        return "75%"
      case "protein":
        return "60%"
      case "fat":
        return "45%"
      default:
        return "50%"
    }
  }
}
