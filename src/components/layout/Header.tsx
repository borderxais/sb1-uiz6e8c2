import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Header = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Victoria AI, Journey to Elite Education
              </h1>
              <p className="mt-4 text-3xl font-medium text-gray-800">
                精英教育之路
              </p>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with Victoria AI
              <span className="block mt-2">
                加入数千名通过Victoria AI实现梦想的优秀学子
              </span>
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Schedule Demo 预约咨询
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Register Now 立即注册
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex gap-8 text-gray-600">
              <Stat number="98%" label="Success Rate 成功率" />
              <Stat number="5000+" label="Students 学生" />
              <Stat number="50+" label="Top Universities 顶尖学府" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
                alt="Successful students celebrating at graduation" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600/90 rounded-lg backdrop-blur-sm">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Start Your Journey</h3>
                    <p className="text-sm text-gray-200">Personalized guidance for your success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div>
    <div className="text-3xl font-bold text-blue-600">{number}</div>
    <div className="text-sm">{label}</div>
  </div>
);