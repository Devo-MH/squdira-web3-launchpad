
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Shield, 
  Gamepad2, 
  TrendingUp, 
  Coins, 
  Trophy, 
  Zap,
  Users,
  Globe,
  Lock,
  Github,
  Twitter
} from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [statsData, setStatsData] = useState({
    ethRaised: 0,
    nftsTraded: 0,
    campaignsLaunched: 0,
    tokensClaimed: 0
  });

  // Animate counters on page load
  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        ethRaised: 2547,
        nftsTraded: 18492,
        campaignsLaunched: 856,
        tokensClaimed: 94736
      };

      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStatsData({
          ethRaised: Math.floor(targets.ethRaised * progress),
          nftsTraded: Math.floor(targets.nftsTraded * progress),
          campaignsLaunched: Math.floor(targets.campaignsLaunched * progress),
          tokensClaimed: Math.floor(targets.tokensClaimed * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateCounters();
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0a141a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#99ff00]/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2399ff00" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-[#2a3d45]/50 rounded-full border border-[#50696b]/30 mb-8">
            <Zap className="h-4 w-4 text-[#99ff00] mr-2" />
            <span className="text-sm text-gray-300">Powered by Web3 Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Gaming. Fundraising.<br />
            Launching. Rewarding —<br />
            <span className="text-[#99ff00]">Decentralized.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Squdira is the all-in-one Web3 platform for gamers, creators, and startups — 
            enabling tournaments, NFT marketplaces, IDOs, vesting, and community reward campaigns.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-[#99ff00] text-black hover:bg-[#88ee00] px-8 py-3 text-lg font-semibold">
              Explore Games <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-[#50696b] text-white hover:bg-[#2a3d45] px-8 py-3 text-lg">
              Launch Campaign
            </Button>
            <Button variant="outline" className="border-[#50696b] text-white hover:bg-[#2a3d45] px-8 py-3 text-lg">
              Start Fundraising
            </Button>
            <Button variant="outline" className="border-[#50696b] text-white hover:bg-[#2a3d45] px-8 py-3 text-lg">
              Join IDO
            </Button>
          </div>
        </div>
      </section>

      {/* Four Pillar Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Four Pillars of <span className="text-[#99ff00]">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300">Complete Web3 ecosystem for modern digital entrepreneurs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 hover:border-[#99ff00]/50 transition-all duration-300 group">
              <div className="h-12 w-12 bg-[#99ff00]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#99ff00]/20 transition-colors">
                <Zap className="h-6 w-6 text-[#99ff00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">🎯 dCampaign</h3>
              <p className="text-gray-300 leading-relaxed">
                Run reward campaigns with on-chain task verification, social tasks, 
                Chainlink VRF winner selection, and wallet-based claiming.
              </p>
            </Card>
            
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 hover:border-[#99ff00]/50 transition-all duration-300 group">
              <div className="h-12 w-12 bg-[#99ff00]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#99ff00]/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-[#99ff00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">💰 Raising Fund</h3>
              <p className="text-gray-300 leading-relaxed">
                On-chain crowdfunding for creators and startups with ETH/token backing 
                and transparent fund management.
              </p>
            </Card>
            
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 hover:border-[#99ff00]/50 transition-all duration-300 group">
              <div className="h-12 w-12 bg-[#99ff00]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#99ff00]/20 transition-colors">
                <Trophy className="h-6 w-6 text-[#99ff00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">🚀 Free IDO Launchpad</h3>
              <p className="text-gray-300 leading-relaxed">
                Launch token/NFT sales with self-serve setup, whitelist tiers, 
                and built-in vesting mechanisms.
              </p>
            </Card>
            
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 hover:border-[#99ff00]/50 transition-all duration-300 group">
              <div className="h-12 w-12 bg-[#99ff00]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#99ff00]/20 transition-colors">
                <Coins className="h-6 w-6 text-[#99ff00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">🪙 Claiming Portal</h3>
              <p className="text-gray-300 leading-relaxed">
                Vest and distribute tokens to IDO investors, team, and advisors 
                with secure wallet-based claiming.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gaming Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#2a3d45]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Gaming <span className="text-[#99ff00]">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300">Next-generation Web3 gaming experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#2a3d45]/50 p-6 rounded-xl border border-[#50696b]/30 hover:border-[#99ff00]/50 transition-all">
              <Gamepad2 className="h-8 w-8 text-[#99ff00] mb-4" />
              <h3 className="text-lg font-semibold mb-2">NFT Marketplace</h3>
              <p className="text-gray-300 text-sm">Buy/sell Axie-style NFTs with verified authenticity</p>
            </div>
            
            <div className="bg-[#2a3d45]/50 p-6 rounded-xl border border-[#50696b]/30 hover:border-[#99ff00]/50 transition-all">
              <Trophy className="h-8 w-8 text-[#99ff00] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tournament Engine</h3>
              <p className="text-gray-300 text-sm">Compete in on-chain skill-based tournaments</p>
            </div>
            
            <div className="bg-[#2a3d45]/50 p-6 rounded-xl border border-[#50696b]/30 hover:border-[#99ff00]/50 transition-all">
              <Coins className="h-8 w-8 text-[#99ff00] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Staking & Rewards</h3>
              <p className="text-gray-300 text-sm">Stake tokens, earn yield from platform fees</p>
            </div>
            
            <div className="bg-[#2a3d45]/50 p-6 rounded-xl border border-[#50696b]/30 hover:border-[#99ff00]/50 transition-all">
              <Zap className="h-8 w-8 text-[#99ff00] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Axie Mechanics</h3>
              <p className="text-gray-300 text-sm">Breed, evolve, trade unique NFT creatures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built on <span className="text-[#99ff00]">Solid Foundation</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-[#99ff00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#99ff00]" />
              </div>
              <h3 className="font-semibold mb-2">Smart Contracts</h3>
              <p className="text-gray-300 text-sm">Solidity, Ethereum blockchain</p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-[#99ff00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#99ff00]" />
              </div>
              <h3 className="font-semibold mb-2">IPFS Storage</h3>
              <p className="text-gray-300 text-sm">Decentralized metadata storage</p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-[#99ff00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#99ff00]" />
              </div>
              <h3 className="font-semibold mb-2">Backend API</h3>
              <p className="text-gray-300 text-sm">Node.js + MongoDB</p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-[#99ff00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#99ff00]" />
              </div>
              <h3 className="font-semibold mb-2">React Frontend</h3>
              <p className="text-gray-300 text-sm">Wallet integration ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2a3d45]/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform <span className="text-[#99ff00]">Metrics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#99ff00] mb-2">
                {statsData.ethRaised.toLocaleString()}
              </div>
              <div className="text-gray-300">ETH Raised</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#99ff00] mb-2">
                {statsData.nftsTraded.toLocaleString()}
              </div>
              <div className="text-gray-300">NFTs Traded</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#99ff00] mb-2">
                {statsData.campaignsLaunched}
              </div>
              <div className="text-gray-300">Campaigns Launched</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#99ff00] mb-2">
                {statsData.tokensClaimed.toLocaleString()}
              </div>
              <div className="text-gray-300">Tokens Claimed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Tracks */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-[#99ff00]">Path</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 text-center hover:border-[#99ff00]/50 transition-all">
              <Gamepad2 className="h-16 w-16 text-[#99ff00] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Gamer</h3>
              <p className="text-gray-300 mb-6">Join tournaments, earn NFTs, compete globally</p>
              <Button className="bg-[#99ff00] text-black hover:bg-[#88ee00] w-full">
                Start Gaming
              </Button>
            </Card>
            
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 text-center hover:border-[#99ff00]/50 transition-all">
              <Trophy className="h-16 w-16 text-[#99ff00] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Project</h3>
              <p className="text-gray-300 mb-6">Launch IDO or dCampaign for your startup</p>
              <Button className="bg-[#99ff00] text-black hover:bg-[#88ee00] w-full">
                Launch Project
              </Button>
            </Card>
            
            <Card className="bg-[#2a3d45] border-[#50696b]/30 p-8 text-center hover:border-[#99ff00]/50 transition-all">
              <TrendingUp className="h-16 w-16 text-[#99ff00] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Creator</h3>
              <p className="text-gray-300 mb-6">Start fundraising campaign, build community</p>
              <Button className="bg-[#99ff00] text-black hover:bg-[#88ee00] w-full">
                Start Creating
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#2a3d45]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security & <span className="text-[#99ff00]">Trust</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Lock className="h-12 w-12 text-[#99ff00] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Chainlink VRF</h3>
              <p className="text-gray-300 text-sm">Verifiable randomness</p>
            </div>
            
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-[#99ff00] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Role-based Access</h3>
              <p className="text-gray-300 text-sm">Smart contract security</p>
            </div>
            
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-[#99ff00] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Wallet Auth</h3>
              <p className="text-gray-300 text-sm">Signature-based authentication</p>
            </div>
            
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-[#99ff00] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">No Backend Keys</h3>
              <p className="text-gray-300 text-sm">Decentralized signing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup & Footer */}
      <footer className="py-20 px-4 border-t border-[#50696b]/30">
        <div className="max-w-6xl mx-auto">
          {/* Email Signup */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with <span className="text-[#99ff00]">Squdira</span>
            </h2>
            <p className="text-gray-300 mb-8">Get the latest updates on new features, campaigns, and gaming opportunities</p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#2a3d45] border-[#50696b] text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-[#99ff00] text-black hover:bg-[#88ee00] px-8">
                Subscribe
              </Button>
            </form>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="text-gray-400 hover:text-[#99ff00] transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#99ff00] transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#99ff00] transition-colors">
              <Users className="h-6 w-6" />
            </a>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-[#99ff00] transition-colors">About</a>
            <a href="#" className="hover:text-[#99ff00] transition-colors">Docs</a>
            <a href="#" className="hover:text-[#99ff00] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#99ff00] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#99ff00] transition-colors">Support</a>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-[#50696b]/30">
            <p className="text-gray-400 text-sm">
              © 2024 Squdira. All rights reserved. Built on Ethereum.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
