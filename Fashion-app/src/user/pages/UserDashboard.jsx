import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiShoppingCart, FiHeart, FiStar, FiTrendingUp, FiClock } from 'react-icons/fi';

const UserDashboard = () => {
  const stats = [
    { label: 'Total Orders', value: '24', icon: <FiPackage />, color: '#4CAF50', link: '/user/orders' },
    { label: 'Cart Items', value: '3', icon: <FiShoppingCart />, color: '#2196F3', link: '/cart' },
    { label: 'Wishlist', value: '12', icon: <FiHeart />, color: '#E91E63', link: '/user/wishlist' },
    { label: 'Reviews', value: '8', icon: <FiStar />, color: '#FF9800', link: '/user/reviews' },
  ];

  const recentOrders = [
    { id: 'ORD-001', date: '2024-01-15', amount: '$149.99', status: 'Delivered' },
    { id: 'ORD-002', date: '2024-01-10', amount: '$89.99', status: 'Processing' },
    { id: 'ORD-003', date: '2024-01-05', amount: '$199.99', status: 'Shipped' },
  ];

  const recommendedProducts = [
    { id: 1, name: 'Summer Dress', price: '$59.99', category: 'Women' },
    { id: 2, name: 'Sports Shoes', price: '$129.99', category: 'Men' },
    { id: 3, name: 'Leather Jacket', price: '$199.99', category: 'Unisex' },
  ];

  return (
    <div className="user-dashboard">
      {/* Welcome Section */}
      <div className="dashboard-header">
        <h1>Welcome back, John! 👋</h1>
        <p>Here's what's happening with your account today.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Link key={index} to={stat.link} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            <div className="stat-trend">
              <FiTrendingUp />
              <span>+12%</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-content">
        {/* Recent Orders */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <Link to="/user/orders" className="view-all">View All</Link>
          </div>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/user/orders/${order.id}`} className="btn-link">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recommended For You</h3>
            <Link to="/products" className="view-all">Browse More</Link>
          </div>
          <div className="recommended-products">
            {recommendedProducts.map(product => (
              <div key={product.id} className="recommended-product">
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{product.price}</p>
                </div>
                <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline">
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <Link to="/products" className="quick-action">
              <div className="action-icon">
                <FiShoppingCart />
              </div>
              <div className="action-text">
                <h4>Continue Shopping</h4>
                <p>Browse latest collections</p>
              </div>
            </Link>
            
            <Link to="/user/wishlist" className="quick-action">
              <div className="action-icon">
                <FiHeart />
              </div>
              <div className="action-text">
                <h4>View Wishlist</h4>
                <p>Check saved items</p>
              </div>
            </Link>
            
            <Link to="/user/profile" className="quick-action">
              <div className="action-icon">
                <FiClock />
              </div>
              <div className="action-text">
                <h4>Update Profile</h4>
                <p>Manage account details</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;