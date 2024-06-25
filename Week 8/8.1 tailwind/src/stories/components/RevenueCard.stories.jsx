import { Button } from './Button';
import {RevenueCard} from "../../components/RevenueCard"

export default {
  component: RevenueCard,
};

export const BigAmount = {
  args: {
    orderCount: '123',
    amount: '₹ 92,312.20',
    title: 'Amount Pending',
    label: 'Button',
    primary: true,
  },
};
export const SmallAmount = {
  args: {
    orderCount: '123',
    amount: '₹ 92.20',
    title: 'Amount Pending',
    label: 'Button',
    primary: true,
  },
};