import React, { useState } from "react";

import nitaplogo from "./assets/img/logo.png";

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M9.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 016 6v2.25a2.25 2.25 0 002.25 2.25H19.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 010 14.25h1.5a2.25 2.25 0 002.25-2.25V9.75a6 6 0 016-6z" />
  </svg>
);

const FileTextIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PaletteIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
  </svg>
);

const BookOpenIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const BarChart3Icon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

// Enhanced Modal component
const Modal = ({ isOpen, onClose, title, children, size = "max-w-lg" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl shadow-2xl ${size} w-full max-h-[90vh] overflow-y-auto relative`}>
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

// Bill Modal Component
const BillModal = ({ isOpen, onClose, selectedService, pageCount, billAmount, onAddToBasket, onBuyNow, fileName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Summary" size="max-w-md">
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <CheckIcon className="w-8 h-8 text-green-500 mr-3" />
            <h4 className="text-xl font-bold text-gray-800">File Processed Successfully!</h4>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-semibold text-gray-800">{selectedService}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">File:</span>
              <span className="font-semibold text-gray-800 truncate max-w-32" title={fileName}>{fileName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pages:</span>
              <span className="font-semibold text-gray-800">{pageCount}</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                <span className="text-2xl font-bold text-blue-600">${billAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onAddToBasket}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Add to Basket
          </button>
          <button
            onClick={onBuyNow}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </Modal>
  );
};

const PrintingServiceHomepage = () => {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' or 'services'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [basketModalOpen, setBasketModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [billModalOpen, setBillModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const services = [
    {
      title: "B&W PRINTOUT",
      icon: FileTextIcon,
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      description:
        "High-quality black & white printing for documents, assignments, and reports",
      pricePerPage: 2,
      features: [
        "High resolution 600 DPI",
        "Premium paper quality",
        "Fast processing",
        "Stapling available",
      ],
      deliveryTime: "5-10 minutes",
    },
    {
      title: "COLOR PRINTOUT",
      icon: PaletteIcon,
      gradient: "from-pink-500 via-red-500 to-orange-500",
      description:
        "Vibrant color printing for presentations, posters, and creative projects",
      pricePerPage: 5,
      features: [
        "True color reproduction",
        "Glossy/Matte options",
        "Various paper sizes",
        "Lamination available",
      ],
      deliveryTime: "10-15 minutes",
    },
    {
      title: "SPIRAL BINDING",
      icon: BookOpenIcon,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      description:
        "Professional document binding for thesis, reports, and presentations",
      pricePerPage: 3,
      features: [
        "Durable plastic spiral",
        "Cover page included",
        "Multiple color options",
        "Up to 200 pages",
      ],
      deliveryTime: "15-20 minutes",
    },
    {
      title: "REPORT PRINTING",
      icon: BarChart3Icon,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      description:
        "Complete report printing solutions with formatting and binding",
      pricePerPage: 4,
      features: [
        "Professional formatting",
        "Table of contents",
        "Page numbering",
        "Hard/Soft binding",
      ],
      deliveryTime: "20-30 minutes",
    },
  ];

  const formatPrice = (amount) => amount.toFixed(2);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileProcessing(files[0]);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileProcessing(file);
    }
  };

  const handleFileProcessing = (file) => {
    if (!selectedService) {
      alert("Please select a service first!");
      return;
    }
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      const simulatedPageCount = Math.floor(Math.random() * 10) + 1;
      setPageCount(simulatedPageCount);
      const selectedServiceDetails = services.find(
        (service) => service.title === selectedService
      );
      if (selectedServiceDetails) {
        const bill = simulatedPageCount * selectedServiceDetails.pricePerPage;
        setBillAmount(bill);
        setBillModalOpen(true);
      }
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service.title);
    setBillAmount(0);
    setPageCount(0);
    setPdfFile(null);
  };

  const handleAddToBasket = () => {
    const selectedServiceDetails = services.find(
      (service) => service.title === selectedService
    );
    const newItem = {
      id: Date.now(),
      service: selectedServiceDetails.title,
      pages: pageCount,
      pricePerPage: selectedServiceDetails.pricePerPage,
      total: billAmount,
      fileName: pdfFile.name,
    };
    setCartItems((prev) => [...prev, newItem]);
    setBillModalOpen(false);
    alert(`Added to basket: ${newItem.service} - ${newItem.pages} pages`);
    // Reset for next order
    setSelectedService(null);
    setPdfFile(null);
    setPageCount(0);
    setBillAmount(0);
  };

  const handleBuyNow = async () => {
  setBillModalOpen(false);
  alert(`Processing payment of hello balu $${formatPrice(billAmount)}...`);

  // Prepare the data to send
  const data = {
    amount: billAmount,
    service: selectedService,
    pageCount: pageCount,
  };

  try {
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Server response:', result);

    // Optional: show success message to user
    alert('Payment processed successfully!');
  } catch (error) {
    console.error('Error sending data to server:', error);
    alert('Error processing payment. Please try again.');
  }

  // Reset after purchase
  setSelectedService(null);
  setPdfFile(null);
  setPageCount(0);
  setBillAmount(0);
};


  const handleBasketClick = () => {
    setBasketModalOpen(true);
  };

  const handleSignInClick = () => {
    setSignInModalOpen(true);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const handleServicesNavClick = () => {
    setCurrentPage("services");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  // Services Page Component
  const ServicesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="relative z-20 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors"
          >
            <ArrowLeftIcon />
            <span className="font-semibold">Back to Home</span>
          </button>
          <h1 className="text-3xl font-bold text-white">Our Services</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Services Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Professional Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of printing services designed
            specifically for NIT-AP students
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-white bg-opacity-20 rounded-2xl p-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-lg text-white text-opacity-90 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        ${service.pricePerPage}/page
                      </span>
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {service.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBackToHome}
                  className="mt-8 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Select This Service
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-gray-600 text-lg">
              We're committed to providing the best printing experience for
              NIT-AP students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Guaranteed
              </h4>
              <p className="text-gray-600">
                Professional grade equipment ensuring crisp, clear prints every
                time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h4>
              <p className="text-gray-600">
                Quick turnaround times to meet your urgent deadlines
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Student Friendly
              </h4>
              <p className="text-gray-600">
                Affordable pricing designed with student budgets in mind
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Main Homepage Component
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="relative z-20 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 shadow-xl rounded-b-3xl">
        {/* Top Bar */}
        <div className="text-white py-2 px-6 max-w-7xl mx-auto flex justify-between items-center text-sm font-semibold">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span>Hi Sandy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-xs tracking-wide">
                OPEN NOW
              </span>
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={handleSignInClick}
              className="hover:text-blue-300 transition"
            >
              My Account
            </button>
            <button
              onClick={() => alert("My Orders clicked!")}
              className="hover:text-blue-300 transition"
            >
              My Orders
            </button>
            <button
              onClick={() => alert("Signing out...")}
              className="hover:text-blue-300 transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full flex items-center justify-center shadow-md cursor-pointer">
              <img src={nitaplogo} alt="NIT-AP Logo" className="w-10 h-10" />
            </div>
            <div
              onClick={handleServicesNavClick}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FileTextIcon className="w-6 h-6 text-white" />
              <div>
                <div className="text-xs text-blue-300 font-semibold">
                  SERVICES
                </div>
                <div className="text-lg font-extrabold text-white">
                  PRINTOUT
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-white">
            <button
              onClick={handleServicesNavClick}
              className="flex items-center gap-2 hover:text-blue-300"
            >
              <FileTextIcon className="w-5 h-5" />
              <span className="font-semibold">SERVICES</span>
            </button>
            <button
              onClick={handleBasketClick}
              className="relative flex items-center gap-2 hover:text-blue-300"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="font-semibold">BASKET</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              onClick={() => alert("Notifications feature coming soon!")}
              className="relative group"
            >
              <BellIcon className="w-5 h-5 hover:text-blue-300" />
            </button>
            <div className="flex items-center gap-3 ml-6">
              <button
                onClick={handleSignInClick}
                className="font-semibold hover:text-blue-300"
              >
                SIGN IN
              </button>
              <span className="text-blue-400">|</span>
              <button
                onClick={handleRegisterClick}
                className="font-semibold text-blue-300 hover:text-blue-400"
              >
                REGISTER
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-blue-700 rounded-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-60 z-30 p-6 overflow-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>
              <nav className="space-y-5">
                <button
                  onClick={() => {
                    handleServicesNavClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 py-3 w-full text-gray-700 hover:text-blue-600"
                >
                  <FileTextIcon className="w-5 h-5" />
                  <span className="font-medium">Services</span>
                </button>
                <button
                  onClick={() => {
                    handleBasketClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 py-3 w-full text-gray-700 hover:text-blue-600"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span className="font-medium">Basket</span>
                </button>
                <div className="border-t pt-6 space-y-3">
                  <button
                    onClick={() => {
                      handleSignInClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left font-medium text-gray-700 hover:text-blue-600"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      handleRegisterClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left font-medium text-blue-600 hover:text-blue-700"
                  >
                    Register
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Campus
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Printing Hub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional printing services designed specifically for NIT-AP
            students. Fast, affordable, and high-quality prints delivered right
            to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleServicesNavClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Services
            </button>
            <button
              onClick={() => alert("Quick order feature coming soon!")}
              className="bg-white hover:bg-gray-50 tex font-semibold py-4 px-8 rounded-xl text-lg transition-all border-2 border-gray-200 hover:border-gray-300"
            >
              Quick Order
            </button>
          </div>
        </div>

        {/* Service Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isSelected = selectedService === service.title;
              return (
                <div
                  key={index}
                  onClick={() => handleServiceSelect(service)}
                  className={`cursor-pointer group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    isSelected
                      ? "ring-4 ring-blue-500 shadow-2xl"
                      : "hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${service.gradient} p-6 h-48 flex flex-col justify-between text-white relative`}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative z-10">
                      <IconComponent className="w-10 h-10 mb-3" />
                      <h3 className="text-lg font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white text-opacity-90">
                        {service.description}
                      </p>
                    </div>
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="text-2xl font-bold">
                        ${service.pricePerPage}
                      </span>
                      <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">
                        per page
                      </span>
                    </div>
                    {isSelected && (
                      <div className="absolute top-2 right-2">
                        <CheckIcon className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* File Upload Section */}
        {selectedService && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Upload Your PDF for {selectedService}
            </h3>
            <div
              className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <UploadIcon className="mx-auto text-gray-400 mb-6" />
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Drag and drop your PDF here
              </h4>
              <p className="text-gray-500 mb-6">or click to browse files</p>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl cursor-pointer transition-all transform hover:scale-105 inline-block"
              >
                Choose File
              </label>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your prints delivered within 30 minutes to your hostel or
              academic block
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Quality Assured
            </h3>
            <p className="text-gray-600">
              Professional grade equipment ensuring crisp, clear prints every
              time
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Student Friendly
            </h3>
            <p className="text-gray-600">
              Affordable pricing with special discounts for bulk orders and
              regular customers
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Trusted by NIT-AP Students
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Pages Printed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div> */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={nitaplogo} alt="NIT-AP Logo" className="w-10 h-10" />
                <span className="text-xl font-bold">NIT-AP Printout</span>
              </div>
              <p className="text-gray-400">
                Your trusted campus printing partner
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>B&W Printing</li>
                <li>Color Printing</li>
                <li>Spiral Binding</li>
                <li>Report Printing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>Track Order</li>
                <li>Refund Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: +91 9876543210</li>
                <li>Email: support@nitapprintout.com</li>
                <li>Location: NIT-AP Campus</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NIT-AP Printout Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // Basket Modal Component
  const BasketModal = () => (
    <Modal
      isOpen={basketModalOpen}
      onClose={() => setBasketModalOpen(false)}
      title="Your Basket"
      size="max-w-2xl"
    >
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCartIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Your basket is empty
          </h3>
          <p className="text-gray-500 mb-6">Add some items to get started!</p>
          <button
            onClick={() => setBasketModalOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-between"
            >
              <div>
                <h4 className="font-semibold text-gray-800">{item.service}</h4>
                <p className="text-sm text-gray-600">{item.fileName}</p>
                <p className="text-sm text-gray-500">
                  {item.pages} pages × ${item.pricePerPage}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-800">
                  ${formatPrice(item.total)}
                </p>
                <button
                  onClick={() =>
                    setCartItems((prev) => prev.filter((i) => i.id !== item.id))
                  }
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-blue-600">
                $
                {formatPrice(
                  cartItems.reduce((sum, item) => sum + item.total, 0)
                )}
              </span>
            </div>
            <button
              onClick={() => {
                alert(
                  `Processing payment of $${formatPrice(
                    cartItems.reduce((sum, item) => sum + item.total, 0)
                  )}...`
                );
                setCartItems([]);
                setBasketModalOpen(false);
              }}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </Modal>
  );

  // Sign In Modal Component
  const SignInModal = () => (
    <Modal
      isOpen={signInModalOpen}
      onClose={() => setSignInModalOpen(false)}
      title="Sign In"
    >
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => {
              setSignInModalOpen(false);
              setRegisterModalOpen(true);
            }}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Register here
          </button>
        </p>
      </form>
    </Modal>
  );

  // Register Modal Component
  const RegisterModal = () => (
    <Modal
      isOpen={registerModalOpen}
      onClose={() => setRegisterModalOpen(false)}
      title="Register"
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Last name"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Student ID
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your student ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Create a password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Confirm your password"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">
            I agree to the{" "}
            <button type="button" className="text-blue-600 hover:text-blue-500">
              Terms and Conditions
            </button>
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
        >
          Create Account
        </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => {
              setRegisterModalOpen(false);
              setSignInModalOpen(true);
            }}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign in here
          </button>
        </p>
      </form>
    </Modal>
  );

  return (
    <div className="min-h-screen">
      {currentPage === "home" ? <HomePage /> : <ServicesPage />}

      {/* Modals */}
      <BillModal
        isOpen={billModalOpen}
        onClose={() => setBillModalOpen(false)}
        selectedService={selectedService}
        pageCount={pageCount}
        billAmount={billAmount}
        onAddToBasket={handleAddToBasket}
        onBuyNow={handleBuyNow}
        fileName={pdfFile?.name || ""}
      />
      <BasketModal />
      <SignInModal />
      <RegisterModal />
    </div>
  );
};

export default PrintingServiceHomepage;