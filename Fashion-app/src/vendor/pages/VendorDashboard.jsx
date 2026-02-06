import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiDollarSign, FiTrendingUp, FiUsers, FiShoppingBag, FiStar, FiClock, FiBarChart2 } from 'react-icons/fi';

const VendorDashboard = () => {
  const vendorStats = [
    { label: 'Total Products', value: '156', icon: <FiPackage />, change: '+12', color: '#4CAF50' },
    { label: 'Total Sales', value: '$12,345', icon: <FiDollarSign />, change: '+23%', color: '#2196F3' },
    { label: 'Pending Orders', value: '8', icon: <FiShoppingBag />, change: '-2', color: '#FF9800' },
    { label: 'Product Views', value: '2,345', icon: <FiUsers />, change: '+15%', color: '#9C27B0' },
    { label: 'Store Rating', value: '4.8', icon: <FiStar />, change: '+0.2', color: '#FFC107' },
    { label: 'Avg. Response', value: '2h', icon: <FiClock />, change: '-30m', color: '#00BCD4' },
  ];

  const recentOrders = [
    { id: 'VORD-001', customer: 'John Doe', amount: '$149.99', status: 'Pending', date: '2024-01-15' },
    { id: 'VORD-002', customer: 'Jane Smith', amount: '$89.99', status: 'Processing', date: '2024-01-14' },
    { id: 'VORD-003', customer: 'Mike Johnson', amount: '$199.99', status: 'Shipped', date: '2024-01-13' },
    { id: 'VORD-004', customer: 'Sarah Wilson', amount: '$59.99', status: 'Delivered', date: '2024-01-12' },
    { id: 'VORD-005', customer: 'Alex Brown', amount: '$129.99', status: 'Pending', date: '2024-01-11' },
  ];

  const topProducts = [
    { name: 'Summer Dress', stock: 24, sold: 156, revenue: '$9,360' },
    { name: 'Denim Jacket', stock: 18, sold: 89, revenue: '$17,755' },
    { name: 'Sports Shoes', stock: 42, sold: 67, revenue: '$8,709' },
    { name: 'Leather Bag', stock: 12, sold: 45, revenue: '$8,955' },
  ];

  return (
    <div className="vendor-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Vendor Dashboard</h1>
          <p>Welcome back to your store management</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">
            <FiPackage /> Add New Product
          </button>
          <button className="btn btn-outline">
            <FiBarChart2 /> View Reports
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid vendor-stats">
        {vendorStats.map((stat, index) => (
          <div key={index} className="stat-card vendor-stat">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                <FiTrendingUp /> {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="dashboard-content vendor-content">
        {/* Recent Orders */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <Link to="/vendor/orders" className="view-all">View All</Link>
          </div>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-icon view-btn" title="View Order">
                          👁️
                        </button>
                        <button className="btn-icon process-btn" title="Process Order">
                          ⚡
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Top Selling Products</h3>
            <Link to="/vendor/products" className="view-all">Manage Products</Link>
          </div>
          <div className="products-list">
            {topProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <div className="product-avatar">
                    {product.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{product.name}</h4>
                    <div className="product-meta">
                      <span className="stock">Stock: {product.stock}</span>
                      <span className="sold">Sold: {product.sold}</span>
                    </div>
                  </div>
                </div>
                <div className="product-revenue">
                  <div className="revenue-amount">{product.revenue}</div>
                  <div className="revenue-label">Revenue</div>
                </div>
                <div className="product-actions">
                  <button className="btn-icon edit-btn" title="Edit Product">
                    ✏️
                  </button>
                  <button className="btn-icon stock-btn" title="Update Stock">
                    📦
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions-grid">
            <Link to="/vendor/products/add" className="quick-action-card">
              <div className="action-icon primary">
                <FiPackage />
              </div>
              <h4>Add Product</h4>
              <p>List new items for sale</p>
            </Link>
            
            <Link to="/vendor/orders" className="quick-action-card">
              <div className="action-icon success">
                <FiShoppingBag />
              </div>
              <h4>Process Orders</h4>
              <p>Manage pending orders</p>
            </Link>
            
            <Link to="/vendor/analytics" className="quick-action-card">
              <div className="action-icon info">
                <FiTrendingUp />
              </div>
              <h4>View Analytics</h4>
              <p>Track store performance</p>
            </Link>
            
            <Link to="/vendor/settings" className="quick-action-card">
              <div className="action-icon warning">
                <FiSettings />
              </div>
              <h4>Store Settings</h4>
              <p>Configure your store</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="sales-overview">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Sales Overview</h3>
            <select className="time-select">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="sales-chart">
            <div className="chart-bars">
              {[65, 80, 75, 90, 85, 95, 70].map((height, index) => (
                <div key={index} className="chart-bar" style={{ height: `${height}%` }}>
                  <div className="bar-tooltip">${1000 + index * 500}</div>
                </div>
              ))}
            </div>
            <div className="chart-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;