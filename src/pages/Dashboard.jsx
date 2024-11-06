import React, { useState } from 'react'
import { ArrowLeft, Building2, CreditCard, User, Menu } from 'lucide-react'
import Sidebar from '../components/Dashboard/Sidebar'

// Import the custom components
import Avatar from '../components/ui/Avatar'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Checkbox from '../components/ui/Checkbox'

const Dashboard = () => {
  const [selectedPayments, setSelectedPayments] = useState([])
  const [showPaymentGateway, setShowPaymentGateway] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const payments = [
    { id: '1', date: '16/09/2024', description: 'Annual Membership Subscription', amount: 20000 },
    { id: '2', date: '16/09/2024', description: 'Annual Membership Subscription', amount: 20000 },
    { id: '3', date: '16/09/2024', description: 'Annual Membership Subscription', amount: 20000 },
    { id: '4', date: '16/09/2024', description: 'Annual Membership Subscription', amount: 20000 },
  ]

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayments(prev =>
      prev.includes(paymentId)
        ? prev.filter(id => id !== paymentId)
        : [...prev, paymentId]
    )
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex items-center justify-between bg-white p-4 shadow-sm lg:hidden">
          <Button variant="ghost" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="w-6"></div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto p-4 sm:p-6">
            {showPaymentGateway ? (
              <div>
                <div className="mb-6 flex items-center">
                  <Button
                    variant="ghost"
                    onClick={() => setShowPaymentGateway(false)}
                    className="mr-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-xl font-semibold">Select Payment Gateway</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Button
                    variant="outline"
                    className="h-32 border-2 border-blue-500"
                    onClick={() => console.log('Interswitch selected')}
                  >
                    Interswitch
                  </Button>
                  <Button
                    variant="outline"
                    className="h-32"
                    onClick={() => console.log('Paystack selected')}
                  >
                    Paystack
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                {/* User Profile Section */}
                <div className="mb-6 flex items-center">
                  <Avatar
                    src="/placeholder.svg"
                    alt="Victor Ade"
                    className="h-16 w-16"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">Victor Ade</h2>
                    <p className="text-sm text-gray-500">ID: 123456</p>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <div className="flex items-center p-4">
                      <div className="rounded-lg bg-orange-100 p-2">
                        <User className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Membership Grade</p>
                        <p className="font-semibold">Fellow</p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center p-4">
                      <div className="rounded-lg bg-blue-100 p-2">
                        <Building2 className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Chapter</p>
                        <p className="font-semibold">Abuja</p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center p-4">
                      <div className="rounded-lg bg-green-100 p-2">
                        <CreditCard className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Outstanding Dues</p>
                        <p className="font-semibold">₦54,000</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Outstanding Payments Table */}
                <Card className="overflow-hidden">
                  <div className="p-4 sm:p-6">
                    <h3 className="mb-4 text-lg font-semibold">Outstanding Payments</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[640px]">
                        <thead>
                          <tr className="border-b">
                            <th className="w-12 px-4 py-2 text-left">
                              <Checkbox />
                            </th>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Description</th>
                            <th className="px-4 py-2 text-right">Amount</th>
                            <th className="px-4 py-2 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {payments.map((payment) => (
                            <tr key={payment.id} className="border-b last:border-b-0">
                              <td className="px-4 py-2">
                                <Checkbox
                                  checked={selectedPayments.includes(payment.id)}
                                  onChange={() => handlePaymentSelect(payment.id)}
                                />
                              </td>
                              <td className="px-4 py-2">{payment.date}</td>
                              <td className="px-4 py-2">{payment.description}</td>
                              <td className="px-4 py-2 text-right">₦{payment.amount.toLocaleString()}.00</td>
                              <td className="px-4 py-2 text-right">
                                <Button
                                  variant="default"
                                  onClick={() => setShowPaymentGateway(true)}
                                >
                                  Proceed to Payment
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {selectedPayments.length > 0 && (
                      <div className="mt-4 flex justify-end">
                        <Button
                          onClick={() => setShowPaymentGateway(true)}
                        >
                          Proceed to Pay Selected
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard