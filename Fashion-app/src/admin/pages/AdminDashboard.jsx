import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiShoppingBag, FiDollarSign, FiTrendingUp, FiPackage, FiCreditCard, FiActivity, FiBarChart2 } from 'react-icons/fi';

const AdminDashboard = () => {
  const adminStats = [
    { label: 'Total Users', value: '2,548', icon: <FiUsers />, change: '+12%', color: '#4CAF50' },
    { label: 'Total Products', value: '1,234', icon: <FiPackage />, change: '+5%', color: '#2196F3' },
    { label: 'Total Orders', value: '892', icon: <FiShoppingBag />, change: '+18%', color: '#9C27B0' },
    { label: 'Revenue', value: '$45,892', icon: <FiDollarSign />, change: '+23%', color: '#FF9800' },
    { label: 'Pending Orders', value: '42', icon: <FiCreditCard />, change: '-3%', color: '#F44336' },
    { label: 'Active Sessions', value: '156', icon: <FiActivity />, change: '+8%', color: '#00BCD4' },
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'placed a new order', time: '2 mins ago', type: 'order' },
    { user: 'Jane Smith', action: 'registered new account', time: '15 mins ago', type: 'user' },
    { user: 'Acme Store', action: 'added 5 new products', time: '1 hour ago', type: 'product' },
    { user: 'Mike Johnson', action: 'completed payment', time: '2 hours ago', type: 'payment' },
    { user: 'Sarah Wilson', action: 'requested refund', time: '3 hours ago', type: 'refund' },
  ];

  const topProducts = [
    { name: 'Summer Dress', sales: 234, revenue: '$14,082', rating: 4.8 },
    { name: 'Sports Shoes', sales: 189, revenue: '$24,471', rating: 4.7 },
    { name: 'Leather Jacket', sales: 156, revenue: '$31,044', rating: 4.9 },
    { name: 'Smart Watch', sales: 142, revenue: '$21,300', rating: 4.5 },
    { name: 'Backpack', sales: 128, revenue: '$8,704', rating: 4.6 },
  ];

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Overview of your platform performance</p>
        <div className="header-actions">
          <button className="btn btn-primary">
            <FiBarChart2 /> Generate Report
          </button>
          <button className="btn btn-outline">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid admin-stats">
        {adminStats.map((stat, index) => (
          <div key={index} className="stat-card admin-stat">
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

      {/* Charts and Tables */}
      <div className="dashboard-content admin-content">
        {/* Revenue Chart Section */}
        <div className="dashboard-card full-width">
          <div className="card-header">
            <h3>Revenue Overview</h3>
            <select className="time-select">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <div className="chart-container">
              {/* Chart would go here - you can use Chart.js or Recharts */}
              <div className="mock-chart">
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
                <div className="chart-bar" style={{ height: '85%' }}></div>
                <div className="chart-bar" style={{ height: '95%' }}></div>
                <div className="chart-bar" style={{ height: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Activities</h3>
            <Link to="/admin/activities" className="view-all">View All</Link>
          </div>
          <div className="activities-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'order' && <FiShoppingBag />}
                  {activity.type === 'user' && <FiUsers />}
                  {activity.type === 'product' && <FiPackage />}
                  {activity.type === 'payment' && <FiCreditCard />}
                  {activity.type === 'refund' && <FiDollarSign />}
                </div>
                <div className="activity-details">
                  <p>
                    <strong>{activity.user}</strong> {activity.action}
                  </p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Top Selling Products</h3>
            <Link to="/admin/products" className="view-all">Manage</Link>
          </div>
          <div className="top-products">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Sales</th>
                  <th>Revenue</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="product-cell">
                        <div className="product-avatar">{product.name.charAt(0)}</div>
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td>{product.sales}</td>
                    <td>{product.revenue}</td>
                    <td>
                      <div className="rating">
                        {product.rating} ⭐
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-box">
          <h4>Conversion Rate</h4>
          <div className="stat-number">3.24%</div>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: '65%' }}></div>
          </div>
        </div>
        
        <div className="stat-box">
          <h4>Avg. Order Value</h4>
          <div className="stat-number">$124.50</div>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>
        
        <div className="stat-box">
          <h4>Customer Satisfaction</h4>
          <div className="stat-number">4.8/5</div>
          <div className="stat-progress">
            <div className="progress-bar" style={{ width: '96%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;