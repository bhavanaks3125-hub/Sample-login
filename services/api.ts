// dummy API data
export const fetchDashboardData = async () => {


  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    stats: {
      users: '12,543',
      revenue: '$84,532',
      orders: '1,234',
      conversion: '3.2%',
    },
    chartData: {
      revenue: [65, 78, 82, 95, 88],
      users: [45, 52, 48, 61, 67],
    },
    activities: [
      {
        id: 1,
        user: 'Ruchitha',
        action: 'completed a purchase',
        time: '2 minutes ago',
        type: 'payment',
      },
      {
        id: 2,
        user: 'Samreen',
        action: 'created a new account',
        time: '5 minutes ago',
        type: 'user',
      },
      {
        id: 3,
        user: 'Devansh',
        action: 'placed an order',
        time: '8 minutes ago',
        type: 'order',
      },
      {
        id: 4,
        user: 'Raj Malay',
        action: 'updated profile',
        time: '12 minutes ago',
        type: 'user',
      },
      {
        id: 5,
        user: 'Naveen',
        action: 'made a payment',
        time: '15 minutes ago',
        type: 'payment',
      },
    ],
  };
};

export const fetchUserData = async () => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { id: 1, name: 'Ruchitha', email: 'ruchi6@example.com', role: 'Admin' },
    { id: 2, name: 'Samreen', email: 'sam@example.com', role: 'User' },
    { id: 3, name: 'Devansh', email: 'dev@example.com', role: 'User' },
  ];
};

export const fetchAnalyticsData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  return {
    pageViews: [120, 145, 167, 189, 203],
    sessions: [89, 105, 123, 138, 152],
    bounceRate: '42.3%',
    avgSessionDuration: '2:34',
  };
};