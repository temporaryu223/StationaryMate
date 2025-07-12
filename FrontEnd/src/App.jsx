import React, { useState, useEffect, useRef } from 'react';
// import { FileTextIcon, PaletteIcon, CheckIcon } from 'lucide-react'; // or your icon library
// import * as pdfjsLib from 'pdfjs-dist';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import nitaplogo from './assets/img/logo.png';

import AdminDashboard from './AdminDashboard';
// import { keys } from '../../BackEnd/controllers/ordersControllers';
const colorCost = 5;
const sendUrl = 'http://localhost:3000';
const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M9.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 016 6v2.25a2.25 2.25 0 002.25 2.25H19.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 010 14.25h1.5a2.25 2.25 0 002.25-2.25V9.75a6 6 0 016-6z"
    />
  </svg>
);

const FileTextIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const PaletteIcon = ({ className = 'w-8 h-8' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"
    />
  </svg>
);

const BookOpenIcon = ({ className = 'w-8 h-8' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const BarChart3Icon = ({ className = 'w-8 h-8' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const UploadIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const iconMap = {
  SearchIcon: SearchIcon,
  ShoppingCartIcon: ShoppingCartIcon,
  BellIcon: BellIcon,
  BookOpenIcon: BookOpenIcon,
  BarChart3Icon: BarChart3Icon,
  UserIcon: UserIcon,
  FileTextIcon: FileTextIcon,
  PaletteIcon: PaletteIcon,
  MenuIcon: MenuIcon,
  CloseIcon: CloseIcon,
  UploadIcon: UploadIcon,
  CheckIcon: CheckIcon,
  ArrowLeftIcon: ArrowLeftIcon,
  // add more as needed
};

// Enhanced Modal component
const Modal = ({ isOpen, onClose, title, children, size = 'max-w-lg' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-2xl shadow-2xl ${size} w-full max-h-[90vh] overflow-y-auto relative`}
      >
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
const BillModal = ({
  isOpen,
  onClose,
  selectedService,
  pageCount,
  billAmount,
  onAddToBasket,
  onBuyNow,
  fileName,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Order Summary"
      size="max-w-md"
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <CheckIcon className="w-8 h-8 text-green-500 mr-3" />
            <h4 className="text-xl font-bold text-gray-800">
              File Processed Successfully!
            </h4>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-semibold text-gray-800">
                {selectedService}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">File:</span>
              <span
                className="font-semibold text-gray-800 truncate max-w-32"
                title={fileName}
              >
                {fileName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pages:</span>
              <span className="font-semibold text-gray-800">{pageCount}</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">
                  Total Amount:
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ${billAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onAddToBasket}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors text-white"
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
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'services'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [copies, setCopies] = useState(1);
  const [billAmount, setBillAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [basketModalOpen, setBasketModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [myOrdersModalOpen, setMyOrdersModalOpen] = useState(false);
  const [myAccountModalOpen, setMyAccountModalOpen] = useState(false);
  const [billModalOpen, setBillModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const formRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState(false);
  const [paperSize, setPaperSize] = useState('A4');
  const [orientation, setOrientation] = useState('portrait');
  const [authToken, setAuthToken] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const [orders, setOrders] = useState([
    // Sample data - replace with real data from backend
    {
      id: 1,
      customerName: 'John Doe',
      email: 'john@nitap.ac.in',
      phone: '+91 9876543210',
      service: 'B&W PRINTOUT',
      fileName: 'assignment.pdf',
      pages: 5,
      copies: 2,
      totalAmount: 20,
      status: 'pending',
      uploadTime: new Date().toISOString(),
      pdfUrl: '/uploads/assignment.pdf', // Store PDF path
    },
  ]);
  const [myOrders, setMyOrders] = useState([]);

  const fetchOrders = async () => {
    // if (!user?.email || !authToken) {
    //   return;
    // }
    const response = await fetch(
      sendUrl + '/api/orders/getallordersbymail/' + user.email,
      {
        method: 'GET',
        headers: {
          Authorization: authToken,
        },
      },
    );
    const result = await response.json();
    if (result.success) {
      setMyOrders(result.data);
    } else {
      setMyOrdersModalOpen(false);
      alert(result.message);
    }
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // setIsLoading(false);
  }, []);

  // Fetching Services from Backend
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(sendUrl + '/api/services/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          console.error('Invalid service data format:', data);
        }
      } catch (e) {
        console.log('Error fetching services:', e);

        // Optional fallback if fetch fails
        setServices([
          {
            title: 'COLOR PRINTOUT',
            icon: PaletteIcon,
            gradient: 'from-pink-500 via-red-500 to-orange-500',
            description:
              'Vibrant color printing for presentations, posters, and creative projects',
            pricePerPage: 5,
            features: [
              'True color reproduction',
              'Glossy/Matte options',
              'Various paper sizes',
              'Lamination available',
            ],
            deliveryTime: '10-15 minutes',
          },
        ]);
      }
    };

    fetchServices();
  }, []);
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
      alert('Please select a service first!');
      return;
    }
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      console.log(file);

      const simulatedPageCount = Math.floor(Math.random() * 10) + 1;

      setPageCount(simulatedPageCount);

      const selectedServiceDetails = services.find(
        (service) => service.title === selectedService,
      );

      if (selectedServiceDetails) {
        const price = selectedServiceDetails.color
          ? colorCost
          : selectedServiceDetails.pricePerPage;
        const bill = simulatedPageCount * price;
        setBillAmount(bill);
        setBillModalOpen(true);
      }
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service.title);
    setBillAmount(0);
    setPageCount(0);
    setPdfFile(null);
  };

  const handleChangeCopies = (copies) => {
    if (copies < 1) return;
    setCopies(copies);
  };
  const handleSelectedPaper = (paperSize) => {
    setPaperSize(paperSize);
  };
  const handleSelectedOrientation = (paperOrientation) => {
    setOrientation(paperOrientation);
  };
  const handleAddToBasket = async () => {
    const selectedServiceDetails = services.find(
      (service) => service.title === selectedService,
    );

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('user', JSON.stringify(user));
    formData.append('service', selectedServiceDetails.title);
    formData.append('amount', billAmount);
    formData.append('pages', pageCount);
    formData.append('copies', copies);
    formData.append('color', color);
    formData.append('paperSize', paperSize);
    formData.append('orientation', orientation);

    const response = await fetch(sendUrl + '/api/basket/create', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      alert(
        `Added to basket: ${selectedServiceDetails.title} - ${pageCount} pages`,
      );
      // Reset for next order

      setBillModalOpen(false);
      setSelectedService(null);
      setPdfFile(null);
      setPageCount(0);
      setBillAmount(0);
    } else {
      alert(result.message);
    }
    // setCartItems((prev) => [...prev, newItem]);
  };
  const handleBuyNow = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert('Failed to load The Razor Pay!!, Are you online');
      return;
    }
    setBillModalOpen(false);

    const razorpayRes = await fetch(sendUrl + '/api/razorpay/create', {
      method: 'POST',
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: billAmount }),
    });

    const razorpayResult = await razorpayRes.json();

    if (razorpayResult.success) {
      const options = {
        key: razorpayResult.key,
        amount: razorpayResult.amount,
        name: 'Stationary Mate',
        description: 'Nil',
        order_id: razorpayResult.id,
        handler: async function (res) {
          if (res) {
            const formData = new FormData();
            formData.append('pdf', pdfFile);
            formData.append('user', JSON.stringify(user));
            formData.append('service', JSON.stringify(selectedServiceDetails));
            formData.append('amount', billAmount);
            formData.append('pages', pageCount);
            formData.append('copies', copies);
            formData.append('color', color);
            formData.append('paperSize', paperSize);
            formData.append('orientation', orientation);

            try {
              const response = await fetch(
                sendUrl + '/api/orders/createOrder',
                {
                  method: 'POST',
                  body: formData,
                },
              );

              const result = await response.json();
              console.log('Server response:', result);
              if (result.success) {
                alert('Payment processed successfully!');
              } else {
                alert('Payment Failed!');
              }
            } catch (error) {
              console.error('Error sending data to server:', error);
              alert('Error processing payment. Please try again.');
            }

            // Reset after purchase
            setSelectedService(null);
            setPdfFile(null);
            setPageCount(0);
            setBillAmount(0);
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: '+91' + user.mobile,
        },

        notes: {
          address: 'Nil',
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    } else {
      alert(razorpayResult.message);
    }
  };

  const handleCheckout = async () => {
    const isScriptLoaded = loadRazorpayScript();
    if (!isScriptLoaded) {
      alert('Unable To Process Request. Are You online!!');
      return;
    }
    handleBasketClick();
    var amount = 0;
    for (const item of cartItems) {
      amount = amount + item.totalAmount;
    }

    const razorpayRes = await fetch(sendUrl + '/api/razorpay/create', {
      method: 'POST',
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount }),
    });
    const razorpayResult = await razorpayRes.json();
    if (razorpayResult.success) {
      const options = {
        key: razorpayResult.key,
        amount: amount,
        name: 'Stationary Mate',
        description: 'Nil',
        order_id: razorpayResult.id,
        handler: async function (res) {
          if (res) {
            const result = await fetch(
              sendUrl + '/api/basket/checkout/' + user.email,
              {
                method: 'POST',
                headers: {
                  Authorization: authToken,
                },
              },
            );
            const response = await result.json();
            if (response.success) {
              alert(response.message);
              handleBasketClick();
            } else {
              alert(response.message);
            }
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: '+91' + user.mobile,
        },

        notes: {
          address: 'Nil',
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp2 = new Razorpay(options);
      rzp2.open();
    } else {
      alert(razorpayResult.message);
    }
  };
  const handleMyAccountClick = () => {
    if (user) {
      setMyAccountModalOpen(true);
    } else {
      alert('Kindly Login...');
    }
  };

  const handleBasketClick = async () => {
    if (user) {
      const response = await fetch(
        sendUrl + '/api/basket/getAll/' + user.email,
        {
          headers: {
            Authorization: authToken,
          },
        },
      );
      const result = await response.json();
      if (result.success) {
        setCartItems(result.items);

        setBasketModalOpen(true);
      } else {
        alert(result.message);
      }
    } else {
      alert('Kindly Login...');
    }
  };

  const handleSignInClick = () => {
    setSignInModalOpen(true);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const handleServicesNavClick = () => {
    setCurrentPage('services');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const selectedServiceDetails = services.find(
    (service) => service.title === selectedService,
  );

  const [color, setColor] = useState(selectedServiceDetails?.color);

  useEffect(() => {
    if (selectedServiceDetails?.color !== undefined && color === undefined) {
      setColor(selectedServiceDetails.color);
    }
  }, [selectedServiceDetails]);

  const handleSelectedColor = (changedColor) => {
    const isColor = changedColor === 'Color';
    console.log(isColor);

    setColor(isColor);
    console.log(
      'Color changed to:',
      isColor ? 'Color' : 'Black & White',
      color,
    );
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Professional Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of printing services designed
            specifically for NIT-AP students
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FileTextIcon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-white/20 rounded-2xl p-4">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-lg text-white/90 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-white text-xs font-medium bg-black/30 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                        ₹{service.pricePerPage}/page
                      </span>
                      <span className="text-white text-xs font-medium bg-black/30 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                        {service.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleBackToHome}
                  className="mt-8 w-full bg-white-100 text-white hover:bg-green-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow"
                >
                  Select This Service
                </button>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
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
            {/* Benefit Item */}
            {[
              {
                title: 'Quality Guaranteed',
                desc: 'Professional grade equipment ensuring crisp, clear prints every time',
                iconColor: 'bg-blue-100',
                iconText: 'text-blue-600',
              },
              {
                title: 'Fast Delivery',
                desc: 'Quick turnaround times to meet your urgent deadlines',
                iconColor: 'bg-green-100',
                iconText: 'text-green-600',
              },
              {
                title: 'Student Friendly',
                desc: 'Affordable pricing designed with student budgets in mind',
                iconColor: 'bg-purple-100',
                iconText: 'text-purple-600',
              },
            ].map((item, i) => (
              <div className="text-center" key={i}>
                <div
                  className={`w-16 h-16 ${item.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <CheckIcon className={`w-8 h-8 ${item.iconText}`} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
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
              <span>{user ? `Hi ${user.firstName}` : 'Kindly Login'}</span>
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
              onClick={() => {
                handleMyAccountClick();
              }}
              className="hover:text-blue-300 transition"
            >
              My Account
            </button>
            <button
              onClick={() => {
                fetchOrders();
                setMyOrdersModalOpen(true);
              }}
              className="hover:text-blue-300 transition"
            >
              My Orders
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
              onClick={() => {
                alert('Notifications feature coming soon!');
                console.log(authToken);
              }}
              className="relative group"
            >
              <BellIcon className="w-5 h-5 hover:text-blue-300" />
            </button>
            <div className="flex items-center gap-3 ml-6">
              {(!user && (
                <>
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
                </>
              )) || (
                <button
                  onClick={() => {
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('user');
                    setUser(null);
                    setAuthToken(null);
                  }}
                  className="font-semibold text-blue-300 hover:text-blue-400"
                >
                  Sign Out
                </button>
              )}
            </div>
            <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md transition-all">
              <AdminSignInButton />
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
              {' '}
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
              onClick={() => alert('Quick order feature coming soon!')}
              className="bg-white hover:bg-gray-50 tex font-semibold py-4 px-8 rounded-xl text-lg transition-all border-2 border-gray-200 hover:border-gray-300"
            >
              Quick Order
            </button>
          </div>
        </div>

        {/* Service Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-24 border border-gray-100">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-14 tracking-tight">
            Choose Your Service
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services?.map((service, index) => {
              const IconComponent = iconMap[service.icon] || service.icon;
              const isSelected = selectedService === service.title;

              return (
                <div
                  key={index}
                  onClick={() => handleServiceSelect(service)}
                  className={`relative group rounded-3xl transition-all duration-300 cursor-pointer transform ${
                    isSelected
                      ? 'ring-4 ring-blue-500 shadow-blue-300 shadow-2xl scale-105'
                      : 'hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${service.gradient} p-6 h-60 flex flex-col justify-between text-white rounded-3xl relative`}
                  >
                    {/* Darken on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl z-0" />

                    {/* Card Content */}
                    <div className="relative z-10">
                      <IconComponent className="w-12 h-12 mb-4 text-white" />
                      <h3 className="text-xl font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white text-opacity-90 leading-snug">
                        {service.description}
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="relative z-10 flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold tracking-wide">
                        ₹{service.pricePerPage}
                      </span>
                      <span className="text-xs font-medium text-white bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 shadow">
                        per page
                      </span>
                    </div>

                    {/* Check icon with nice animation */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 z-20 animate-ping-slow">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shadow-md animate-bounce">
                          <CheckIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Settings Selection */}
        {selectedService && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            {/* Copies */}
            <div className="flex items-center  gap-2">
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Copies
              </h4>
              <button
                onClick={() => handleChangeCopies(copies - 1)}
                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold shadow-md transition duration-200"
                aria-label="Increase copies"
              >
                -
              </button>

              <span className="font-medium px-2 text-blue-600">{copies}</span>
              <button
                onClick={() => handleChangeCopies(copies + 1)}
                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold shadow-md transition duration-200"
                aria-label="Increase copies"
              >
                +
              </button>
            </div>
            {/* Color */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Select Color
              </h4>
              <select
                value={color ? 'Color' : 'Black&White'}
                onChange={(e) => handleSelectedColor(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"
              >
                <option value="Black&White">Black & White</option>
                <option value="Color">Color</option>
              </select>
            </div>
            {/* Paper Size */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Paper Size
              </h4>
              <select
                value={paperSize}
                onChange={(e) => handleSelectedPaper(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"
              >
                <option value="A4">A4</option>
                <option value="legal">Legal</option>
              </select>
            </div>
            {/* Orientation */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Orientation
              </h4>
              <select
                value={orientation}
                onChange={(e) => handleSelectedOrientation(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"
              >
                <option value="Portrait">Portrait</option>
                <option value="Landscape">Landscape</option>
              </select>
            </div>
          </div>
        )}
        {/* File Upload Section */}
        {selectedService && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Upload Your PDF for {selectedService}
            </h3>
            <div
              className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
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
  const updateCartItemCopies = (itemId, newCopies) => {
    if (newCopies < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, copies: newCopies } : item,
      ),
    );
  };

  const removeFromCart = async (itemId) => {
    // setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    const response = await fetch(sendUrl + '/api/basket/deleteItem/' + itemId, {
      method: 'DELETE',
      headers: {
        Authorization: authToken,
      },
    });
    const result = await response.json();
    if (result.success) {
      alert('Item Removed from Cart');
      handleBasketClick();
    } else {
      alert(result.message);
    }
  };

  const updateOrderCopies = (orderId, newCopies) => {
    if (newCopies < 1) return;
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? {
              ...order,
              copies: newCopies,
              totalAmount: order.pages * order.pricePerPage * newCopies,
            }
          : order,
      ),
    );
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order,
      ),
    );
  };

  const viewPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const printOrder = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    alert(`Sending ${order.fileName} to printer - ${order.copies} copies`);
    // Implement actual print functionality
  };

  const deleteOrder = (orderId) => {
    if (confirm('Are you sure you want to delete this order?')) {
      setOrders((prev) => prev.filter((order) => order.id !== orderId));
    }
  };

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
            <div key={item.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.service}
                  </h4>
                  <p className="text-sm text-gray-600">{item.fileName}</p>
                  <p className="text-sm text-gray-500">
                    {item.pages} pages × ₹{item.totalAmount / item.pages} &nbsp;
                    , {item.colorMode}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.copies} copy(s) &nbsp; , paper size : {item.paperSize}
                  </p>
                  <p className="text-sm text-gray-500">
                    orientation : {item.orientation}
                  </p>
                  <p className="text-sm text-gray-500">
                    uploaded at : {item.uploadTime}
                  </p>
                </div>
                <button
                  onClick={() => window.open(item.pdfUrl)}
                  className="text-blue-600 hover:text-green-700 text-sm font-medium"
                >
                  View
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>

              {/* Copies Control */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    Copies:
                  </span>
                  <button
                    onClick={() =>
                      updateCartItemCopies(item.id, (item.copies || 1) - 1)
                    }
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-900 rounded-full text-sm font-bold flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="font-medium px-3 py-1 bg-white text-gray-900 rounded border min-w-[50px] text-center">
                    {item.copies || 1}
                  </span>
                  <button
                    onClick={() =>
                      updateCartItemCopies(item.id, (item.copies || 1) + 1)
                    }
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">
                    ₹{formatPrice(item.total * (item.copies || 1))}
                  </p>
                </div>
              </div> */}

              {/* Print Options */}
              {/* <div className="mt-4 p-3 bg-white rounded-lg">
                <h5 className="text-sm font-medium text-gray-700 mb-2">
                  Print Options:
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center text-black">
                    <input type="checkbox" className="mr-2" />
                    <span>Double-sided</span>
                  </label>
                  <label className="flex items-center text-black">
                    <input type="checkbox" className="mr-2" />
                    <span>Stapling</span>
                  </label>
                  <select className="col-span-2 mt-2 p-1 border rounded text-xs text-black">
                    <option>Normal Quality</option>
                    <option>High Quality</option>
                    <option>Draft Quality</option>
                  </select>
                </div>
              </div>
               */}
            </div>
          ))}

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-blue-600">
                ₹
                {formatPrice(
                  cartItems.reduce((sum, item) => sum + item.totalAmount, 0),
                )}
              </span>
            </div>
            <button
              onClick={handleCheckout}
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
      <form
        className="space-y-6"
        ref={formRef}
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          const userData = {
            email: data.get('email'),
            password: data.get('password'),
          };
          const response = await fetch(sendUrl + '/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const result = await response.json();

          if (result.success) {
            localStorage.setItem('authToken', result.Token);
            localStorage.setItem('user', JSON.stringify(result.user)); // ✅ store user as JSON

            setUser(result.user);
            setAuthToken(result.Token);

            alert('Logged In Successfully!!');
            setSignInModalOpen(false);
          } else {
            alert(result.message);
          }
        }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          Don't have an account?{' '}
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
  const AdminSignInButton = () => (
    <button
      onClick={() => {
        if (user && user.role == 'admin') {
          setIsAdmin(true);
          setAdminDashboardOpen(true);
        } else {
          alert('Access Denied');
        }
        // if (password === 'admin123') {
        //   // Replace with actual authentication
        //   setIsAdmin(true);
        //   setAdminDashboardOpen(true);
        // } else {
        //   alert('Invalid password!');
        // }
      }}
      className="font-semibold hover:text-blue-300"
    >
      {isAdmin ? 'ADMIN PANEL' : 'ADMIN LOGIN'}
    </button>
  );

  // Register Modal Component
  const RegisterModal = () => (
    <Modal
      isOpen={registerModalOpen}
      onClose={() => setRegisterModalOpen(false)}
      title="Register"
    >
      <form
        ref={formRef}
        className="space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password1: data.get('password1'),
            password2: data.get('password2'),
            mobile: data.get('mobile'),
          };
          const response = await fetch(sendUrl + '/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const result = await response.json();

          if (result.success) {
            alert('User Created Successfully !!, Kindly Login');
            setRegisterModalOpen(false);
          } else {
            alert(result.message);
          }
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              placeholder="First name"
              name="firstName"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              placeholder="Last name"
              name="lastName"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            placeholder="Enter your Mobile Number"
            name="mobile"
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Student ID
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your student ID"
            name='roll'
          />
        </div> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            placeholder="Create a password"
            name="password1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            placeholder="Confirm your password"
            name="password2"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            required
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">
            I agree to the{' '}
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
          Already have an account?{' '}
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

  const MyOrdersModal = () => (
    <Modal
      isOpen={myOrdersModalOpen}
      onClose={() => setMyOrdersModalOpen(false)}
    >
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {/* <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Details
                </th> */}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Info
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Print Settings
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.service}
                      </p>
                      <div className="flex items-center gap-1">
                        {/* <FileText className="w-3 h-3 text-gray-400" /> */}
                        <p
                          className="text-sm text-gray-500 truncate max-w-32"
                          title={order.fileName}
                        >
                          {order.fileName.length > 20
                            ? order.fileName.substring(0, 20) + '...'
                            : order.fileName}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(order.uploadTime).toLocaleString()}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">
                        Pages:{' '}
                        <span className="font-medium">{order.pages}</span>
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Copies:</span>
                        <span className="font-medium px-2 text-pink-600">
                          {order.copies}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>
                          {order.colorMode} • {order.paperSize}
                        </p>
                        <p>{order.orientation}</p>
                      </div>
                      <p className="text-sm font-semibold text-blue-600">
                        ₹{order.totalAmount}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-2">
                      <span className="font-medium px-2 text-pink-600">
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        {/* <Clock className="w-3 h-3" /> */}
                        <span>Est: {order.estimatedTime}</span>
                      </div>
                      {order.completedTime && (
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          {/* <Calendar className="w-3 h-3" /> */}
                          <span>
                            Done:{' '}
                            {new Date(order.completedTime).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        <button
                          onClick={() => viewPDF(order.pdfUrl)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1"
                          title="View PDF"
                        >
                          {/* <Eye className="w-3 h-3" /> */}
                          View
                        </button>
                      </div>
                      {order.notes && (
                        <div className="mt-2 p-2 bg-yellow-50 rounded text-xs">
                          <p className="font-medium text-yellow-800">Note:</p>
                          <p className="text-yellow-700">{order.notes}</p>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {myOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No orders found.</p>
          </div>
        )}
      </div>
    </Modal>
  );

  const MyAccountModal = () => (
    <Modal
      isOpen={myAccountModalOpen}
      onClose={() => {
        setMyAccountModalOpen(false);
      }}
    >
      {user ? (
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <h4 className="text-gray-900">
              First Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {user.firstName}
            </h4>
            <h4 className="text-gray-900">
              Last Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {user.lastName}
            </h4>
            <h4 className="text-gray-900">
              Email-Id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:{' '}
              {user.email}
            </h4>
            <h4 className="text-gray-900">Mobile Number : {user.mobile}</h4>
          </div>
        </div>
      ) : (
        <div className="text-gray-600 p-4">
          Please log in to view account details.
        </div>
      )}
    </Modal>
  );
  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? <HomePage /> : <ServicesPage />}

      {/* Modals */}
      <BillModal
        isOpen={billModalOpen}
        onClose={() => setBillModalOpen(false)}
        selectedService={selectedService}
        pageCount={pageCount}
        billAmount={billAmount}
        onAddToBasket={handleAddToBasket}
        onBuyNow={handleBuyNow}
        fileName={pdfFile?.name || ''}
      />
      <BasketModal />
      <SignInModal />
      <RegisterModal />
      <MyOrdersModal />
      <MyAccountModal />
      {/* Admin Dashboard */}
      {isAdmin && <AdminDashboard />}
    </div>
  );
};

export default PrintingServiceHomepage;
