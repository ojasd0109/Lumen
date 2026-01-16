"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/hooks/use-toast"
import {
  Search,
  MapPin,
  Zap,
  DollarSign,
  Filter,
  QrCode,
  Leaf,
  Star,
  Navigation,
  Calendar,
  User,
  Bell,
  History,
  Menu,
  X,
  ChevronDown,
  Clock,
  CreditCard,
  Award,
  Target,
  CheckCircle,
  AlertCircle,
  Layers,
  RotateCcw,
  Heart,
  Share2,
  Moon,
  Sun,
} from "lucide-react"

export default function Dashboard() {
  const [selectedStation, setSelectedStation] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [carbonSaved, setCarbonSaved] = useState(12.4)
  const [notifications, setNotifications] = useState(3)

  const [filters, setFilters] = useState({
    speed: "all",
    availability: "available",
    connector: "all",
    priceRange: [0, 50],
    distance: [0, 25],
  })

  const [mapView, setMapView] = useState("satellite") // satellite, street, hybrid
  const [searchQuery, setSearchQuery] = useState("")

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonSaved((prev) => prev + 0.1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stations = [
    {
      id: 1,
      name: "Tesla Supercharger - Downtown Plaza",
      distance: "0.3 miles",
      status: "Available",
      speed: "250 kWh",
      price: "$0.28/kWh",
      connectors: ["Tesla", "CCS"],
      rating: 4.8,
      available: 6,
      total: 8,
      coordinates: [40.7128, -74.006],
      amenities: ["WiFi", "Restroom", "Food"],
      operatingHours: "24/7",
      lastUpdated: "2 min ago",
      qrSupported: true,
      carbonOffset: 2.3,
      estimatedTime: "45 min",
      pricePerHour: 16.8,
    },
    {
      id: 2,
      name: "EVgo Fast Charging Hub",
      distance: "0.7 miles",
      status: "Occupied",
      speed: "150 kWh",
      price: "$0.32/kWh",
      connectors: ["CCS", "CHAdeMO"],
      rating: 4.5,
      available: 1,
      total: 4,
      coordinates: [40.7589, -73.9851],
      amenities: ["WiFi", "Shopping"],
      operatingHours: "6 AM - 10 PM",
      lastUpdated: "1 min ago",
      qrSupported: true,
      carbonOffset: 1.8,
      estimatedTime: "60 min",
      pricePerHour: 19.2,
    },
    {
      id: 3,
      name: "ChargePoint Network Station",
      distance: "1.2 miles",
      status: "Available",
      speed: "100 kWh",
      price: "$0.25/kWh",
      connectors: ["J1772", "CCS"],
      rating: 4.2,
      available: 3,
      total: 6,
      coordinates: [40.7505, -73.9934],
      amenities: ["WiFi", "Parking"],
      operatingHours: "24/7",
      lastUpdated: "5 min ago",
      qrSupported: false,
      carbonOffset: 2.1,
      estimatedTime: "75 min",
      pricePerHour: 15.0,
    },
  ]

  const recentBookings = [
    {
      id: 1,
      station: "Tesla Supercharger - Downtown Plaza",
      date: "2024-01-15",
      time: "14:30",
      duration: "45 min",
      cost: "$12.60",
      carbonSaved: "2.3 kg CO₂",
      status: "Completed",
      rating: 5,
    },
    {
      id: 2,
      station: "EVgo Fast Charging Hub",
      date: "2024-01-12",
      time: "09:15",
      duration: "60 min",
      cost: "$19.20",
      carbonSaved: "3.1 kg CO₂",
      status: "Completed",
      rating: 4,
    },
    {
      id: 3,
      station: "ChargePoint Network Station",
      date: "2024-01-10",
      time: "16:45",
      duration: "30 min",
      cost: "$7.50",
      carbonSaved: "1.5 kg CO₂",
      status: "Completed",
      rating: 5,
    },
  ]

  const savedStations = [
    { id: 1, name: "Tesla Supercharger - Downtown Plaza", lastVisited: "2 days ago" },
    { id: 2, name: "Home Charging Station", lastVisited: "Yesterday" },
  ]

  const handleBooking = (station) => {
    setSelectedStation(station)
    setIsBookingOpen(true)
  }

  const confirmBooking = () => {
    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your charging session at ${selectedStation?.name} has been booked.`,
    })
    setIsBookingOpen(false)
  }

  const toggleBookmark = (stationId) => {
    toast({
      title: "Station Bookmarked",
      description: "Added to your saved stations",
    })
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`border-b backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300 ${
          isDarkMode ? "border-slate-800/50 bg-slate-900/30" : "border-slate-200/50 bg-white/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-lg blur-md opacity-30 animate-pulse" />
                <div className="relative bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-slate-900" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Lumen
                </span>
                <div className="text-xs text-slate-400 -mt-1">DASHBOARD</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300 hover:text-green-400" : "text-slate-600 hover:text-green-600"
                }`}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Map
              </Button>
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300 hover:text-green-400" : "text-slate-600 hover:text-green-600"
                }`}
              >
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button
                variant="ghost"
                className={`relative transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300 hover:text-green-400" : "text-slate-600 hover:text-green-600"
                }`}
              >
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-400 rounded-full flex items-center justify-center text-xs text-slate-900 font-bold">
                    {notifications}
                  </div>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300 hover:text-yellow-400" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300 hover:text-green-400" : "text-slate-600 hover:text-green-600"
                }`}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t transition-colors duration-300 ${
              isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              <Button
                variant="ghost"
                className={`w-full justify-start transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Map
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card
            className={`transition-colors duration-300 ${
              isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
            }`}
          >
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <Leaf className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  CO₂ Saved
                </div>
                <div
                  className={`font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  {carbonSaved.toFixed(1)} kg
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
            }`}
          >
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <Zap className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Sessions
                </div>
                <div
                  className={`font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  23
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
            }`}
          >
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 bg-purple-400/20 rounded-lg">
                <Award className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Eco Score
                </div>
                <div
                  className={`font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  A+
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
            }`}
          >
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <DollarSign className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <div
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Saved
                </div>
                <div
                  className={`font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  $127
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Panel - Search & Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card
              className={`transition-colors duration-300 ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  <Search className="h-5 w-5 mr-2 text-green-400" />
                  Find Stations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Enter location or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`pl-10 transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"
                    }`}
                  />
                </div>
                <Button className="w-full bg-green-400 hover:bg-green-500 text-slate-900 transition-all duration-300 hover:scale-105">
                  <Navigation className="h-4 w-4 mr-2" />
                  Use Current Location
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Filters */}
            <Card
              className={`transition-colors duration-300 ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center justify-between transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  <div className="flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-green-400" />
                    Filters
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={`transition-colors duration-300 ${
                      isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`}
                    />
                  </Button>
                </CardTitle>
              </CardHeader>
              {isFilterOpen && (
                <CardContent className="space-y-6">
                  <div>
                    <Label
                      className={`transition-colors duration-300 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Charging Speed
                    </Label>
                    <Select value={filters.speed} onValueChange={(value) => setFilters({ ...filters, speed: value })}>
                      <SelectTrigger
                        className={`transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-slate-300 text-slate-900"
                        }`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Speeds</SelectItem>
                        <SelectItem value="slow">Slow (≤50 kWh)</SelectItem>
                        <SelectItem value="fast">Fast (50-150 kWh)</SelectItem>
                        <SelectItem value="superfast">Superfast (≥150 kWh)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      className={`transition-colors duration-300 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Connector Type
                    </Label>
                    <Select
                      value={filters.connector}
                      onValueChange={(value) => setFilters({ ...filters, connector: value })}
                    >
                      <SelectTrigger
                        className={`transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-slate-300 text-slate-900"
                        }`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="tesla">Tesla</SelectItem>
                        <SelectItem value="ccs">CCS</SelectItem>
                        <SelectItem value="chademo">CHAdeMO</SelectItem>
                        <SelectItem value="j1772">J1772</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      className={`transition-colors duration-300 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Distance Range: {filters.distance[0]} - {filters.distance[1]} miles
                    </Label>
                    <Slider
                      value={filters.distance}
                      onValueChange={(value) => setFilters({ ...filters, distance: value })}
                      max={50}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label
                      className={`transition-colors duration-300 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}/hour
                    </Label>
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                      max={100}
                      step={5}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label
                      className={`transition-colors duration-300 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Available Only
                    </Label>
                    <Switch
                      checked={filters.availability === "available"}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, availability: checked ? "available" : "all" })
                      }
                    />
                  </div>

                  <Button
                    variant="outline"
                    className={`w-full transition-colors duration-300 ${
                      isDarkMode
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-slate-300 text-slate-600 hover:bg-slate-50"
                    }`}
                    onClick={() =>
                      setFilters({
                        speed: "all",
                        availability: "all",
                        connector: "all",
                        priceRange: [0, 50],
                        distance: [0, 25],
                      })
                    }
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset Filters
                  </Button>
                </CardContent>
              )}
            </Card>

            {/* Saved Stations */}
            <Card
              className={`transition-colors duration-300 ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  <Heart className="h-5 w-5 mr-2 text-red-400" />
                  Saved Stations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {savedStations.map((station) => (
                  <div
                    key={station.id}
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      isDarkMode ? "bg-slate-700/50" : "bg-slate-100/50"
                    }`}
                  >
                    <div
                      className={`font-medium text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {station.name}
                    </div>
                    <div
                      className={`text-xs transition-colors duration-300 ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Last visited: {station.lastVisited}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Center Panel - Map */}
          <div className="lg:col-span-2">
            <Card
              className={`transition-colors duration-300 ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle
                    className={`flex items-center transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    <MapPin className="h-5 w-5 mr-2 text-green-400" />
                    Interactive Map
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Select value={mapView} onValueChange={setMapView}>
                      <SelectTrigger
                        className={`w-32 h-8 transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-slate-300 text-slate-900"
                        }`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="satellite">Satellite</SelectItem>
                        <SelectItem value="street">Street</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`h-8 w-8 transition-colors duration-300 ${
                        isDarkMode
                          ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                          : "border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Layers className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div
                  className={`h-[600px] rounded-lg flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
                    isDarkMode ? "bg-slate-700" : "bg-slate-200"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10" />
                  <div className="text-center space-y-4 z-10">
                    <MapPin className="h-16 w-16 text-green-400 mx-auto animate-pulse" />
                    <div className="space-y-2">
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        HERE Maps Integration
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        Live map integration would display here
                      </p>
                      <p
                        className={`text-xs transition-colors duration-300 ${
                          isDarkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        Showing {stations.length} nearby stations
                      </p>
                    </div>
                  </div>

                  {/* Simulated map pins */}
                  <div className="absolute top-20 left-20">
                    <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  </div>
                  <div className="absolute top-32 right-24">
                    <div className="w-6 h-6 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50" />
                  </div>
                  <div className="absolute bottom-24 left-32">
                    <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  </div>
                  <div className="absolute bottom-32 right-20">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
                  </div>

                  {/* Map controls */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className={`h-10 w-10 transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
                          : "bg-white/80 border-slate-300 text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`h-10 w-10 transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
                          : "bg-white/80 border-slate-300 text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      -
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`h-10 w-10 transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
                          : "bg-white/80 border-slate-300 text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <Target className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Station List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex justify-between items-center">
              <h2
                className={`text-lg font-semibold transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Nearby Stations
              </h2>
              <Badge variant="outline" className="text-green-400 border-green-400/30">
                {stations.length} found
              </Badge>
            </div>

            {stations.map((station) => (
              <Card
                key={station.id}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDarkMode
                    ? "bg-slate-800/50 border-slate-700 hover:border-green-400/50"
                    : "bg-white/50 border-slate-200 hover:border-green-400/50"
                }`}
              >
                <CardContent className="p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-semibold transition-colors duration-300 ${
                            isDarkMode ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {station.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleBookmark(station.id)}
                          className={`h-8 w-8 transition-colors duration-300 ${
                            isDarkMode ? "text-slate-400 hover:text-red-400" : "text-slate-600 hover:text-red-500"
                          }`}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      <div
                        className={`flex items-center space-x-4 text-sm transition-colors duration-300 ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{station.distance}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{station.rating}</span>
                        </div>
                        <div
                          className={`text-xs transition-colors duration-300 ${
                            isDarkMode ? "text-slate-500" : "text-slate-500"
                          }`}
                        >
                          Updated {station.lastUpdated}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Badge
                      variant={station.status === "Available" ? "default" : "destructive"}
                      className={`${
                        station.status === "Available"
                          ? "bg-green-400/20 text-green-400 border-green-400/30"
                          : "bg-red-400/20 text-red-400 border-red-400/30"
                      }`}
                    >
                      {station.status === "Available" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      )}
                      {station.status} ({station.available}/{station.total})
                    </Badge>
                    <div
                      className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      <Zap className="h-3 w-3 text-green-400" />
                      <span>{station.speed}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div
                      className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      <DollarSign className="h-3 w-3 text-green-400" />
                      <span>{station.price}</span>
                    </div>
                    <div className="flex space-x-1">
                      {station.connectors.map((connector, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {connector}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div
                      className={`flex items-center space-x-3 transition-colors duration-300 ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{station.operatingHours}</span>
                      </div>
                      {station.qrSupported && (
                        <div className="flex items-center text-green-400">
                          <QrCode className="h-3 w-3 mr-1" />
                          <span>QR</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div
                      className={`flex items-center space-x-2 transition-colors duration-300 ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {station.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                      <DialogTrigger asChild>
                        <Button
                          className="flex-1 bg-green-400 hover:bg-green-500 text-slate-900 transition-all duration-300 hover:scale-105"
                          disabled={station.status === "Occupied"}
                          onClick={() => handleBooking(station)}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent
                        className={`max-w-2xl transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-slate-800 border-slate-700 text-white"
                            : "bg-white border-slate-200 text-slate-900"
                        }`}
                      >
                        <DialogHeader>
                          <DialogTitle className="flex items-center">
                            <Zap className="h-5 w-5 mr-2 text-green-400" />
                            Smart Booking System
                          </DialogTitle>
                        </DialogHeader>
                        {selectedStation && (
                          <div className="space-y-6">
                            <div
                              className={`p-4 rounded-lg transition-colors duration-300 ${
                                isDarkMode ? "bg-slate-700/50" : "bg-slate-100/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3
                                    className={`font-semibold transition-colors duration-300 ${
                                      isDarkMode ? "text-white" : "text-slate-900"
                                    }`}
                                  >
                                    {selectedStation.name}
                                  </h3>
                                  <p
                                    className={`text-sm transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                                  >
                                    {selectedStation.distance} • {selectedStation.price}
                                  </p>
                                </div>
                                <Badge className="bg-green-400/20 text-green-400 border-green-400/30">
                                  {selectedStation.speed}
                                </Badge>
                              </div>
                            </div>

                            <Tabs defaultValue="booking" className="w-full">
                              <TabsList
                                className={`grid w-full grid-cols-2 transition-colors duration-300 ${
                                  isDarkMode ? "bg-slate-700" : "bg-slate-100"
                                }`}
                              >
                                <TabsTrigger value="booking">Booking Details</TabsTrigger>
                                <TabsTrigger value="station">Station Info</TabsTrigger>
                              </TabsList>

                              <TabsContent value="booking" className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label
                                      className={`transition-colors duration-300 ${
                                        isDarkMode ? "text-slate-300" : "text-slate-700"
                                      }`}
                                    >
                                      Vehicle Model
                                    </Label>
                                    <Select>
                                      <SelectTrigger
                                        className={`transition-colors duration-300 ${
                                          isDarkMode
                                            ? "bg-slate-700 border-slate-600 text-white"
                                            : "bg-white border-slate-300 text-slate-900"
                                        }`}
                                      >
                                        <SelectValue placeholder="Select vehicle" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="tesla-model-3">Tesla Model 3</SelectItem>
                                        <SelectItem value="tesla-model-y">Tesla Model Y</SelectItem>
                                        <SelectItem value="tesla-model-s">Tesla Model S</SelectItem>
                                        <SelectItem value="nissan-leaf">Nissan Leaf</SelectItem>
                                        <SelectItem value="bmw-i4">BMW i4</SelectItem>
                                        <SelectItem value="audi-etron">Audi e-tron</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <Label
                                      className={`transition-colors duration-300 ${
                                        isDarkMode ? "text-slate-300" : "text-slate-700"
                                      }`}
                                    >
                                      Connector Type
                                    </Label>
                                    <Select>
                                      <SelectTrigger
                                        className={`transition-colors duration-300 ${
                                          isDarkMode
                                            ? "bg-slate-700 border-slate-600 text-white"
                                            : "bg-white border-slate-300 text-slate-900"
                                        }`}
                                      >
                                        <SelectValue placeholder="Select connector" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {selectedStation.connectors.map((connector) => (
                                          <SelectItem key={connector} value={connector.toLowerCase()}>
                                            {connector}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label
                                      className={`transition-colors duration-300 ${
                                        isDarkMode ? "text-slate-300" : "text-slate-700"
                                      }`}
                                    >
                                      Date
                                    </Label>
                                    <Input
                                      type="date"
                                      className={`transition-colors duration-300 ${
                                        isDarkMode
                                          ? "bg-slate-700 border-slate-600 text-white"
                                          : "bg-white border-slate-300 text-slate-900"
                                      }`}
                                    />
                                  </div>
                                  <div>
                                    <Label
                                      className={`transition-colors duration-300 ${
                                        isDarkMode ? "text-slate-300" : "text-slate-700"
                                      }`}
                                    >
                                      Time
                                    </Label>
                                    <Input
                                      type="time"
                                      className={`transition-colors duration-300 ${
                                        isDarkMode
                                          ? "bg-slate-700 border-slate-600 text-white"
                                          : "bg-white border-slate-300 text-slate-900"
                                      }`}
                                    />
                                  </div>
                                </div>

                                <div>
                                  <Label
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Duration
                                  </Label>
                                  <Select>
                                    <SelectTrigger
                                      className={`transition-colors duration-300 ${
                                        isDarkMode
                                          ? "bg-slate-700 border-slate-600 text-white"
                                          : "bg-white border-slate-300 text-slate-900"
                                      }`}
                                    >
                                      <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="30">30 minutes</SelectItem>
                                      <SelectItem value="45">45 minutes</SelectItem>
                                      <SelectItem value="60">1 hour</SelectItem>
                                      <SelectItem value="90">1.5 hours</SelectItem>
                                      <SelectItem value="120">2 hours</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                  <Switch id="reminder" />
                                  <Label
                                    htmlFor="reminder"
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Send reminder notifications
                                  </Label>
                                </div>
                              </TabsContent>

                              <TabsContent value="station" className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div
                                    className={`p-3 rounded-lg transition-colors duration-300 ${
                                      isDarkMode ? "bg-slate-700/30" : "bg-slate-100/50"
                                    }`}
                                  >
                                    <div
                                      className={`text-sm transition-colors duration-300 ${
                                        isDarkMode ? "text-slate-400" : "text-slate-600"
                                      }`}
                                    >
                                      Operating Hours
                                    </div>
                                    <div
                                      className={`font-medium transition-colors duration-300 ${
                                        isDarkMode ? "text-white" : "text-slate-900"
                                      }`}
                                    >
                                      {selectedStation.operatingHours}
                                    </div>
                                  </div>
                                  <div
                                    className={`p-3 rounded-lg transition-colors duration-300 ${
                                      isDarkMode ? "bg-slate-700/30" : "bg-slate-100/50"
                                    }`}
                                  >
                                    <div
                                      className={`text-sm transition-colors duration-300 ${
                                        isDarkMode ? "text-slate-400" : "text-slate-600"
                                      }`}
                                    >
                                      Max Power
                                    </div>
                                    <div
                                      className={`font-medium transition-colors duration-300 ${
                                        isDarkMode ? "text-white" : "text-slate-900"
                                      }`}
                                    >
                                      {selectedStation.speed}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <Label
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Available Amenities
                                  </Label>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {selectedStation.amenities.map((amenity, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {amenity}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <Label
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Connector Types
                                  </Label>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {selectedStation.connectors.map((connector, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {connector}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>

                            <div
                              className={`p-4 rounded-lg border transition-colors duration-300 ${
                                isDarkMode ? "bg-green-400/10 border-green-400/20" : "bg-green-50 border-green-200"
                              }`}
                            >
                              <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                  <span
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Estimated Cost:
                                  </span>
                                  <span className="text-green-400 font-bold">
                                    ${selectedStation.pricePerHour.toFixed(2)}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Estimated Time:
                                  </span>
                                  <span className="text-blue-400 font-medium">{selectedStation.estimatedTime}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span
                                    className={`transition-colors duration-300 ${
                                      isDarkMode ? "text-slate-300" : "text-slate-700"
                                    }`}
                                  >
                                    Carbon Offset:
                                  </span>
                                  <span className="text-green-400 font-medium flex items-center">
                                    <Leaf className="h-3 w-3 mr-1" />
                                    {selectedStation.carbonOffset} kg CO₂
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex space-x-3">
                              <Button
                                variant="outline"
                                className={`flex-1 transition-colors duration-300 ${
                                  isDarkMode
                                    ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                                    : "border-slate-300 text-slate-600 hover:bg-slate-50"
                                }`}
                                onClick={() => setIsBookingOpen(false)}
                              >
                                Cancel
                              </Button>
                              <Button
                                className="flex-1 bg-green-400 hover:bg-green-500 text-slate-900 transition-all duration-300 hover:scale-105"
                                onClick={confirmBooking}
                              >
                                <CreditCard className="h-4 w-4 mr-2" />
                                Confirm Booking
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      size="icon"
                      className={`transition-colors duration-300 ${
                        isDarkMode
                          ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                          : "border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>

                    {station.qrSupported && (
                      <Button
                        variant="outline"
                        size="icon"
                        className={`transition-colors duration-300 ${
                          isDarkMode
                            ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                            : "border-slate-300 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <QrCode className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Recent Bookings */}
            <Card
              className={`transition-colors duration-300 ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`flex items-center transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  <History className="h-5 w-5 mr-2 text-green-400" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {recentBookings.map((booking, index) => (
                    <AccordionItem key={booking.id} value={`item-${index}`}>
                      <AccordionTrigger
                        className={`hover:no-underline transition-colors duration-300 ${
                          isDarkMode ? "text-white hover:text-green-400" : "text-slate-900 hover:text-green-600"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mr-4">
                          <span className="text-sm font-medium">{booking.station}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              booking.status === "Completed"
                                ? "text-green-400 border-green-400/30"
                                : "text-blue-400 border-blue-400/30"
                            }`}
                          >
                            {booking.cost}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pt-2">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span
                                className={`transition-colors duration-300 ${
                                  isDarkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                              >
                                Date & Time:
                              </span>
                              <div
                                className={`font-medium transition-colors duration-300 ${
                                  isDarkMode ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {booking.date} at {booking.time}
                              </div>
                            </div>
                            <div>
                              <span
                                className={`transition-colors duration-300 ${
                                  isDarkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                              >
                                Duration:
                              </span>
                              <div
                                className={`font-medium transition-colors duration-300 ${
                                  isDarkMode ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {booking.duration}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-green-400">
                              <Leaf className="h-3 w-3 mr-1" />
                              Saved {booking.carbonSaved}
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(booking.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
