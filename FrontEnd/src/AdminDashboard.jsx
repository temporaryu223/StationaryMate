import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Download,
  Calendar,
  Clock,
  User,
  FileText,
  Printer,
  Eye,
  Trash2,
  RefreshCw,
  Archive,
} from 'lucide-react';
const sendUrl = 'https://stationarymate-backend.onrender.com';
// const sendUrl = 'http://localhost:3000';
const EnhancedAdminDashboard = ({ isOpen = true, onClose = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [currentTab, setCurrentTab] = useState('active');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [sortBy, setSortBy] = useState('uploadTime');
  const [sortOrder, setSortOrder] = useState('desc');

  //  Getting orders from DB
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(sendUrl + '/api/orders/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('authToken'),
          },
        });
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setOrders(data.data);
        } else {
          console.log('Unable to get Data');
        }
      } catch (e) {
        console.log('Unable to get Order details', e);
        setOrders([
          {
            customerName: 'John Doe',
            email: 'john@example.com',
            phone: '+91 9876543210',
            service: 'Document Printing',
            fileName: 'Important_Document_Final_Version.pdf',
            uploadTime: new Date().toISOString(),
            pages: 15,
            copies: 2,
            totalAmount: 30,
            status: 'pending',
            pdfUrl: '#',
            colorMode: 'black-white',
            paperSize: 'A4',
            orientation: 'portrait',
            priority: 'normal',
            notes: 'Please print double-sided',
            completedTime: null,
            estimatedTime: '15 minutes',
          },
        ]);
      }
    };
    fetchServices();
  }, []);

  const [archivedOrders, setArchivedOrders] = useState([
    {
      id: 4,
      customerName: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+91 9876543213',
      service: 'Document Printing',
      fileName: 'thesis_final.pdf',
      uploadTime: new Date(Date.now() - 86400000).toISOString(),
      pages: 50,
      copies: 1,
      totalAmount: 50,
      status: 'completed',
      pdfUrl: '#',
      colorMode: 'black-white',
      paperSize: 'A4',
      orientation: 'portrait',
      priority: 'normal',
      notes: 'Bind with spiral binding',
      completedTime: new Date(Date.now() - 82800000).toISOString(),
      estimatedTime: '45 minutes',
    },
  ]);

  // const updateOrderCopies = (orderId, newCopies) => {
  //   if (newCopies < 1) return;
  //   setOrders(orders.map(order =>
  //     order._id === orderId
  //       ? { ...order, copies: newCopies, totalAmount: order.pages * newCopies * (order.colorMode === 'color' ? 5 : 1) }
  //       : order
  //   ));
  // };

  const updateOrderStatus = async (orderId, newStatus) => {
    const now = new Date().toISOString();
    try {
      const response = await fetch(sendUrl + `/api/orders/update/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: newStatus,
          completedTime: newStatus === 'completed' ? now : null,
        }),
      });
      setOrders(
        orders.map((order) =>
          order._id === orderId
            ? {
                ...order,
                status: newStatus,
                completedTime: newStatus === 'completed' ? now : null,
              }
            : order,
        ),
      );
    } catch (e) {
      console.log('Unable to Update Status', e);
    }
  };

  const updateOrderPriority = (orderId, newPriority) => {
    setOrders(
      orders.map((order) =>
        order._id === orderId ? { ...order, priority: newPriority } : order,
      ),
    );
  };

  const addNoteToOrder = (orderId, note) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, notes: note } : order,
      ),
    );
  };

  const archiveOrder = (orderId) => {
    const orderToArchive = orders.find((order) => order.id === orderId);
    if (orderToArchive) {
      setArchivedOrders([...archivedOrders, orderToArchive]);
      setOrders(orders.filter((order) => order.id !== orderId));
    }
  };

  const deleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        const response = await fetch(
          sendUrl + '/api/orders/delete/' + orderId,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        setOrders(orders.filter((order) => order._id !== orderId));
      } catch (e) {
        console.log('Unable to Delete Order', e);
      }
    }
  };

  const viewPDF = async (pdfUrl) => {
    printWindow = window.open(pdfUrl, '../', '_blank');
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  };

  const printOrder = (orderId) => {
    updateOrderStatus(orderId, 'printing');
    setTimeout(() => {
      updateOrderStatus(orderId, 'completed');
    }, 5000);
  };

  const bulkUpdateStatus = (status) => {
    setOrders(
      orders.map((order) =>
        selectedOrders.includes(order.id)
          ? {
              ...order,
              status,
              completedTime:
                status === 'completed' ? new Date().toISOString() : null,
            }
          : order,
      ),
    );
    setSelectedOrders([]);
  };

  const exportOrdersToCSV = () => {
    const currentOrders = currentTab === 'active' ? orders : archivedOrders;
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'ID,Customer Name,Email,Phone,Service,File Name,Upload Time,Pages,Copies,Total Amount,Status,Priority,Notes\n' +
      currentOrders
        .map(
          (order) =>
            `${order.id},${order.customerName},${order.email},${order.phone},${order.service},${order.fileName},${order.uploadTime},${order.pages},${order.copies},${order.totalAmount},${order.status},${order.priority},"${order.notes}"`,
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `orders_${currentTab}_${new Date().toISOString().split('T')[0]}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const filteredOrders = () => {
  //   const currentOrders = currentTab === 'active' ? orders : archivedOrders;
  //   return currentOrders
  //     .filter(order => {
  //       const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                           order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                           order.fileName.toLowerCase().includes(searchTerm.toLowerCase());
  //       const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
  //       const matchesDate = dateFilter === 'all' || (() => {
  //         const orderDate = new Date(order.uploadTime);
  //         const now = new Date();
  //         switch(dateFilter) {
  //           case 'today': return orderDate.toDateString() === now.toDateString();
  //           case 'week': return (now - orderDate) <= 7 * 24 * 60 * 60 * 1000;
  //           case 'month': return (now - orderDate) <= 30 * 24 * 60 * 60 * 1000;
  //           default: return true;
  //         }
  //       })();
  //       return matchesSearch && matchesStatus && matchesDate;
  //     })
  //     .sort((a, b) => {
  //       let aVal = a[sortBy];
  //       let bVal = b[sortBy];

  //       if (sortBy === 'uploadTime' || sortBy === 'completedTime') {
  //         aVal = new Date(aVal || 0);
  //         bVal = new Date(bVal || 0);
  //       }

  //       if (sortOrder === 'asc') {
  //         return aVal > bVal ? 1 : -1;
  //       } else {
  //         return aVal < bVal ? 1 : -1;
  //       }
  //     });
  // };

  const filteredOrders = () => {
    const currentOrders = currentTab === 'active' ? orders : archivedOrders;

    return currentOrders
      .filter((order) => {
        const lowerSearch = searchTerm.toLowerCase();

        const matchesSearch =
          (order.customerName?.toLowerCase().includes(lowerSearch) ?? false) ||
          (order.email?.toLowerCase().includes(lowerSearch) ?? false) ||
          (order.fileName?.toLowerCase().includes(lowerSearch) ?? false);

        const matchesStatus =
          statusFilter === 'all' || order.status === statusFilter;

        const matchesDate =
          dateFilter === 'all' ||
          (() => {
            const orderDate = new Date(order.uploadTime);
            const now = new Date();
            switch (dateFilter) {
              case 'today':
                return orderDate.toDateString() === now.toDateString();
              case 'week':
                return now - orderDate <= 7 * 24 * 60 * 60 * 1000;
              case 'month':
                return now - orderDate <= 30 * 24 * 60 * 60 * 1000;
              default:
                return true;
            }
          })();

        return matchesSearch && matchesStatus && matchesDate;
      })
      .sort((a, b) => {
        let aVal = a[sortBy];
        let bVal = b[sortBy];

        if (sortBy === 'uploadTime' || sortBy === 'completedTime') {
          aVal = new Date(aVal || 0);
          bVal = new Date(bVal || 0);
        }

        if (sortOrder === 'asc') {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'printing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const Modal = ({ isOpen, onClose, title, size = 'max-w-6xl', children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div
          className={`bg-white rounded-lg shadow-xl ${size} w-full max-h-[90vh] overflow-hidden`}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const currentOrders = filteredOrders();
  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === 'pending').length,
    printing: orders.filter((o) => o.status === 'printing').length,
    completed: orders.filter((o) => o.status === 'completed').length,
    revenue: orders.reduce((sum, o) => sum + o.totalAmount, 0),
    todayOrders: orders.filter(
      (o) =>
        new Date(o.uploadTime).toDateString() === new Date().toDateString(),
    ).length,
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Print Service Admin Dashboard"
      size="max-w-7xl"
    >
      <div className="space-y-6">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-blue-800 font-semibold text-sm">
              Total Orders
            </h3>
            <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-yellow-800 font-semibold text-sm">Pending</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {stats.pending}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-blue-800 font-semibold text-sm">Printing</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.printing}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-green-800 font-semibold text-sm">Completed</h3>
            <p className="text-2xl font-bold text-green-600">
              {stats.completed}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-purple-800 font-semibold text-sm">Revenue</h3>
            <p className="text-2xl font-bold text-purple-600">
              ₹{stats.revenue}
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-orange-800 font-semibold text-sm">
              Today's Orders
            </h3>
            <p className="text-2xl font-bold text-orange-600">
              {stats.todayOrders}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setCurrentTab('active')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              currentTab === 'active'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Active Orders ({orders.length})
          </button>
          <button
            onClick={() => setCurrentTab('archived')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              currentTab === 'archived'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Order History ({archivedOrders.length})
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search by customer name, email, or filename..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                />
              </div>
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-600"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="printing">Printing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-600"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [field, order] = e.target.value.split('-');
                setSortBy(field);
                setSortOrder(order);
              }}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-600"
            >
              <option value="uploadTime-desc">Latest First</option>
              <option value="uploadTime-asc">Oldest First</option>
              <option value="totalAmount-desc">Highest Amount</option>
              <option value="totalAmount-asc">Lowest Amount</option>
              <option value="customerName-asc">Customer A-Z</option>
              <option value="priority-desc">High Priority</option>
            </select>

            <button
              onClick={exportOrdersToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          {/* Bulk Actions */}
          {selectedOrders.length > 0 && (
            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-md">
              <span className="text-sm font-medium text-blue-800">
                {selectedOrders.length} orders selected
              </span>
              <button
                onClick={() => bulkUpdateStatus('printing')}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              >
                Mark as Printing
              </button>
              <button
                onClick={() => bulkUpdateStatus('completed')}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
              >
                Mark as Completed
              </button>
              <button
                onClick={() => setSelectedOrders([])}
                className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>

        {/* Enhanced Orders Table */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedOrders(currentOrders.map((o) => o.id));
                        } else {
                          setSelectedOrders([]);
                        }
                      }}
                      checked={
                        selectedOrders.length === currentOrders.length &&
                        currentOrders.length > 0
                      }
                      className="rounded"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Details
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Info
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Print Settings
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority & Status
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
                {currentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedOrders([...selectedOrders, order.id]);
                          } else {
                            setSelectedOrders(
                              selectedOrders.filter((id) => id !== order.id),
                            );
                          }
                        }}
                        className="rounded"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <p className="font-semibold text-gray-900">
                            {order.customername}
                          </p>
                        </div>
                        <p className="text-sm text-blue-500">{order._id}</p>
                        <p className="text-sm text-gray-500">{order.email}</p>
                        <p className="text-sm text-gray-500">{order.phone}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {order.service}
                        </p>
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3 text-gray-400" />
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
                          <p>{order.side}</p>
                        </div>
                        <p className="text-sm font-semibold text-blue-600">
                          ₹{order.totalAmount}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        <select
                          value={order.priority}
                          onChange={(e) =>
                            updateOrderPriority(order.id, e.target.value)
                          }
                          className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(
                            order.priority,
                          )}`}
                        >
                          <option value="normal">Normal</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateOrderStatus(order._id, e.target.value)
                          }
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            order.status,
                          )}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="printing">Printing</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>Est: {order.estimatedTime}</span>
                        </div>
                        {order.completedTime && (
                          <div className="flex items-center gap-1 text-xs text-green-600">
                            <Calendar className="w-3 h-3" />
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
                            <Eye className="w-3 h-3" />
                            View
                          </button>
                          {/* <button
                            onClick={() => printOrder(order.id)}
                            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1"
                            title="Print Now"
                          >
                            <Printer className="w-3 h-3" />
                            Print
                          </button> */}
                          <button
                            onClick={() => deleteOrder(order._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3" />
                            Delete
                          </button>
                        </div>
                        <div className="flex gap-1">
                          {/* {currentTab === 'active' && (
                            <button
                              onClick={() => archiveOrder(order.id)}
                              className="bg-orange-600 hover:bg-orange-700 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1"
                              title="Archive"
                            >
                              <Archive className="w-3 h-3" />
                              Archive
                            </button>
                          )} */}
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

          {currentOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No orders found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default EnhancedAdminDashboard;
