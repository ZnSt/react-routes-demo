import { Routes, Route } from 'react-router';
import { Layout } from './Layout';
import { Sales } from '../pages/Sales';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="sales" element={<Sales />}>
          <Route path="analytics" element={<div>Analytics</div>} />
          <Route path="invoices" element={<div>Invoices</div>} />
          <Route path="deposits" element={<div>Deposits</div>} />
        </Route>
        <Route path="reports" element={<div>Reports</div>} />
        <Route path="feedback" element={<div>Feedback</div>} />
        <Route path="customers" element={<div>Customers</div>} />
      </Route>
    </Routes>
  );
};
