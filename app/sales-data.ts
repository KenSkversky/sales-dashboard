import { nanoid } from "nanoid";
import { SaleType } from "./types";

export const salesData: SaleType[] = [
  {
    id: nanoid(),
    customerName: "John Doe",
    dealValue: "$12,500",
    status: "In Progress",
    contactDate: "2024-11-16",
    salesperson: "Alice Smith",
    priority: "High",
  },
  {
    id: nanoid(),
    customerName: "Jane Smith",
    dealValue: "$8,000",
    status: "Closed",
    contactDate: "2024-11-15",
    salesperson: "Bob Johnson",
    priority: "Medium",
  },
  {
    id: nanoid(),
    customerName: "Mark Evans",
    dealValue: "$15,300",
    status: "Negotiation",
    contactDate: "2024-11-14",
    salesperson: "Sara Davis",
    priority: "High",
  },
  {
    id: nanoid(),
    customerName: "Emily Johnson",
    dealValue: "$9,750",
    status: "Pending",
    contactDate: "2024-11-13",
    salesperson: "Tom Wilson",
    priority: "Low",
  },
  {
    id: nanoid(),
    customerName: "Chris Lee",
    dealValue: "$6,500",
    status: "Closed",
    contactDate: "2024-11-12",
    salesperson: "Anna Taylor",
    priority: "Medium",
  },
  {
    id: nanoid(),
    customerName: "Sophia Brown",
    dealValue: "$10,400",
    status: "In Progress",
    contactDate: "2024-11-11",
    salesperson: "Michael Roberts",
    priority: "High",
  },
  {
    id: nanoid(),
    customerName: "Liam Garcia",
    dealValue: "$7,200",
    status: "Pending",
    contactDate: "2024-11-10",
    salesperson: "Laura Martinez",
    priority: "Low",
  },
  {
    id: nanoid(),
    customerName: "Olivia Harris",
    dealValue: "$11,000",
    status: "Negotiation",
    contactDate: "2024-11-09",
    salesperson: "David Clark",
    priority: "Medium",
  },
  {
    id: nanoid(),
    customerName: "Noah Rodriguez",
    dealValue: "$5,750",
    status: "Closed",
    contactDate: "2024-11-08",
    salesperson: "Sophia Evans",
    priority: "Low",
  },
  {
    id: nanoid(),
    customerName: "Emma Thompson",
    dealValue: "$14,300",
    status: "In Progress",
    contactDate: "2024-11-07",
    salesperson: "Lucas White",
    priority: "High",
  },
  {
    id: nanoid(),
    customerName: "Mason King",
    dealValue: "$9,850",
    status: "Pending",
    contactDate: "2024-11-06",
    salesperson: "Emily Hill",
    priority: "Medium",
  },
  {
    id: nanoid(),
    customerName: "Ava Scott",
    dealValue: "$13,200",
    status: "Negotiation",
    contactDate: "2024-11-05",
    salesperson: "Ethan Adams",
    priority: "High",
  },
  {
    id: nanoid(),
    customerName: "Elijah Walker",
    dealValue: "$4,900",
    status: "Closed",
    contactDate: "2024-11-04",
    salesperson: "Chloe Allen",
    priority: "Low",
  },
  {
    id: nanoid(),
    customerName: "Isabella Green",
    dealValue: "$8,400",
    status: "In Progress",
    contactDate: "2024-11-03",
    salesperson: "Aiden Baker",
    priority: "Medium",
  },
  {
    id: nanoid(),
    customerName: "James Hall",
    dealValue: "$10,100",
    status: "Pending",
    contactDate: "2024-11-02",
    salesperson: "Ella Carter",
    priority: "Low",
  },
];